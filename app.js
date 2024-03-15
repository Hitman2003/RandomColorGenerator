const getColor = () =>{
    //Hex Code 
    const randomNumber =    Math.floor(Math.random() * 16777215);
    //multiply this no to make hexdecimal no. and math.floor makes its nearest lowest integer
    const randomCode = "#" + randomNumber.toString(16); //converting to hexadecimal string
    console.log(randomNumber,randomCode);
    /*
         app.js:6 6113218 '#5d47c2'
         app.js:6 16189415 '#f707e7'
         app.js:6 10842018 '#a56fa2'
         app.js:6 13816102 '#d2d126'
         app.js:6 16437710 '#fad1ce'
    */
    document.body.style.backgroundColor = randomCode; //for background color
    document.getElementById("color-code").innerText = randomCode; // for every colour their exist it's own code so to generate that

    //if we want to copy code in clipbored
    navigator.clipboard.writeText(randomCode);

}

//for event call after when we clicked at click me
document.getElementById("btn").addEventListener(
    "click",
    getColor
)

//for intitial call when we are not clicked at click me
getColor();