let valBtn = document.querySelectorAll(".val");
let curDiv = document.querySelector(".current");
let pre = document.querySelector(".previous");

valBtn.forEach((ele)=>{
    ele.addEventListener("click",(elen)=>{
        curDiv.textContent += ele.textContent;
    });
});

function del(){
    curDiv.textContent = curDiv.textContent.substring(0,curDiv.textContent.length - 1);
}

function ac(){
    curDiv.textContent = "";
    pre.textContent = "";
}

function hasSpecialCharacters(text) {
    var regex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-=]/;
    return regex.test(text);
}

function equal(){

    let hasCheck = hasSpecialCharacters(curDiv.textContent);

    if(hasCheck){
        let lacha = curDiv.textContent.substring(curDiv.textContent.length - 1,curDiv.textContent.length);
        let lastcharactor = hasSpecialCharacters(lacha);
        if(lastcharactor){
        }else{
        try {
            pre.innerHTML = curDiv.textContent;
            curDiv.textContent = eval(curDiv.textContent);
        } catch (error) {
        }
        }
    }
}

function prev(){
    if(pre.textContent !== ""){
    curDiv.textContent = pre.textContent;
    }
}