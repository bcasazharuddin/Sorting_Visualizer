
function swap(el1, el2) {
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    let temp2 = el1.childNodes[0].innerText;
    el1.childNodes[0].innerText = el2.childNodes[0].innerText;
    el2.childNodes[0].innerText = temp2;   

 
}


function disableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
}


function enableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
}


function disableSizeSlider(){
    document.querySelector("#arr_sz").disabled = true;
}


function enableSizeSlider(){
    document.querySelector("#arr_sz").disabled = false;
}


function disableNewArrayBtn(){
    document.querySelector(".newArray").disabled = true;
}


function enableNewArrayBtn(){
    document.querySelector(".newArray").disabled = false;
}


function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}


let arraySize = document.querySelector('#arr_sz');

// Event listener to update the bars on the UI
arraySize.addEventListener('input', function(){
     createNewArray(parseInt(arraySize.value));
});

let delay = 260;


let delayElement = document.querySelector('#speed_input');

 
delayElement.addEventListener('input', function(){
    delay = 320 - parseInt(delayElement.value);
});


let array = [];


createNewArray();


function createNewArray(noOfBars=25) {
   
    deleteChild();

 
    array = [];
    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * (300 -10)) + 10);
    }
  

    // select the div #bars element
    const bars = document.querySelector("#bars");

    // create multiple element div using loop and adding class 'bar col'
    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        const barLabel = document.createElement("label");
        barLabel.classList.add("bar_id");
        barLabel.innerHTML = array[i];
        bar.appendChild(barLabel);
        bars.appendChild(bar);

    }
}


function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}


const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function(){
    
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
});