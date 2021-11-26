const { error, success } = require('../helper/notificationHelper');

module.exports = {
    errorHandler: function (err) {
        // console.log(err.response);
        let response = err?.response?.data;
        if (response?.message) {
            error(response.message);
        }

        if (response?.errors) {
            if (response.errors instanceof Array) {
                response.errors.forEach(err => {
                    error(err);
                })
            }
            if (response.errors instanceof Object) {
                for (const [key, value] of Object.entries(response.errors)) {
                    error(value instanceof String ? value : value[0]);
                }
            }
        }
    },
    normalResponseHandler: function (response) {
        if (response.data.message) {
            success(response.data.message);
        }
    }
}