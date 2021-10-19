// Increment Function and Save Function
let saveEntry = document.getElementById("saveEntry")
let countpeeps = document.getElementById("countpeeps")
let count = 0;
let orderedLists = document.getElementById("orderedLists").innerHTML = generate

function increment() {
    count += 1;
    countpeeps.textContent = count;
    
}

function saveButton (){
    let countStr = count + " - "
    saveEntry.innerText += countStr;
    countpeeps.textContent = 0;
    count = 0;
}
