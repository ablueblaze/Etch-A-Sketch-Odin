function makeGrid(){
    let element = "";
    let element2 = "";
    for (let i = 1; i < 17; i++){
        for (let n = 0; n < 17; n++) {
            if (n !== 0){
                element2 += `<div class="button" id="${[i,n]}"></div>`;
            } else {element2 = "";}
        }
        element += `<div class="colum">${element2}</div>`;
    }
    const container = document.getElementById("grid");
    container.innerHTML = element;
}
// I need to assign an ID to each of the buttons.


makeGrid();

function test(){
    console.log("test");
}

const shift = document.querySelectorAll(".button").forEach(item => {
    item.addEventListener('mouseover', event => {
        test();
    })
});




// shift.addEventListener('click', function (event) {
//     test();
// })

// shift.onmouseover = test();




// for (let i = 0; i < 16; i++){
//     const div = document.createElement('div');
//     div.classList.add('colum');
//     const node = document.createTextNode("test");
//     div.appendChild(node);

//     element.innerHTML = div
    
//     const container = document.getElementById('container');
//     container.appendChild(div);

    // for (let n = 0; n < 16; i++){
    //     const div2 = document.createElement('div');
    //     div2.classList.add('row')
    //     const node2 = document.createTextNode("test");
    //     div2.appendChild(node2);
        
    // }
// }

// let sheet = document.createElement('style');
// sheet.innerHTML = "div {border-style: solid; border - color: black; border - width: 1px;}"; 
// sheet.innerHTML = ".container {display: grid; grid-template-columns: 50% 50%;}";
// document.body.appendChild(sheet)