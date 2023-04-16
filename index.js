function openBtn(){
    document.getElementById("mySidenav").style.height = "100%"
    document.getElementById("opener").style.display = "none";
    document.getElementById("closer").style.display = "block";
}

function closeBtn(){
    document.getElementById("mySidenav").style.height = "0";
    document.getElementById("closer").style.display = "none";
    document.getElementById("opener").style.display = "block";
}

function page() {
    document.getElementById("thankPage").style.left= "50%";
    document.getElementById("thankPage").style.display = "flex";
    document.getElementById("myContainer").style.pointerEvents = "none";
    document.getElementById("thankPage").style.pointerEvents = "all";
    document.getElementById("overLay").style.zIndex = "1";
    document.getElementById("thankPage").style.zIndex = "2";
}

function closePage() {
    document.getElementById("thankPage").style.left = "-100%";
    document.getElementById("myContainer").style.pointerEvents = "all";
    document.getElementById("overLay").style.zIndex = "-1";

}

function myScroll() {
    //document.getElementById("myNav").style.boxShadow = "0 0 5px black"
}