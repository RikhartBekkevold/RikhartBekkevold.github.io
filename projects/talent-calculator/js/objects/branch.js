function Branch(data, branchElement) {
  this.pointsSpentInBranch = 0
  this.nodes = []
  this.name = data.branch
  this.view = branchElement
  this.view.style.backgroundImage =  'url(' + data.bgImg +')'

  var freezed = false
  var self = this

  var footer = this.view.parentElement.lastElementChild
  var resetButton = footer.lastElementChild.firstElementChild
  updateInfoFooter()

  data.talents.forEach((node, i) => {
    node.name !== "hidden"
      ? this.nodes.push(new TalentNode(
          node.name, node.desc,
          (node.row-1) * 5,
          node.max, data.branch,
          node.icon, self.view, node.row,
          node.arrow, self.nodes[node.reqNode-1],
          node.manacost, node.casttime, node.range, node.cooldown))
      : createHiddenNode(self.view.children[node.row-1])
  })


  this.nodes.forEach((node) => {
    if (node.canBeUnlocked(this.pointsSpentInBranch))
      node.activate()
  })


  this.view.addEventListener("mousedown", (evt) => {
    if (evt.target.parentElement.parentElement === this.view) {
      var nodeview = evt.target
      var node = evt.node

      if (evt.button === 0 && node.isActive() && (!node.maxedOut()) && (pointsSpentTotal < pointsAvailableToSpend)) {
        this.pointsSpentInBranch++
        pointsSpentTotal++
        node.label.firstElementChild.innerHTML = ++node.currentRank
        if (node.maxedOut()) node.maximize()
      }

      if (evt.button === 2 ) {
        if (this.rowHasPoints(node.row+1) && this.equalsNextRowRequirement(node.row)) return
        if (node.currentRank > 0) {
          if (node.maxedOut()) node.activate()
          this.pointsSpentInBranch--
          pointsSpentTotal--
          node.label.firstElementChild.innerHTML = --node.currentRank
        }
        else if (node.currentRank === 0) {
          if (!node.isActive()) { // change to maxed, this seems like hack
            node.view.classList.add("default")
            node.view.classList.remove("maxed")
            node.view.classList.remove("active")
          }
        }
      }

      updateTreeInfo()
      updateInfoFooter()
      showTooltip(
        node.name, node.currentRank, node.desc, node.requirement,
        evt, node.branch, node.view,
        node.talentRequirement, node.manacost, node.range,
        node.casttime, node.cooldown, node.maxRank
      )
    }

    self.nodes.forEach((node) => {
      if (evt.button === 0 && node.canBeUnlocked(self.pointsSpentInBranch))
        node.activate()
      if (evt.button === 2 && node.shouldBeLocked(self.pointsSpentInBranch))
        node.deActivate()
    })

    branches.forEach((branch) => {
      branch.maybeFreeze(evt.button)
    })
  })


  this.maybeFreeze = function(button) {
    this.nodes.forEach((node) => {
      if (button === 2 && freezed)
        if (this.pointsSpentInBranch >= node.pointsToUnlock)
          node.maxedOut() ? node.maximize() : node.activate()

      if (pointsSpentTotal >= pointsAvailableToSpend)
        if (node.currentRank === 0)
          node.deActivate()
    })

    if (button === 2 && freezed)
      freezed = false
    else if (pointsSpentTotal >= pointsAvailableToSpend)
      freezed = true
  }


  this.rowHasPoints = function(row) {
    var sum = 0
    for (node of this.nodes) {
      if ((node.row === row) && (node.currentRank > 0))
        return true
    }
    return false
  }


  this.equalsNextRowRequirement = function(row) {
    var sum = 0
    this.nodes.forEach((node) => {
      if (node.row <= row)
        sum += node.currentRank
    });
    return sum <= (row * 5)
  }


  resetButton.addEventListener("mouseup", (evt) => {
    this.resetBranch()
  })


  function updateInfoFooter() {
    console.log(footer.children);
    footer.children[0].lastElementChild.innerHTML = self.name
    footer.children[1].innerHTML = self.pointsSpentInBranch + " points spent"
  }


  this.resetBranch = function() {
    pointsSpentTotal -= this.pointsSpentInBranch
    this.pointsSpentInBranch = 0
    updateInfoFooter()
    updateTreeInfo()

    this.nodes.forEach((node, i) => {
      this.nodes[i].label.firstElementChild.innerHTML = this.nodes[i].currentRank = 0
      node.activate()
      if (node.shouldBeLocked(this.pointsSpentInBranch ))
        node.deActivate()
    })
  }
}
