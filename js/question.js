function Question(type, icon) {
    this.opacity            =   1;
    this.height             =   100;
    this.type               =   type;
    this.focused            =   false;
    this.bColorHex          =   '';
    this.fColorHex          =   '';
    this.label              =   '';
    this.outline            =   'black';
    this.icon               =   icon;
    this.alternatives       =   [{type: type, label: ''}];
    this.textOrientation    =   'center';
    this.isObligatory       =   false;
    this.font               =   '';
    this.fontSize           =   14;

    switch (type.toLowerCase()) {
        case "tittel":
            this.desclabel = '';
            break;
        case "radiobutton":
            this.selectedValue = '';
            break;
        case "checkbox":
            this.selectedValues = [];
            break;
        case "textarea":
            this.alternatives[0].height = 8;
            this.alternatives[0].width  = 55;
            break;
        case "list":
            this.alternatives[0].select = [{option: ''}];
            break;
        case "table":
            this.alternatives[0].rows = ['row', 'row'];
            this.alternatives[0].columns = [{name: 'cell', name312: 'cell' }, {name: 'cell', name312: 'cell' }, {name: 'cell', name312: 'cell' }, {name: 'cell', name312: 'cell'}];
            break;
        case "video":
            this.alternatives[0].url = '';
            this.alternatives[0].visible = false;
            break;
    }
}
