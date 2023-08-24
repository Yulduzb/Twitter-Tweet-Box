const editableInput=document.querySelector(".editable"),
readonlyInput=document.querySelector(".readonly"),
placeholder=document.querySelector(".placeholder"),
counter=document.querySelector(".counter"),
tweetBtn=document.querySelector(".tweetBtn"),
topBtn=document.querySelector(".btn"),
contentIcons=document.querySelector(".content-icons");


editableInput.onkeyup = (e) => {
    let element=e.target;
    checkInput(element);
}
editableInput.onkeypress = (e) => {
    let element=e.target;
    checkInput(element);
    placeholder.style.display="none";
    
}

    
    function checkInput(element){
    let maxLenght=20;
    let currentLength=element.innerText.length;
    let textTag=element.innerHtml;


    if(currentLength <= 0){
        placeholder.style.display="block";
        contentIcons.style.display="none";
        tweetBtn.classList.remove("active");
        
        
    }
    else{
        placeholder.style.display="none";
        topBtn.style.display="block";
        contentIcons.style.display="block";
        tweetBtn.classList.add("active");
        
    }
    counter.innerText=maxLenght-currentLength;

    if(currentLength>maxLenght){

        let overText=element.innerText.substr(maxLenght);//extracting
       
        overText=`<span class="highlight">${overText}</span>`;
        
        textTag=element.innerText.substr(0,maxLenght)+overText;
        readonlyInput.style.zIndex="1";
        counter.style.color="#e0245e";
        tweetBtn.classList.remove("active");
    }
    else
    {
        readonlyInput.style.zIndex="-1";
        counter.style.color="#1DA1F2";
       
    }
    readonlyInput.innerHTML=textTag;
   
}



    
    