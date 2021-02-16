const pointsAvailableToSpend = 51
var pointsSpentTotal = 0
var levelRequired = 9

var playerClass = "Priest"
var branches = []

var obj = data
obj[playerClass].tree.forEach((branchdata, i) => {
  branches.push(new Branch(branchdata, document.querySelector("#branch"+(i+1))))
});

var treeinfo = document.querySelector("#treeinfo")
updateTreeInfo()


function updateTreeInfo() {
  var pointsLeft = pointsAvailableToSpend - pointsSpentTotal
  levelRequired = 60 - pointsLeft

  var classColors = new Map(Object.entries({
    Druid: "orange",
    Hunter: "green",
    Priest: "white",
    Warrior: "brown",
    Mage: "blue",
    Warlock: "purple",
    Shaman: "darkblue",
    Rogue: "yellow",
    Paladin: "pink"
  }));

  treeinfo.children[0].innerHTML = '<span style="color:'+ classColors.get(playerClass) + ';">' + playerClass + '</span>'
  treeinfo.children[1].innerHTML = "( " + branches[0].pointsSpentInBranch + " / " + branches[1].pointsSpentInBranch + " / " + branches[2].pointsSpentInBranch + " )"
  treeinfo.children[2].innerHTML = "Required level: " + levelRequired
  treeinfo.children[3].innerHTML = "Points left: " + pointsLeft
}


function resetAll() {
  branches.forEach((branch, i) => {
    branch.resetBranch()
  });
  updateTreeInfo()
}
