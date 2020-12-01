const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true ,useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rate: 8,
    review: "Ngon vai long"
});

// const orange = new Fruit({
//     name: "Orange",
//     rate: 8,
//     review: "Ngon vai long"
// });

// const banana = new Fruit({
//     name: "Banana",
//     rate: 8,
//     review: "Ngon vai long"
// });

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favourFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "John",
    age: 34
});

const amy = new Person({
    name: "Amy",
    age: 12,
    favourFruit: fruit
})
amy.save();
// fruit.save();
// person.save();

// Fruit.insertMany([orange, banana], (err) =>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully add to Fruit collection in fruitsDB");
//     }
// });



// Fruit.deleteOne({name: "Orange"}, (err)=>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Delete successfully!");
//     }
// });

Fruit.find((err, fruits)=>{
    if (err) {
        console.log(err);
    } else {
        // console.log(fruits);
        mongoose.connection.close();
        fruits.forEach((fruit)=>{
            console.log(fruit.name);
        });
    };
});

