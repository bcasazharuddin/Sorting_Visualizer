async function merge(ele, low, mid, high) {
    const n1 = mid - low + 1;
    const n2 = high - mid;
    let left = new Array(n1);
    let right = new Array(n2);
    let leftValue = new Array(n1);
    let rightValue = new Array(n2);

    for (let i = 0; i < n1; i++) {
        await waitforme(delay);
        ele[low + i].style.background = 'orange';
        left[i] = ele[low + i].style.height;
        leftValue[i] = ele[low + i].childNodes[0].innerHTML;
    }
    for (let i = 0; i < n2; i++) {
        await waitforme(delay);
        ele[mid + 1 + i].style.background = 'green';
        right[i] = ele[mid + 1 + i].style.height;
        rightValue[i] = ele[mid + 1 + i].childNodes[0].innerHTML;
    }
    await waitforme(delay);
    let i = 0, j = 0, k = low;
    while (i < n1 && j < n2) {
        await waitforme(delay);
        if (parseInt(left[i]) <= parseInt(right[j]) && parseInt(leftValue[i]) <= parseInt(rightValue[j])) {
            if ((n1 + n2) === ele.length) {
                ele[k].style.background = `${sort_color.value}`;
            }
            else {
                ele[k].style.background = `${comparsion_color.value}`;
            }

            ele[k].style.height = left[i];
            ele[k].childNodes[0].innerText = leftValue[i];

            i++;
            k++;
        }
        else {
            if ((n1 + n2) === ele.length) {
                ele[k].style.background = `${sort_color.value}`;
            }
            else {
                ele[k].style.background = `${comparsion_color.value}`;
            }
            ele[k].style.height = right[j];
            ele[k].childNodes[0].innerText = rightValue[j];
            j++;
            k++;
        }
    }
    while (i < n1) {
        await waitforme(delay);
        if ((n1 + n2) === ele.length) {
            ele[k].style.background = `${sort_color.value}`;
        }
        else {
            ele[k].style.background = `${comparsion_color.value}`;
        }
        ele[k].style.height = left[i];
        ele[k].childNodes[0].innerText = leftValue[i];
        i++;
        k++;
    }
    while (j < n2) {
        await waitforme(delay);
        if ((n1 + n2) === ele.length) {
            ele[k].style.background = `${sort_color.value}`;
        }
        else {
            ele[k].style.background = `${comparsion_color.value}`;
        }
        ele[k].style.height = right[j];
        ele[k].childNodes[0].innerHTML = rightValue[j];
        j++;
        k++;
    }
}

async function mergeSort(ele, l, r) {

    if (l >= r) {

        return;
    }
    const m = l + Math.floor((r - l) / 2);
    await mergeSort(ele, l, m);
    await mergeSort(ele, m + 1, r);
    await merge(ele, l, m, r);
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
const mergeSortbtn = document.querySelector(".mergeSort");
mergeSortbtn.addEventListener('click', async function () {
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = parseInt(ele.length) - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableComarsion();
    disableSort();
    disableNewArrayBtn();
    await mergeSort(ele, l, r);
    enableSortingBtn();
    enableSizeSlider();
    enableComarsion();
    enableSort();
    enableNewArrayBtn();
});