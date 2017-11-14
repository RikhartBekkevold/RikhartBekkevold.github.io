function Page(nr, h) {
    this.height             = h;
    this.width              = 100;
    this.pageNumber         = nr;
    this.z                  = this.pageNumber - 1;
    this.posX               = 0;
    this.posY               = 0;

    this.questions          = [];
}


//id and pageNumber displayed?
// <!-- 	couldnt go downwards because of div
//         margin inbetween create ele to jump back down to roiginal position - padding problem with drag and drop, padding works. but then borders gets affected too
//         width dont get set because?
//         it ini other mode of page comp when hiding gui
//         padding not issue when can only rearrange upwards
//         solved flickering shadow, look at webkit-backface-visibility
//         panel had automatic padding/margin - learn from - changed one element inside page compo to have padding
//         the reason they could get ontop of eachother and udnerneath and inside was because of sharing form name? name: page/form
//         what did i learn?
//         routing?
//         question to ask yourseslf. your css? or bootstrap default
// -->
