window.addEventListener("DOMContentLoaded", (evt) => {
  var arr = document.querySelector("#menu_btns").children
  var menu_buttons = []
  for (var i = 0; i < arr.length; i++) {
    menu_buttons.push(i === 1 ? arr[1].children[0] : arr[i])
  }

  // remove nav, ? if we move it outside? its already outside, not app no. remove sidemnu??
  var pageEls = document.querySelector(".main_content").children
  var pages = []
  for (var i = 1; i < pageEls.length; i++) {
    pages.push(pageEls[i])
  }

  var clickableBtns = [
    arr[0],
    arr[1].children[1].children[0],
    arr[1].children[1].children[1],
    arr[2],
    arr[3]
  ]

  function unselectAll() {
    menu_buttons.forEach(function(btn) {
      btn.style.borderBottom = '0px solid #ddd'
    })
  }

  function hideAllPages() {
    pages.forEach(function(page) {
      page.style.display = 'none'
    })
  }

  var projects    =   document.getElementById('projects');
  var about_me 	  =   document.getElementById('about_me');
  var contact     =   document.getElementById('contact');
  //
  // var blog_btn    =   document.getElementById('blog_btn');
  // var blogs       =   document.getElementById('blogs');

  var logo              =   document.getElementById('logo');
  var nav_owner_name    =   document.getElementById('nav_owner_name');
  var cta_btn           =   document.getElementById("call_to_action_projects");

  logo.addEventListener('pointerdown', function() {
    window.location = "#home";
    hideAllPages()
    about_me.style.display 	= 'flex';
    unselectAll()
    about_me_btn.style.borderBottom 	= '1px solid #FF8C40';
  });

  nav_owner_name.addEventListener('pointerdown', function() {
    window.location = "#home";
    hideAllPages()
    about_me.style.display 	= 'flex';
    unselectAll()
    about_me_btn.style.borderBottom 	= '1px solid #FF8C40';
  });

  cta_btn.addEventListener('pointerdown', function() {
    window.location = "#personal_projects";
    hideAllPages()
    projects.style.display 	= 'flex';
    unselectAll()
    projects_btn.style.borderBottom = '1px solid #FF8C40';
  });

  clickableBtns.forEach(function (btn, i) {
    btn.addEventListener("mousedown", function(evt) {
      var hashmap = ["home", "personal_projects", "client_projects", "blogs", "contact"]
      window.location.hash = hashmap[i]
      unselectAll();
      (i === 1 || i === 2)
        ? menu_buttons[1].style.borderBottom = '1px solid #FF8C40'
        : this.style.borderBottom = '1px solid #FF8C40'
      hideAllPages()
      pages[i].style.display = "flex"
    })
  });

  // other external links:
  // var default_db_msg   = '<i style="margin-right: 5px;" class="fab fa-github"></i>Graph DB</div></a>';
  // var default_closure_msg   = '<i style="margin-right: 5px;" class="fab fa-github"></i>Closure</div></a>';
  var default_msg   = '<i style="margin-right: 5px;" class="fab fa-github"></i>Code</div></a>';
  var wait_msg      = '<i style="margin-right: 5px;" class="fa fa-spinner fa-spin"></i>Wait..';
  var try_again_msg = '<i class=""></i>Try again';
  var github_buttons      =   document.querySelectorAll('.github_btn');

  // add "loading" feedback for when user clicks github links - imp: not based on server respons, can be confusing
  github_buttons.forEach(function(btn) {
      btn.addEventListener('pointerdown', function() {
          btn.innerHTML = wait_msg;
          setTimeout(function() {
              btn.innerHTML = try_again_msg;
              setTimeout(function() {
                  btn.innerHTML = default_msg;
              }, 1200);
          }, 2600);
      });
  });
})
