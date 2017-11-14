
 Vue.component('input-div', {
     template: `
    <div>
        <div tabindex="0" @focus.stop="change = !change"  v-if="change == false">
            <div v-bind:style="{ 'background-color': bColorHex, color: fColorHex, 'text-align': textOrientation }"
            style="letter-spacing: 0px; line-height: 34px; margin-left: 0px; height: 34px; width: 90%">
            {{text}}
            </div>
        </div>
        <div v-if="change == true">
            <input
                ref="input"
                v-bind:value="value"
                v-on:input="updateValue($event.target.value)"
                v-focus  @blur="change = false"
                v-bind:style="{ 'background-color': bColorHex, color: fColorHex }"
                style="margin: 0px; margin-left: 0px; color: white; width: 90%;"
                type="text"
                class="form-control question-input"
                @keyup.enter="$emit('enter')"
                @keydown.40="$emit('downarrow')">
            </input>
        </div>
    </div>
     `,
     props: {
         fColorHex:       { type: String },
         bColorHex:       { type: String },
         value:           { type: String },
         msg:             { type: String },
         orientation:     { type: String }
        //  focus:           { type: Boolean }

         //add key down event that emits arrow down, let the parent check where in array this compo is and focus the next one

     },
     data() {
         return {
             change:            false,
             textPlaceholder:   'Write question here...',
             textOrientation:   'center'
         }
     },
     mounted() {
         this.textPlaceholder = this.msg
         this.textOrientation = this.orientation
     },
     computed: {
         text: function() {
            if(this.value == '') {
                return this.textPlaceholder
            }
            return this.value
        },


//listen on focus change? then

     },
     methods: {
        updateValue: function (value) {
            this.$emit('input', value)
        },
        focus: function() {
            console.log(this.$refs);
        }
     }
 })
