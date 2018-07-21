var project = document.getElementById('project');
var home 	= document.getElementById('home');
var contact = document.getElementById('contact');

home.style.display 				= 'none';
contact.style.display 			= 'none';
projectbtn.style.borderBottom 	= '1px solid #56535D';

projectbtn.addEventListener('pointerdown', function(event) {
    // console.table(event);
    project.style.display 	= 'flex';
    home.style.display 		= 'none';
    contact.style.display 	= 'none';

    projectbtn.style.borderBottom 	= '1px solid #56535D';
    homebtn.style.borderBottom 		= '1px solid #ddd';
    contactbtn.style.borderBottom 	= '1px solid #ddd';
});

homebtn.addEventListener('pointerdown', function() {
    home.style.display 		= 'block';
    project.style.display 	= 'none';
    contact.style.display 	= 'none';

    projectbtn.style.borderBottom 	= '1px solid #ddd';
    homebtn.style.borderBottom 		= '1px solid #56535D';
    contactbtn.style.borderBottom 	= '1px solid #ddd';
});

contactbtn.addEventListener('pointerdown', function() {
    contact.style.display 	= 'block';
    home.style.display 		= 'none';
    project.style.display 	= 'none';

    projectbtn.style.borderBottom 	= '1px solid #ddd';
    homebtn.style.borderBottom 		= '1px solid #ddd';
    contactbtn.style.borderBottom 	= '1px solid #56535D';
});
