const fill= document.querySelector(".fill")
const empties= document.querySelectorAll(".empty")

fill.addEventListener("dragstart", dragStart)
fill.addEventListener("dragend", dragEnd)

for(const empty of empties){
    empty.addEventListener("dragover", dragOver)
    empty.addEventListener("dragenter", dragEnter)
    empty.addEventListener("dragleave", dragLeave)
    empty.addEventListener("drop", dragDrop)
}


function dragStart(){
    console.log("dragstart")
}
function dragEnd(){
    console.log("dragEnd")
}
function dragOver(){
    console.log("dragOver")
}
function dragEnter(){
    console.log("dragenter")
}
function dragLeave(){
    console.log("dragLeave")
}
function dragDrop(){
    console.log("..")
}

