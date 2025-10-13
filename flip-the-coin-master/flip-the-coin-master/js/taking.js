// $("#pfront").css("display","none")
var a=true
// var time=null
var result=""
$(".but button").on("click",function(){
    if (a) {
       result=Math.floor(Math.random()*2)+0
        // console.log(result)
        if(result==1){
            $("#pfront").css("display","inline")
            $("#ffront").css("display","block")
            $("#pbehind").css("display","none")
            $("#fbehind").css("display","none")
        }else{
            $("#pbehind").css("display","inline")
            $("#fbehind").css("display","block")
            $("#pfront").css("display","none")
            $("#ffront").css("display","none")
        }



    }
})


