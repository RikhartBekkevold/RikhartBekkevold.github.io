const default_msg   = '<i style="margin-right: 5px;" class="fab fa-github"></i>GITHUB</div></a>';
// const default_db_msg   = '<i style="margin-right: 5px;" class="fab fa-github"></i>Graph DB</div></a>';
// const default_closure_msg   = '<i style="margin-right: 5px;" class="fab fa-github"></i>Closure</div></a>';
const wait_msg      = '<i style="margin-right: 5px;" class="fa fa-spinner fa-spin"></i>Wait..';
const try_again_msg = '<i class=""></i>Try again';

const project           =   document.getElementById('project');
const home 	            =   document.getElementById('home');
const contact           =   document.getElementById('contact');
const github_buttons    =   document.querySelectorAll('.github_btn');

// set initial state of navigation menu
home.style.display 				= 'none';
contact.style.display 			= 'none';
project_btn.style.borderBottom 	= '1px solid #56535D';

// add listeners for navigation menu
project_btn.addEventListener('pointerdown', function() {
    project.style.display 	= 'flex';
    home.style.display 		= 'none';
    contact.style.display 	= 'none';

    project_btn.style.borderBottom 	= '1px solid #56535D';
    home_btn.style.borderBottom 	= '0px solid #ddd';
    contact_btn.style.borderBottom 	= '0px solid #ddd';
});

home_btn.addEventListener('pointerdown', function() {
    home.style.display 		= 'block';
    project.style.display 	= 'none';
    contact.style.display 	= 'none';

    project_btn.style.borderBottom 	= '0px solid #ddd';
    home_btn.style.borderBottom 	= '1px solid #56535D';
    contact_btn.style.borderBottom 	= '0px solid #ddd';
});

contact_btn.addEventListener('pointerdown', function() {
    contact.style.display 	= 'block';
    home.style.display 		= 'none';
    project.style.display 	= 'none';

    project_btn.style.borderBottom  = '0px solid #ddd';
    home_btn.style.borderBottom     = '0px solid #ddd';
    contact_btn.style.borderBottom  = '1px solid #56535D';
});

// add "loading" feedback for when user clicks github links
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


// function add() {
//
// }
// setTimeout(window.add)

// inside the scope of the function it is that name it uses even if both variable names exists?
