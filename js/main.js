document.getElementById("isim").addEventListener("click", function(){
    var metin = document.getElementById("isim");

    var isimtext = document.getElementById("isimtext");
    var abuttext = document.getElementById("abuttext");
    var dctext = document.getElementById("dctext");
    var yttext = document.getElementById("yttext");
    var gttext = document.getElementById("gttext");

    if(abuttext.style.animationPlayState == "running")
    {
        
    }
    else if(dctext.style.animationPlayState == "running")
    {
        
    }
    else if(yttext.style.animationPlayState == "running")
    {

    }
    else if(gttext.style.animationPlayState == "running")
    {

    }
    else
    {
        isimtext.style.display = "block"
        abuttext.style.display = "none";
        dctext.style.display = "none";
        yttext.style.display = "none";
        gttext.style.display = "none";
        isimtext.style.animationPlayState = "running";
    }
    
});
document.getElementById("abut").addEventListener("click", function(){
    var metin = document.getElementById("abut");

    var isimtext = document.getElementById("isimtext");
    var abuttext = document.getElementById("abuttext");
    var dctext = document.getElementById("dctext");
    var yttext = document.getElementById("yttext");
    var gttext = document.getElementById("gttext");

    if(isimtext.style.animationPlayState == "running")
    {

    }
    else if(dctext.style.animationPlayState == "running")
    {

    }
    else if(yttext.style.animationPlayState == "running")
    {

    }
    else if(gttext.style.animationPlayState == "running")
    {

    }
    else
    {
        isimtext.style.display = "none"
        abuttext.style.display = "block";
        dctext.style.display = "none";
        yttext.style.display = "none";
        gttext.style.display = "none";
        abuttext.style.animationPlayState = "running";
    }
});
document.getElementById("dece").addEventListener("click", function(){
    var metin = document.getElementById("dece");

    var isimtext = document.getElementById("isimtext");
    var abuttext = document.getElementById("abuttext");
    var dctext = document.getElementById("dctext");
    var yttext = document.getElementById("yttext");
    var gttext = document.getElementById("gttext");


    if(isimtext.style.animationPlayState == "running")
    {

    }
    else if(abuttext.style.animationPlayState == "running")
    {

    }
    else if(yttext.style.animationPlayState == "running")
    {

    }
    else if(gttext.style.animationPlayState == "running")
    {

    }
    else
    {
        isimtext.style.display = "none"
        abuttext.style.display = "none";
        dctext.style.display = "block";
        yttext.style.display = "none";
        gttext.style.display = "none";
        dctext.style.animationPlayState = "running";
    }
});
document.getElementById("yutup").addEventListener("click", function(){
    var metin = document.getElementById("yutup");

    var isimtext = document.getElementById("isimtext");
    var abuttext = document.getElementById("abuttext");
    var dctext = document.getElementById("dctext");
    var yttext = document.getElementById("yttext");
    var gttext = document.getElementById("gttext");

    if(isimtext.style.animationPlayState == "running")
    {

    }
    else if(abuttext.style.animationPlayState == "running")
    {

    }
    else if(dctext.style.animationPlayState == "running")
    {

    }
    else if(gttext.style.animationPlayState == "running")
    {

    }
    else
    {
        isimtext.style.display = "none"
        abuttext.style.display = "none";
        dctext.style.display = "none";
        yttext.style.display = "block";
        gttext.style.display = "none";
        yttext.style.animationPlayState = "running";
    }
});
document.getElementById("github").addEventListener("click", function(){
    var metin = document.getElementById("github");

    var isimtext = document.getElementById("isimtext");
    var abuttext = document.getElementById("abuttext");
    var dctext = document.getElementById("dctext");
    var yttext = document.getElementById("yttext");
    var gttext = document.getElementById("gttext");

    if(isimtext.style.animationPlayState == "running")
    {

    }
    else if(abuttext.style.animationPlayState == "running")
    {

    }
    else if(dctext.style.animationPlayState == "running")
    {

    }
    else if(yttext.style.animationPlayState == "running")
    {

    }
    else
    {
        isimtext.style.display = "none"
        abuttext.style.display = "none";
        dctext.style.display = "none";
        yttext.style.display = "none";
        gttext.style.display = "block";
        gttext.style.animationPlayState = "running";
    }
});

document.getElementById("isimtext").addEventListener("animationend", function(){
    document.getElementById("isimtext").style.animationPlayState = "paused";
    document.getElementById("isimtext").style.display = "none";
    console.log("finish");
});
document.getElementById("abuttext").addEventListener("animationend", function(){
    document.getElementById("abuttext").style.animationPlayState = "paused";
    document.getElementById("abuttext").style.display = "none";
    console.log("finish");
});
document.getElementById("dctext").addEventListener("animationend", function(){
    document.getElementById("dctext").style.animationPlayState = "paused";
    document.getElementById("dctext").style.display = "none";
    console.log("finish");
});
document.getElementById("yttext").addEventListener("animationend", function(){
    document.getElementById("yttext").style.animationPlayState = "paused";
    document.getElementById("yttext").style.display = "none";
    console.log("finish");
});
document.getElementById("gttext").addEventListener("animationend", function(){
    document.getElementById("gttext").style.animationPlayState = "paused";
    document.getElementById("gttext").style.display = "none";
    console.log("finish");
});