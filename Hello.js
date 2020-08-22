(function(window){

    var speak_word = "Hello";
    var hello = {};

    hello.speak = function(name){
        console.log(speak_word + " " + name);
    };
    window.hello = hello;

})();