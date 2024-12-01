// GET

// all names

// get element from the local storage
const names = JSON.parse(localStorage.getItem("savedNames"));   
// divs
const container = document.querySelector(".container");
// how much places
const nPlaces = names.length - 1;


// event

// functions

// randomize array name
for(let i = nPlaces; i >= 0; i -= 1){
    // randomizer of x
    let x = (Math.floor(Math.random() * nPlaces));
    // create temp var to containe actual index
    let temp = names[i];
    // switch the actual index(i) and randomze index(x)
    names[i] = names[x];
    names[x] = temp;
};


// named place 
names.forEach((name) => {
        // create p foreach name
        const newP = document.createElement("p");
        // ADD class ".name" at the new P
        newP.classList.add("name");
        // ADD name inside newP
        newP.appendChild(document.createTextNode(`${name}`));

        // create div foreach name
        const newDiv = document.createElement("div");
        // ADD class ".seat" at the new div
        newDiv.classList.add("seat")
        // ADD newP inside newDiv
        newDiv.appendChild(newP);    
        // ADD newdiv at the end of the container div
        container.appendChild(newDiv);
});


