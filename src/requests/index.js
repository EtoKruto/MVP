const axios = require('axios');
// import axios from 'axios';

// const { API_URL, TOKEN } = process.env;

function getRestaurants(req, setRestaurant) {
  const { latitude, longitude, limit, term, attributes, price } = req.query;

  const config = {
    headers: {
      Authorization: 'Bearer ' + process.env.YELP_API_KEY,
    },
  };

  axios
    .get(
      `https://api.yelp.com/v3/businesses/search?term=${term}&latitude=${latitude}&longitude=${longitude}&limit=${limit}&price=${price}&attributes=${attributes}`,
      config,
    )
    .then((APIresponse) => {
      console.log('APIresponse.data', APIresponse.data);
      setRestaurant(APIresponse.data);
    });
  // .catch((error) => {
  //   console.log('error', error);
  //   res.status(500).send(error);
  // });
}

function getTags(req, setTags) {
  const { latitude, longitude, limit } = req.query;

  const config = {
    headers: {
      Authorization: 'Bearer ' + process.env.YELP_API_KEY,
    },
  };

  axios
    .get(
      `https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}&limit=${limit}`,
      config,
    )
    .then((APIresponse) => {
      console.log('APIresponse.data', APIresponse.data);
      setRestaurant(APIresponse.data);
    })
    // .catch((error) => {
    //   console.log('error', error);
    //   res.status(500).send(error);
    // });
}

// --------------------- get/set information for a single product- API call ------------------- //

// export default function getProduct(productID, setProduct) {
//   axios
//     .request({
//       url: `/products/${productID}`,
//       method: 'get',
//     })
//     .then((response) => {
//       console.log('response.data', response.data);
//       setProduct(response.data);
//     });
// }
