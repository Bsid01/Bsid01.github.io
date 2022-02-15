function printPyramid(height) {
  let p;
  let space;

  for (let x = 1; x <= height; x++) {
    space = "";
    for (let y = 0; y < height - x; y++) {
      space += `.`;
    }
    for (let z = -1; z < x; z++) {
      space += `#`;
    }
    console.log(space);
    p = document.createElement("p");
    let tNode = document.createTextNode(space);
    p.appendChild(tNode);
    let element = document.getElementById("pyramid");
    element.appendChild(p);
      
  }
}
input = prompt("Enter a number to specify the height of the pyramid: ");
printPyramid(input);
