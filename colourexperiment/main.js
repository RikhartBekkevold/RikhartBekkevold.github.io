var stimuli_el = document.getElementById("stimuli");
var btn = document.getElementById("btn");
var heading = document.getElementById("question");
var icon = document.getElementById("icon");
heading.innerHTML = ''; //instructions?
btn.innerHTML = 'START TEST:';
document.getElementById('answer_container').style.visibility = 'hidden';
var answer = document.getElementById('answer');
// answer.value = "";

var exp_field;// = document.getElementById("exp");
var usage_field;
if(currentTask === 0) {
    // participant.questionnaire.yearsProgramming = exp_field.value;
    // participant.questionnaire.usesCC = usage_field.value;
}

var participant = {
    id: 0,
    questionnaire: {
        yearsProgramming: null,
        usesCC: null
    },
    order: null,        //0 ncc first, 1 cc first
    answers: [],        //transform to 0, or 1 for correct or not? dont i thin. just need answers to control for trolling or not
    taskLength: [],
    totalTime: null, //move outside. or delete at end.
    // times: []
};

var stimulis = [
                { src: 'img/instructions.png' },
                { src: 'img/test1.png' },
                { src: 'img/pausescreen.png' },
                { src: 'img/test1ncc.png' },
                { src: 'img/pausescreen.png' },
                { src: 'img/test2.png' },
                { src: 'img/pausescreen.png' },
                { src: 'img/test2ncc.png' },
                { src: 'img/pausescreen.png' },
                { src: 'img/test3.png' },
                { src: 'img/pausescreen.png' },
                { src: 'img/test3ncc.png' },
                { src: 'img/donescreen.png' }
            ];

var value = Math.round(Math.random());
participant.order = value;

if(value === 0) {

    stimulis[1].src = 'img/test1ncc.png'     //set to ncc
    stimulis[3].src = 'img/test1.png'        //remove ncc

    stimulis[5].src = 'img/test2ncc.png'     //set to ncc
    stimulis[7].src = 'img/test2.png'        //remove ncc

    stimulis[9].src = 'img/test3ncc.png'     //set to ncc
    stimulis[11].src ='img/test3.png'        //remove ncc

}

// for(var i = 0; i < stimulis.length; i++) {
//     stimulis[1].src = 'img/test1ncc.png'     //set to ncc
//     stimulis[3].src = 'img/test1.png'        //remove ncc
// }

var times = [];
var currentTask = 0;
stimuli_el.src = stimulis[0].src;


function saveData() {

    calcTimeSpentOnEachTask(); //this pushes current times as length into taskLength first
    var data = JSON.stringify(participant, null, 2);
    self = this;
    $.ajax({
        url: "server/store.php",
        type: "POST",
        data: {participant: data},
        complete: function(data) {
            if(data.status == 200) {
                console.log(data.responseText);
            }
        }
    })

}

function onFieldInput() {
    icon.disabled = false;
    icon.style.opacity = 1;
    btn.style.opacity = 1;
}

function recordCurrentTime() {

    // if task page
    if (isOdd(currentTask + 1) == 1) {  //if i move this inside i dont need + 1
         icon.disabled = true;
         icon.style.opacity = 0.4;
         btn.style.opacity = 0.4;
         document.getElementById('answer_container').style.visibility = 'visible';
    }
    // if pause page
    else {
        icon.disabled = false;
        icon.style.opacity = 1;
        btn.style.opacity = 1;
        document.getElementById('answer_container').style.visibility = 'hidden';
    }

    // if not at end of array
    if(currentTask < stimulis.length - 1) {

        // add the current time in ms
        var d = new Date();
        var time = d.getTime();
        times.push( time );

        // add answer
        isOdd(currentTask) == 1 ? participant.answers.push(document.getElementById('answer').value) : null;

        // reset answer field
        document.getElementById('answer').value = '';

        // replace
        stimuli_el.src = stimulis[++currentTask].src;
        btn.innerHTML = isOdd(currentTask) == 1 ? 'NEXT TASK:' : 'NEXT TASK:';
        heading.innerHTML = isOdd(currentTask) == 1 ? 'What is the value of bar?' : 'Pause';

        // if at last task page
        if(currentTask === stimulis.length - 1) {
            saveData();
            btn.style.visibility = 'hidden';
            icon.style.visibility = 'hidden';
            heading.innerHTML = 'Finished';
            document.getElementById('answer_container').style.visibility = 'hidden';
        }

    }

}





function calcTimeSpentOnEachTask() {

    var length = [];

    var self = this;
    times.forEach(function(time, index) {
        if(index > 0 && isOdd(index) === 1) {
            var time = (times[index] - times[index - 1]) / 1000;
            self.participant.totalTime += time;

            console.log('Task ' + index + ' took: ' + time + ' seconds');
            self.participant.taskLength.push(time);
        }
    });
}



function isOdd(num) {
    return num % 2;
}
