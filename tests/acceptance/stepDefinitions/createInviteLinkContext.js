const { Given, When, Then } = require("@cucumber/cucumber");
const config = require('../token')
const url = require('../../e2e.cucumber.conf')
const axios = require('axios')
const assert = require('assert');

let response
When('the super user creates a invite link', async function (dataTable) {
    const data = dataTable.hashes()
    // console.log(data)
    for (const dataValue of data) {
        // console.log(dataValue.email)
        let bodyObject = {
            "email": dataValue.email,
            "group": {
                "id": dataValue.group_id,
                "name": dataValue.group_name
            },
            "valid_until": dataValue.valid_until,
            "reusable": dataValue.reusable
        }

        const body = JSON.stringify(bodyObject)

        // make POST request
        response = await axios.post(
            url.tandoorURL + 'api/invite-link/',
            body,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${config.authToken}`,
                }
            }
        )
    }

});

Then('status code should be {string}', function (expectedStatusCode) {
    if(response.status !== 201) {
        throw new Error("Expected Response " + expectedStatusCode + " did not match " + response.status)
    }
});

Then('the response should contain following information', function (dataTable) {
    // console.log(response.data)

    const data = dataTable.hashes()
    for (const dataValue of data) {
        // console.log(dataValue.email)
        let expectedInfoObject = {
            "email": dataValue.email,
            "group": {
                "id": dataValue.group_id,
                "name": dataValue.group_name
            },
            "valid_until": dataValue.valid_until,
            "reusable": dataValue.reusable
        }

        let actualInfoObject = {
            "email": response.data.email,
            "group": {
                "id": `${response.data.group.id}`,
                "name": `${response.data.group.name}`
            },
            "valid_until": response.data.valid_until,
            "reusable": `${response.data.reusable}`
        }

        assert.deepEqual(
            expectedInfoObject,
            actualInfoObject,
            "Two Objects were not equal!!"
        )
    }
});

