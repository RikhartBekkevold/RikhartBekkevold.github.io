function Task(answer, type) {
    this.url = "";
    this.correct_answer = answer;
    this.answer_given = "";
    this.code = "";
    this.type = type;
    this.time_at_completion = 0;
    this.time_spent = 0;
    //this.question_text = "What is the output of 'count'?";
    this.cc = Math.random() >= 0.5;


    if(type === "consent") {
        // do not add variable/delete: url, correct answer etc
    }
    if(type === "task") {
        this.question_text = "What is he output of 'count'?";
    }
    else if(type === "error_task") {
        this.question_text = "Find 5 errors";
    }
    else if(type === "input_task") {
        this.question_text = "What are the data types of the input?";
    }
 }

"Do you use dark mode or light?"
"What syntax highlighter do you use if any?"


// type of tasks
// randomization
// semantic or not

// make tasks

// argue why semantic is importnat, semantic web
// The future
// In the future semenatic web will be a thing, then its important that the colour reflects this  - can color be used to express meaning?





// multiple choice, "is the output like this?", is the there a adding mistake?
 function add()
 {
     var fruits = ["banana", "apple", "pineapple", "kiwi"];
     var count = 0;

     for (var i = 0; i < fruits.length; i++) {
         var fruit = fruits[i];

         if( fruit = "apple" ) {
             count += 2;
         }
         else {
             count++;
         }
     }
     return count;
 }

 add();


 // INPUT

// what are the input types?
