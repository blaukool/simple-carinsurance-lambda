'use strict';
const dateFormat = require('dateformat');

module.exports.apply = (event, context, callback) => {

    const requestBody = JSON.parse(event.body);
    const contractNumber2 = dateFormat(new Date(), "yyyymmddHHMMssl");
    const contractNumber1 = requestBody.Lastname.substring(0,2).toUpperCase();
    const contractNumber3 = requestBody.Firstname.substring(0,2).toUpperCase();
    const quote = (requestBody.Price/1000)*(requestBody.Distance/1000)/2;

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            text: 'Contract ' + contractNumber1 + contractNumber2 + contractNumber3 + ' has been created, your premium will be ' + quote + ' EUR. Please enjoy driving your ' + requestBody.Model + '!'
        }),
    };

    callback(null, response);

    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};