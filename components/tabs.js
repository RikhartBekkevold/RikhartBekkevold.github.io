Vue.component('tabs', {
    template:
    `<div id="formtabs">
        <ul class="nav nav-tabs" style="background: #2EB276">
          <li style="background: #2EB276" v-for="tab in tabs" @click="selectTab(tab)" :class="{'active': tab.isActive}"><a style="background: #2EB276;" href="#">
          <i class="fa fa-pencil" aria-hidden="true" style="color: #fff; padding-right: 5px"></i>{{tab.name}}</a></li>
        </ul>
        <div class="tabs-content">
            <slot></slot>
        </div>
    </div>`,
    data() {
        return {
            tabs: []
        }
    },
    created() {
        this.tabs = this.$children;
    },
    methods: {
        selectTab: function(selectedTab){
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name)
            })
        }
    }
})
