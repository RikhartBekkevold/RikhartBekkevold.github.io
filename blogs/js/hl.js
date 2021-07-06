// recreates the innhertml string 
// a transpiler with lexer to token stream to output string


// need to collect all, because i need to recreate. need to loop some just for getting past.
// add class to pre code spans class="no-color" to filter - or class="highlight" - not css selctor in querySelctor?
var keywords = [// dont add only one tag to innerhtml at a time - appendchild is string and dom concat?
  "await","break","case","class","catch","const","continue",
  "debugger","default","delete", "do","else","enum","eval",
  "export","extends","finally", "for","function","if","implements",
  "import","in","instanceof","interface","let","new","package",
  "private","protected","public","return","static","super","switch",
  "throw","try","typeof","var","void","while","with","yield"
]
var operators = ["+", "-", "*", "/", "%", "!", "=", ":", "?", "|", "^", "~", "&"]
var delims = "{}()[],"

var codes = document.querySelectorAll("pre code").forEach((code) => {
  var input = code.innerHTML
  var tokens = []
  var idx = 0
  var char = input[0]
  console.log(input);

  while (idx < input.length) {

    if (/\s/.test(char)) { // IS JYUNK?
      var val = ""
      while (/\s/.test(char)) {
        val += char
        char = input[++idx]
      }
      tokens.push({type: "Space", val})
    }

    else if (delims.indexOf(char) !== -1) {
      tokens.push({type: "Delim", val: char})
      char = input[++idx]
    }
    else if (/[A-Z]/.test(char)) {
      var val = ""
      // remove i
      // loop for dot too? if dot, ignore sapce forward. still need to record
      while (/[a-z_\d]/i.test(char)) { // end on . too - dont end on i mean
        val += char
        char = input[++idx]
      }
      // use prim for html/css? add lang tag in corner?
      tokens.push({type: "fnObj", val})
      // tokens.push({type: "Const", val})
      // Obect.Object.prop

      // how to give sub red. need to parse inside. but give it a different tokne? need to see this as path?
      // but have many push? its just that path ends on first space no dot?
    }
    else if (/[a-z_]/.test(char)) {
      var val = ""
      // loop for dot too? if dot, ignore sapce forward. still need to record
      while (/[a-z_\d]/i.test(char)) {
        val += char
        char = input[++idx]
      }
      if (val === "true" || val === "false")          tokens.push({type: "Boolean", val})
      else if (val === "null" || val === "undefined") tokens.push({type: "BottomValue", val})
      else if (keywords.includes(val) === true)       tokens.push({type: "Keyword", val})
      else                                            tokens.push({type: "Ident", val})
    }
    // since its first - since we go inside here untill end - gold if entire?
    // remove caps i in rx for words?
    // dont add color to Object if in chain. menas that chain need to be parsed as one ident?
    // means we need to do it here too
    // pace after . is legal!


    // answers - the website described
    // transform asnwers/infer - more answers and finegrain one asnwer and meaning of it and implications. one step to make last step easier.
    // ast
    // html

    // all articles should have date

    // Boolean() // about order


    // only do colored dot when in a number
    // "" dont care where it is.. if in arg
    // rx that target two things. and sub rx to determine which one. more eff. and solves the problem of clashing rx? rx that can fit both.
    else if (/[\d\.]/.test(char)) { // not conflcit with obj props?. global space?
      var val = char
      char = input[++idx]
      while (/[\d\.]/.test(char)) {
        val += char
        char = input[++idx]
      }
      // can esily go back on idx aswell at end
      tokens.push({type: "Number", val})
    }
    // the char first, is always presedence
    // capitalized (sep where?) will get yewllov. dot right will be red, but only if not fn
    //what about ref vs obj lit?


    // // sep them so that we can have the other inside this
    // // loop til end, which is only ""
    // // if we do rx below, it cant have inner '?
    else if (char === '"') { // if becaue we use continue. cna have if else thoihg?
      // need to progress past? yeh. infinite loop. find ", dont enter while, dont progress char, find again.. etc..
      var val = char
      char = input[++idx]
      while (char !== '"' && char !== undefined) { // undefined = if made mistake, else endless loop. cant garantee " is added
        val += char
        char = input[++idx]
      }
      val += char
      char = input[++idx] // move past " ender, to not immediatly restart new found string
      tokens.push({type: "String", val: val})
      // move loop inside fn, noit just move?
    }

    else if (char === "'") { // if becaue we use continue. cna have if else thoihg?
      // need to progress past? yeh. infinite loop. find ", dont enter while, dont progress char, find again.. etc..
      var val = char // DO SOMETHING. let.
      char = input[++idx]
      while (char !== "'" && char !== undefined) { // undefined = if made mistake, else endless loop. cant garantee " is added
        val += char
        char = input[++idx]
      }
      val += char
      char = input[++idx] // move past " ender, to not immediatly restart new found string
      tokens.push({type: "String", val: val})
      // move loop inside fn, noit just move?
      // can in same, but then need to save which val was start and end only on it
    }

    else if (char === "/" && input[idx+1] === "*") {
      var val = char
      char = input[++idx]
      val += char
      char = input[++idx]
      while (char !== "*" && input[idx+1] !== "/" && char !== undefined) { // input[idx+1] !== undefined
        val += char
        char = input[++idx]
      }
      val += char
      char = input[++idx]
      val += char
      char = input[++idx]
      tokens.push({type: "Comment", val})
    }

    else if (char === "/" && input[idx+1] === "/") {
      var val = ""
      while (char !== "\n" && char !== undefined) {
        val += char
        char = input[++idx]
      }
      tokens.push({type: "Comment", val})
    }

    else if (operators.includes(char)) {
      if (input.slice(idx, idx+4) === "&gt;" || input.slice(idx, idx+4) === "&lt;") {
        tokens.push({type: "Operator", val: input.slice(idx, idx+4)})
        char = input[idx = idx+4]
      }
      if (input.slice(idx, idx+5) === "&amp;") {
        tokens.push({type: "Operator", val: input.slice(idx, idx+5)})
        char = input[idx = idx+5]
      }
      else {
        tokens.push({type: "Operator", val: char})
        char = input[++idx]
      }
    }
    // caps above
    // if dont req char, or care (space too), we save it as junk to be concated later, but we also progress always
    // this is a safe fall
    // ``, and ${} and rx
    // dot and fnObj - if caps. regardless if dot or () after. only yellow if new before?
    // not in fn dec thouhg. this is context. same with dot.
    // obj literals and arrays and this and after dot - color both sides?
    // dont throw if unknown char. just collect it as junk for recreation later
    else {
      tokens.push({type: "Junk", val: input[idx]})
      char = input[++idx]
    }
  }
  console.log(tokens);
  // style px memeber and innhertl ul


  // util methods for traversing
  // this stage only does two things. group them.
  var output = ""
  tokens.forEach((token, i, arr) => {
    if (token.type === "Keyword") {
      output += "<span class='keyword-hl'>" + token.val + "</span>"
    }
    else if (token.type === "Ident" || token.type === "fnObj") {
      ++i
      // helper fn here - or progress general fn?
      while(arr[i] && arr[i].type === "Space") {++i} // fn with progress, empty loop?
      arr[i] && arr[i].val === "(" // this is now altered  i + num
        ? output += "<span class='fnName-hl'>" + token.val + "</span>"
        : token.type === "fnObj"
          ? output += "<span class='fnObj-hl'>" + token.val + "</span>"
          : output += token.val
    }
    else if (token.type === "Junk") {
      output += token.val // output no color - group those no color together? we only perform two types of action?
    }
    else if (token.type === "Space") {
      output += token.val
    }
    else if (token.type === "String") {
      output += "<span class='string-hl'>" + token.val + "</span>"
    }
    else if (token.type === "Delim") {
      output += token.val
    }
    else if (token.type === "Number") {
      output += "<span class='number-hl'>" + token.val + "</span>"
    }
    else if (token.type === "Boolean") {
      output += "<span class='bool-hl'>" + token.val + "</span>"
    }
    else if (token.type === "BottomValue") {
      output += "<span class='bottomvalue-hl'>" + token.val + "</span>"
    }
    else if (token.type === "Operator") {
      output += "<span class='operator-hl'>" + token.val + "</span>"
    }
    else if (token.type === "Comment") {
      output += "<span class='comment-hl'>" + token.val + "</span>"
    }

  });

  code.innerHTML = output
});
//<span .*?> - run with script when uplod? choose diff online tool? get md to html package? run before save?
// shoudl add toString to log? ten it wraps in "" and we can see control chars?


// move()
//   char = input[idx = idx+4]


// CAPS REGARDLESSS OF () or . after etc.
// if caps - make it into a type: "constructor"
// check at end if val is caps?

// put Object in diff group from ident, then color later works
// functionObject
// when do we want to have the color yellow?
// if (/[A-Z]/.test(char)) {
//  // loop?
//  tokens.push({type: "fnObject", val})
//  continue
// }
// dont caps if fn dec. this does. fn dec parse context. if we encoutner function, we loop past name? or we record name in inner while?
// same with new? get name? and give own name? then dont need to check paran after.
// cant color dot either. also based on context? or just checkpresence of dot as prev token?
// dont color both. color only one side. since prev has color from last coloring.
// context {}, when we loop {}, we set the color of ident to red? or do we save {} to own token, and while loop set the ident to "props" instead? so
// coloring later give diff color?
// get context here. {} and then ident? token? cant be space.. but we have space. loop a filtered verison witout space? how to match them? Object.assign?
// sep
// index in stream easy to reapply
// mutate? dont make copy? mutate the same ref but witout space?

// helper fn that ignores space when it not moves, but peeks? peek(1) and it ignores space?
// actually make ast for context? or implement in one of these steps?
// replace remove post?

// lookback
// get the first non space token
// function peek(num) { // peek token stream, not characters - helps with context - simpel context identiyng - same token in diff context
// // if we apply it here, we make them different tokens based on rx/chars
//  while (tokens[idx+num].type === "Space" || undefined) ++num // --num
//  return tokens[idx+num]
//
//  // getFirstNonSpaceToken
//  // do we use num? how to make it first? its set to max? or start? start there, and loop after?
//  // does it make sense?
//  // filter token array copy.from or behind so idx same. then get next?
//
//  getFIrst or
//  includes
//  indexOf(start)
//  find(start, token.val === "")
//
// }
//
// function peekBack() {
//
// }
//
// if peekback().type === token.type
//
//
// firstTokenIs("type") // val?
//
//
//
// // can check dot backwards, can check () forward
// // inside object literals too? dont know if block statement? inside {} can be both
//
// // skip? i need to record. so never need num?
// function move(num) {
//  return char = input[num ? ++idx : idx = idx + num]
// }
//
//
//
// // recording spacing not common since pain in the ass? and never really needed?
// next(n) {
//  this.token = n ?
//  this.tokens[this.i = this.i + n] : // merge these two lines?
//  this.tokens[++this.i]
// }
//
// peek(n) {
//  return this.tokens[this.i + 1]
// }
