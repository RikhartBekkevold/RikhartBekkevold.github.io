function StorageManager(form, s) {

    //argument checks
    if(arguments.length > 2) {
        console.log('To many arguments provided.');
        return;
    }

    //variable initilazation
    this.storageType    =  s;
    this.past           =  [];
    this.present        =  form;
    this.future         =  [];

    //when action performed
    this.whenAction = function(newState) {  //perform action, pass the new form state after applying action
        this.future  = [];
        this.present = newState;
        // this.saveStack();
        // return this.present;
    };

    this.undo = function() {
        var lastElement = this.past.pop();
        this.future.unshift(this.present);
        this.present = lastElement;
    };
    this.redo = function() {
        var lastElement = this.future.shift();
        this.past.push(this.present);
        this.present = lastElement;
    };

    this.retrieveStack = function() {
        switch(this.storageType) {
            case 'ls':
                if(localStorage.getItem('stack')) {
                    this.past    = JSON.parse(localStorage.getItem('past'))
                    this.present = JSON.parse(localStorage.getItem('present'))
                    this.future  = JSON.parse(localStorage.getItem('future'))
                }
                break;
            case 'ss':
                if(sessionStorage.getItem('stack')) {
                    this.past    = JSON.parse(sessionStorage.getItem('past'))
                    this.present = JSON.parse(sessionStorage.getItem('present'))
                    this.future  = JSON.parse(sessionStorage.getItem('future'))
                }
            break;
        }
    };

    this.saveStack = function() { //call save history instead? saveStackAsHistory?
        switch(this.storageType) {
            case 'ls':

                    localStorage.setItem('past', JSON.stringify(past));
                    localStorage.setItem('present', JSON.stringify(present));
                    localStorage.setItem('future', JSON.stringify(future));

                break;
            case 'ss':

                    sessionStorage.setItem('past', JSON.stringify(past));
                    sessionStorage.setItem('present', JSON.stringify(present));
                    sessionStorage.setItem('future', JSON.stringify(future));

            break;
        }
    };
    this.retrieveStack();
};

//change the z index as well when focusing a question to be able to she box shadow in every direction
// // pass by value vs reference in parameters
// this.ini = function() {
//     this.retrieveStack();
    // this.recreateForm();
// };

            //cycle trhough all after added? or when adding? how to find the indexes? must follow a pattern for retrieve to work
        // this.currentIndex = this.currentIndex + 1       obj, index, actionType, timestamp
        // this.stack.splice(this.currentIndex, 1, [obj, index, actionType, timestamp])

    // this.currentIndex   =  0;

    //for each index. take the obj and splice into the right place. to find the right place find the right array first to splice into that indexsub index. so store an array of index values
    // this.recreateForm = function() {
    //     stack.forEach(function(spot) {
    //         object.splice(spot[1], 1, spot[0])
    //     })
    // };


    //loop all, extract
    //format list
    // return historyList;


// addToStack(this.pages, index, 'q-add/p-add', now());
