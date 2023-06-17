document.getElementById("btn1").addEventListener("click", function on() {
    document.getElementById("light").style.display = "block";

    document.getElementById("right-text2").style.display = "block";
    document.getElementById("right-text1").style.display = "none";


})
document.getElementById("btn2").addEventListener("click", function off() {
    document.getElementById("light").style.display = "none";
    document.getElementById("right-text2").style.display = "none";
    document.getElementById("right-text1").style.display = "block";

})