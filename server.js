const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello BitFactory!');
});


//Way 1
app.post('/api/:number', (req, res) => {
    res.json({ 
        'number': +req.params.number5,
        'status': 200,
     });
});


//Way 2
// app.post('/api/:number', (req, res) => {
//     let num = parseInt(req.params.number, 10);
//     res.json({ 
//         'number': 5+num,
//         'status': 200,
//      });
// });


app.listen(3000, function () {
    console.log('Listening on port 3000!');
});