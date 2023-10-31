
var user = {
    name: "Info World",
    whatIsYourName: function() {
    console.log(this.name);
    }
};

user.whatIsYourName(); // Output: "Info World",
var user2 = {
    name: "Hack Er"
};

user.whatIsYourName.call(user2); // Output: "Hack Er"


var user = {
    greet: "Hello!",
    greetUser: function(userName) {
    console.log(this.greet + " " + userName);
    }
};

var greet1 = {
    greet: "Hola"
};

user.greetUser.call(greet1,"InfoWorld") // Output: "Hola InfoWorld"
user.greetUser.apply(greet1,["InfoWorld"]) // Output: "Hola InfoWorld"



var user = {
    greet: "Hello!",
    greetUser: function(userName) {
    console.log(this.greet + " " + userName);
    }
};

var greetHola = user.greetUser.bind({greet: "Hola"});
var greetBonjour = user.greetUser.bind({greet: "Bonjour"});

greetHola("InfoWorld") // Output: "Hola InfoWorld"
greetBonjour("InfoWorld") // Output: "Bonjour InfoWorld"