var controller = require('./controller/index.js');
var express = require('express')
const router = express.Router();

// const router = new Router()

//Connect controller methods to their corresponding routes

// -------------- Questions -------------- //
// console.log('router', router);
router.get('/restaurants/tags', controller.restaurants.getTags);

router.get('/restaurants', controller.restaurants.getRestaurants);




// router.get('/qa/questions/:question_id/answers', controllers.questions.getAnswers);

// router.put('/qa/questions/:question_id/helpful', controllers.questions.updateHelpful);

// router.put('/qa/questions/:question_id/report', controllers.questions.updateReport);

// router.post('/qa/questions', controllers.questions.addQuestion);

// router.post('/qa/questions/:question_id/answers', controllers.questions.addAnswer);


// // -------------- Answers -------------- //

// router.put('/qa/answers/:answer_id/helpful', controllers.answers.updateHelpful);

// router.put('/qa/answers/:answer_id/report', controllers.answers.updateReport);


module.exports = router;

