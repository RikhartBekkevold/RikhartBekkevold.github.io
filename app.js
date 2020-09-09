var app = new Vue({
  el: '#app',
  data: {
    client_projects: projects.filter(project => project.public !== false && project.client === true),
    projects: projects.filter(project => project.public !== false && project.client === false),  // if dont have prop .. will also be false? // only reference the this.projects - add only the ones not public.. so must loop and not add.. use filter then can ?
    filterSelect: [],
    minorTagsSelect: []
  },
  mounted() {
    this.projects.forEach(project => {
      project.tags.forEach(tag => {
        if(this.filterSelect.indexOf(tag) == -1) {  // if not found
        this.filterSelect.push(tag)
        }
      })
      // pushes only for those that is still in projects. so automatically removes the client one!
      project.minortags.forEach(tag => {
        if(this.minorTagsSelect.indexOf(tag) == -1) { // if not found
        this.minorTagsSelect.push(tag)
        }
      })
    })
  },
  methods: {
    reset() {
      this.showAllProjects()
      // manually set the select value since you are clicking a btn not the select
      document.getElementById("select").value = "All" // save select in data?
    },

    hideAllProjects() {
      this.projects.forEach(function(project) {
        project.hidden = true
      })
    },

    showAllProjects() {
      this.projects.forEach(function(project) {
        project.hidden = false
      })
    },

    showProjectsWithTag(tag) {
      this.projects.forEach(function(project) {
      project.tags.forEach(function(project_tag) {
        if (project_tag == tag) project.hidden = false
      })
      project.minortags.forEach(function(project_tag) {
        if (project_tag == tag) project.hidden = false
        })
      })
    },

    filterProjects(evt, el) {
      var tag = evt.target.value
      // if "All" was clicked, show all projects
      // this why we cant use the same hidden prop for drawing to view
      if(tag == "All") {
        this.showAllProjects()
        return
      }
      this.hideAllProjects()
      this.showProjectsWithTag(tag)
    }
  }
})
// dividing this would be easy? 

// console.log(app)
// hideProject({ prop })
// hideProject( el, obj, this ?)
// filter will remove props? only for array?
// how does index of in vue actually work?
