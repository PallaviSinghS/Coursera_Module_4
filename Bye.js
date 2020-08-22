(function(){

    var speak_word = "Good Bye";
    var bye = {};

    bye.speak = function(name){
        console.log(speak_word + " " + name);
    };

    window.bye = bye;

})(window);