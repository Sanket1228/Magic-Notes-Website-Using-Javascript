console.log("Welcome to Magic Notes");
ShowNotes();     // To show all cards

// JS to add note
let butt = document.getElementById("btnTxt");
butt.addEventListener("click", function (e) {
    let addtxt = document.getElementById("addTxt");
    // let addTitle = document.getElementById("title");
    // console.log(addtxt.value);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addtxt.value);
    // console.log(notesObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtxt.value = " ";
    ShowNotes();
})


//JS function to show notes
function ShowNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";

    notesObj.forEach(function(element,index){
        html +=  ` 
        <div class="noteCard card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${index+1}</h5>
                <p class="card-text">${element}</p>
                <button id="${index}" onclick="deleteNotes(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
        </div>  
        `;
    });

    let notesEle = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesEle.innerHTML = html;
    }
    else{
        notesEle.innerHTML = `Nothing to show ! Please add some notes`;
    }
}


//JS function to delete Notes
function deleteNotes(index){
    let notes = localStorage.getItem('notes');
    if(notes==null){
        notes = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    ShowNotes();
}


// JS to search note 
let search = document.getElementById("searchTxt");
search.addEventListener("input",function(){

    let inputVal = search.value.toLowerCase();
    // console.log(inputVal);
    let notesCards = document.getElementsByClassName("noteCard");
    // console.log(notesCards);
    Array.from(notesCards).forEach(function(element){
        // console.log(element);
        let cardTxt = element.getElementsByTagName("p")[0].innerText.toLowerCase();
        // console.log(cardTxt);
        // console.log(cardTxt.includes(inputVal));
        if(cardTxt.includes(inputVal)){
            // console.log(cardTxt);
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})