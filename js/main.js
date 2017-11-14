Vue.config.productionTip = false;
Vue.component('flat-pickr', VueFlatpickr.default);

var app = new Vue({
    el: '#app',
    data: {
        // GUI
        hideGUI:            false,
        showModal:          'none',
        showPlaceholder:    true,
        toggle:             true,
        show:               true,
        hideMenuBackBtn:    false,
        // COLORPICKER
        entireForm:         false,
        colors:             colorPickerDefaultProps,

        // PAGES
        currentPage:        1,
        // pages:              ['1', '2', '3'],
        nextPage:           false,
        prevPage:           false,
        isPagesStacked:     false,
        questionsPerPage:   Infinity,
        pageHeight:         document.getElementById('form-container').innerHeight + 400,
        feedbackMsg:        'All changes saved',
        pageRearrangeMode:  false,

        // PREFERENCES
        userPrefs: {
            test: 'how form looks like',
            test2: 'the state of the app itself',
            colourAppliesToEntireForm: true
        },

        answerURL: '',

        //the var is in memory, but not the value. so mounted is during execution
        pages: [],
        pagesX: 0,
        pagesY: 0,
        //ask for obj in arg, because can loop it and then apply all the vars
        currentZ: 0,

        // LEFT SIDE MENU
        advancedList:
        [
            new Question("Tittle", 'fa-header')
        ],
        list:
        [
            new Question("Radiobutton", 'fa-dot-circle-o'),
            new Question("Checkbox", 'fa-check-square-o'),
            new Question("Textfield", 'fa-font'),
            new Question("Textarea", 'fa-align-justify'),
            new Question("List", 'fa-th-list'),
            new Question("Video", 'fa-film'),
            new Question("Table", 'fa-table')
        ],

        formProperties: {isA4: false},      //list of all vars containing if pages is A4 etc
        appState: [],                       //list of all vars containing the state of the app

        operations: [],
        // formURL
        pageWidth: 500,
        // FORM
        title:    '',
        formList: [],
        formStyle:
        {
            borderradius:       'none',
            bColorHex:          '',
            fColorHex:          '',
        },
        pre: '',

        //variable initilazation
        past           :  [],
        present        :  [],
        future         :  [],
        cIdx: 0
    },
    components: {
        'photoshop-picker': Photoshop,
        'swatches-picker': Swatch,
    },
    mounted() {
        this.pages.push(new Page(1, this.pageHeight))

        window.addEventListener('keydown', deleteForm)
        window.addEventListener('keyup', toggleAlt)

        pre = document.createElement('pre')
        document.getElementById('test').appendChild(pre);

        this.onPageLoad();

    },
    watch: {
        pages: {
            handler: function(pages) {

                // this.cIdx = this.cIdx + 1

                pre.innerHTML = syntaxHighlight(this.pages)
            },
            deep: true
        },
        // WATCH THE COLOUR PICKER
        'colors.hex': {
            handler: function (colors) {
                var self = this;

                this.pages.forEach(function(page) {
                    page.questions.forEach(function(item) {
                        if(self.entireForm == true){
                            item.bColorHex = colors
                            item.fColorHex =  getContrastingColor(colors)
                            return
                        }
                        if(item.focused == true) {
                            item.bColorHex = colors
                            item.fColorHex =  getContrastingColor(colors)
                        }
                    })
                })
            },
            deep: true
        }
    },
    computed: {
        nrOfPages: function() {
            return this.pages.length
        },
        zindex: function() {
            return this.pages.length - 1
        }
    },
    methods: {
        matchPageHeight: function() {
            var temp = 0;
            this.pages.forEach(function(page) {
                if(page.height > temp) {
                    temp = page.height;
                }
            })
            this.pages.forEach(function(page) {
                page.height = temp;
            })
        },
        deletePage: function(page) {
            this.pages.splice(this.pages.indexOf(page), 1)
            if(this.pages.length == 0){
                this.pages.push(new Page(1, this.pageHeight))
            }
            this.saveFormToStack(this.pages)
        },
        addQuestion: function(type) {
            this.pages[this.pages.length-1].questions.push(new Question(type))
            this.saveFormToStack(this.pages)
        },
        clone: function(el) {
            return (new Question(el.type))
        },
        deleteForm: function() {
            var app = this;
            this.pageHeight = 500;
            this.pages = []
            this.pages.push(new Page(1, this.pageHeight))
            this.showModal = 'none'
            this.saveFormToStack(this.pages)
        },
        generateAnswerURL: function(id) {
            //in php, generate link before save, or just with php, and return the generated link with echo so i get it in response text

                  var text = "";
                  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

                  for (var i = 0; i < 60; i++)
                    text += possible.charAt(Math.floor(Math.random() * possible.length));

                  return text;

                console.log(generateAnswerURL());
        },
        /**
         * Returns true if answer is elligable for submission, otherwise false
         */
        checkValidity: function() {
            this.pages.forEach(function(page){
                page.questions.forEach(function(question){
                    if(question.isObligatory == true) {
                        return false;
                    }
                })
            })
            return true;
        },
        /**
         * Submits form if is valid for submission
         */
        submitAnswer: function() {
            if(this.checkValidity()) { //if all obligatory questions answered
                this.saveAnswer();
            }
            this.showModal = 'invalid' //must fill out all questions
        },
        // recreate() answer == radiobuttonlabel

        extractAnswers: function() {
            var answers = [];
            this.pages.forEach(function(page){
                page.questions.forEach(function(question){
                    switch(question.type) {
                        case 'Radiobutton':
                                answers.push({value: question.selectedValue})
                            break;
                        case 'Checkbox':
                                answers.push({value: question.selectedValues})
                            break;
                        case 'Textfield':
                            question.alternatives.forEach(function(alt) {
                                answers.push({value: alt.label})
                            })
                            break;
                        case 'Textarea':
                            question.alternatives.forEach(function(alt) {
                                answers.push({id: alt.label})
                            })
                            break;
                        case 'List':
                            question.alternatives.forEach(function(alt) {
                            })
                            break;
                        case 'Video':
                            question.alternatives.forEach(function(alt) {
                            })
                            break;
                        case 'Table':
                            question.alternatives.forEach(function(alt) {

                            })
                            break;
                    }
                })
            })
            console.log(answers);
        },
        saveAnswer: function() {
            var answers;
            if(checkValidity() == true) {
                 answers = this.extractAnswers();
            }
            var self = this;
            $.ajax({
                url: "server/saveForm.php",
                method: 'POST',
                data: {answer: answers},
                success: function(result) {
                    console.log(result)
                }
                //return id her or php?
            })
        },
        saveForm: function() {
            // this.trimForm();
            var url = this.generateAnswerURL();
            // url = window.location.href + url;
            //append now or when returning? store url or id?

            var self = this;
            $.ajax({
                url: "server/saveForm.php",
                method: 'POST',
                data: {form: JSON.stringify(self.pages), url_ID: url},
                success: function(result) {
                    console.log(result)
                }
            });

            //give the user the link

            this.answerURL = window.location.href + '?' + url;
            //initiate the modal
            this.showModal = 'share'

        },
        fetchFormFromDB: function(url) {  //window.location
            //send request for form with id
            self = this
            $.ajax({
                url: "server/saveForm.php",
                type: "POST",
                data: {formID: url},
                complete: function(data) {
                    console.log(data);
                    if(data.status == 200) {

                        // self.pages = []

                        // if(data.responseText != '') {
                            self.pages = JSON.parse(data.responseText)
                        // }
                    }
                }
            })
        },

        onPageLoad: function() {
            if(window.location.search !== '') {
                this.hideGUI = true;
                this.hideMenuBackBtn = true;
                this.fetchFormFromDB(window.location.href.split('?')[1]);
                //retrive fetches something wrong, handle it too
                // inside here we know the users has entered ? and SOMETHING after, so then...
                // query db and see if form exists, return if it does, and if not, display message
            }
            else {
                console.log("sda");
            }
        },
        newPage: function() {
            var app = this;

            this.pages.push(new Page(this.pages.length + 1, this.pageHeight)) //if i dont pass index instead the page nr wont update if page rearranged

            this.pages.forEach(function(page, index) {
                if(page.pageNumber != index) {
                    app.pages.splice(index, 1);
                    app.pages.splice(page.pageNumber-1, 0, page);
                }
            });

            this.createStackEffect();
        },
        stackPages: function() {
            this.pagesX = 0;
            this.pagesY = 10;
            var app = this;
            this.pages.forEach(function(page) {
                //each page com must change their.. height since they already created
                page.posX = app.pagesX;
                page.posY = app.pagesY;
            })
        },
        createStackEffect: function() {
            var app = this;

            //WHAT IS THE PURPOSE OF THIS?
            this.pages.forEach(function(page) {
                page.posY = 0;
                page.posX = 0;
            });

            this.pagesY = -((this.pages.length-1) * 2);
            this.pagesX = +((this.pages.length-1) * 2);

            this.pages.forEach(function(page) {
                page.posY -= app.pagesY;
                app.pagesY += 2;

                page.posX -= app.pagesX;
                app.pagesX -= 2;
            });
        },
        pageDown: function() {
            var nextPage = this.pages.shift();  //takes the first out, shifts everything one index down
            this.pages.push(nextPage);          //add the first to the last to display
            this.matchIndexAndZ();
            this.createStackEffect();
        },
        pageUp: function() {
            var lastPage = this.pages.pop();    //remove the last page
            this.pages.unshift(lastPage);       //insert in the front of the array pushing all other one index up
            this.matchIndexAndZ();
            this.createStackEffect();
        },
        setPageSize: function(size) {
            this.pageHeight = size;
            var app = this;
            this.pages.forEach(function(page) {
                page.height = app.pageHeight;
            })
        },
        matchIndexAndZ: function() {
            var app = this;
            //loop all pages
            this.pages.forEach(function(page) {
                //set their z equal to their index
                page.z = app.pages.indexOf(page);
            });
        },
        shortenPages: function() {
            var total = 0;
            this.pages.forEach(function(page, index) {

                page.questions.forEach(function(question) {
                    total += question.height
                });

                page.height = total
                total = 0
            });
        },
        setPageSizeWidth: function(size) {
            this.pageWidth = size;
            var app = this;
            this.pages.forEach(function(page) {
                page.width = app.pageWidth;
            })
        },
        showFinalForm: function() {
            //u reverse everytime this is called
            this.pages.reverse();
            this.stackPages();
            this.matchIndexAndZ();
            this.createStackEffect();

            this.hideGUI = !this.hideGUI;
        },
        initiatePageRearrangeMode: function() {
            this.pageRearrangeMode = true;
            this.setPageSize(250);
            this.setPageSizeWidth(25);

            //on drag set new size, :style takes care of rest, exactly like with the background color
            var inc = 0;
            this.pages.forEach(function(page) {
                page.posX = inc;
                inc =  inc + 230;
            })
        },



        // HISTORY
        informUserOfSave: function() {
            this.feedbackMsg = 'Saving...'
            var app = this;
            setTimeout(function(){ app.feedbackMsg = 'All changes saved'; }, 1000);
            //rather remove after a few seconds and then when data.status == ok
        },
        saveFormToStack: function(newState) {
            var temp = JSON.stringify(this.pages);
            this.past.push(JSON.parse(temp));
            this.pages = newState;
            this.informUserOfSave();
        },
        deleteHistory: function() {
            this.future = [];
            this.past   = [];
            localStorage.clear();
        },
        undo: function() {
            if(this.past.length > 0) {
                var lastElement = this.past.pop();
                this.future.unshift(this.pages);
                this.pages = lastElement;
            }
        },
        redo: function() {
            if(this.future.length > 0) {
                var lastElement = this.future.shift();
                this.past.push(this.pages);
                this.pages = lastElement;
            }
        },
        retrieve: function() {
            this.past    = JSON.parse(localStorage.getItem('past'));
            this.present = JSON.parse(localStorage.getItem('present'));
            this.future  = JSON.parse(localStorage.getItem('future'));
        },
        save: function() {
            localStorage.setItem('past', JSON.stringify(this.past));
            localStorage.setItem('present', JSON.stringify(this.present));
            localStorage.setItem('future', JSON.stringify(this.future));
        },

        copyLink: function() {
          var copyText = document.getElementById("link");
          copyText.select();
          document.execCommand("Copy");
        //   alert("Copied the text: " + copyText.value);
        }
    }
})

// function selectText(containerid) {
//     if (document.selection) {
//         var range = document.body.createTextRange();
//         range.moveToElementText(document.getElementById(containerid));
//         range.select();
//     } else if (window.getSelection) {
//         var range = document.createRange();
//         range.selectNode(document.getElementById(containerid));
//         window.getSelection().addRange(range);
//     }
// }



//copy = just take the v-model/answerLink and copy to clipboard
