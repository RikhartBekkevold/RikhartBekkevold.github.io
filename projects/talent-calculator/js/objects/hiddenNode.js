function createHiddenNode(parent) {
  var node = document.createElement('div')
  node.classList.add("node")
  node.style.visibility = 'hidden'
  node.innerHTML = '<div class="label"></div>'
  return parent.appendChild(node)
}
