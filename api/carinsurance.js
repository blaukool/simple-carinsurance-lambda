'use strict';

module.exports.quote = (event, context, callback) => {
    const requestBody = JSON.parse(event.body);
    const quote = (requestBody.price/1000)*(requestBody.distance/1000)/2;

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'You will be paying ' + quote + ' EUR a year.',
            quote: quote,
            make: requestBody.make,
            model: requestBody.model,
            distance: requestBody.distance,
            price: requestBody.price
        }),
    };

    callback(null, response);

};
