Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})

var app = new Vue({
  el: '#app',
  data: {
    client_projects: projects.filter(project => project.public !== false && project.client === true),
    projects: projects.filter(project => project.public !== false && project.client === false),
    filterSelect: [],
    minorTagsSelect: [],
    mail: "",
    subject: "",
    msg: "",
    showNavTT: false,
    showSideNav: false,
    removedByBlur: false,
    removedByHam: false,
    mousedown: false,
    isDark: localStorage.getItem('isDark') === null
              ? window.matchMedia('(prefers-color-scheme: dark)').matches
              : JSON.parse(localStorage.getItem('isDark'))
    // use order? id str?
    // navButtons: [{dispMustach: "Projects", id: "projects"}, {"About_me"}],
    // pages: [{}, {}] // pages indicate router

    // btn and page linked by string
  },
  mounted() {
    this.projects.forEach(project => {
      project.tags.forEach(tag => {
        if (this.filterSelect.indexOf(tag) == -1) {  // if not found
          this.filterSelect.push(tag)
        }
      })
      // pushes only for those that is still in projects. so automatically removes the client one!
      project.minortags.forEach(tag => {
        if (this.minorTagsSelect.indexOf(tag) == -1) { // if not found - includes()
          this.minorTagsSelect.push(tag)
        }
      })
    })
  },
  methods: {
    showPage2() {},
    showPage(ref, evt, el) {
      this.showSideNav = false
      this.jumpToTop()
      window.location.hash = ref

      for (var key in this.$refs)
        this.$refs[key].style.display = 'none'
      this.$refs[ref].style.display = "flex"
    },

    blurNav(evt) {
      if (!this.mousedown)
        this.showSideNav = false
      else {
        event.target.focus()
        this.mousedown = false
      }
    },

    showNav() {
      this.mousedown = true
      this.showSideNav = !this.showSideNav
    },
    // can use dom to alter - but then its not applied again
    // querySelector("script").getAttribute("src") == "newpath-slice first-generlizable cmd to apply to many projects. atom cli/cli instead of npm?"
    // so need readFile?
    switchMode() {
      // either do ducment.apply classlist or remove/toogle
      // or change variable - revert
      this.isDark = !this.isDark // reactivity should handle it
      // we dont need to do vueitfy defualt. need to set our own
      // save new preference in LS
      localStorage.setItem('isDark', this.isDark) // implicit DOMString conversion, same way as String()
    },

    // add data to els with attri to find. faster?
    resetForm(evt) {
      // dont need ref, when we have event with fn call
      // contact should be one compo. then the props makes more sense
      this.mail = this.subject = this.msg = ""
    },

    reset() {
      this.showAllProjects()
      // manually set the select value since you are clicking a btn not the select
      // use v-model on select?
      document.getElementById("select").value = "All" // save select in data? set v-model prop instead?
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
    },

    jumpToTop() {
      document.body.scrollTop = 0;              // Safari
      document.documentElement.scrollTop = 0;   // Chrome, Firefox, IE and Opera
    }
  }
})
