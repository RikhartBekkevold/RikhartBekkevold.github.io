var alt;

function deleteForm(event) {
    if(event.keyCode == 18) {
        alt = true;
    }

    if (event.keyCode == 65 && alt == true) {
        app.showModal = 'delete'
    }
    else if(event.keyCode == 83 && alt == true) {
        app.deleteForm()
    }
}

function toggleAlt(e) {
    if(event.keyCode == 18) {
        alt = false;
    }
}
