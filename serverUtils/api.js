const axios = require("axios");

const getData = async () => {
    try {
        console.log(baseURL);
        const config = {
            method: 'GET',
            url: baseURL,
            headers: { 'content-type': 'application/json' }
        }
        return await axios(config)
            .then(response => response);

    }
    catch (err) {
        return err.message;
    }
}

module.exports = exports = {
    getData: getData
}

