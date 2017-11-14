var colorPickerDefaultProps = {
  hex: '#E4446A',
  hsl: {
    h: 150,
    s: 0.5,
    l: 0.2,
    a: 1
  },
  hsv: {
    h: 150,
    s: 0.66,
    v: 0.30,
    a: 1
  },
  rgba: {
    r: 25,
    g: 77,
    b: 51,
    a: 1
  },
  a: 1
}


/**
 *  Calculates a contrasting colour from a provided hex colour
 *  @param the hex colour to calculate the contrast from
 *  @returns the contrasting colour. A string, either 'black' or 'white'
 */
function getContrastingColor(hexColour) {

    var colorsString = JSON.stringify(hexColour).replace('#','')

    //parse the arg
    var r = parseInt(colorsString.substr(1,2),16);
    var g = parseInt(colorsString.substr(3,2),16);
    var b = parseInt(colorsString.substr(5,2),16);

    //use formula to calc black or white
    var yiq = ((r*299)+(g*587)+(b*114))/1000;

    //return black or white depending on which one contrasts the best
    return ((yiq >= 128) ? 'black' : 'white');
}


function syntaxHighlight(json) {
   if (typeof json != 'string') {
        json = JSON.stringify(json, undefined, 2);
   }
   json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
   return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
       var cls = 'number';
       if (/^"/.test(match)) {
           if (/:$/.test(match)) {
               cls = 'key';
           } else {
               cls = 'string';
           }
       } else if (/true|false/.test(match)) {
           cls = 'boolean';
       } else if (/null/.test(match)) {
           cls = 'null';
       }
       return '<span class="' + cls + '">' + match + '</span>';
   });
}
