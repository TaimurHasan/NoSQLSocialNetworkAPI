const mongoose = require('mongoose');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api routes
// app.use(require('./routes'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/nosqlsocialnetworkapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// log mongo queries when executed
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));

