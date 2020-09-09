//var img_src = "thumbnails/compressed/"; // not needed with find tool?=
// var globalstate
// var appstate = desc opem - filter

// if understand where err comes from, makes it so much easier..
var customer = [
    {
        title: "Rørlegger nettside",
        desc: "Challenges: no opinions, little info"
    }
]

// decuple metada - use json - decouple vue rela props?
var projects = [
    {
        title: "Conductor Hero",
        desc: "A virtual reality rythm game centered around being a musical conductor.",
        long_desc: "Conductor Hero is my group's idea and final product in the masters course, 'Experts in Team'. " +
              "The course's requirement was to make a product involving VR technology, utilizing inter-disciplinary " +
              "teams. The goal of the course was to <i>learn how to work together in a team</i> and "+
              "then <i>reflect on the process.</i> I served mostly as designer and did some additional programming of the HUD.",
               // find the reports - design documents left? one document atleast in discord
        thumb: "thumbnails/compressed/thumbconductorhero.png",
        tags: ["C#", "virtual reality", "interaction design"],
        minortags: ["game", "game design", "unity engine", "group project"],
        hidden: false,     /* {name: "virtual reality", color: "#000", bgColor: "#e91e63"} */
        public: true,
        client: false,
        group: true,   // add icon here might be less confusing
        view_state: {content_hidden: false},
        small: false,
        buttons: [
            {
                link: "https://github.com/Per-Morten/imt4310_conductor_hero",
                icon: "fab fa-github",
                text: "Code"
            },
            {   // generic pdf page, element, to pass the document path?
                link: "projects/VRgame/paper.html",
                icon: "fas fa-file-pdf",
                text: "Reports"
            },
            {
                link: "https://www.youtube.com/watch?v=YQQTDyfQb-Q&feature=youtu.be",
                icon: "fab fa-youtube",
                text: "Showcase"
            }
        ]
    },
    {
        title: "Amundsen and Skaug AS",
        desc: "A website for a local plumbers service.",
        long_desc: "A website made for a local plumbers service. "+
                   "The main challenge was designing a solution despite the clients lack of opinion and somewhat "+
                   "anonymous company profile.",
               // find the reports - design documents left? one document atleast in discord
        thumb: "thumbnails/thumbrorlegger.png", // PNG. png.
        tags: ["website", "frontend", "browser"],
        minortags: ["js", "html", "css"],
        hidden: false,
        public: true,
        client: true,   // if use "in" to check, instead of value, unless use undefine
        group: true,   // add icon here might be less confusing
        view_state: {content_hidden: false},
        small: false,
        buttons: [
            {
                link: "https://skaugogchristoffersen.no/index.html",
                icon: "fas fa-globe",
                text: "Website"
            }
        ]
    }, // launch in browser btn?
    //Json parse wrapper that removs comments? strip them.. also add for // \n
    // wrapper for print - feks obj
    // remove comments when calling JSON.parse
    // so can have comments in the file, but before its used its removes anyway
    // add to packages with json parse?
    // scss post parser
    // extend css parser to scss?
    // sunshadow
    // oda project
    // forum project
    // remape yes to true or false
    // export or static/instance?
    // what fns to make?
    // add electron apps
    {
        title: "Memoryflip",
        desc: "A card flipping browser memorization game. Made with the help of Pixi.js.",
        long_desc: "A browser game I made in order to play around with the <a style='color: #0000EE' href='https://www.pixijs.com/'>pixi.js</a> " +
                   "library, Javascript objects and prototypes. " +
                   "(Not well suited for smaller resolutions)",
                   // parse html..
        thumb: "thumbnails/compressed/thumbcardflip.png",
        tags: ["javascript", "browser"],
        minortags: ["pixi.js", "game"],
        hidden: false,
        public: true,
        client: false,
        view_state: {content_hidden: false},
        small: false,
        buttons: [
            {
                link: "https://github.com/RikhartBekkevold/Memoryflip",
                icon: "fab fa-github",
                text: "Code"
            },
            {
                link: "projects/cardflip-game/index.html",
                icon: "fas fa-gamepad",
                text: "Game"
            }
        ]
    },
    {// sunshadow, VuEditor.. backend how? firebase? just link. no website needed - finish thouhg. my own personal generator thouhg. pkg
        title: "CSS parser",
        desc: "Parses CSS into an abstract syntax tree.",
        long_desc: `A node program that can be run as a node module or as a cli.`, // insert html, not?
        // Throws
        // specify the error as detailed as possible
        //  Diff: throws.  A node package. add to node modules, or whatver. exe as node. either as cli or node package.
                   // parse html..

                   // module export.. the thing thats exported
                   // so when i am done, i wanna add only one thing to it to export from moduel
                   // but during i want to add several internally?

                   // can use witout ref exports
                   // overwrite i mean
                   // if dont have name, i have to use moduel as name. hence neame doent matter?

        thumb: "thumbnails/thumbcssparser.png",
        tags: ["javascript", "CSS", "parsing", "node.js"],
        minortags: [], // lucky that can use slice? dont need thouhg. but does for itration? try iterating?
        hidden: false,
        public: true,
        client: false,  // this doesnt cause error in the others? if i show then yes?
        view_state: {content_hidden: false},
        small: false,
        buttons: [
            {
              link: "https://github.com/RikhartBekkevold/css-parser",
              icon: "fab fa-github",
              text: "Code"
            }
        ]
    },
    // electron app, chat and
    {  //slect click doe snot check for hidden before draw
        title: "Electron chat app",
        desc: "A desktop chat app with <a href='https://www.electronjs.org/'>Electron</a> as frontend, and " +
                    "firebase as backend.",
        long_desc: "Keywords: <br><br>package electron app/exe<br>",
        thumb: "thumbnails/compressed/thumbelectronapp.png",
        tags: ["electron", "firebase"],
        minortags: ["node", "websocket"],   // what is returned by js engine in expression is null, and that is not an array
        hidden: false,                       // github, build system, cmd, npm
        public: false,
        client: false,
        view_state: {content_hidden: false},
        small: false,
        buttons: [
            {
                link: "https://github.com/RikhartBekkevold/Memoryflip",
                icon: "fab fa-github",
                text: "Code"
            },
            {
                link: "projects/cardflip-game/index.html",
                icon: "fas fa-globe",  // download or electron icon?
                text: "App"             // host src to to download - must package final product and then host.. website need to add download btn
            }
        ]
    },
    {  //slect click doe snot check for hidden before draw
        title: "JS document creator",
        desc: "A window cli tool to automatically create documents from javascript comments.",
        long_desc: "",
        thumb: "thumbnails/compressed/thumbelectronapp.png",
        tags: ["python", "cli"],
        minortags: ["automatization"],   // what is returned by js engine in expression is null, and that is not an array
        hidden: false,                       // github, build system, cmd, npm
        public: false,
        client: false,
        view_state: {content_hidden: false},
        small: false,
        buttons: [
            {
                link: "https://github.com/RikhartBekkevold/Memoryflip",
                icon: "fab fa-github",
                text: "Code"
            },
            {
                link: "projects/cardflip-game/index.html",
                icon: "fas fa-globe",  // download or electron icon?
                text: "App"             // host src to to download - must package final product and then host.. website need to add download btn
            }
        ]
    },
    {  //slect click doe snot check for hidden before draw
        title: "Android - sunshadow",
        desc: "",
        long_desc: "Keywords: <br><br>package electron app/exe<br>",
        thumb: "thumbnails/compressed/thumbelectronapp.png",
        tags: ["electron", "firebase"],
        minortags: ["node", "websocket"],   // what is returned by js engine in expression is null, and that is not an array
        hidden: false,                       // github, build system, cmd, npm
        public: false,
        client: false,
        view_state: {content_hidden: false},
        small: false,
        buttons: [
            {
                link: "https://github.com/RikhartBekkevold/Memoryflip",
                icon: "fab fa-github",
                text: "Code"
            },
            {
                link: "projects/cardflip-game/index.html",
                icon: "fas fa-globe",  // download or electron icon?
                text: "App"             // host src to to download - must package final product and then host.. website need to add download btn
            }
        ]
    },
    {
        title: "VuEditor",
        desc: "A form editor in vue and vuetify.",
        long_desc: "",
        thumb: "thumbnails/compressed/thumbelectronapp.png",
        tags: ["electron", "firebase"],
        minortags: ["node", "websocket"],   // what is returned by js engine in expression is null, and that is not an array
        hidden: false,                       // github, build system, cmd, npm
        public: false,
        client: false,
        view_state: {content_hidden: false},
        small: false,
        buttons: [
            {
                link: "https://github.com/RikhartBekkevold/Memoryflip",
                icon: "fab fa-github",
                text: "Code"
            },
            {
                link: "projects/cardflip-game/index.html",
                icon: "fas fa-globe",  // download or electron icon?
                text: "App"             // host src to to download - must package final product and then host.. website need to add download btn
            }
        ]
    },
    {
        title: "User-centered Design",
        desc: `The design of a service (website) and product (weight scale) utilizing user-centered design methods.`,
        long_desc: `The course required the design of a website for drone users (service), and the re-imagining the traditional weight scale (a product).
                    The goal was to design based on user needs by utilizing user-centered design methods like: interviews, focus groups, card sorting etc.`,
        thumb: "thumbnails/compressed/thumbcardflip.png",
        tags: ["service design", "IxD", "design methods"],
        minortags: ["prototyping", "interview", "focus group", "research"], //"affinity analysis", "hierustics analysis", "group project"],
        hidden: false,
        public: false,
        client: false,
        group: true,  // determines if icon is group icon or indivi.
        view_state: {content_hidden: false},
        small: false,
        buttons: [
            {
                link: "https://github.com/RikhartBekkevold/Memoryflip",
                icon: "fab fa-github",
                text: "Proto"
            },      // OFC there can be many instances.. fucntion object.. dooohh - components canbe used within a template though
            {
                link: "projects/cardflip-game/index.html",
                icon: "fas fa-globe",
                text: "Medium"
            }
        ]
    },
    {
        title: "Innovative Design",
        desc: "A creative design project with a working prototype to" +
              " promote health among the elderly. <br>",
        long_desc: `
                     <b>Project requirements</b>
                     <br>1. Observe the occupants of an elderly centre during their daily activity.
                     <br>2. Design a technical prototype with raspberry pi that promotes both physical
                     and mental health amongst the elderly.
                     <br>
                     <br>
                     <b>The groups solution</b>
                     <br>
                     A prototype of a card flipping game, where the cards are flipped by
                     stepping on ground tiles, requiring both mental and physical exercise
                     in a fun way.
                     <br>
                     <br>
                     Idea and design was done by all members. Creation of the technical prototype was done by me.`,
        thumb: "thumbnails/compressed/thumbelderlyhealth.png",
        tags: ["ideation", "innovation", "prototyping", "IxD"],
        minortags: ["gamestorming", "python", "raspberry pi", "group project"],
        hidden: false,  // one tag for discpline and then language.. icon that shows group project intead?
        public: true,
        client: false,
        // "learning outcomes" menu btn
        // (And giving them a chance to play witht he children that
        // sometimes visited.)
        group: true,
        view_state: {content_hidden: false},
        small: false,
        buttons: [
            {
                link: "projects/elderly_health/paper.html",
                icon: "fas fa-file-pdf",
                text: "Reports"
            },
            {
                link: "projects/elderly_health/video.html",
                icon: "fab fa-youtube",
                text: "Prototype"
            }
        ]
    },
    {
        title: "JS Object Converter",
        desc: "An atom text editor package that " +
              "converts between object literal notation and function (constructor) notation.",
        long_desc: "My first attempt at learning how to make an Atom package. " +
                   "With this project I wanted to achieve: "+
                   "<br><br><div>" +
                       "1. Get better at using Regex's" +
                       "<br>2. Try some basic transpiling" +
                       "<br>3. Deepen my understanding of the Atom environment" +
                   "<div>",
        thumb: "thumbnails/compressed/thumbatompackage.png",
        tags: ["javascript"],
        minortags: ["automatization tool", "atom texteditor package"],
        hidden: false,
        public: true,
        client: false,
        view_state: {content_hidden: false},
        small: false,
        buttons: [
            {
                link: "https://github.com/RikhartBekkevold/js-object-notation-converter",
                icon: "fab fa-github",
                text: "Code"
            },
            {
                link: "https://atom.io/packages/js-object-notation-converter",
                icon: "fas fa-cloud-download-alt",
                text: "Package"
            }
        ]
    },
    {
        title: "Colour Experiment",
        desc: "A syntax highlighter experiment for the 'Colour in Interface Design - IMT 4315' course.",
        long_desc: `Syntax highlighters are used by most programmers today. This research tries to
                    determine what benefit, in terms of time to read and understand code, such highlighters have,
                    as well as a much less explored type of highlighter, semantic highlighters.
                    `,
        thumb: "thumbnails/compressed/thumbexperiment.png",
        tags: ["research",  "javascript", "interaction design"],
        minortags: ["firebase", "colour theory"],
        hidden: false,
        public: true,
        client: false,
        view_state: {content_hidden: false},
        small: false,
        buttons: [
            {
                link: "https://github.com/RikhartBekkevold/syntax-highlighting-experiment",
                icon: "fab fa-github",
                text: "Code"
            },
            {
                link: "projects/colour/paper.html",
                icon: "fas fa-file-pdf",
                text: "Paper"
            },
            {
                link: "projects/colour/index.html",
                icon: "fas fa-globe",
                text: "Experiment"
            }
        ]
    },
    {
        title: "Player Frame Auras",
        desc: "A retail World of Warcraft addon.",
        long_desc: `My first WoW addon and use of Lua. Mimicks the Blizzard created default auras on the enemy frame by
                    doing the same for the player's frame.`,
        thumb: "thumbnails/compressed/thumbplayerframeauras.png",
        tags: ["lua"],
        minortags: ["addon", "game", "world of warcraft"],
        hidden: false,
        public: true,
        client: false,
        view_state: {content_hidden: false},
        small: false,
        buttons: [
            {
                link: "https://github.com/RikhartBekkevold/PlayerFrameAuras",
                icon: "fab fa-github",
                text: "Code"
            }
        ]
    },
    {
        title: "DB Tutorial",
        desc: "An article comparing the pros and cons of Graph databases to Relational databases. Made for the course 'Information Architecture'.",
        long_desc: `A medium post written as a tutorial for an 'Information Architecture' course. I used the assignment as an excuse to learn
                    about graph databases (already knew relational) and then tied it to IA, even though it is more related to other
                    fields.`,
        thumb: "thumbnails/compressed/thumbdatabases.png",
        tags: ["database"],
        minortags: ["tutorial", "graph db", "relational db"],
        hidden: false,
        public: true,
        client: false,
        view_state: {content_hidden: false},
        small: true,
        buttons: [
            {
                link: "https://medium.com/@ikhart.v.bekkevold/relational-or-graph-databases-which-one-to-choose-for-your-next-project-6fd31ae9cee",
                icon: "fab fa-medium",
                text: "Article"
            }  //language(s), disciplines, misc / other
        ]
    },
    {
        title: "Colour Theory",
        desc: `A document showing various concepts in colour theory (colour mixing, colour harmony etc),
               part of 'Colour in Interface Design - IMT 4315'.`,
        long_desc: `Done for the masters course 'Colour in Interface Design - IMT 4315', as a way to learn about and
                    showcase the understanding of the colour topics:<br><br>
                    1. Color vision<br>
                    2. Colour mixing<br>
                    3. Colour harmony<br>
                    4. Colour palette<br>
                    5. Semantic and affective use of colour<br>
                    6. Colour used in Interaction Design<br>`,
        thumb: "thumbnails/compressed/thumbcolourportfolio.png",
        tags: ["colour theory", "interaction design"],
        minortags: [],
        hidden: false,
        public: true,
        client: false,
        view_state: {content_hidden: false},
        small: true,
        buttons: [
            {
                link: "projects/misc/portfolio.html",
                icon: "fas fa-file-pdf",
                text: "PDF"
            }
        ]
    },
    {
        title: "Better Weakened Soul",
        desc: "A tiny classic World of Warcraft addon.",
        long_desc: "An addon for the game 'World Of Warcraft Classic' that solves a common problem. When priests shield themselves a debuff is applied, this debuff is " +
                   "quite hard to see in the heat of the action because of its location. The addon tries to solve the problem by giving the user the ability to choose the position " +
                   "of the debuff to somewhere that makes it easier for them to see. It also enables other possible user preferences.",
        thumb: "thumbnails/compressed/thumbbiggerweakenedsoul.png",
        tags: ["lua"],
        minortags: ["addon", "game", "world of warcraft"],
        hidden: false,
        public: true,
        client: false,
        view_state: {content_hidden: false},
        small: false,
        buttons: [
            {
                link: "https://github.com/RikhartBekkevold/BetterWeakenedSoul",
                icon: "fab fa-github",
                text: "Code"
            }
        ]
    }
]
