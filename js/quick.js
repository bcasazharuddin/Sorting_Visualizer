async function partitionLomuto(ele, l, r){
    let i = l - 1;
    ele[r].style.background = 'green';
    for(let j = l; j <= r - 1; j++){
        ele[j].style.background = 'orange';
        await waitforme(delay);

        if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){
            i++;
            swap(ele[i], ele[j]);
            ele[i].style.background =  `${comparsion_color.value}`;
            if(i != j) ele[j].style.background =  `${comparsion_color.value}`;
            await waitforme(delay);
        }
        else{
            ele[j].style.background =  `${comparsion_color.value}`;
        }
    }
    i++; 
    await waitforme(delay);
    swap(ele[i], ele[r]);
    ele[r].style.background =  `${comparsion_color.value}`;
    ele[i].style.background = `${sort_color.value}`;
    await waitforme(delay);
    for(let k = 0; k < ele.length; k++){
        if(ele[k].style.background != `${sort_color.value}`)
            ele[k].style.background = 'blue';
    }

    return i;
}

async function quickSort(ele, l, r){
    if(l < r){
        let pivot_index = await partitionLomuto(ele, l, r);
        await quickSort(ele, l, pivot_index - 1);
        await quickSort(ele, pivot_index + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l <ele.length && r <ele.length){
            ele[r].style.background = `${sort_color.value}`;
            ele[l].style.background =`${sort_color.value}`;
        }
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

const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableComarsion();
    disableSort();
    disableNewArrayBtn();
    await quickSort(ele, l, r);
    enableSortingBtn();
    enableSizeSlider();
    enableComarsion();
    enableSort();
    enableNewArrayBtn();
});