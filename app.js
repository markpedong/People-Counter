// Increment Function and Save Function
const saveEntry = document.getElementById("saveEntry")
const countpeeps = document.getElementById("countpeeps")
let count = 0;

function increment(){
    count += 1
    countpeeps.innerText = count
}   

function saveButton (){
    let countStr = count + " - "
    saveEntry.innerText += countStr;
    countpeeps.textContent = 0;
    count = 0;
}

function decrement() {
  count -= 1
  countpeeps.innerText = count
}

function resetButton() {
  count = 0;
  countpeeps.innerText = 0

  saveEntry.innerText = ""
}

// Dark Theme
var icon = document.getElementById("icon");

icon.onclick = () => {
  document.body.classList.toggle("dark-theme")
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "./lightmode.svg" 
  } else {
    icon.src = "./darkmode.svg"
  }
}
