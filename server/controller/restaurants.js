const axios = require('axios');

module.exports = {
  getRestaurants: function (req, res) {

    const { latitude, longitude, limit, term, attributes, price } = req.query;

    const config = {
      headers: {
        Authorization: 'Bearer ' + process.env.YELP_API_KEY,
      },
    };

    res.header('Access-Control-Allow-Origin', '*');
    axios
      .get(
        `https://api.yelp.com/v3/businesses/search?term=${term}&latitude=${latitude}&longitude=${longitude}&limit=${limit}&price=${price}&attributes=${attributes}`,
        config,
      )
      .then((APIresponse) => {
        res.send(APIresponse.data);
      })
      .catch((error) => {
        console.log('error', error);
        res.status(500).send(error);
      });
  },
  getTags: function (req, res) {
    const { latitude, longitude, limit } = req.query;

    const config = {
      headers: {
        Authorization: 'Bearer ' + process.env.YELP_API_KEY,
      },
    };

    res.header('Access-Control-Allow-Origin', '*');
    axios
      .get(
        `https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}&limit=${limit}`,
        config,
      )
      .then((APIresponse) => {
        res.send(APIresponse.data);
      })
      .catch((error) => {
        console.log('error', error);
        res.status(500).send(error);
      });
  },
};
