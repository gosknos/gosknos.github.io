function greet() {
    window.alert("Hello everyone !");
}

function init() {
    document.getElementById("first").src = "flower2.png"; // Of course you can choose other file than flower2
    document.getElementById("container").getElementsByTagName("img")[1].src = "flower2.png";

}