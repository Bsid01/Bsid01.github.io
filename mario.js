function printPyramid(height) {

    console.log();
    let space = "";
    for (let x = 1; x <= height; x++) {
      for (let y = 0; y < height - x; y++) {
        space += " ";
      }
      for (let z = -1; z < x; z++) {
        space += "#";
      }
      space += "\n";
    }
    console.log(space);
}
console.log(`Want to see a pretty pyramid? The top step is 2 bricks wide. You just have to specify how tall you want it to be!`);
console.log();
input = prompt("Enter a number to specify the height of the pyramid: ");
printPyramid(input);