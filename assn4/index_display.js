/*

        Jesse Miller
        COP4813 Assignment 4
        06/18/2025


*/


function display(buttIn, close1, close2){
    let elementIn = document.getElementById(buttIn);
    let out1 = document.getElementById(close1);
    let out2 = document.getElementById(close2);
    if (elementIn.style.display == "none")
    {
        elementIn.style.display = "block";
        out1.style.display = "none";
        out2.style.display = "none";
    }
    else
        elementIn.style.display = "none";
}