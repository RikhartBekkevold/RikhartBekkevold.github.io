var app = new Vue({
    el: '#app',
    data: {
        // add only the projects that is considered public
        projects: projects.filter(project => project.public != false), // assign in mounted instead? // if dont have prop .. will also be false? // only reference the this.projects - add only the ones not public.. so must loop and not add.. use filter then can ?
        filterSelect: [],
        minorTagsSelect: []
    },
    mounted() {
        this.projects.forEach(project => {

            project.tags.forEach(tag => {
                if(this.filterSelect.indexOf(tag) == -1) {
                    this.filterSelect.push(tag)
                }
            })

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
                    if (project_tag == tag)
                        project.hidden = false
                })

                project.minortags.forEach(function(project_tag) {
                    if (project_tag == tag)
                        project.hidden = false
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
// console.log(app)
// hideProject({ prop })
// hideProject( el, obj, this ?)
