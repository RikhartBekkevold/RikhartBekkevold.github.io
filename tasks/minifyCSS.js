// html minify? css minify? alter html scripts? both dir/files?
// console.log("minified html via api fn call");
// console.log("changed script src paths in output files/minified files");

console.log("\nStart minification of CSS");

// apply own config to the api call config obj via assign!
// make paths geneelizable too for diff project folders
// aswel as use join etc for OS?

var csso = require('csso');
const fs = require('fs');

// the cli does this. it writes to file or logs for me!
var dir = './css/';
fs.readdirSync(dir).forEach(file => {
  console.log(file);
  var css = fs.readFileSync(dir+file, "utf8")
  var minCSS = csso.minify(css, {});
  fs.writeFileSync("./dist/css/"+file, minCSS.css, "utf8")
});
console.log("minified css");

dir = './blogs/css/';
fs.readdirSync(dir).forEach(file => {
  console.log(file);
  var css = fs.readFileSync(dir+file, "utf8")
  var minCSS = csso.minify(css, {});
  fs.writeFileSync("./blogs/dist/css/"+file, minCSS.css, "utf8")
});
console.log("minified blog css");

// when i run vue cli build. its webpack build?
// npm script = cli? not node. global?

// mess with config - to make even smaller
// change to build from dist
// try cli
// push to github - min css (try other css like es5) - change dist paths
// make contact become smaller
// clean more css
// minify external links - and node mods? dont include - make dev dep!
// less fonts
// fix scroll - try diff brwosers?
// babelify css? check alternitves
// minify html, check alternavies
// fix mobile

// if dist isnt made first, will err probably with dist/css

// cli makes more sense?

// update index script/style links/paths as part of build process - webpack does it?

// buildprocessSimple - do i need to update api?

// copy line by just ctrl-c on th eline without marking

// if build entire into index.html then dist. both blog and not, i can change the links there
// not before minify etc
// process, but dont need to be sync, since independant processes

// push all to array, or exe callback - my node api fns - file read


// can we pass flags to this script? npm run passes flags like shell to node script? just that we dont need shebang?
// can also do babel api call here
// then make it all a npm cmd?

// shell

// eveyrthing cmd can be use din npm scripts? like the babel one is actually cli?
// try for html minifier, many flags thouhg.
// html-min

// or run in script here

// can u specific a html file for babel? does it get the script tags only?
// document.getElementsByTagName("script") // faster btw? assumption = speed

// just steal html parser and modify it by adding a transformer class. and save space if dont.
// save only top comment?

// performance = when to load

// CHANGE BOTH BLOG AND THIS
// const fs = require('fs');
// var file = fs.readFileSync("index.html", "utf8")

// change file here
// change before minify?

// var minify = require('html-minifier').minify;
// var result = minify(file, {});
// fs.writeFileSync(result, "dist/index.html", "utf8")
//
// // dont need to be very accurate, only mine
// var scriptRX = /<script src>/
//
// file = file.replace(/<script src="src/, function() {
//   '<script> src="dist" '
//
//   <script src="src/data.js"></script>
// })


// will change it after minified/babelified, need to change it back thouhg after push
// const fs = require('fs');
// var file = fs.readFileSync("index.html", "utf8")
//
// // dont need to be very accurate, only mine
// file = file.replace('<script src="src/', '<script src="dist/')
// fs.writeFileSync("index.html", file, "utf8")
//
// var file = fs.readFileSync("blogs/tutorials.html", "utf8")
// file = file.replace('<script src="js/', '<script src="dist/')
// fs.writeFileSync("blogs/tutorials.html", file, "utf8")

// just write to same folder and call it index.min.html? or index.html? then
// use a diff name for the development version?

// just have a dev file u load to test, wont load when do there? need to
// load from file, not url?

// cant do this for every tutorial blog? since we HAVE MANY of the same html files
// always link to min?

// how too link to build files, best practices
// building website - entire in build?

// index.js - entry file for node mods. easy to change.

// or write this file, then write back - no minify

// inside the html file, have a redirect? php redirect? a tag?
//
// minify csss. where to save? build/css?

// how to decide - redirect - index file when in root/website url

// brwoser, server, node index.js

// could even go by line. after we push we need to change back. should be
// automatic to change back? atleast now i detect that dont work, but push correct.
// cmd to run after push to change back do dev mode? npm run dev?

// push = api

// tip: console.log(require("fs").readFileSync.toString());

// tests: html file, js file, unit tests

// ["']

// if html is in dist. src attr shouldnt have dist!
// if in same folder. add dist/src so that path is same?
// just add replace for current non minified index.html?

// "configure server so index html in diff loc"
// it has to be some other file on the server with config

// the minified html isnt the one we get send to browser. configure server for that? we cant with gh pages.



// src=".?" - or hardcode all 4? 8? 2?

// write files thats exe from shell
// write files, that is downloaded to browser and exe

// get script tags of src
// and then add dist/ to stc?

// getscript, getattribute("src"), add "dist/"+src
// can only do live in browser? must use rx? nodemod for it? getscripttags. i have made it?
// im running this script from node (cli cmd!) so i cant use getElementsByTagName("script"), must use readFile
// htmlfilestr to DOM nmod?

// server removes " live before send to browser? so not as eff as doing it self?

// can use rquire and not fetch! fetch is only if frontend init the change, rquire if backend!
