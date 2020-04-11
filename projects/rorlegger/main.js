(function() {
    // all children divs for selector all
    var om_oss_side     = document.querySelector("#om_oss_side")
    var kontakt_side    = document.querySelector("#kontakt_side")
    var tjenester_side  = document.querySelector("#tjenester_side")
    var hjem_side       = document.querySelector("#hjem_side")

    var kontakt_btn     = document.querySelector("#kontakt_btn")
    var om_oss_btn      = document.querySelector("#om_oss_btn")
    var tjenester_btn   = document.querySelector("#tjenester_btn")
    var hjem_btn        = document.querySelector("#hjem_btn")

    var nav_buttons     = document.querySelectorAll('nav li')

    hjem_btn.addEventListener("click", function() {
        event.preventDefault()
        show(hjem_side)
        setActive(this.parentNode)
        hide(om_oss_side)
        hide(tjenester_side)
        hide(kontakt_side)
    })

    kontakt_btn.addEventListener("click", function() {
        event.preventDefault()
        show(kontakt_side)
        setActive(this.parentNode)
        hide(om_oss_side)
        hide(tjenester_side)
        hide(hjem_side)
    })

    om_oss_btn.addEventListener("click", function() {
        event.preventDefault()
        show(om_oss_side)
        setActive(this.parentNode)
        hide(kontakt_side)
        hide(tjenester_side)
        hide(hjem_side)
    })

    // replace click with pointer down?
    tjenester_btn.addEventListener("click", function() {
        event.preventDefault()
        show(tjenester_side)
        setActive(this.parentNode)
        hide(om_oss_side)
        hide(kontakt_side)
        hide(hjem_side)
    })


    // HELPERS
    function hide(el) {
        el.classList.remove("visible")
        el.classList.add("hidden")
    }

    function show(el) {
        el.classList.remove("hidden")
        el.classList.add("visible")
    }

    function setActive(el) {
        // foreach support?
        nav_buttons.forEach((item) => {
            item.classList.remove("active")
        });
        el.classList.add("active")
    }


    function hideAll() {
        // display flex eller col.. .hide
        // loop - hides the one you want to show also
        // this way i can actually add event handlers in loop, beause passing the element to the function
        // put in on load? doc ready?
        // display flex not block.. style works with one because it override the value of prop, dont add classes
        // this why doenst work as expected?
        // if get all btns .. all of class, or children, can loop and add the same.. wouldnt work
    }

}());
