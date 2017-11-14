Vue.component('mini-page', {

    template:
    `
    <div  style=" margin-bottom: 0px; padding-bottom: 30px" >

        <div v-if="" id="shadow" style="border-radius: 0px 0px 0px 0px; "  class="panel panel-default" > <!-- :style="{width: w + '%'}" -->
            <div v-if="hide == false" class="row-fluid" style="height: 30px; border-bottom: 1px dotted #ddd; font-size: 1.1em">
                <div class="col-lg-5">
                    <p style="padding-left: 10px; padding-top: 3px;">Page: {{pagedata.pageNumber}}</p>

                </div>
                <div class="col-lg-6" style="padding-left: 50px;">
                    <img @click="$emit('dragstart')" src="resources/draghandleicon.png"></img>
                </div>

                <div class="col-lg-1">
                    <div @click="$emit('remove')" style="padding-top: 5px; padding-right: 200px; color: red" class="col-lg-1">
                        <i class="glyphicon glyphicon-remove"  style=" color: #AD170F; opacity: 0.6;"></i>
                    </div>
                </div>
            </div>
            <div class="row-fluid"> <!-- , width: w + 'px' -->
                <div id="form" :style="{'height': h + 'px'}" style="width: 100%; padding: 0px" class="panel-body">
                    <ul class="list-group">


                       <li  v-if="hide == true"
                            style="border:  0px solid black; border-bottom: 1px solid #ddd; margin-bottom: 1px;"
                            v-bind:style="{ 'background-color': question.bColorHex, color: question.fColorHex,  opacity: question.opacity }"
                            @focus="focus(question)"
                            v-for="(question, index) in pagedata.questions"
                            :key="index"
                            class="list-group-item">

                            <finished-question :key="index" :question="question"></finished-question>
                            <!-- <div style="height: 2px; border-bottom: 1px solid #ddd; margin: 0px 10px 0px 10px"></div> -->
                      </li>

                      <draggable v-if="hide == false"  v-model="pagedata.questions"
                       :options="{group: 'form', animation: 100, ghostClass: 'back', dragClass: 'drag', chosenClass: 'sortable-ghost4',
                       forceFallback: false, fallbackTolerance: 0, scroll:true, scrollSensitivity: 150, scrollSpeed: 10}"
                       style="min-height: 700px;">

                       <div v-for="(question, index) in pagedata.questions">
                         <li  style="border: 0px solid black; margin-bottom: 1px"
                              v-bind:style="{ 'background-color': question.bColorHex, color: question.fColorHex,  opacity: question.opacity }"
                               @focus="focus(question)"
                               tabindex="0"
                               :key="index"
                               @blur="resetOpacity()"
                               class="list-group-item">

                              <question  :question="question" :key="index"  @clone="cloneQuestion(question)" @remove="removeQuestion(question)"></question>  <!-- :toggle="toggle" -->

                        </li>
                        <div style="height: 2px; border-bottom: 1px solid #ddd; margin: 0px 10px 0px 10px"></div>
                        </div>

                     </draggable>

                    </ul>



                </div>
                <div class="row-fluid" style="height: 50px; padding-bottom: 0;">
                    <div class="col-lg-12" style="text-align: center;">
                        <!-- Height: {{h}} -->
                        Page number: {{pagedata.pageNumber}}
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    props: {
        pagedata:   { required: false },
        hide:       { required: false },
        idx:        { required: false },
        length:     { required: false }
    },
    data() {
        return {
            pageModel: {}
        }
    },
    mounted() {
        // this.pageModel = this.pagedata;
    },
    computed: {
        h: function() {
            return this.pagedata.height;
        },
        w: function() {
            return this.pagedata.width;
        }
    },
    methods: {
        focus: function(item) {
                //reset
                this.pagedata.questions.forEach(function(item) {
                    item.focused = false
                })
                //focus the element
                item.focused = true
        },
        resetOpacity: function() {
            this.pagedata.questions.forEach(function(item) {
                item.opacity = 1
            })
        },
        removeQuestion: function(question) {
            this.pagedata.questions.splice(this.pagedata.questions.indexOf(question), 1)
        },
        cloneQuestion: function(question) {
            var clonedQuestion = JSON.stringify(question)
            clonedQuestion = JSON.parse(clonedQuestion)
            this.pagedata.questions.splice(this.pagedata.questions.indexOf(question) + 1, 0, clonedQuestion)
        }
    }
})
