Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})

new Vue({
  el: '#app',
  data: {
    showNavTT: false,
    showSideNav: false, // reverse? true at defualt? then set false when? emdia..
    removedByBlur: false,
    removedByHam: false,
    mousedown: false,
    isDark: localStorage.getItem('isDark') === null
              ? window.matchMedia('(prefers-color-scheme: dark)').matches
              : JSON.parse(localStorage.getItem('isDark'))
  },
  methods: {
    blurNav(evt) {
      if (!this.mousedown)
        this.showSideNav = false
      else {
        // what is this focusing??! focusing is what is bluring? no.. if i have focus.
        // refocus hack
        event.target.focus() // use ref? or this?
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
    }
  }
})
