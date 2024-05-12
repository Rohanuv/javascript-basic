// Object literal

const mySym = Symbol("key1")

const JsUser = {
    name : "Rohan",
    "Full name": "Rohan Sonavne",
    [mySym] : "myKey1",
    age :38,
    location: "Mumbai",
    email:"rohan@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Saturday"]
}

// console.log(JsUser["email"])
// console.log(JsUser["Full name"])

// console.log(JsUser)

// JsUser.email= "hitesh@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email= "hitesh@micro.com"

// console.log(JsUser)

JsUser.greeting = function() {
    console.log("Hello JS User")
}

JsUser.greetingA = function() {
    console.log(`Hello JS User ${this.age}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingA());