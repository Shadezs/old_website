$(document).ready(function () {
    ///Thanks to https://github.com/mattboldt/typed.js for his typed.js library made it easier
    var typewriter =new Typed('#typewriter',{
        strings :['Hi,My name is carlos','And welcome to my page','im still working on it '] ,/// may add something else
        typeSpeed:40,
        backSpeed:20,showCursor:true,
        loop:false

    });
    function openTab(th)
    {
        window.open(th.name, "_self");
    }
});