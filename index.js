// console.log("Project are Start")
showNotes();
// if user add a notes,add it in a localstorage

let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function(e) {
    let addtxt = document.getElementById('addtxt');
    let addtitle = document.getElementById('addtitle')
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes);
    }
    let myobj = {
            title: addtitle.value,
            text: addtxt.value
        }
        // console.log(typeof(addtitle.value))
    if (addtitle.value.length > 3 && addtxt.value.length > 5) {
        notesobj.push(myobj);
        localStorage.setItem('notes', JSON.stringify(notesobj))
        addtxt.value = "";
        addtitle.value = "";
        // console.log(notesobj);
        showNotes();
    }
})

function showNotes() {
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function(element, index) {
        html += ` <div class=" noteCard my-2 mx-2 card" style="width: 18rem;">
                     <div class="card-body">
                         <h5 class="card-title">${element.title}</h5>
                         <p class="card-text">${element.text}</p>
                         <button id="${index}" class="btn btn-primary" onclick="deleteNote(this.id)">Delete</button>
                     </div>
                </div>`;
    });
    let notesElm = document.getElementById("notes")
    if (notesobj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show! use "Add a Note" section above to add notes`
    }


}
//function to delete a notes
function deleteNote(index) {
    // console.log("deleted...", index)
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesobj))
    showNotes();

}

// search function of notes

let search = document.getElementById("searchtxt");
search.addEventListener("input", function() {

    // console.log("search is ...")
    let inputval = search.value.toLowerCase();
    // console.log(inputval)
    let noteCards = document.getElementsByClassName("noteCard")

    Array.from(noteCards).forEach(function(element) {
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if (cardtxt.includes(inputval)) {
            element.style.display = "block"
        } else {
            element.style.display = "none";
        }
    })
})