

////////////////////////////
// is it higher or lower than 9?
// forEach = loops all elements in array
// no difficult tasks? no trick, just common tasks?
// result.forEach(function(time) {
//     sum += time;
// });


function foo(a) {
    var baz = 0;
    var gux = 2;

    for(var i = 0; i < a; i++) {
        baz += gux;
    }
    return baz;
}

var bar = foo(10);



function foo() {
    var baz = true;
    var qux = 0;

    while(baz == true) {
        qux += 2;

        if(qux >= 10) {
            baz = false;
        }
    }

    return qux;

}

var bar = foo();




///////////////////////////////
function foo(x, y) {
    if(x > y) {
        var diff = x - y;
        return diff;
    }
    else {
        var diff = y - x;
        return diff;
    }
}

var bar = foo(2, 3);

///////////////////////////////
// watch out! without else if can be several
// What is the value of 'string' after the call to 'argParse'?
// var string = "";


function foo() {
    if(typeof a == "string")
        return "A";

    if(typeof a == "boolean")
        return "B";

    if(typeof a == "number")
        return "C";

    if(typeof a == "object")
        return "D";
}

var bar = foo(true);


////////////////////
var x = [];
var y = argParse();


// if(x == )
//     return ""



// task with many variables to test semantic? "this was also the task with the most amount of variables, and the one that had them occur in diff places."






///////////////////////////////
function calcMeans () {

    // chooseError message
    //check params

    // do calcs

    return error;
}


function same as error , utlity () {

}



////////////////////////////
function foo() {
    var bar = 0;

    for(var i = 0; result.length; i++) {
        bar += result[i];
        for(var i = 0; result.length; i++) {
            bar += result[i];
        }
    }

    return bar;

}

var bar = foo();



//////////////////////////
var baz = "Hey";

while(check()) {
    add to string
    baz + ", "
}

var bar = baz;


function check() {
    return true;
}


///////////////////////

switch (expression) {
    case expression:

        break;
    default:

}





        // OUTPUT - what type represent good tasks?

        // when you use random names, it becomes a lot harder to understand the code. be aware.
         function foo() {

             var qux = ["banana", "apple", "pineapple", "kiwi"];
             var corge = 0;

             for (var i = 0; i < qux.length; i++) {
                 var garply = qux[i];

                 if( garply == "apple" ) {
                     corge += 2;
                 }
                 else {
                     corge++;
                 }
             }
             return corge;
         }

         var bar = foo();


        ////////////////////////////
        // var qux = [8, 3, 7, 7];
        //
        // function foo() {
        //     var baz = 0;
        //
        //     for(var i = 0; i <= qux.length; i++) {
        //         baz += qux[i];
        //     }
        //
        //     for(var i = 0; i <= qux.length / 2; i++) {
        //         baz += qux[i];
        //     }
        //
        //     return baz;
        //
        // }
        //
        // var bar = foo();

        ////////////////////////////////
        var qux = [8, 3, 7];

        function foo() {
            var baz = 0;

            for(var i = 0; i <= qux.length - 1; i++) {
                baz += qux[i];
            }

            return baz;

        }

        var bar = foo();

        ////////////////////////////////
        function foo(x, y) {
            var baz = 0;

            if(x > y)
                baz = x - y;
            else
                baz = y - x;

            return baz;
        }

        var bar = foo(2, 4);


        /////////////////////////////
        // What is the value of bar? (output task) - this requires understanding what the program is doing

        function baz(x, y) {
            return x + y;
        }

        function foo() {
            return baz(10, 5);
        }

        var bar = foo();



// similar tasks far apart you cant remember
/////////////////////////////
// var baz;
// var foo;
// var bar = 5;

function baz(a, b) {
    return a + b;
}

function foo(x, y) {
    return baz(x, y);
}

var bar = foo(7, 2);





var bar = conc("one", "two");
conc("one", "two");


// increment global var
var val;

    fucn
        val++

////////////////////////////
class Person {

    constructor(lastname) {
        this.firstname = "Hans";
        this.lastname = lastname;
    }

    printName() {
        return this.firstname + " " + this.lastname;
    }

}

var bar = new Person("Pettersen").printName();


// the names don't give away meaning



// training
//

// each tasks has same names, same amount of vars?,

// Each individual task could appear coloured in either one of three different ways. Syntactic, Semantic or no colour highlighting/all words same colour/dont need to be black and white.



// agianst:
// Does the additionl colours become overwheliming?


// write stats about luminosity



// light vs dark



// easier to identify with semantic also, not just meaning
// types of tasks, error find, shouldnt help really?

// foo and bar having diff colours can be used to identify that misspelled a name - error



// to see if each type is superior the colours and other vars need to stay consistent. only the
// to make sure the colour is what - all diff SH tasks need only the colour to aid. one tasks cant be easier because of other vars like indentation   tasks... -- so keep same names?
// to make sure tasks same difficulty.. and? random?
// luminosity



// no colour, atom dark/syntactic, add diff colours for same variable/semantic - the last is the same as first, it only changes variable colours - this way we can see if it is superior to just the same
// colours for keywords/tokens(easier identification). does it offer enhanced performance to synctatic
// comparing the three might be interesting, not just see if semantic works also
// this is useful for semantic web and for
// maybe the use of so many colours that semantic require is distracting?
// types of tasks
// the meaning is what matters after all - so semantic should be better

// what task. and specifics of design



///////////////////////////////
// TASK DESIGN:
// subtract
// add
// delete items
// add items
// failed pre condition
// if and loops
// simple tasks = higher accuracy, quicker to solve
// increasing difficulty? warm up and can see when its too hard? making easy I know some will do the first ones at least? inc difficulty with lots of test allows me to remove to hard ones.
// names kept same in each, //keep variable names the same, make a list of variables to use and arg.. abc? use the same intendation and brackets
// as uniform as possible...
// i made utility functions. very general ones that allow for name to be general? should still desc what i want to do though?
// test task at start. to learn and check.
// names dont give away meaning and they are the same for each task

// var = data type


// QUESTIONS:
// How do I deal with wrong answers?



// set requirements for tasks first? task uniformity/control of confounding vars, and how i want to test semantic?
// fordelen med semantic er at man kan se en variables scope...

// switch
// addition



// tasks
// semantic
// BB deliver
// send mail that shows progress
