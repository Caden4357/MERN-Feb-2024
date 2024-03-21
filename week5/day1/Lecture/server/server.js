import express from "express";
import router from "./routes/show.route.js";
const app = express();
const port = 8000;
// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( "/api", router );

// app.get(route, callback);
// http://localhost:8000/api
// app.get('/api', (request, response) => {
//     // Request and response are both objects
//     response.json({message:'Hello World!'}); // essentially return statement
// });  

// app.post('/api/:id', (req, res) => {
//     console.log(req.params);
//     res.json({message: 'Post request to /api'});
// });


// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );

