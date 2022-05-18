

function toggleClass(el,className1,className2){
    el.classList.toggle(className1);
    el.classList.toggle(className2);
}


let container = document.getElementsByClassName("container");

for (let i=0; i<container.length;i++){

    container[i].addEventListener('click', function(){
        this.classList.toggle('active');
        let fchild=this.children[0];
         console.log(fchild.tagName);
         console.log(fchild.children[0].tagName); 
        toggleClass(fchild.children[0],"fa-plus-circle","fa-minus-circle");
    })
}