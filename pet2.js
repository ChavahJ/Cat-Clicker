// Class to represent each pet
var Pet = function(name, imgURL, noise, clicks) {
    var self = this;

    self.name = ko.observable(petList.name);
    self.imgURL = ko.observable(petList.imgURL);
    self.noise = ko.observable(petList.noise);
    self.clicks = ko.observable(petList.clicks);
}

var petList = [];
// Overall viewmodel for this screen, along with initial state
function PetClickerViewModel() {
    var self = this;

    // Non-editable catalog data - would come from the server
    self.petList = [
        {
            name: "Woody",
            imgURL: "img/woody-on-grass.jpg",
            noise: "Mrroow",
            clicks: 0
        },
        {
            name: "Moony",
            imgURL: "img/moony-on-grass.jpg",
            noise: "Ruf ruf",
            clicks: 0
        }
    ];

    //Operations
    self.currentPet = ko.observable( self.petList[0]);

    self.addClicks = function () {
        self.currentPet().clicks(self.currentPet().clicks() + 1);
    }
}

ko.applyBindings(new PetClickerViewModel());
