const express = require ('express');
const app = express();

app.use(express.static('public'));

app.listen(process.env.PORT || 8080, () =>
console.log('Listening on 8080 react app displays on 3000'))
