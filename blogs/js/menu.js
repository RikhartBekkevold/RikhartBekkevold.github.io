// loop the article and creates a nested menu based on the h3,h2 etc elements.
// if article has ids with same value:




// what do i wnat to do with title? make own id sinc they dont?
// why it ads specifically undefiend as id for title
// do i want to change to ruke? reklce?

  // <!-- when page loads. with a given article contnet. loop the innerhtml and populate, create new li
  // element with str or createELement, based on h2,h3 and id for href - requires heading order to be correct - id can be auto generated  -->

  // both concluion and heading have undefiend as id. since fn gets
  // use createleent only if i dont add to html, but some nested js obj
  // no replace for nesting

  // var headings = document.querySelector(".article h2")
  // headings.shift()
  // var list = ""
  // headings.forEach((h, i) => {
  //   if (h.tagName[2] > )
  //     list += "<ul>"
  //     // CHANGE NAME`data-strtri?
  //   list += `<li><a data-attri="${h.id}" href="#${h.id}">${h.textContent}</a></li>`
  // })
  // document.querySelector(".menu ul").innerHTML = list


  // nested copy, enum, wwriteable, get, set, metadata, circular ref in copy, how to deal with?,
  // circular import - how to detect?
  var article = document.querySelector(".article").innerHTML // ref to el, but not prop works?
  var headingRX = /\<h\d.*?\>.*?<\/h\d\>/g //VEU RX? find in vue the tag attribute
  // why not use query selector here? and then do rx only when we have the headings?
  // no reason to use rx for this. only when we want to get id. which we can also use
  // getAttribute for. there is a prop for id/tagname/textContent! its alot safer too.
  var headings = article.match(headingRX) // iteator, format? matchAll that is
  // replace wont wokr? since cant get next? like in an array. array helps us with order! dt transform is what helps us.
  // looping arr fast? str not so. so many more chars/names/idx - so sometimes faster to make arr?!
  // we only use createELement if we have ast? nesting

  var list = ""
  var prevNum = null // null or false = first time. 0. or closuyre doing diff first call. once fn vs once attri
  var level = 0

  // loop and index of first id=?
  // title has to be first in md, so can just trim and read first? shebang
  // instead of using match to get title, then use match on it again - or custom match with capt group for
  // id - or repalce hack - we reuse headings
  // if headings[0].match(/\>(.*?)\</)[1] !== null or .?
  document.querySelector(".menu h4").textContent = headings[0].match(/\>(.*?)\</)[1] //
  document.querySelector(".sidemenu h4").textContent = headings[0].match(/\>(.*?)\</)[1] //
  // does the frbase app use textContent to create element? wont be added as htl thouhg? aslong as hardcoded, not user
  // created? or scrpt varible thats accessible in global scope?

  headings.shift() // remove title

  // slower to pass? faster to access? passing fast? slice str?
  headings.forEach((h, i, arr) => { // prev here? h[i-1], or pluss, so we can check next too! swtich for loop. so better than replace? cant get next other than do next iteration and save prev
    // dont add for first heading, its assumed title, not subsection
    // if (i === 0) return // ignore first, assumed title not subsection - not ignoring title makes first heading a sebsection of it (unless we make title h2, which then messes up articel)
    // return continue, but..

    var hn = h.match(/\<h(\d)/) // if no num, in that exact space, wont be found in prev rx   // get num - tirpple excape for \?
    // match and replace like this seem about the same? more eff to do repalce loop thouhg? or do match have fn, dont seem so, so wy repalce is used, speed?
    // since match can use capt groups too, so cant be it?
    // if same, we skip, no exe
    // console.log(hn[1]);
    var num = Number(hn[1]) // parseInt? dont techincally need to. since < expr convered "" > "" both to num. with Number or parseFloat/int.
    // < would have converted anyway? not =.

    // only quert allows selecotr path?
    // parent diff, evnt click diff

    // is i tbeacue h1?

    // the md to html converter i can make. just get content of headings and set id of said heading iwth it after camelCase name.

    // if first skip
    // if second i === 1, then do below?
    // decide whether to append or prepend a ul. before we create a new li, or end it before we create a new higher li/h
    // prevNum !== null

    // it auto adds for me? innhertml - concat str and add at end?

    // dont need this first check, since we return on first.
    // adds ul for second becaue h1 is lower, so we think heading 2 is a subsection of heading. not bold
    // ignore heading, or set as bold? set it somewhere else? aov e overivew, just get first heading? match no g?
    // vue use match? with g, diff rsult, than mathcall, arvid use replace hack? replace just faster?
    if (i !== 0 && num > prevNum) { // wont go last if null - hn !== null redundant?
      list += "<ul>"; // do once, and we know we need to do once?
      level++
    }
    if (num < prevNum) { // always get next? if this is smaller than prev! we create ul first?!
      // console.log(num, prevNum, "/UL")
      list += "</ul>"; // if get higher by two. then close. but if did two woudl be wrong anwyay. text wrong.
      // console.log(  list)
      // desired bechavior for me if i add incosntant level, is current behaviour. i am incosnstent with heaidngs. and should be not punished for it.
      level--
    }

    // if headings are the same we get conflict? tool ads bot+
    // tool asds identical
    // i will also add two list items, give them same id
    // but if i click on href, it will only go to first?

    // Headings name must be unique. If two headins have the same name (regardless of sub level)
    // it will go to the first id/section for both clicks.
    // tool i used adds for both - same as me - sees them as separate

    // can i automate md to html too. instead of having a folder with htl fles (which i can fix)
    // i have a folder with md text that gets read? server and loaded into . json then? fetch?
    // i can insert etc if i use fetch. then i dont need to read with read fns!
    // then file is recived as text. if i use a, i cant insert since its not json/txt? then it needs ot be
    // idenepadnat page. meaning nav and other html elements i need to add to that tutorial.html file too. save a template for that? and isnert
    // the html into that when i add to folder? copy file first. then add to article section.
    // iframe?
    // do a fetch to my server, my db, or firebase, when the site loads. or the component/"page" loads.


    // test ending 1/2 and nested 2 - when i insert, since ul exists, browser fixes? innerhtml insert fixes again. but why i need it then?
    // since usually next tags are massed up?
    // decide title - just delete after convert? then we dont accidentally ignore first.
    // decide conslusiona dn header id. add self?

    // why perma link dont work?
    // alos, id required for links. another reason to use them!

    // webtool or cli or withing pallete aotm

    // font blinks in. bigger problem than algo list being slow?
    // [v-cloak?]

    // he properites and behaviour if the innerHMLT (getter??) was the problem? it calcualtes stuff.

    // it does add end tag. just cant add both... cant only choose one of them. so the last always wins.
    // even if befor ein file, the last always runs first becaue of heading order

    // both <ul> works, diff spot, non of the /ul works.
    // so: it auto correct <ul>, but removes </ul>.
    // it was that the last was /ul and it could never add if i dint add <ul> also.
    // but <ul> it culd fix. and it force fixed it for me. essentially createElement behavour?
    // would ref fix?

    // concat another way to optimize
    // keep ref - only once
    // we get it again, this time, the prop added for us, but why not add again? removed since wrong? /ul removed, ul, added?

    prevNum = num

    // iuts this adding, fixing, not ignore, that makes html work?
    // its browser that fixes and not innerhtml getter?

    // it fixes mistakes? and if didnt add? thats how html is messed up, but works? createlement not init does this..
    // create element has el ref, which we use to append to in dom/ast

    // save the heading we level on?

      // also filter first heading here? dont assume h1
    // if h[i+1] === undefined, aka end. do arr.length-1 > i

      // insert at right time but in wrong. place. no. conact.
      // not inserted, browser does

      // formattign create illusion of nesting - lexer fixes this first problem

      // it is me? need to add to new ul?

    // tip: use log to get path

    // if not include, or remove before heading foreach, we dont get the problem. if we remove at end of process stil have ul there.
    // check last in several nested
    // check several nested

      // can have the need to add many ul?

      // if last and prev is same, then it wont end ul

      // if last, and sub = true, nestedLevel
      // if last and we didnt end, end
      // loop strct, record level, and check if we read end of mneu before ul, then we add it? dont know where?


    // try with 2 levels  - unit test?



    // transform error vs fix and tell.



    // repeat(num, fn|expr)

    // loop is sequnce, so order. so works out.

    // parse, ast
    // from beind
    // recalc each time - recalc - update obj prop
    // run find mustach fn evrytime agian
    //
    // ask about metrics, goals, before i choose algo

    // engine, visualization tool

    // if number we end on isnt same. but e.g. lower by two, we need to add two uls?
    // if missmatched we should only add one </ul>, since if we add two ends, but not two openings, its wrong.
    // bottom line: adding 1 is correct. using jump is incorrect? not jump, but mismatched is mistake?
    // hn === prevNum
    // reverse? higher is less?  higer is lower

      // we have prev element, but not its num. so save in prev the num? not el? with [i] we need to do arr[i].match
      // more eff to save num

      // what i can do with ip address? ddos?

      // service can stop working, if then? we add defualt present/new Date()? fallback

    // console.log(h);
    // dont need it. can just transform content using the same rules as the online tool, into ids. opti. dont need to read id.
    // space to - and lowercase all
    // problem: if i change the content/title later in this document, and dont update id too, using the rules will create diff id in meny than document
    var hs = h.match(/\sid\s*=\s*["'](.*?)["']/)   // no g - only get first - allows "' combo
    var hc = h.match(/\>(.*?)\</)

    if (hs !== null) { // all should have id, else we cant put in list. which is soemtimes desired i guess
      var id = hs[1] // push or do somethign with it? sub while loop
    }

    if (hc !== null) {
      var content = hc[1].trim()
    }
    // can use href if i use getAttribute instead of prop
    // prevent the behaviour that causes blur - href#id will close meny anyway?
    // blur prevents href from working consistently. @mousedown.prevent="" is a hack to prevent this.
    list += `<li><a @mousedown.prevent="" data-attri="${id}" href="#${id}">${content}</a></li>`

    // // dont need \n etc. sicn we can only see in log. not on disk. we are not using node to gen files. its only in browser.
    //
    //   // need to add to correct? will auto be? since innerhtel concat will nest?
    //
    // if prev bigger - we end
    // if next = smaller - finish ul? - then we dont care for number being one higher or lower, which is a pain
    // if end, and last is smaller, we ul end. dont create ul for last. if create ul here, smaller, then we do need it
    // no nested at end?
    //
    // remove first li el, filter from array, change rx to not pick up. dependant on which num we use
    //
    // creates ul regardless of size difference of headings

    // what if end? check state var to know if need end? hasAddeSmalelr

    // how we add to? create <ul>, and when we get that higher again, not smaller - set state var than smaller,
    // instead of while loop (it will progress so safe?) and when get higher, anther if check here, we do </ul>?

    // dont need to loop, just create ul
    // and set sublsit = true

    // padding on text. or wrapper el.

    // just assing bold to h2? if h([n]) = "3"

    // tut on optimalization and metric and pros and cons?
    // tut on why its slower to ixd?
    // show how many bugs


    // no g. then it stops. other flag?
    // querysecltor all only once.
    // get classByname?
    // string, not createElement?

    // If has children - has following h2 with lower, if next is lower, create chidlren arr, or create new ul? peak ahead in my array?
    // so after get num and , process next? sub while/loop til same num? lexer way. alt to create new array (tokenstream)?

    // query selctor = easier, but slower? becaue less if checks, just assume id, and maybe correct format? dont convert?

    // i+1 === arr.length - 1 - arr.match(num) > num
    // need to add after? not before for once?
    // if (arr[i+1] === undefined && level > 0) // we reached end and still didnt close ul
    //   for (var i = 0; i < level; i++) {
    //     console.log("A");
    //     list += "</ul><ul></ul>" // if level more than 1?
    //     // get only one, and get in same space as not - if missing two. it auto adds two aswell? in right spot too?!
    //     // since it dont fix each time add ul, but at end when assing to innerhtml
    //   }
      // adds after added last li
      // it wont add </ul> more than it needs, so safe?

      // adds ul and fixes, but dont add /ul
      // add /ul one before? to test
  });



  // if we reach end before closing any amounts of uls (meaning have many nested uls), the browser will do so for us when we assign to innerHTML
  // can do loop, if we wnat to override?
  // = not +=
  document.querySelector(".menu ul").innerHTML = list
  document.querySelector(".sidemenu ul").innerHTML = list

    // start tags will be closed by js. innerhtml or browser. end tags will not be added/removed?
