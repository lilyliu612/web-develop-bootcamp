// var something = require("cat-me");
// // console.log(something());
// var joke = require("knock-knock-jokes");
// // console.log(joke());

var faker = require("faker");

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties
console.log(randomName);