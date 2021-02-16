function TalentNode(name, desc, pointsToUnlock, maxRank, branchname, bgpath, parent, row, arrow, reqNode, manacost, casttime, range, cooldown) {
  var isActive = false

  this.row = row
  this.maxedOut = function() { return this.currentRank >= this.maxRank }
  this.name = name
  this.desc = desc
  this.branch = branchname
  this.currentRank = 0
  this.maxRank = maxRank
  this.pointsToUnlock = pointsToUnlock
  this.requirement = "Requires " + this.pointsToUnlock + " points in " + this.branch + " Talents"
  this.talentRequirement = reqNode !== undefined ? ("Requires " + reqNode.maxRank + " points in " + reqNode.name) : undefined
  this.manacost = manacost  || ""
  this.casttime = casttime  || ""
  this.range    = range     || ""
  this.cooldown = cooldown  || ""
  this.arrows = []

  this.shouldBeLocked = function(pointsSpentInBranch) {
    return (this.pointsToUnlock > pointsSpentInBranch) && isActive
  }
  this.canBeUnlocked = function(pointsSpentInBranch) {
    return (this.pointsToUnlock <= pointsSpentInBranch) && ((reqNode !== undefined ? reqNode.maxedOut() : true) && !isActive)
  }

  // Object.defineProperty(this, "isActive", {
  //   get: function() { return isActive }
  // })
  this.isActive = function() { return isActive }

  this.view = document.createElement("div")
  this.view.classList.add("node", "default")
  this.view.style.backgroundImage =  'url(' + bgpath +')'

  this.label = document.createElement("div")
  this.label.classList.add("label")
  this.label.innerHTML = "<span>" + this.currentRank + "</span>/<span>"+ this.maxRank +"</span>"
  this.view.appendChild(this.label)

  var view = this.view
  var arrows = this.arrows
  maybeAttachArrow(arrow)
  parent.children[row - 1].appendChild(this.view)


  this.view.addEventListener("mousedown", (evt) => {
    evt.node = this;
  })


  this.maximize = function() {
    this.talentRequirement = "<span class='green'>Right-click to unlearn</span>"
    this.requirement = ""
    this.view.classList.add("maxed")
    this.view.classList.remove("active")
    this.view.classList.remove("default")
  }


  this.activate = function() {
    if (reqNode) this.deActivateArrowIfHas()
    isActive = true
    this.view.classList.add("active")
    this.view.classList.remove("default")
    this.view.classList.remove("maxed")
    this.requirement = ""
    this.talentRequirement =  "<span class='green'>Click to learn</span>"
  }


  this.deActivate = function() {
    if (reqNode) this.activateArrowIfHas()
    isActive = false
    this.view.classList.add("default")
    this.view.classList.remove("active")
    this.view.classList.remove("maxed")
    this.requirement = "Requires " + this.pointsToUnlock + " points in " + this.branch + " Talents"
    this.talentRequirement = reqNode !== undefined ? ("Requires " + reqNode.maxRank + " points in " + reqNode.name) : undefined
  }


  this.updateRank = function(num) {
    this.label.firstElementChild.innerHTML = this.currentRank + num
  }


  this.increaseRank = function(num) {
    this.label.firstElementChild.innerHTML = ++this.currentRank
  }


  this.activateArrowIfHas = function() {
    reqNode.arrows.forEach((arrow, i) => {
      arrow.style.filter = "grayscale(100%)"
    })
  }


  this.deActivateArrowIfHas = function() {
    reqNode.arrows.forEach((arrow, i) => {
      arrow.style.filter = "none"
    })
  }


  this.view.addEventListener("mouseenter", (evt) => {
    showTooltip(
      this.name, this.currentRank, this.desc,
      this.requirement, evt, this.branch, this.view,
      this.talentRequirement, this.manacost, this.range, this.casttime, this.cooldown, this.maxRank
    )
  })


  this.view.addEventListener("mouseleave", (evt) => {
    hideTooltip()
  })


  this.increaseRank = function() {
    this.label.firstElementChild.innerHTML = ++this.currentRank
  }


  function maybeAttachArrow(type) {
    if (type === undefined) return
    var types = type.split(" ")
    var arrow;

    types.forEach((type, i) => {
      arrow = document.createElement("div")
      arrow.classList.add("arrow")
      arrow.style.backgroundImage = 'url("https://wow.zamimg.com/images/TalentCalc/arrows/' + (type === "down_short" ? "down" : type) + '2.png")'
      view.appendChild(arrow)

      if (type === "down") set("36px", "-22px", "58px", "146px", "20px", "bottom center")
      else if (type === "down_short") set("36px", "-22px", "58px", "48px", "20px", "bottom center")
      else if (type === "right") set("-20px", "35px", "45px", "58px", "240px", "right center")
      arrows.push(arrow)
    });

    function set(top, left, width, height, size, pos) {
      arrow.style.top = top
      arrow.style.left = left
      arrow.style.width = width
      arrow.style.height = height
      arrow.style.backgroundSize = size
      arrow.style.backgroundPosition = pos
      view.style.zIndex = "9"
    }
  }
}
