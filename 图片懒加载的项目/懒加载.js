;(function(){


    var box=document.getElementById("box");
    var oneimg=document.getElementById("one-img").innerHTML;
    var data=JSON.parse(document.getElementById("data").innerHTML);
    var allimg=document.getElementsByClassName('con-img');
    
    
    var init=function(){
        initData(data);
        bindevent();
    }

    function bindevent()
    {
       
        window.onload=window.onscroll=
        
        debounce(xianshi(allimg),1000);
        // function(){
        //     xianshi(allimg);
        // }
    }


    function debounce(func,wait){
        let timer;
        return function(){
      
              if(timer){
                  clearTimeout(timer)
              }
             timer=setTimeout(() => {
              func.apply(this);
              }, wait);
          }
    }


    
    function initData(data){
        var list='';

        data.forEach(Element => {
            list +=oneimg.replace(/{{(.*?)}}/g,function(node ,key){
            //    console.log(node,key);
                return{
                  name:Element.name,
                  img:Element.img
               }[key]
            })
        })

        
        // console.log(list)
        box.innerHTML=list;
    }


    function xianshi(images){
        console.log(this)
        var imgItem;

        return function(){
           
            var cheight=window.innerHeight;
            var srollT=document.documentElement.scrollTop;
            console.log(1);
        for(var i=0;i<images.length;i++){
            imgItem=images[i];

            if(imgItem.offsetTop<cheight+srollT){
                

                if(imgItem.getAttribute("data-src")){
                    console.log(imgItem.getAttribute("data-src"))
                    imgItem.src=imgItem.getAttribute("data-src");
                    imgItem.removeAttribute("data-src");
                }
                
            }
        }
    }
    }

    init();

}());

