function make_shirt(){

    let x =  "Large Size";
    let y = "I love JavaScript.";

    console.log("Size of the shirt = "+x+",\nand "+"\nText required on shirt = "+y);
    
    x =  "Large Size";
    y = "I love JavaScript.";

    console.log("Size of the shirt = "+x+",\nand "+"\nText required on shirt = "+y);

    x =  prompt("Size of the Shirt?");
    y = prompt("Text required on shirt?");

    console.log("Size of the shirt = "+x+",\nand "+"\nText required on shirt = "+y);
}

make_shirt();