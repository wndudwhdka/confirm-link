window.addEventListener("load", function(){

    var confirmLinkList = document.querySelectorAll(".confirm-link");
    for(var i=0; i < confirmLinkList.length;i++)
    {
        // 접근 제어를 위해 function에 e를 하나 인자로 준다. 
        confirmLinkList[i].addEventListener("click",function(e){                       
            var text = this.dataset.message || "정말 이동하시겠습니까?";
            var choice = window.confirm(text);
            if(choice == false){
                e.preventDefault()
            }
        });
    }
});
   
