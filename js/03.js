$(function () {
    var index = 0;
    var timer;
    // 1.点击next
    $("#next").click(function () {
        index++;
        if (index > 4) {
            index = 0;
        }
        animate(index);
    })
    // 2.点击prev
    $("#prev").click(function () {
        index--;
        console.log(index);
        if (index < 0) {
            index = 4;
        }
        animate(index);
    })
    // 3.焦点随左右按钮变化
    function animate(index) {
        $("#list img").eq(index).fadeIn(300).siblings().fadeOut(300);
        $("#btns span").eq(index).addClass("current").siblings().removeClass("current");
    }
    // 4.点击按钮,让对应的图片出现
    $("#btns span").click(function () {
        $(this).addClass("current").siblings().removeClass("current");
        index = $(this).index();
        $("#list img").eq(index).fadeIn(300).siblings().fadeOut(300);

    })
    //5.自动播放
    function play() {
        timer = setInterval(function () {
            $("#next").click()
        }, 1000)
    }
    function stop() {
        clearInterval(timer)
    }
    $(".content").mouseover(function(){
        stop();
    })
    $(".content").mouseout(function(){
        play();
    })
    play();
})