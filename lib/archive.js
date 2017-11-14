
// if(el.type == 'Radiobutton' || el.type == 'Checkbox' || el.type == 'Textfield') {
//     return {
//         type: el.type, bColorHex: '', fColorHex: '', label: '',
//         alternatives: [{type: el.type, label: ''}]
//     }
// }
// else if(el.type == 'Date') {
//     return {
//         type: el.type, bColorHex: '', fColorHex: '', label: '', date: "today",
//         alternatives: [{type: el.type, isTimeEnabled: this.time, isCalendarEnabled: this.calendar, label: ''}]
//     }
// }
// else if(el.type == 'List') {
//     return {
//         type: el.type, bColorHex: '', fColorHex: '', label: '',
//         alternatives: [{type: el.type, label: '', select: [{option: ''}]}]
//     }
// }
// else if(el.type == 'Tittel') {
//     return {
//         type: el.type,
//         bColorHex: '',
//         fColorHex: '',
//         label: '',
//         desclabel: '',
//         alternatives: [{type: el.type}]
//     }
// }
// else if(el.type == 'Video') {
//     return {
//         type: el.type,
//         bColorHex: '',
//         fColorHex: '',
//         label: '',
//         alternatives: [{type: el.type, label: '', url: ''}]
//     }
// }
// else if(el.type == 'Table') {
//     return {
//         type: el.type,
//         bColorHex: '',
//         fColorHex: '',
//         label: '',
//         alternatives: [{ type: el.type, rows: ['row', 'row'], columns: [{ name: 'cell', name312: 'cell' },
//         { name: 'cell', name312: 'cell' }, { name: 'cell', name312: 'cell' }, { name: 'cell', name312: 'cell'}]}]
//     }
// }
// else if(el.type == 'Textarea') {
//     return {
//         type: el.type,
//         bColorHex: '',
//         fColorHex: '',
//         label: '',
//         alternatives: [{type: el.type, label: '', height: 8, width: 55}]
//     }
// }

// 'time': {
//     handler: function (time) {
//         this.formList.forEach(function(item){
//             if(item.focused == true && item.type == 'Date') {
//                 item.alternatives.forEach(function(alt){
//                     alt.isTimeEnabled = time
//
//                     // console.log(alt.isTimeEnabled)
//                     // var index = item.alternatives.indexOf(alt)
//                     // var temp = item.alternatives.slice(alt)
//                     // console.log(temp)
//                     // console.log(index)
//                     // var s = item.alternatives.splice(index, 0, temp)
//                     // console.log(s)
//                 })
//             }
//         })
//     },
//     deep: true
// },
// 'calendar': {
//   handler: function (calendar) {
//       this.formList.forEach(function(item){
//           if(item.focused == true && item.type == 'Date') {
//               item.alternatives.forEach(function(alt){
//                   alt.isCalendarEnabled = calendar
//               })
//           }
//       })
//   },
//   deep: true
// }

//   'colors.a': {
//       handler: function (colors) {
//           this.formList.forEach(function(item){
//               if(item.focused == true) {
//                   item.opacity = colors
//                   console.log(colors)
//               }
//           })
//       },
//       deep: true
//   },

    // console.log(document.getElementById("form").clientWidth)
    // console.log(localStorage.getItem('form'))
    // if(typeof localStorage.getItem('form') == 'undefined') {
    //     console.log('das')
    //     // return
    // }


// // LOAD FORM STORED IN LOCALSTORAGE
// if(localStorage.getItem('form') != null) {
//     this.formList = JSON.parse(localStorage.getItem('form'))
// }
//
// //ini event handlers
// //getForm()
//
//
// // PAGE COUNT
//
// //lag en lokal var = 1
// var count = 1;
// //hvis pageCount existerer i LS
// if(localStorage.getItem('pageCount') != null) {
//     //get it and replace the local vars value with it.
//     var count = localStorage.getItem('pageCount')
//     count++;
//     console.log('Number of times you have visited this site: ' + count)
//     //store it in LS again
//     localStorage.setItem('pageCount', count)
// }
// //store the new page count
// //if pageCount didnt exists, this is equal to 1
// localStorage.setItem('pageCount', count)
//
//
// console.log('Number of times you have visited this site: ' + count)

// CHECK IF ARGUMENT IS DESIRED DATATYPE
// if(typeof type != 'string') {
//     console.error("Provided argument must be a string, '" + ((Array.isArray(type)) ? 'array' : typeof type) + "' provided.")
//     return
// }

// ADD QUESTIONN BASED ON TYPE PROVIDED
// switch (type.toLowerCase()) {
//         this.formList.push(new Question("Tittel"))
//     case "tittel":
//         this.formList.push(
//             {
//                 type: "Tittel",
//                 focused: false,
//                 bColorHex: '',
//                 fColorHex: '',
//                 label: '',
//                 desclabel: '',
//                 alternatives:
//                 [
//                     {type: "Tittel"}
//                 ]
//             }
//         )
//         break;
//     case "radiobutton":
//         this.formList.push(new Question("Radiobutton"))
//         this.formList.push(
//             {
//                 type: "Radiobutton",
//                 focused: false,
//                 bColorHex: '',
//                 fColorHex: '',
//                 label: '',
//                 alternatives:
//                 [
//                     {type: "Radiobutton", label: ''}
//                 ],
//                 style: {
//
//                 }
//             }
//         )
//         break;
//     case "checkbox":
//         this.formList.push(new Question("Checkbox"))
//         //
//         // {type: "Checkbox", focused: false, bColorHex: '', fColorHex: '', label: '',
//         //                     alternatives: [{type: "Checkbox", label: ''}]}
//         break;
//     case "textfield":
//         this.formList.push(new Question("Checkbox"))
//         this.formList.push({type: "Textfield", focused: false, bColorHex: '', fColorHex: '', label: '',
//                             alternatives: [{type: "Textfield", label: ''}]})
//         break;
//     case "textarea":
//         this.formList.push(new Question("Checkbox"))
//         this.formList.push({type: "Textarea", focused: false, bColorHex: '', fColorHex: '', label: '',
//                             alternatives: [{type: "Textarea", label: '', height: 8, width: 55}]})
//         break;
//     case "list":
//         this.formList.push(new Question("List"))
//         this.formList.push({type: "List", focused: false, bColorHex: '', fColorHex: '', label: '',
//                             alternatives: [{type: "List", label: '', select: [{option: ''}]}]})
//         break;
//     case "table":
//         this.formList.push(new Question("Table"))
//         this.formList.push({type: "Table", focused: false, bColorHex: '', fColorHex: '', label: '',
//                             alternatives: [{ type: "Table", rows: ['row', 'row'], columns: [{ name: 'cell', name312: 'cell' },
//                             { name: 'cell', name312: 'cell' }, { name: 'cell', name312: 'cell' }, { name: 'cell', name312: 'cell'}]}]})
//         break;
//     case "video":
//         this.formList.push(new Question("Video"))
//         this.formList.push({type: "Video", focused: false, bColorHex: '', fColorHex: '', label: '',
//                             alternatives: [{type: "Video", label: '', url: '', visible: false}]})
//         break;
//
//     // IF QUESTIONN TYPE IS INVALID
//     default:
//         console.error("Did not recognize the provided string value '" + type + "' as a valid question type. Acceptable values are: \n 'Radiobutton' \n 'Checkbox'" +
//         "\n 'Textfield' \n 'Textarea' \n 'List' \n 'Tittel' \n 'Table' \n 'Video' " )
// }


//sett this string to new value when user performs action. this way we can see what prev action was and
//operationType: ['removeQuestion', 'removeQuestionAlternative',  'typing', 'addQuestion', 'addAlternative' ],

// {type: "Tittel", focused: false, bColorHex: '', fColorHex: '', label: '', desclabel: '', alternatives: [{type: "Tittel"}]}
// {
//     type: "Radiobutton",
//     focused: false,
//     bColorHex: '',
//     fColorHex: '',
//     label: '',
//     alternatives:
//     [
//         {type: "Radiobutton", label: ''}
//     ],
//     style:
//     {
//         bColorHex: '',
//         fColorHex: '',
//         border: '1px solid black'
//     }
// },
//////////////////////////////////////
// {
//     type: "Checkbox",
//     focused: false,
//     bColorHex: '',
//     fColorHex: '',
//     alternatives:
//     [
//         {type: "Checkbox", label: ''}
//     ]
// },
// {type: "Textfield", focused: false, bColorHex: '', fColorHex: '', alternatives: [{type: "Textfield", label: ''}]},
// {type: "Textarea",  focused: false, bColorHex: '', fColorHex: '', alternatives: [{type: "Textarea", label: '', height: parseInt(document.getElementById("form").style.width), width: parseInt(document.getElementById("form").style.width)}]},
// {type: "List",      focused: false, bColorHex: '', fColorHex: '', label: '', alternatives: [{type: "List", label: '', select: [{option: ''}]}]},
// {type: "Video",     focused: false, bColorHex: '', fColorHex: '', label: '', alternatives: [{type: "Video", label: '', url: ''}]},
// {type: "Image",     focused: false, bColorHex: '', fColorHex: '', alternatives: [{type: "Image"}]},
// {type: "Audio",     focused: false, bColorHex: '', fColorHex: '', alternatives: [{type: "Audio"}]},
// {type: "Table",     focused: false, bColorHex: '', fColorHex: '', alternatives: [{type: "Table"}]},
// {type: "Date",      focused: false, bColorHex: '', fColorHex: '', date: null, alternatives: [{type: "Date", isTimeEnabled: this.time, isCalendarEnabled: this.calendar, label: ''}]}
