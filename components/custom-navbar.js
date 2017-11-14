
Vue.component('custom-navbar', {
    props: {
        hide:     { required: false },
        pagemode: { required: false },
        feedback: { required: false },
        showbackbtn: { required: false }
    },
    template: `
    <div id="nav-row" class="row">
        <nav class="navbar navbar-fixed-top app-color">
            <div class="container-fluid">
            <div class="row-fluid">
                <div class="navbar-header col-lg-2">
                    <a v-if="showbackbtn == false" class="navbar-brand" href="index.html">Vue Form Editor</a>
                </div>
                <ul class="nav navbar-nav col-lg-7" style="padding-left: 50px;" >
                    <li @click="$emit('undo')" v-if="hide == false && pagemode == false"><a href="#"><i style="color: white; font-size: 1.5em; " class="fa fa-undo" aria-hidden="true"></i></a></li>
                    <li @click="$emit('redo')" v-if="hide == false && pagemode == false"><a href="#"><i style="color: white; font-size: 1.5em" class="fa fa-repeat" aria-hidden="true"></i></a></li>
                    <li v-if="(hide == true && showbackbtn == false) || pagemode == true" @click="$emit('back')"><a href="#"><i style="color: white; font-size: 1.5em" class="glyphicon glyphicon-arrow-left" aria-hidden="true"></i></a></li>
                    <li v-if="hide == false && pagemode == false" style="font-family: 'Libre Baskerville', serif; font-size: 0.95em;  color: white; padding: 17px 0 0px 20px">{{feedback}}</li>
                </ul>
                <ul class="nav navbar-nav col-lg-1" style="padding-top: 10px;" >
                    <li v-if="hide == false" @click="$emit('delete')" class="btn btn-default default-btn list-group-item" style="background: #2EB276; border: none">
                        <i style="color: #fff; font-size: 1.5em;" class="glyphicon glyphicon-trash"></i>
                    </li>
                    <li v-if="hide == false" @click="$emit('show')"  class=" list-group-item btn btn-default default-btn" style="color: #fff; background: #2EB276; border: none">
                        <i style="color: #fff; font-size: 1.5em;" class="glyphicon glyphicon-share"></i>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    </div>
    `,
})
