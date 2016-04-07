var ViewModel = function() {
    this.clicks = ko.observable(0);
    this.name = ko.observable('Woody');
    this.imgSrc = ko.observable('img/woody-on-grass.jpg');
    this.noise = ko.observable('Mrroow');

    this.clickCounter = function () {
        this.clicks(this.clicks() + 1 );
    };

    this.title = ko.computed(function() {
        if (this.clicks() < 10 ) {
            return 'Baby';
        } else if (this.clicks() < 30 ) {
            return 'Child';
        } else if (this.clicks() < 50) {
            return 'Teen';
        } else {
            return 'Adult';
        }
    }, this);
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
