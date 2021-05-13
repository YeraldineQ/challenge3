const slider = document.querySelector(".slider");
const pageViews = document.querySelector("#pageviews");
const price = document.querySelector("#price");
let mySwitch = document.querySelector("#mySwitch");


/*Paso 2: Modificar vistas y precio por mes */

function printPageViews(){
    if(slider.value == "0"){
        pageViews.textContent = "10k";
        price.textContent = "8";

    }else if(slider.value == "25"){
        pageViews.textContent = "50k";
        price.textContent = "12";

    }else if(slider.value == "50"){
        pageViews.textContent = "100k";
        price.textContent = "16";

    }else if(slider.value == "75"){
        pageViews.textContent = "500k";
        price.textContent = "24";

    }else if(slider.value == "100"){
        pageViews.textContent = "1M";
        price.textContent = "36";
    }
}

/*Paso 1: Animar fondo barra slider */

slider.addEventListener("input",function(){
    let x = slider.value;
    // let color = "linear-gradient(90deg, hsl(174, 86%, 45%) " + x + "%, hsl(0, 0%, 90%) " + x + "%);"
    let color = `linear-gradient(90deg, hsl(174, 86%, 45%) ${x}%, hsl(0, 0%, 90%) ${x}%)`;
    slider.style.background = color;

    printPageViews()

    if(mySwitch.checked == true){
        let x = price.textContent*0.25;
        price.textContent = price.textContent - x;
        console.log(x);

    }else{
        printPageViews()
    }
   
});





/*Paso 3: Descuento al activar el ckeckbox */

mySwitch.addEventListener("input", function(){

    if(mySwitch.checked == true){
        let x = price.textContent*0.25;
        price.textContent = price.textContent - x;
        console.log(x);

    }else{
        printPageViews()
    }
   
});