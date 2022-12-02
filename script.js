function changecolor(){
    var hex_numbers=["0f71e6","0c6e15","08a89a","959dfd","a1a638","0875a6","e6d691","de7bb3","188cad","85b999","dd36a5","92fc41","927c62",
    "c6fe4d","b2fe8e","b2fe8e"];
    var hex_code="";


    for(i=0;i<6;i++){
        var random_index=Math.floor(Math.random()*hex_numbers.length)
        hex_code=hex_numbers[random_index]
    }
    document.getElementById("hex-code").innerHTML=hex_code
    document.getElementsByTagName("body")[0].style.background="#"+hex_code;
    console.log(hex_code);
}