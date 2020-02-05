const default_msg   = '<i style="margin-right: 5px;" class="fab fa-github"></i>Code</div></a>';
// const default_db_msg   = '<i style="margin-right: 5px;" class="fab fa-github"></i>Graph DB</div></a>';
// const default_closure_msg   = '<i style="margin-right: 5px;" class="fab fa-github"></i>Closure</div></a>';
const wait_msg      = '<i style="margin-right: 5px;" class="fa fa-spinner fa-spin"></i>Wait..';
const try_again_msg = '<i class=""></i>Try again';

const projects_container  =   document.getElementById('projects');
const about_me 	          =   document.getElementById('about_me');
const contact             =   document.getElementById('contact');
const github_buttons      =   document.querySelectorAll('.github_btn');
const filter              =   document.getElementById('filter');


// set initial state of navigation menu
about_me.style.display 			  = 'none';
contact.style.display 			  = 'none';
projects_btn.style.borderBottom   = '2px solid #97A89C';

// add listeners for navigation menu
projects_btn.addEventListener('pointerdown', function() {
    projects_container.style.display 	= 'flex';
    about_me.style.display 	= 'none';
    contact.style.display 	= 'none';
    filter.style.display 	= 'flex';

    projects_btn.style.borderBottom 	= '2px solid #97A89C';
    about_me_btn.style.borderBottom 	= '0px solid #ddd';
    contact_btn.style.borderBottom 	    = '0px solid #ddd';
});

about_me_btn.addEventListener('pointerdown', function() {
    about_me.style.display 	= 'block';
    projects_container.style.display 	= 'none';
    contact.style.display 	= 'none';
    filter.style.display 	= 'none';

    projects_btn.style.borderBottom 	= '0px solid #ddd';
    about_me_btn.style.borderBottom 	= '2px solid #97A89C';
    contact_btn.style.borderBottom 	    = '0px solid #ddd';
});

contact_btn.addEventListener('pointerdown', function() {
    contact.style.display 	= 'block';
    about_me.style.display 	= 'none';
    projects_container.style.display 	= 'none';
    filter.style.display 	= 'none';

    projects_btn.style.borderBottom  = '0px solid #ddd';
    about_me_btn.style.borderBottom  = '0px solid #ddd';
    contact_btn.style.borderBottom   = '2px solid #97A89C';
});

// add "loading" feedback for when user clicks github links - imp: not based on server respons, can be confusing
github_buttons.forEach(function(btn) {
    // for every github button,..
    btn.addEventListener('pointerdown', function() {
        // when clicking button; set msg to "wait"
        btn.innerHTML = wait_msg;
        // if respons from github is to slow...
        setTimeout(function() {
            // ...tell user so and then...
            btn.innerHTML = try_again_msg;
            setTimeout(function() {
                // reset button msg back to default msg
                btn.innerHTML = default_msg;
            }, 1200);
        }, 2600);
    });
});


// increase the size of the line in either direction and decrease in opposite.
// some slowdown and acceleration, with some smoothing/tween?

// var sel = document.createElement("select")
// // document.getElementById("app").insertBefore(sel, document.getElementById("about_me"))
// document.getElementById("filter").appendChild(sel)
// // get all tags
// sel.style.height = 25 + "px";
// //
// // var tags = ["All", "Game", "Interaction Design"]
// //
// // for (var i = 0; i < tags.length; i++) {
// //     var option = document.createElement("option");
// //     option.value = tags[i];
// //     option.text = tags[i];
// //     sel.appendChild(option);
// // }
// var inserted = [];
// projects.forEach(function(projects_container) {
//     projects_container.tags.forEach(function(tag) {
//         if(inserted.indexOf(tag) == -1) {
//             var option = document.createElement("option");
//             option.value = tag;
//             option.text = tag;
//             sel.appendChild(option);
//             inserted.push(tag)
//         }
//     })
// })

// onclick select get value and .. need to setup link with vue instead, filter hich means style.hidden for specific elements.. add it to data
//
// clikc handler
//     get value
//     loop all projects_container boxes .class
//     if value == any of the tags whihc i find how?


// vue events and vue...

// make select
// when the page loads/globally
// get the cards and tags when the el have loaded
// populate the select with the non duplicated values

// on click/change handler for select
// inside get the value at change
// get the cards and tags
// check if the tags match for each card with the value (with projects_container.childre.foreach)
// if the card does then set the style = none

// for(i = 0; ) {
//
// }

// for (var i = 0; i < array.length; i++) {
//     array[i]
// }

// marks and sets caret two places, and then 3 places, see how they did it in package




// fetch(function(response){console.log()})
//
// function fetch(callback) {
//     //do things, get value from db
//
//     callback(db_value)
// }

// vue components like drop down menu
// or bootstrap - dont need functionality, just looks

document.getElementById('reset_btn').addEventListener('pointerdown', function() {
    document.getElementById('contact_form').reset();
});


// insert copyright year in footer programmatically instead of statically having to update
// uses system clock, not server, so can show wrong year if users OS clock is wrong
document.getElementById("copyright").innerHTML = "&copy; Rikhart Bekkevold " + new Date().getFullYear();
