// Increment Function and Save Function
let saveEntry = document.getElementById("saveEntry")
let countpeeps = document.getElementById("countpeeps")
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
