const loginsection=document.querySelector(".container");
const registersection=document.querySelector(".register");
const forgotsection=document.querySelector(".forgotpass");

const loginlink=document.querySelector(".l-section");
const registerlink=document.querySelector(".r-section");
const forgotlink=document.querySelector(".f-section");
const cancel=document.querySelector("#cancel");


// addEventListener on login page 

registerlink.addEventListener('click',(e)=>{
    loginsection.style.display="none";
    registersection.style.display="flex";
});
forgotlink.addEventListener('click',(e)=>{
    loginsection.style.display="none";
    forgotsection.style.display="flex";
});
loginlink.addEventListener('click',(e)=>{
    registersection.style.display="none";
    loginsection.style.display="flex";
});
cancel.addEventListener('click',(e)=>{
    forgotsection.style.display="none";
    loginsection.style.display="flex";
});


