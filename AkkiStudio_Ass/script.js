document.getElementById("myNavbar").addEventListener("mouseenter", newimage);

function newimage() {
    document.getElementById("logo").src = "images/logo1.png";

}
document.getElementById("myNavbar").addEventListener("mouseleave", oldimage);

function oldimage() {
    document.getElementById("logo").src = "images/logo.png";
}