var project = document.getElementById('project');
var home 	= document.getElementById('home');
var contact = document.getElementById('contact');

home.style.display 				= 'none';
contact.style.display 			= 'none';
project_btn.style.borderBottom 	= '1px solid #56535D';

project_btn.addEventListener('pointerdown', function() {
    project.style.display 	= 'flex';
    home.style.display 		= 'none';
    contact.style.display 	= 'none';

    project_btn.style.borderBottom 	= '1px solid #56535D';
    home_btn.style.borderBottom 	= '1px solid #ddd';
    contact_btn.style.borderBottom 	= '1px solid #ddd';

});
home_btn.addEventListener('pointerdown', function() {
    home.style.display 		= 'block';
    project.style.display 	= 'none';
    contact.style.display 	= 'none';

    project_btn.style.borderBottom 	= '1px solid #ddd';
    home_btn.style.borderBottom 	= '1px solid #56535D';
    contact_btn.style.borderBottom 	= '1px solid #ddd';
});
contact_btn.addEventListener('pointerdown', function() {
    contact.style.display 	= 'block';
    home.style.display 		= 'none';
    project.style.display 	= 'none';

    project_btn.style.borderBottom  = '1px solid #ddd';
    home_btn.style.borderBottom     = '1px solid #ddd';
    contact_btn.style.borderBottom  = '1px solid #56535D';
});
