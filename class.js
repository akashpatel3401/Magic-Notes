console.log("Hello Guys ...This Website are written in class")

class Notes {
    constructor(addtxt, addtitle) {
        this.title = addtitle;
        this.note = addtxt;
    }
}

class Display {
    addNotes(notes) {
        console.log(notes);
        let notess = document.getElementById('notes');
        let str = ` <div class=" noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${notes.title}</h5>
            <p class="card-text">${notes.note}</p>
            <button id="aa" class="btn btn-primary" onclick="deleteNote(this.id)">Delete</button>
        </div>
   </div>`;
        notess.innerHTML += str;
    }
    validate(notes) {
            if (notes.title.length < 2 || notes.note.length < 2) {
                return false;
            } else {
                return true;
            }
        }
        // clear() {
        //     let addtxt = document.getElementById('addtxt');
        //     let addtitle = document.getElementById('addtitle');
        //     addtxt.innerHTML = " ";
        //     addtitle.innerHTML = " ";
        // }

}
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', addNotes);

function addNotes(e) {
    let addtxt = document.getElementById('addtxt').value;
    let addtitle = document.getElementById('addtitle').value;

    console.log(addtxt, addtitle)
    let notes = new Notes(addtxt, addtitle)
    let display = new Display();

    if (display.validate(notes)) {
        display.addNotes(notes)
        display.clear()
    }

    e.preventDefault();

}