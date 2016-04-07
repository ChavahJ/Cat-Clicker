//this is the MODEL

var petList = [
    {
        name: "Woody",
        nicknameList: ['Dude Jr','The Little Dude','Woodster'],
        imgSrc: "img/woody-on-grass.jpg",
        noise: "Mrroow",
        clicks: 0
    },
    {
        name: "Moony",
        nicknameList: ['Little Ellie','Muñecha'],
        imgSrc: "img/moony-on-grass.jpg",
        noise: "Ruf ruf",
        clicks: 0
    },
    {
        name: "Princess",
        nicknameList: ['Foxy','Dad\'s Cat'],
        imgSrc: "img/princess-on-bed.jpg",
        noise: "Purrrrr",
        clicks: 0
    },
    {
        name: "Spanky",
        nicknameList: ['Big Lug','Blondie'],
        imgSrc: "img/spanky-on-trail.jpg",
        noise: "Woof woof",
        clicks: 0
    },
    {
        name: "Lola and Woody",
        nicknameList: ['Buddies','External Ones'],
        imgSrc: "img/cats-in-carrier.jpg",
        noise: "Lick lick",
        clicks: 0
    }
];

var Pet = function(data) {
    this.name = ko.observable(data.name);
    this.nicknameList = ko.observableArray(data.nicknameList);
    this.imgSrc = ko.observable(data.imgSrc);
    this.noise = ko.observable(data.noise);
    this.clicks = ko.observable(data.clicks);

    this.title = ko.computed(function() {
        if (this.clicks() < 10 ) {
            return 'you like me';
        } else if (this.clicks() < 20 ) {
            return 'you love me';
        } else if (this.clicks() < 30) {
            return 'you really love me';
        } else {
            return 'you absolutely adore me';
        }
    }, this);
}

// [!!] Make the cats show up in a list
//
// [!!] Make the currentPet change when you click on a cat in the list
// This will be a function for setting new currentPet
//
// [!!] Give yourself a high-five

//this is the OCTOPUS
var ViewModel = function() {
    var self = this;

    this.petList = ko.observableArray([]);

    petList.forEach(function(petItem){
        self.petList.push( new Pet(petItem) );
    });

    this.currentPet = ko.observable( this.petList()[0] );

    //I got really stuck because I wasn't passing the correct parameter to this function!!!
    this.setCurrentPet = function(data) {
        self.currentPet(data);
    };

    this.clickCounter = function () {
        self.currentPet().clicks(self.currentPet().clicks() + 1 );
    };
}

ko.applyBindings(new ViewModel());


/*
* Models: Observables, computed observables, observable arrays
* Observables are variables stored in the model,
* But rather than being simple variables, we are making them functions
* In order to keep track of when things are changed
* Computer Observables: computed when accessed based on value of other variables
* Arrays are similar: for repeating elements, like multiple cats
* ViewModel: Just our functions that we need to run sometimes
* View: Bindings: tie view together with model, via the ViewModel
*/
