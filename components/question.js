Vue.component('question', {
    template: `
    <div>



        <!-- QUESTIONN -->
        <div v-if="question.type !='Tittel'" class="row" style="margin-bottom: 50px; font-family: 'Merriweather', serif; font-weight: bold;  font-size: 1.2em">
         <div class="col-lg-11" style="padding-left: 10px">
            <input-div msg="Write a question here..." v-model="question.label" :bColorHex="question.bColorHex" :fColorHex="question.fColorHex"></input-div>
         </div>
         <div style="padding-top: 9px;" class="col-lg-1">
             <div style="border-bottom: 1px solid black; color: #AD170F; opacity: 0.6;" v-on:click="$emit('remove')">
                 <i class="glyphicon glyphicon-remove" style="color: #AD170F; opacity: 0.6;"></i>
             </div>
             <div style="padding-top: 10px;" v-on:click="$emit('clone')">
                 <i v-bind:style="{ color: question.fColorHex }" class="fa fa-clone"></i>
             </div>
         </div>
        </div>

        <!-- TITTEL -->
        <div v-if="question.type == 'Tittel'" class="row">
          <div class="col-lg-11">
            <input  :style="{ 'background-color': question.bColorHex, color: question.fColorHex }" v-demo="{color: 'white', text: false}" v-focus="focus" v-model="question.label" type="text" style="margin-left: 10px; font-size: 1.5em;" class="form-control question-input" placeholder="Write a title here..."></input>
            <div class="row-fluid">
                <div class="col-lg-1">
                    <i v-if="question.type == 'Tittel'" v-on:click="toggleTitleDesc = !toggleTitleDesc" style="padding-top: 9px; color: #AD170F; opacity: 0.6; margin-left: 10px;" class="fa fa-plus" aria-hidden="true"></i>
                </div>
                <div class="col-lg-11">
                    <input :style="{ 'background-color': question.bColorHex, color: question.fColorHex }" v-model="question.desclabel" v-bind:class="{hide: toggleTitleDesc}" type="text" style="margin-left: 10px;" class="form-control question-input" placeholder="Add a description here..."></input>
                </div>
            </div>
          </div>
          <div style="padding-top: 9px;" class="col-lg-1">
              <div style="border-bottom: 1px solid black; color: #5E0E0C" v-on:click="$emit('remove')">
                 <i class="glyphicon glyphicon-remove"></i>
             </div>
             <div style="padding-top: 10px;" v-on:click="$emit('clone')">
                 <i class="fa fa-clone"></i>
             </div>
          </div>
        </div>

        <!-- ALTERNATIVES -->
        <div class="row">
        <draggable  @end="" @start="focus = false" :options="{animation: 50, ghostClass: 'choosenDragClass', dragClass: 'sortable-ghost2'}" v-model="question.alternatives">
            <div v-for="(alt, index) in question.alternatives" :key="index" class="alternatives">

                <!-- RADIOBUTTON -->
                <div v-if="alt.type == 'Radiobutton'" class="row-fluid clearfix clearfix">
                    <div v-on:click="removeQuestionAlternative(question, alt)" style="padding-top: 9px;" class="col-lg-1">
                        <i class="glyphicon glyphicon-remove" style="color: #AD170F; opacity: 0.6;"></i>
                    </div>
                    <div style="padding-top: 9px;" v-on:click="cloneQuestionAlternative(question, alt)" class="col-lg-1">
                        <i style="margin-left: 0px; padding-left: 0px" v-bind:style="{ color: question.fColorHex }" class="fa fa-clone"></i>
                    </div>
                    <div class="col-lg-1" style="padding-top: 7px;">
                        <input type="radio" :value="alt.label" v-model="question.selectedValue" name="index"></input>
                    </div>
                    <div class="col-lg-9">
                        <input-div v-bind:ref="alt.type" @downarrow="focusNext(index, alt.type, alt)" @enter="addQuestionAlternative(question)" msg="Alternative" v-model="alt.label" :bColorHex="question.bColorHex" :fColorHex="question.fColorHex"></input-div>
                        <!-- <input 	type="text"
                                class="form-control"
                                style="width: 90%;"
                                v-bind:style="{ 'background-color': question.bColorHex, color: question.fColorHex }"
                                placeholder="Alternative"
                                v-model="alt.label"
                                v-bind:ref="alt.type"
                                @keydown.38="focusPrev(index, alt.type)"
                                @keydown.40="focusNext(index, alt.type)"
                                v-focus
                                @keyup.46="alt.label = ''"
                                @keyup.enter="addQuestionAlternative(question)">
                        </input> -->
                    </div>
                </div>

                <!-- CHECKBOX -->
                <div v-if="alt.type == 'Checkbox'" class="row-fluid clearfix">
                    <div v-on:click="removeQuestionAlternative(question, alt)" style="padding-top: 9px;" class="col-lg-1">
                        <i class="glyphicon glyphicon-remove"  style="color: #AD170F; opacity: 0.6;"></i>
                    </div>
                    <div style="padding-top: 9px;"  v-on:click="cloneQuestionAlternative(question, alt)" class="col-lg-1">
                        <i style="margin-left: 0px; padding-left: 0px" v-bind:style="{ 'background-color': question.bColorHex, color: question.fColorHex }" class="fa fa-clone"></i>
                    </div>
                    <div class="col-lg-1" style="padding-top: 7px;">
                        <input type="checkbox" :value="alt.label" v-model="question.selectedValues" name="index"></input>
                    </div>
                    <div class="col-lg-9">
                        <input-div @enter="addQuestionAlternative(question)" msg="Alternative" v-model="alt.label" :bColorHex="question.bColorHex" :fColorHex="question.fColorHex"></input-div>
                    <!--    <input 	type="text"
                                class="form-control"
                                style="width: 90%"
                                v-bind:style="{ 'background-color': question.bColorHex, color: question.fColorHex }"
                                placeholder="Alternative"
                                v-model="alt.label"
                                v-bind:ref="alt.type"
                                v-focus
                                @keyup.46="alt.label = ''"
                                @keydown.38="focusPrev(index, 'Checkbox')"
                                @keydown.40="focusNext(index, 'Checkbox')"
                                @keyup.enter="addQuestionAlternative(question)">
                        </input> -->
                    </div>
                 </div>

                 <!-- DATE -->
                 <div v-if="alt.type == 'Date'" class="row-fluid clearfix">
                     <div v-on:click="removeQuestionAlternative(question, alt)" style="padding-top: 9px;" class="col-lg-1">
                         <i class="glyphicon glyphicon-remove"  style="color: #AD170F; opacity: 0.6;"></i>
                     </div>
                     <div style="padding-top: 9px;"  v-on:click="cloneQuestionAlternative(question, alt)" class="col-lg-1">
                         <i style="margin-left: 0px; padding-left: 0px" v-bind:style="{ 'background-color': question.bColorHex, color: question.fColorHex }" class="fa fa-clone"></i>
                     </div>

                     <div class="col-lg-3">
                        <flat-pickr style="border: 1px solid #42b983; color: black; background: white; text-align: center" v-model="question.date" :allowInput="true"
                            :config="{enableTime: alt.isTimeEnabled, noCalendar: !alt.isCalendarEnabled}"	:required="true"></flat-pickr>
                     </div>
                     <div class="col-lg-7" style="padding-top: 7px;">

                     </div>
                  </div>

                 <!-- TEXTFIELD -->
                <div v-if="alt.type == 'Textfield'" class="row-fluid clearfix textfield">
                    <textfield-question :alternative="alt"></textfield-question>
                </div>



                <!-- TEXTAREA -->
                <div v-if="alt.type == 'Textarea'" class="row-fluid clearfix textarea">
                    <div class="row-fluid clearfix" style="margin-bottom: 20px">
                        <div class="col-lg-2">
                        </div>
                        <div class="col-lg-10" style="padding-left: 15px; padding-right: 35px;">
                        <input-div @enter="addQuestionAlternative(question)" msg="Write an optional description here..." v-model="alt.label" :bColorHex="question.bColorHex" :fColorHex="question.fColorHex"></input-div>
                        <!--    <input 	type="text"
                                    class="form-control"
                                    style="width: 90%"
                                    v-bind:style="{ 'background-color': question.bColorHex, color: question.fColorHex }"
                                    placeholder="Write an optional description here..."
                                    v-model="alt.label"
                                    v-bind:ref="'alt.type' + index"
                                    v-focus
                                    @keyup.46="alt.label = ''"
                                    @keyup.enter="addQuestionAlternative(alts)">
                            </input> -->
                        </div>
                    </div>
                    <div class="row-fluid clearfix">
                        <div v-on:click="removeQuestionAlternative(question, alt)" style="padding-top: 9px;" class="col-lg-1">
                            <i class="glyphicon glyphicon-remove"  style="color: #AD170F; opacity: 0.6;"></i>
                        </div>
                        <div style="padding-top: 9px;" v-on:click="cloneQuestionAlternative(question, alt)" class="col-lg-1">
                            <i style="margin-left: 0px; padding-left: 0px" class="fa fa-clone"></i>
                        </div>
                        <div class="col-lg-9">
                            <form class="pure-form">
                                <textarea :rows="alt.height" :cols="alt.width" class="pure-input" style="color: black" ></textarea>
                            </form>
                        </div>
                        <div class="col-lg-1">
                        </div>
                    </div>
                </div>

                <!-- LIST -->
                <div v-if="alt.type == 'List'" class="row-fluid clearfix">
                    <div class="row-fluid clearfix">
                        <div v-on:click="removeQuestionAlternative(question, alt)" style="padding-top: 9px; padding-left: 30px;" class="col-lg-1">
                            <i class="glyphicon glyphicon-remove"  style="color: #AD170F; opacity: 0.6;"></i>
                        </div>
                        <div style="padding-top: 9px; padding-left: 30px;"  v-on:click="cloneQuestionAlternative(question, alt)" class="col-lg-1">
                            <i style="margin-left: 0px; padding-left: 0px" class="fa fa-clone"></i>
                        </div>
                        <div class="col-lg-10" style="padding-bottom: 30px;">
                            <form class="pure-form pure-form-stacked">
                                <select id="" style="height: 35px; min-width: 150px;">
                                    <option class="option" v-for="select in alt.select">{{select.option}}</option>
                                </select>
                            </form>
                        </div>
                    </div>
                    <div class="row-fluid clearfix" v-for="(select, index) in alt.select"  style="margin-top: 7px; margin-bottom: 0px">
                        <div class="col-lg-1">
                            <div v-on:click="removeQuestionAlternative(question, alt)" style="padding-top: 9px;" class="col-lg-1">
                                <i class="glyphicon glyphicon-remove"  style="color: #AD170F; opacity: 0.6;"></i>
                            </div>
                        </div>
                        <div class="col-lg-1">
                            <div style="padding-top: 9px;" v-on:click="cloneQuestionAlternative(question, alt)" class="col-lg-1">
                                <i style="margin-left: 0px; padding-left: 0px" class="fa fa-clone"></i>
                            </div>

                        </div>
                        <div class="col-lg-10" style="padding-left: 20px; margin: 0px">
                        <input-div msg="Alternative" v-model="alt.label" :bColorHex="question.bColorHex" :fColorHex="question.fColorHex"></input-div>
                            <!-- <input
                                v-focus
                                v-bind:ref="alt.type"
                                v-bind:style="{ 'background-color': question.bColorHex, color: question.fColorHex }"
                                @keydown.38="focusPrev(index, alt.type)"
                                @keydown.40="focusNext(index, alt.type)"
                                @keyup.46="select.option = ''"
                                @keyup.enter="addListOption(alt)"
                                v-model="select.option" class="form-control listinputfield" type="text" style="width: 100%" placeholder="Add option to list"></input> -->
                        </div>
                    </div>
                    <div class="row-fluid clearfix" style="margin-bottom: 30px">
                        <div class="col-lg-2">
                        </div>
                        <div class="col-lg-9" style="padding-left: 18px;">
                        </div>
                        <div class="col-lg-1">
                        </div>
                    </div>
                </div>

                <!-- VIDEO -->
                <div v-if="alt.type == 'Video'" class="row-fluid clearfix video">
                    <div class="row-fluid clearfix" style="margin-bottom: 20px">
                        <div class="col-lg-2">

                        </div>
                        <div class="col-lg-10" style="padding-left: 15px; padding-right: 35px;">
                        <i style="color: rgb(75, 79, 86); padding-top: 12px;" @click="alt.visible = !alt.visible" class="fa fa-plus" aria-hidden="true"></i>
                            <input
                                    v-if="alt.visible == true"
                            	    type="text"
                                    class="form-control"
                                    style="width: 90%"
                                    v-bind:style="{ 'background-color': question.bColorHex, color: question.fColorHex }"
                                    placeholder="Write an optional description here..."
                                    v-model="alt.label"
                                    v-bind:ref="'alt.type' + index"
                                    v-focus
                                    @focus="onFocus($el)"
                                    @keyup.46="alt.label = ''"
                                    @keyup.enter="addQuestionAlternative(question)">
                            </input>
                        </div>
                    </div>
                    <div v-on:click="removeQuestionAlternative(question, alt)" style="padding-top: 9px; color: red" class="col-lg-1">
                        <i class="glyphicon glyphicon-remove"  style="color: #AD170F; opacity: 0.6;"></i>
                    </div>
                    <div style="padding-top: 9px;" v-on:click="cloneQuestionAlternative(question, alt)" class="col-lg-1">
                        <i style="margin-left: 0px; padding-left: 0px" class="fa fa-clone"></i>
                    </div>
                    <div class="col-lg-9">
                        <input class="form-control" type="text" v-model="alt.url"
                        v-bind:style="{ 'background-color': question.bColorHex, color: question.fColorHex }"
                        placeholder="Paste a video url here..." style="width: 100%; border-bottom: 2px solid #42b983; border-radius: 0px">
                        <iframe v-if="alt.url != ''" width="" height="300" style="width: 100%" :src="alt.url.toString().replace('watch?v=','embed/')" frameBorder="0" allowfullscreen></iframe>
                    </div>
                    <div class="col-lg-1">
                    </div>
                </div>


                <!-- TABLE -->
                <div v-if="alt.type == 'Table'" class="row-fluid clearfix">

                	<div class="row-fluid clearfix" style="padding-left: 55px">
                		<div v-on:click="removeQuestionAlternative(question, alt)" style="padding-top: 9px;" class="col-lg-1">
                			<i class="glyphicon glyphicon-remove"  style="color: #AD170F; opacity: 0.6;"></i>
                		</div>
                		<div style="padding-top: 9px;" v-on:click="cloneQuestionAlternative(question, alt)" class="col-lg-1">
                			<i style="margin-left: 0px; padding-left: 0px" class="fa fa-clone"></i>
                		</div>
                	</div>





                	<div class="row-fluid clearfix" style="padding: 20px 0px 0px 30px">
                		<div class="col-lg-12">
                			<div class="row">
                            <table-component></table-component>

                                <!-- <div class="col-lg-12" style="overflow-x: scroll;">
                					<table class="table-bordered" >
                						<thead>
                							<tr>
                								<th v-for="(row, key, index) in alt.rows">
                									<input-div msg="Row" v-model="alt.label" bColorHex="#42b983"></input-div>
                								</th>
                							</tr>
                						</thead>
                						<tbody>
                							<tr v-for="(column, index) in alt.columns">
                								<td v-for="(item, key) in column">
                                                    <input-div msg="Column" v-model="column.label" bColorHex="#f9f9f9" :fColorHex="question.fColorHex"></input-div>
                                                </td>
                							</tr>
                						</tbody>
                					</table>
                				</div> -->


                            <!--    <button @click="addTableRow(alt)" class="btn btn-default">Add row</button>
                                <button @click="addTableColumn(alt)" class="btn btn-default">Add column</button> -->

                			</div>
                		</div>
                	</div>
                </div>


                </div>
            </draggable>
        </div>

        <div class="row">
            <!--<button  class=""> -->

            <!-- </button> -->
            <button v-if="question.type != 'Tittel'" style="margin-bottom: 80px; margin-left: 20px; margin-top: 10px" v-on:click="addQuestionAlternative(question)" class="btn btn-default">
                <i style="color: #4b4f56" class="fa fa-plus" aria-hidden="true"></i>
            </button>
        </div>
    </div>
    `,
    props: {
        question: { required: true },
        toggle: { required: false }
    },
    data() {
        return {
            toggleTitleDesc: false,
            // width: parseInt(document.getElementById("form").clientWidth) - (29 * (parseInt(document.getElementById("form").clientWidth)/100)),
            focus: true
        }
    },
    created() {
        // this.toggleTitleDesc = this.toggle;
    },
    filters: {
        formatURL: function(value) {
            if (!value) return ''
            value = value.toString();
            // return value.charAt(0).toUpperCase() + value.slice(1)
            value = value.replace('watch?v=','embed/');
            console.log(value);
            return value;
        }
    },
    methods: {
        focusPrev: function(idx, prop) {
            Vue.nextTick(() => {
                if(idx >= 1) {
                    this.$refs[prop][idx-1].focus()
                }
            })
            //$emit('focusnext', questions)
            //$emit('focusprev', questions)
            //in main: focus(question+1)
        },
        focusNext: function(idx, prop, alt) {
            // this.addQuestionAlternative(prop)
            // console.log(this.$refs[prop][idx+1].$el);
            Vue.nextTick(() => {
                if(idx < this.question.alternatives.length-1) {
                    // this.$refs[prop][idx+1].focus()
                    // this.alternatives[alt+1].isFocused = true

                    //           page,      draggable,  question,     input div
                    this.$refs.page_ref[0].$children[0].$children[0].$children[0].focus()

                    //alter something that tells the child comp + 1 thourgh prop to focus the input element
                    // alt.isFocused = true
                    //inside input-div blur isFocused = false.. emit again?  it can only focus one thing, so no prob
                }
            })
        },
        addQuestionAlternative: function(question) {
            switch (question.type) {
                case "Radiobutton":
                    var newLength = question.alternatives.push({type: "Radiobutton",  label: '', isFocused: true})
                    break;
                case "Checkbox":
                    question.alternatives.push({type: "Checkbox", label: '', isFocused: true})
                    break;
                case "Textfield":
                    question.alternatives.push({type: "Textfield", label: '', isFocused: true})
                    break;
                case "Textarea":
                    question.alternatives.push({type: "Textarea", label: '', height: 8, width: 55, isFocused: true})
                    break;
                case "List":
                    question.alternatives.push({type: "List", label: '', isFocused: true, select: [{option: ''}]})
                    break;
                case "Video":
                    question.alternatives.push({type: "Video", label: '', url: '', visible: false, isFocused: true})
            }
        },
        removeQuestionAlternative: function(question, alternative) {
            question.alternatives.splice(question.alternatives.indexOf(alternative), 1)
        },
        addListOption: function(alternative) {
            alternative.select.push({option: ''})
        },
        addTableRow: function(alternative) {
            //add a new row at the end
            alternative.rows.push('row')
            //add a new column for that row at the end aswell
            // alternative.columns.push({ name: '111cqw11', name312: 'aaacceaaa' })
            alternative.columns.forEach(item => {

                var name = alternative.rows.length
                console.log(name)
                item['new' + name] = 'cell'
                //push another item to the end of each object
            })

            //when the element is dragged focus on it instead of the last inserted. creat deley. focus it last
            //get the index of the dropped element. kall funksjon onEnd og så kanskej bruk en timeout?

        },
        addTableColumn: function(alternative) {
            var nrOfRows = alternative.rows.length;
            var nr = 0;
            var varName = 'cell' + nr;
            var objToPush = {};

            // alternative.columns.push({varName: 'new2', varsadde: 'new2'})
            for(var i = 0; i < nrOfRows; i++) {
                objToPush[varName] = 'cell'
                nr++
                varName = 'cell' + nr;
            }
            alternative.columns.push(objToPush)
        },
        cloneQuestionAlternative: function(question, alternative) {
            var clonedQuestionAlternative = JSON.stringify(alternative)
            clonedQuestionAlternative = JSON.parse(clonedQuestionAlternative)
            question.alternatives.splice(question.alternatives.indexOf(alternative) + 1, 0, clonedQuestionAlternative)
        }
    }
})
