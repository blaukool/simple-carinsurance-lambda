'use strict';

module.exports.quote = (event, context, callback) => {
    const requestBody = JSON.parse(event.body);
    const quote = (requestBody.Price/1000)*(requestBody.Distance/1000)/2;

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            text: 'You will be paying ' + quote + ' EUR a year.'
        }),
    };

    callback(null, response);

};
