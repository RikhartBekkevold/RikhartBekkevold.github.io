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
  },
  mounted() {
    // add a tag to select element only once
    this.projects.forEach(project => {
      project.tags.forEach(tag => {
        if (this.filterSelect.indexOf(tag) == -1) {
          this.filterSelect.push(tag)
        }
      })
      project.minortags.forEach(tag => {
        if (this.minorTagsSelect.indexOf(tag) == -1) {
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

    switchMode() {
      this.isDark = !this.isDark
      localStorage.setItem('isDark', this.isDark)
    },

    resetForm(evt) {
      this.mail = this.subject = this.msg = ""
    },

    reset() {
      this.showAllProjects()
      document.getElementById("select").value = "All"
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
      if (tag == "All")
        return this.showAllProjects()
      this.hideAllProjects()
      this.showProjectsWithTag(tag)
    },

    jumpToTop() {
      // safari
      document.body.scrollTop = 0
      // chrome, firefox, IE and opera
      document.documentElement.scrollTop = 0
    }
  }
})
