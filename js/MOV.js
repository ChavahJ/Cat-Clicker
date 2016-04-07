
//MODEL with the array of information

var petModel = {
    currentPet: null,
    pets: [
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
]};

//OCTOPUS: Directing the show

var octopus = {

    init: function() {
        //set currentPet to first pet in array
        petModel.currentPet = petModel.pets[0];

        //initialize the two views
        listView.init();
        petViewer.init();
    },

    getCurrentPet: function() {
        return petModel.currentPet;
    },

    getPets: function() {
            return petModel.pets;
    },

    //determines which pet is currently displayed
    setCurrentPet: function(pet){
        petModel.currentPet = pet;
    },

    clickCounter: function(){
        petModel.currentPet.clicks++;
        console.log("you've clicked on me!");
        petViewer.render();
    },
};

    //VIEW
    //petViewer: Rendering one pet within the viewer

    var petViewer = {
        init: function() {
            // store pointers to our DOM elements for easy access later
            this.petElem = document.getElementById('pet');
            this.petNameElem = document.getElementById('pet-name');
            this.petImgElem = document.getElementById('pet-img');
            this.petNoiseElem = document.getElementById('pet-noise');
            this.countElem = document.getElementById('pet-count');

            //on click, inrement the current pet's clickCounter
            this.petImgElem.addEventListener('click', function() {
                octopus.clickCounter();
            });

            //render the view by updating the DOM elements with correct values
            this.render();
        },

        render: function() {
            //update DOM elements with the values from the currentPet
            var currentPet = octopus.getCurrentPet();
            this.countElem.textContent = currentPet.clicks;
            this.petNameElem.textContent = currentPet.name;
            this.petImgElem.src = currentPet.imgURL;
            this.petNoiseElem.textContent = currentPet.noise;
        }
    };

    //listView: Rendering a list of all petList
    var listView = {
        init: function() {
            //store the DOM element for easy access at any time
            this.petListElem = document.getElementById("pet-list");

            //render the view by updating the DOM elements with correct values
            this.render();
        },

        render: function() {
            var cat, elem, i;
            //get the pets we want to render from the octopus
            var pets = octopus.getPets();

            //empty the pet list
            this.petListElem.innerHTML = "";

            //loop through the cat array
            for (var i = 0; i < pets.length; i++) {
                pet = pets[i];

                //make a new pet list item and set its parameters
                elem = document.createElement("button");
                elem.classList.add("btn", "btn-primary","btn-block");
                elem.textContent = pet.name;

                //on click, setCurrentPet and render the catView
                elem.addEventListener('click', (function(pet){
                    return function() {
                        octopus.setCurrentPet(pet);
                        petViewer.render();
                    };
                })(pet));

                //add elem to list
                this.petListElem.appendChild(elem);

            }
        }
    };

//make it go
octopus.init();
