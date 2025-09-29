const mongoose = require('mongoose');

const url = 'mongodb+srv://rathoreharsh:harsh1234@cluster0.cdrdx.mongodb.net/HarshPracticeDatabase?retryWrites=true&w=majority&appName=Cluster0';

// Connection Connect
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log(`MongoDB Connection Connected Successfully`))
.catch((err) => console.log(err));

// Schema Design
const TableDesign = new mongoose.Schema({
    name: String,
    age: Number,
    mobile: Number,
    city: String
}, { collection: "harsh_express_mongo" });

// Schema Create
const Harsh_Express_Mongo = mongoose.model('harsh_express_mongo', TableDesign);

module.exports = Harsh_Express_Mongo;
