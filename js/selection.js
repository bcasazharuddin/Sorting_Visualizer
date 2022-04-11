async function selection() {
    const ele = document.querySelectorAll(".bar");
    for (let i = 0; i < ele.length; i++) {
        let min_index = i;
        ele[i].style.background = 'rgb(218, 26, 170)';
        for (let j = i + 1; j < ele.length; j++) {
            ele[j].style.background = `${comparsion_color.value}`;
            await waitforme(delay);
            var val1 = parseInt(ele[j].childNodes[0].innerHTML);
            var val2 = parseInt(ele[min_index].childNodes[0].innerHTML);
            if (parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height) && val1 < val2) {
                if (min_index !== i) {
                    ele[min_index].style.background = 'blue';
                }
                min_index = j;
            }
            else {
                ele[j].style.background = 'blue';
            }
        }
        await waitforme(delay);
        swap(ele[min_index], ele[i]);
        ele[min_index].style.background = 'blue';
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
const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function () {
    disableSortingBtn();
    disableSizeSlider();
    disableComarsion();
    disableSort();
    disableNewArrayBtn();
    await selection();
    enableSortingBtn();
    enableSizeSlider();
    enableComarsion();
    enableSort();
    enableNewArrayBtn();
});