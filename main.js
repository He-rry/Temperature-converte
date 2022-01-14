function toCel(){
 let f = Number(document.querySelector("#input").value);
    console.log(f);
    let Cel = (5/9) * (f- 32);
    document.querySelector("#result").innerHTML = Cel.toFixed(2) +"C";
    document.querySelector("#input").value = ""; 
}
function toFeh(){
    let c = Number(document.querySelector("#input".value));
    let Feh = (9/5 * c) + 32;
    document.querySelector("#result").innerHTML = Feh.toFixed(2) + "F";
    document.querySelector("#input").value= "";  
}