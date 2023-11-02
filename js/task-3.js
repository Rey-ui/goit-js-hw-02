//Ширина елемента
'use strict'
function getElementWidth(content, padding, border) {
    let contentNum = parseFloat(content, 1);
    let paddingNum = parseFloat(padding, 1);
    let borderNum = parseFloat(border, 1);
    const borderBox = contentNum + paddingNum * 2 + borderNum * 2;
    return borderBox
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200