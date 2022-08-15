
// select the correct .html file
var previous = ""
function aload (clicked_id) {
    
fetch("site/"+clicked_id+".html")
.then(res=>res.text())
.then((txt) => {
    // console.log(document.getElementById("container"))
    document.getElementById("container").innerHTML = txt;

    // loop trhough the 'link' class and color the inner text black
    var links = document.getElementsByClassName("link");
    for (var i = 0; i < links.length; i++) {
        links[i].style.color = "";
    }
    document.getElementById(clicked_id).style.color = 'red';

})
}