Vue.component('table-component', {
     template: `
    <div>
        <!-- Generate -->

            <table class="table-bordered">
                <thead>
                    <tr>
                        <th v-for="row in table"> <!-- each object on each index is a row -->
                            <input-div v-model="row.name" style="background: #42b983;" bColorHex="#42b983"></input-div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border: 1px solid red" v-for="row in table">
                        <td v-for="column in row.columns">
                            <input-div v-model="column.name" style="background: #f9f9f9;" bColorHex="#f9f9f9"></input-div>
                        </td>
                    </tr>
                </tbody>
            </table>

            <button @click="addRow" class="btn btn-default">Add row</button>
            <button @click="addColumn" class="btn btn-default">Add column</button>


    </div>
     `,
     props: {
        //  bColorHex: { type: String },
        //  value:     { type: Array }
     },
     data() {
         return {

            table: [
                    {name: 'row1', columns: [{name: 'left1'},{name: 'right1'}]},
                    {name: 'row2', columns: [{name: 'left2'},{name: 'right2'}]}
                   ],

            table2: [
                    {name: 'row1', columns: [{name: 'left1'},{name: 'right1'}]},
                    {name: 'row2', columns: [{name: 'left2'},{name: 'right2'}]}
                ],

            table3: [   //first contains all rows. the next indexes contains all the rows columns corespnding to 
                     {name: 'row1', name: 'row2', name: 'row3'},                    //contains the rows
                     {name: 'row1', columns: [{name: 'left2'},{name: 'right2'}]},    //column 1
                     {name: 'row2', columns: [{name: 'left2'},{name: 'right2'}]},    //column 2 etc...   //second index in table matches
                     {name: 'row3', columns: [{name: 'left2'},{name: 'right2'}]}
                    ]

         }
     },
     mounted() {

     },
     computed: {

     },
     methods: {
         addRow: function() {
             //duplicate?
            this.table.push({name: 'row2', columns: [{name: 'left2'},{name: 'right2'}]})

         },
         addColumn: function() {
             //add one more for each rows columns array
             this.table.forEach(function(row) {
                 row.columns.push({name: 'right2'})
             })
         }
     }
 })
