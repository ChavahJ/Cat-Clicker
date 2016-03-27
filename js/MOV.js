$(function(){

    //Model with the array of information

    var petModel = [
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
        },
        {
            name: "Princess",
            id: "prinny",
            imgURL: "img/princess-on-bed.jpg",
            noise: "Purrrrr",
            clicks: 0
        },
        {
            name: "Spanky",
            id: "spanky",
            imgURL: "img/spanky-on-trail.jpg",
            noise: "Woof woof",
            clicks: 0
        },
        {
            name: "Lola and Woody",
            id: "lola",
            imgURL: "img/cats-in-carrier.jpg",
            noise: "Lick lick",
            clicks: 0
        }
    ];

    //Octopus: Directing the show

    var octopus = {
        showPet: function(){

        },

        clickCounter: function(){

        },

        init: function(){
            listView.init();
            petViewer.init();
        }
    };

    //View #1: Rendering a list of all petList
    var listView = {
        init: function() {
            this.name
        },

        render: function() {

        }
    };

    //View #2: Rendering one pet within the viewer

    var petViewer = {
        init: function() {

        },

        render: function() {

        }
    }

    octopus.init();
}());
