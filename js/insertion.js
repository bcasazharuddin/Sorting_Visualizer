async function insertion(){
    const ele = document.querySelectorAll(".bar");
    ele[0].style.background =`${sort_color.value}`;
    for(let i = 1; i < ele.length; i++){
        let j = i - 1;
        let key = ele[i].style.height;
        ele[i].style.background = `${comparsion_color.value}`;
        await waitforme(delay);
        var val1 = parseInt(ele[i].childNodes[0].innerHTML);
            var val2 = parseInt(ele[j].childNodes[0].innerHTML);

        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
            ele[j].style.background = `${comparsion_color.value}`;
            ele[j + 1].style.height = ele[j].style.height;
            ele[j+1].childNodes[0].innerHTML = ele[j].childNodes[0].innerHTML;
            j--;
            await waitforme(delay);
            for(let k = i; k >= 0; k--){
                ele[k].style.background = `${sort_color.value}`;
            }
        }
        ele[j + 1].style.height = key;
        ele[j+1].childNodes[0].innerHTML = val1;
        ele[i].style.background = `${sort_color.value}`;
    }
}

function disableComarsion() {
    document.querySelector("#comparsioncolor").disabled = true;
}
function enableComarsion() {
    document.querySelector("#comparsioncolor").disabled = false;
}

function disableSort() {
    document.querySelector("#sortcolor").disabled = true;
}
function enableSort() {
    document.querySelector("#sortcolor").disabled = false;
}

comparsion_color = document.querySelector("#comparsioncolor");
sort_color = document.querySelector("#sortcolor");
const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableComarsion();
    disableSort();
    disableNewArrayBtn();
    await insertion();
    enableSortingBtn();
    enableSizeSlider();
    enableComarsion();
    enableSort();
    enableNewArrayBtn();
});