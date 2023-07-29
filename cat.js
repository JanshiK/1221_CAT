let a=document.getElementById("onbulb")
let b=document.getElementById("oncat")
let c=document.getElementById("switchon")
let d=document.getElementById("onbu1")
let e=document.getElementById("offbu1")
let f=document.getElementById("gon")
f.textContent="Click ON to get blub on and OFF to get it off"
f.style.color="white"
f.style.fontStyle="italic";
f.style.fontSize="30px";
function onn()
{
   a.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
   b.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
   c.textContent="Switch on"
   c.style.color="green";
   e.style.backgroundColor="grey"
   d.style.backgroundColor="cadetblue"
   
}
function off()
{
    a.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
    b.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
    c.textContent="Switch off"
    c.style.color="red"
    d.style.backgroundColor="grey"
    e.style.backgroundColor="cadetblue"
}
