var petInfo = [
    {
        name: "Woody",
        id: "woody",
        imgURL: "img/woody-on-grass.jpg",
        noise: "Mrroow",
        clicks: 0
    },
    {
        name: "Moony",
        id: "moony",
        imgURL: "img/moony-on-grass.jpg",
        noise: "Ruf ruf",
        clicks: 0
    }
];

var Pet = function () {
    var self = this;

    self.name = ko.observable(petInfo.name);
    self.id = ko.observable(petInfo.id);
    self.imgURL = ko.observable(petInfo.imgURL);
    self.noise = ko.observable(petInfo.noise);
    self.clicks = ko.observable(petInfo.clicks);
    };

var PetClickerViewModel = function () {
    var self = this;

    var petList = ko.observableArray([]);

    petInfo.forEach(function() {
        petList.push(new Pet());
    });

    self.currentPet = ko.observable( self.petList[0]);

    self.incrementCounter = function() {
        self.currentPet().click(self.currentPet().click() + 1);
    };

    self.setCurrentPet = function(name) {
            self.currentPet( name );
    };
};

ko.applyBindings(new PetClickerViewModel());
