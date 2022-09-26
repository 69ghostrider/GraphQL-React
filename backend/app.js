const express = require('express')
const app = express()
const mongoose = require('mongoose')
const {graphqlHTTP} = require('express-graphql');
const movieSchema = require('../backend/schema/schema');
const resolvers = require('./resolver/resolver');
const cors = require('cors');
mongoose.connect('mongodb+srv://<username>:<password>@cluster0.qkydjsl.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    authSource:"admin",
    ssl: true,
}).then(() => console.log('Mongo Connected'))
.catch(() => console.log('Error occured'))

app.use(cors());

app.use('/graphql',graphqlHTTP({
    schema: movieSchema,
    graphiql:true,
    rootValue: resolvers
}));

app.get('/',(req,res) => {
    res.send("Hello from node")
})
app.listen(4000, () => {
    console.log("Listening on 4000")
})
