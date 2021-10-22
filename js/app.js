console.log("Welcome to Magic Notes");
ShowNotes();

let butt = document.getElementById("btnTxt");
butt.addEventListener("click", function (e) {
    let addtxt = document.getElementById("addTxt");
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
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${index+1}</h5>
                <p class="card-text">${element}</p>
                <button class="btn btn-primary">Delete Note</button>
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