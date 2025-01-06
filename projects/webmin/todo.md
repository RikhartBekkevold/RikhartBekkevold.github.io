predefined css templates?
view ast tab/option
load from file
codemirror editor
tailwind, purecss
show input and output chars, and characters saved
show other process stats. compare to other minifiers?
run linter for invalid css?
add false to options view
add tooltips or explanations for settings. better names too?
reset btn
run btn icon

replace   background-color: red;  with background: red;? safe? depends on other decl for same stylerule?
calc can be variables, fetch variables so that can resolve expressions
this should: width: calc(20px - 20px); resolve in 0 not 0px;
what does css impl do on - values?
run against test, to see if css works in a browser? so know which version settings compatible with? allow browser
version setting like vite?  

how to fill cv? pad cv.

ace, monaco, Prism code editor, codemirror  


// utilize html pass info, or boolean to allow mangle
// utilize fact js and html exe after? and css only once, to perform transforms anyway?


      // will webpack/rollup put nod emodules as part of single file bundle?

would import work if i make esm bundle, add as script tag, then import in diff script, even if script is in internal to html file?

npm http dev server module

Remove legacy features. removes features like charset that are ignored by any semi modern browsers anyway.
  removeCharset

 padding: 20px; padding-bottom: 40px; results in only overwriting bottom...

// fix: no err if dont pass options object
// fix merging
fix variables -addNormalDeclariotn undefined

// if incorrect css crashes? slow becasue loops?
// invalid string length, not correct... why?


// prependComment: "",
// preMangledNames: {
//   keyframes:  {},
//   selectors:  {},
//   variables:  {},
//   namespaces: {}
// },


// mergeLonghands
// also:
//   padding-left: 10px;
  // padding: 20px;
  // also:
  // #id {
  //   padding-left: 10px;
  //   padding: 20px;
  // }
  //
  // #id {
  //   padding: 20px;
  // }
  // fix and perform more complicated removal of dupli declarations by utilizing first infer step


  script with module. other files cant use? even if browser gets it.
  make this script tag a module. then can import here.
  rollup - better support anyway - and can have 2 script tags.
  premade umds
