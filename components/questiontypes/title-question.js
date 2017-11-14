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
               <input v-focus type="text" style="width: 100%; color: black">
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
