Vue.component('hotkey-table', {
    template: `
    <table style="" class="table">
        <tr>
            <th>Element</th>
            <th>Function</th>
            <th>Key</th>
        </tr>
        <tr>
            <td>Input field</td>
            <td>Add new field</td>
            <td>Enter</td>
        </tr>
        <tr>
            <td>Input field</td>
            <td>Delete field content</td>
            <td>Delete</td>
        </tr>
        <tr>
            <td>Global</td>
            <td>Delete form</td>
            <td>alt + s</td>
        </tr>
        <tr>
            <td>Global</td>
            <td>Show delete form modal</td>
            <td>alt + a</td>
        </tr>
        <tr>
            <td>Input field</td>
            <td>Focus previous field</td>
            <td>Up arrow</td>
        </tr>
        <tr>
            <td>Input field</td>
            <td>Focus next field</td>
            <td>Down arrow</td>
        </tr>
    </table>
`
})
