var myCurry = function(word) {
    return function(user) {
           return [word , ", " , user].join("");
    };
};

var HelloUser = myCurry("Hii");
HelloUser("Coder"); // Output: "Hii, Coder"


myCurry("Hey, how are you?")("InfoWorld");



let greeter = myFirstCurry("Namaste");
greeter("InfoWorld"); // output: “Namaste, InfoWorld”