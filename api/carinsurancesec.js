'use strict';
const dateFormat = require('dateformat');

module.exports.apply = (event, context, callback) => {

    const requestBody = JSON.parse(event.body);
    const contractNumber2 = dateFormat(new Date(), "yyyymmddHHMMssl");
    const contractNumber1 = requestBody.lastname.substring(0,2).toUpperCase();
    const contractNumber3 = requestBody.firstname.substring(0,2).toUpperCase();
    const quote = (requestBody.price/1000)*(requestBody.distance/1000)/2;

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Contract ' + contractNumber1 + contractNumber2 + contractNumber3 + ' has been created, your premium will be ' + quote + ' EUR.',
            contractNumber: contractNumber1+contractNumber2+contractNumber3,
            quote: quote,
            make: requestBody.make,
            model: requestBody.model,
            distance: requestBody.distance,
            price: requestBody.price,
            firstname: requestBody.firstname,
            lastname: requestBody.lastname,
            street: requestBody.street,
            housenumber: requestBody.housenumber,
            zipcode: requestBody.zipcode,
            city: requestBody.city
        }),
    };

    callback(null, response);

    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};