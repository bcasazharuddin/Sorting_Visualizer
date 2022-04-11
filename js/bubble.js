const barLabel = document.createElement("label");
async function bubble() {

    const ele = document.querySelectorAll(".bar");
    for (let i = 0; i < ele.length - 1; i++) {
        for (let j = 0; j < ele.length - i - 1; j++) {
            ele[j].style.background = `${comparsion_color.value}`;
            ele[j + 1].style.background = `${comparsion_color.value}`;
            if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
                await waitforme(delay);
                swap(ele[j], ele[j + 1]);
            }
            ele[j].style.background = 'blue';
            ele[j + 1].style.background = 'blue';
        }
        ele[ele.length - 1 - i].style.background = `${sort_color.value}`;
    }
    ele[0].style.background = `${sort_color.value}`;
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

let comparsion_color = document.querySelector("#comparsioncolor");
let sort_color = document.querySelector("#sortcolor");
const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function () {
    disableSortingBtn();
    disableSizeSlider();
    disableComarsion();
    disableSort();
    disableNewArrayBtn();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableComarsion();
    enableSort();
    enableNewArrayBtn();
});