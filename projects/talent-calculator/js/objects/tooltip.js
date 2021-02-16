var tt = document.getElementById("tooltip")

function showTooltip(title, rank, desc, requirements, evt, branchname, view, talentReq, manacost, range, casttime, cooldown, max) {
  var titleView        = tt.firstElementChild.children[0]
  var rankView         = tt.firstElementChild.children[1]
  var manacostView     = tt.children[2].firstElementChild
  var rangeView        = tt.children[2].lastElementChild
  var casttimeView     = tt.children[3].firstElementChild
  var cooldownView     = tt.children[3].lastElementChild
  var nameView         = tt.children[4]
  var prevView         = tt.children[5]
  var nextView         = tt.children[6]
  var pointsReqView    = tt.children[7]
  var talentsReqView   = tt.lastElementChild

  titleView.innerHTML     = title
  rankView.innerHTML      = '<span style="">' + "Rank " + rank + "</span>"
  manacostView.innerHTML  = manacost
  rangeView.innerHTML     = range
  casttimeView.innerHTML  = casttime
  cooldownView.innerHTML  = cooldown
  nameView.innerHTML      = "Requires Priest (" + branchname + ")"

  prevView.innerHTML = "<span>" + (rank === max ? "" : desc.replace(/\{\{([\d+\.]+)\}\}/g, (full, num) => {
    return rank === 0 ? parseFloat(num) * (rank + 1) : parseFloat(num) * (rank)
  }))
  + "</span>"

  if (rank === max)
    prevView.style.display = "none"
  else
    prevView.style.display = "block"

  nextView.innerHTML = "<span>" + (rank === 0 ? "" : (rank === max ? "" : "<span style='color: #ddd'>Next rank:</span><br>")  + "<span>" +
    desc.replace(/\{\{([\d+\.]+)\}\}/g, (full, num) => {
      return rank === max ? parseFloat(num) * (rank) : parseFloat(num) * (rank + 1)
    })) + "</span>"

  pointsReqView.innerHTML = requirements
  if (talentReq !== undefined) talentsReqView.innerHTML = talentReq
  else talentsReqView.innerHTML =  ""

  position(view)
}


function position(view) {
  var MARGIN = 10
  var rect = view.getBoundingClientRect()

  tt.style.display = "block"
  // must be after block, but before top/left
  var saved =  tt.getBoundingClientRect().width

  tt.style.top = rect.bottom - (58 + tt.getBoundingClientRect().height + MARGIN) + "px"
  tt.style.left = rect.right + MARGIN + "px"

  var pastTop = tt.getBoundingClientRect().top < 0
  var pastLeft = tt.getBoundingClientRect().left < 0
  var pastRight = tt.getBoundingClientRect().right > innerWidth
  var pastBottom = tt.getBoundingClientRect().bottom > innerHeight

  if (pastTop) tt.style.top = rect.bottom + MARGIN + "px"
  if (pastRight) tt.style.left = rect.right - (58 + saved + MARGIN) + "px"
}


function hideTooltip() {
  tt.style.display = "none"
}
