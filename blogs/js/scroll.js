var article_headings = document.querySelectorAll(".article h1, .article h2, .article h3, .article h4, .article h5, .article h6")
var overview_menu = document.querySelectorAll(".menu ul li a")     // run after menu created

document.addEventListener('scroll', function(evt) {
  var el = null
  for (var i = 0; i < article_headings.length; i++) {
    // just check if negative? and apply then? if top == negative. last is applied?
    if (article_headings[i].getBoundingClientRect().top > innerHeight / 10) break
    el = article_headings[i]
  }

  // animate the move? transion prop for color? apply and remove? create illusion of "moving down"
  overview_menu.forEach((list_link, i) => {
    if (el.id === list_link.getAttribute("data-attri"))
      list_link.classList.add("hl")
    else
      list_link.classList.remove("hl")
    // FIRST NOT BEEING COLORED: tried to set it to first heading, but didnt work, since dont exists. did remove though
    // no error becaue no if is true
  })
})
