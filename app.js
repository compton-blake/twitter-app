var express = require('express');
// var fortune = require('./lib/fortune');
// var bodyParser = require('body-parser');
// var formidable = require('formidable');
// var credentials = require('./credentials.js');
// var connect = require('connect');
// var mongoose = require('mongoose');
// var Vacation = require('./models/vacation.js');
// var MongoSessionStore = require('session-mongoose')(require('connect'));
var app = express();

app.use(express.static(__dirname));

// var sessionStore = new MongoSessionStore({ url:
//     credentials.mongo.development.connectionString });

// Vacation.find(function(err, vacations){
//     if(vacations.length) return;

//     new Vacation({
//         name: 'Hood River Day Trip',
//         slug: 'hood-river-day-trip',
//         category: 'Day Trip',
//         sku: 'HR199',
//         description: 'Spend a day sailing on the Columbia and ' +
//             'enjoying craft beers in Hood River!',
//         priceInCents: 9995,
//         tags: ['day trip', 'hood river', 'sailing', 'windsurfing', 'breweries'],
//         inSeason: true,
//         maximumGuests: 16,
//         available: true,
//         packagesSold: 0,
//     }).save();

//     new Vacation({
//         name: 'Oregon Coast Getaway',
//         slug: 'oregon-coast-getaway',
//         category: 'Weekend Getaway',
//         sku: 'OC39',
//         description: 'Enjoy the ocean air and quaint coastal towns!',
//         priceInCents: 269995,
//         tags: ['weekend getaway', 'oregon coast', 'beachcombing'],
//         inSeason: false,
//         maximumGuests: 8,
//         available: true,
//         packagesSold: 0,
//     }).save();

//     new Vacation({
//         name: 'Rock Climbing in Bend',
//         slug: 'rock-climbing-in-bend',
//         category: 'Adventure',
//         sku: 'B99',
//         description: 'Experience the thrill of climbing in the high desert.',
//         priceInCents: 289995,
//         tags: ['weekend getaway', 'bend', 'high desert', 'rock climbing'],
//         inSeason: true,
//         requiresWaiver: true,
//         maximumGuests: 4,
//         available: false,
//         packagesSold: 0,
//         notes: 'The tour guide is currently recovering from a skiing accident.',
//     }).save();
// });

// var opts = {
//     server: {
//        socketOptions: { keepAlive: 1 }
//     }
// };

// switch(app.get('env')){
//     case 'development':
//         mongoose.connect(credentials.mongo.development.connectionString, opts);
//         break;
//     case 'production':
//         mongoose.connect(credentials.mongo.production.connectionString, opts);
//         break;
//     default:
//         throw new Error('Unknown execution environment: ' + app.get('env'));
// };


// function getWeatherData(){
//     return {
//         locations: [
//             {
//                 name: 'Portland',
//                 forecastUrl: 'http://www.wunderground.com/US/OR/Portland.html',
//                 iconUrl: 'http://icons-ak.wxug.com/i/c/k/cloudy.gif',
//                 weather: 'Overcast',
//                 temp: '54.1 F (12.3 C)',
//             },
//             {
//                 name: 'Bend',
//                 forecastUrl: 'http://www.wunderground.com/US/OR/Bend.html',
//                 iconUrl: 'http://icons-ak.wxug.com/i/c/k/partlycloudy.gif',
//                 weather: 'Partly Cloudy',
//                 temp: '55.0 F (12.8 C)',
//             },
//             {
//                 name: 'Manzanita',
//                 forecastUrl: 'http://www.wunderground.com/US/OR/Manzanita.html',
//                 iconUrl: 'http://icons-ak.wxug.com/i/c/k/rain.gif',
//                 weather: 'Light Rain',
//                 temp: '55.0 F (12.8 C)',
//             },
//         ],
//     };
// }

// // set up handlebars view engine
// var handlebars = require('express3-handlebars').create({
//     defaultLayout:'main',
//     helpers: {
//         section: function(name, options){
//             if(!this._sections) this._sections = {};
//             this._sections[name] = options.fn(this);
//             return null;
//         }
//     }
// });

// app.engine('handlebars', handlebars.engine);
// app.set('view engine', 'handlebars');

// app.use(function(req, res, next){
//     res.locals.showTests = app.get('env') !== 'production' &&
//         req.query.test === '1';
//     next();
// });

// // Routes
// app.use(express.static(__dirname + '/public'));
// app.use(bodyParser.urlencoded());
// app.use(bodyParser.json());
// app.use(require('cookie-parser')(credentials.cookieSecret));
// app.use(require('express-session')({ secret: 'FUCKING SHIT', store: sessionStore }));

// app.get('/newsletter', function(req, res){
//     // we will learn about CSRF later...for now, we just
//     // provide a dummy value
//     res.render('newsletter', { csrf: 'CSRF token goes here' });
// });

// app.post('/process', function(req, res){
//     console.log('Form (from querystring): ' + req.query.form);
//     console.log('CSRF token (from hidden form field): ' + req.body._csrf);
//     console.log('Name (from visible form field): ' + req.body.name);
//     console.log('Email (from visible form field): ' + req.body.email);
//     res.redirect(303, '/thank-you');
// });

app.get('/test-xhr', function(req, res){
    console.log('ROUTE HIT');
    // if(req.xhr || req.accepts('json,html') === 'json'){
    //     console.log('XHR HIT');
    //     // if there were an error, we would send { error: 'error description' }
        res.send({ success: true, test: 'Test is working' });
    // }
});

// app.get('/set-currency/:currency', function(req,res){
//     req.session.currency = req.params.currency;
//     return res.redirect(303, '/vacations');
// });

// function convertFromUSD(value, currency){
//     switch(currency){
//         case 'USD': return value * 1;
//         case 'GBP': return value * 0.6;
//         case 'BTC': return value * 0.0023707918444761;
//         default: return NaN;
//     }
// }

// app.get('/vacations', function(req, res){
//     Vacation.find({ available: true }, function(err, vacations){
//         var currency = req.session.currency || 'USD';
//         var context = {
//             currency: currency,
//             vacations: vacations.map(function(vacation){
//                 return {
//                     sku: vacation.sku,
//                     name: vacation.name,
//                     description: vacation.description,
//                     inSeason: vacation.inSeason,
//                     price: convertFromUSD(vacation.priceInCents/100, currency),
//                     qty: vacation.qty,
//                 }
//             })
//         };
//         switch(currency){
//             case 'USD': context.currencyUSD = 'selected'; break;
//             case 'GBP': context.currencyGBP = 'selected'; break;
//             case 'BTC': context.currencyBTC = 'selected'; break;
//         }
//         res.render('vacations', context);
//     });
// });

// app.get('/about', function(req, res) {
//     res.render('about', { 
//         fortune: fortune.getFortune(),
//         pageTestScript: '/qa/tests-about.js'
//     });
// });

// app.get('/tours/hood-river', function(req, res){
//     res.render('tours/hood-river');
// });

// app.get('/tours/request-group-rate', function(req, res){
//     res.render('tours/request-group-rate');
// });

// app.get('/contest/vacation-photo',function(req,res){
//     var now = new Date();
//     res.render('contest/vacation-photo',{
//         year: now.getFullYear(), month: now.getMonth()
//     });
// });

// app.post('/contest/vacation-photo/:year/:month', function(req, res){
//     var form = new formidable.IncomingForm();
//     form.parse(req, function(err, fields, files){
//         if(err) return res.redirect(303, '/error');
//         console.log('received fields:');
//         console.log(fields);
//         console.log('received files:');
//         console.log(files);
//         res.redirect(303, '/thank-you');
//     });
// });

// app.use(function(req, res, next){
//     if(!res.locals.partials) res.locals.partials = {};
//     res.locals.partials.weather = getWeatherData();
//     next();
// });

// app.get('/', function(req, res){
//     res.type('text/plain');
//     res.send('Meadowlark Travel');
// });

// // 404 catch-all handler (middleware)
// app.use(function(req, res, next){
//    	res.status(404);
//     res.render('404');
// });

// // 500 error handler (middleware)
// app.use(function(err, req, res, next){
//     console.error(err.stack);
//     res.status(500);
//     res.render('500');
// });

// Server
app.set('port', process.env.PORT || 8000);
app.listen(app.get('port'), function(){
    console.log( 'Express started in ' + app.get('env') +
        ' mode on http://localhost:' + app.get('port') +
        '; press Ctrl-C to terminate.' );
});