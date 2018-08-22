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
    btn.addEventListener('pointerdown', function() {
        btn.innerHTML = '<i style="margin-right: 5px;" class="fa fa-spinner fa-spin"></i>Wait..';
        // setTimeout(function() {
        //     btn.innerHTML = '<i class=""></i>Try again';
        //     setTimeout(function() {
        //         btn.innerHTML = '<i style="margin-right: 5px;" class="fab fa-github"></i>GITHUB</div></a>';
        //     }, 1200);
        // }, 2600);
    });
});
