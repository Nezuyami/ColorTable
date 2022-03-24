let storedElement;

function drawTable() { 

    let parentContainer = document.querySelector('#tableContainer');
    let table = document.createElement('table');        
    const lineCount = document.getElementById('rows').value;
    const columnCount = document.getElementById('cols').value;
    const lineNoSpace = lineCount.replaceAll(' ','');
    const columnNoSpace = columnCount.replaceAll(' ','');
    const x = Number(lineNoSpace);
    const y = Number(columnNoSpace);
    

    if (lineCount === '' || columnCount === '') {        
            alert("Some fild is empty!");
    }

    else if (lineNoSpace === '' || columnNoSpace === '') {
            alert("Don't use spaces!");
    }

    else if (isNaN(x) || isNaN(y)) {
            alert("You can use only numbers");
    }

    else if (x <= 0 || y <= 0) {
            alert("Negative!");
    }    
   
    parentContainer.innerHTML = null;
      
    for(let i = 0; i < x; i++) {

        const row = document.createElement('tr');
            
        for(let j = 0; j < y; j++) {

            const col = document.createElement('td');
            col.onclick = changeColor;
            row.appendChild(col);                     
        }

        table.appendChild(row); 
    }

    parentContainer.appendChild(table);    
}


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function changeColor(event) {
  const colorArr = ['red', 'yellow', 'aqua', 'green', 'orange', 'black', 'pink', 'violet', 'brown'];
  const i = getRandomInt(colorArr.length);
  const newColor = colorArr[i]
 
  if  (storedElement) {
      storedElement.style.backgroundColor = 'white' 
  }

  event.target.style.backgroundColor = newColor
  storedElement = event.target

}
