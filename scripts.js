function makeGrid() {
    const container = document.getElementById("grid");
    for (let i = 0; i < 16; i++) {
        let colum = document.createElement('div');
        colum.className = "colum"
        container.append(colum);
        for (let n = 0; n < 16; n++) {
            let div = document.createElement('div');
            div.onmouseover = function(){
                div.setAttribute("class", "color");
            }
            colum.append(div);
        }
    }
}

makeGrid();









/////////////////// Kinda works, but not really.
// const shift = document.querySelectorAll(".button");

// function test(){
    //     console.log("test");
    //     // shift.classList.remove('color');
    //     // shift.classList.add('changedColor');
    // }
    
    // shift.forEach(item => {
        //     item.addEventListener('mouseover', event => {
            //         test();
            //         document.shift.classList.add('test')
            //     })
            // });
            /////////////////
            
            
            
            
            
// div.onmouseover = function() {
//     document.getElementsByTagName('div')[-1].classList.add('color');
// }
            
            
            
// I need to assign an ID to each of the buttons.

// document.querySelector('.button').cssText = "padding: 5px;";

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