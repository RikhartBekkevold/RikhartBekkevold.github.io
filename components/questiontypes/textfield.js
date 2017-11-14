Vue.component('textfield-question', {
    template: `

    <div>
       <div class="row-fluid clearfix" style="margin-bottom: 20px">
           <div class="col-lg-2">
           </div>
           <div class="col-lg-10" style="padding-left: 15px; padding-right: 35px;">
           <input-div msg="Write an optional description here..." v-model="altObj.label"></input-div>

           </div>
       </div>
       <div v-on:click="removeQuestionAlternative(question, altObj)" style="padding-top: 9px;" class="col-lg-1">
           <i class="glyphicon glyphicon-remove"  style="color: #852020"></i>
       </div>
       <div style="padding-top: 9px;"  v-on:click="cloneQuestionAlternative(question, altObj)" class="col-lg-1">
           <i style="margin-left: 0px; padding-left: 0px" class="fa fa-clone"></i>
       </div>
       <div class="col-lg-9">
           <form class="pure-form">
               <input type="text" style="width: 100%; color: black">
           </form>
       </div>
       <div class="col-lg-1">
       </div>
   </div>
    `,
    props: {
        alternative: Object
    },
    data() {
        return {
            altObj: {}
        }
    },
    mounted() {
        this.altObj = this.alternative
        console.log(this.alternative)
        // console.log(this.altArray)
    },
    computed: {

    },
    methods: {

    }
})


// :bColorHex="question.bColorHex" :fColorHex="question.fColorHex"
 // v-bind:style="{ 'background-color': question.bColorHex, color: question.fColorHex }"

//  <input 	type="text"
//         class="form-control"
//         style="width: 90%"
//
//         placeholder="Write an optional description here..."
//         v-model="altObj.label"
//         v-bind:ref="altObj.type"
//         @keydown.38="focusPrev(index, altObj.type)"
//         @keydown.40="focusNext(index, altObj.type)"
//         v-focus
//         @keyup.46="altObj.label = ''"
//         @keyup.enter="addQuestionAlternative(question)">
// </input>
