// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign
const app = require('./config/express');
const port = 3001

app.get('/', (req, res) => res.send('Sent from Express Middleware'))
app.listen(port, () => console.log(`App listening on port ${port}`))
