// BASE SETUP

const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

//ROUTES


app.route('/login')

    // show the form (GET http://localhost:8080/login)
    .get((req, res) => {
        res.send('this is the login form')
    })

    //process the form (POST http://localhost:8080/login)
    .post((req, res) => {
        console.log('processing');
        res.send('processing the login form! ');
    });
    
// sample route with a route the way we're used to seeing it

app.get('/sample', (req, res) => {
    res.send('this is a sample!');
});

//we'll create our routes here
const router = express.Router();

//route middleware that will happen on every request
router.use((req, res,next) => {
    //log each request to the console
    console.log(req.method, req.url);

    //continue doing what we were doing and go to the route
    next();
});


// home page route (http:// locahost:8080)
router.get('/', (req, res) => {
    res.send('i am in the home page!');
});

//about page route (http://locahost:8080/about)
router.get('/about', (req, res) => {
    res.send('we are on about page!');
});

//route middleware to validate: name
router.param('name', (req, res, next, name) => {
    /**
     * do validation on name here
     * log something to know its working
     */
    console.log('doing name validations on '+ nam);

    //once validation is one done save the new item in the req
    req.name = name;
    //go to the next thing
})

router.get('/hello/:name', (req, res) => {
    res.send('hello '+ req.name +'!');
});

//apply the routes to our application
app.use('/', router);

//START THE SERVER

app.listen(port);
console.log('Listening on the port '+ port);
