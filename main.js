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

// hide all content except projects
about_me.style.display 			  = 'none';
contact.style.display 			  = 'none';
clients.style.display 			  = 'none';

// set initial state of navigation menu
projects_btn.style.borderBottom   = '2px solid #97A89C';


// add listeners for navigation menu
projects_btn.addEventListener('pointerdown', function() {
    projects_container.style.display 	= 'flex';
    about_me.style.display 	= 'none';
    contact.style.display 	= 'none';
    clients.style.display 	= 'none'; // not flex?
    filter.style.display 	= 'flex';

    client_btn.style.borderBottom  = '0px solid #ddd';
    projects_btn.style.borderBottom 	= '2px solid #97A89C';
    about_me_btn.style.borderBottom 	= '0px solid #ddd';
    contact_btn.style.borderBottom 	  = '0px solid #ddd';
});

about_me_btn.addEventListener('pointerdown', function() {
    about_me.style.display 	= 'block';
    projects_container.style.display 	= 'none';
    contact.style.display 	= 'none';
    clients.style.display 	= 'none'; // not flex?
    filter.style.display 	= 'none';

    client_btn.style.borderBottom  = '0px solid #ddd';
    projects_btn.style.borderBottom 	= '0px solid #ddd';
    about_me_btn.style.borderBottom 	= '2px solid #97A89C';
    contact_btn.style.borderBottom 	  = '0px solid #ddd';
});

contact_btn.addEventListener('pointerdown', function() {
    contact.style.display 	= 'block';
    about_me.style.display 	= 'none';
    clients.style.display 	= 'none'; // not flex?
    projects_container.style.display 	= 'none';
    filter.style.display 	= 'none';

    projects_btn.style.borderBottom  = '0px solid #ddd';
    client_btn.style.borderBottom  = '0px solid #ddd';
    about_me_btn.style.borderBottom  = '0px solid #ddd';
    contact_btn.style.borderBottom   = '2px solid #97A89C';
});

client_btn.addEventListener('pointerdown', function() {
    clients.style.display 	= 'flex'; // not flex?
    about_me.style.display 	= 'none';
    contact.style.display 	= 'none';
    projects_container.style.display 	= 'none';
    filter.style.display 	= 'none';

    projects_btn.style.borderBottom  = '0px solid #ddd';
    about_me_btn.style.borderBottom  = '0px solid #ddd';
    contact_btn.style.borderBottom   = '0px solid #ddd';
    client_btn.style.borderBottom    = '2px solid #97A89C';
});

// show
//   hide all other - so array?
//
//   push all to array
//   hide all
//   show the one matches
//
//   if hide all then dont need array
//
//   use vue anyway?

// is this waht vue acutally helps with? makes it easier to add new?

// so dont need to nest for hiding all without specific targeting all, can also just apply the same class. and diff clases for style.
// use diff for event handler. and class for setting same border, then target specifc and add border? etc
// container for all. or section. btn for rest. query all. not thios? filter same class - projects
// good way witout wrapping

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

document.getElementById('reset_btn').addEventListener('pointerdown', function() {
  document.getElementById('contact_form').reset();
});

// insert copyright year in footer programmatically instead of statically having to update
// uses system clock, not server, so can show wrong year if users OS clock is wrong
document.getElementById("copyright").innerHTML = "&copy; Rikhart Bekkevold " + new Date().getFullYear();
