// console.log("成功");測試用
// 搜尋a 元素
// 取得每個a元素資料
$("a").each(function (index, element) {
    
    // console.log("編號:" + index);

    var target = $(this).attr("data-st-target");
    var duration = $(this).attr("data-st-duration");
    var offsetTop = $(this).attr("data-st-offset");

    // console.log("目標:" + target);
    // console.log("時間:" + duration);
    // console.log("位移:" + offsetTop);

    var offset = $("#" + target).offset();
    var top = offset.top;

    // 上方 扣除 上方位移
    // top = top -offsetTop; 原始寫法
    // 如果 offsetTop 存在的話 才執行 減法運算
    if (offsetTop) top -= offsetTop;
    
    console.log("上方 :" + top);

    $(this).click(function (e) { 
        e.preventDefault();

        //  parseInt() 將文字轉為數字
        // stop() 停止當前所有的動畫
        $("html").stop().animate({
            scrollTop: top
        }, parseInt(duration));
    });
});
// 使用者在用滑鼠滾動時 停止動畫
$("html").on("mousewheel", function () {
    $("html").stop();
});

var arrow = $("#arrow");
arrow.fadeOut();

// 箭頭隱藏效果
$(window).scroll(function () { 
    var windowTop = $(this).scrollTop();
    // console.log("視窗的上方:" + windowTop);

    var arrowTop = arrow.attr("data-st-top");
    var arrowTime = arrow.attr("data-st-time");
    var arrowTimeInt = parseInt(arrowTime);

    // console.log("箭頭要出現的位置：" +  arrowTop);
    // console.log("箭頭特效的時間　：" + arrowTime);

    // 如果 視窗位置 大於等於 箭頭上方 就 淡入
    if (windowTop >= arrowTop) arrow.stop().fadeIn(arrowTimeInt);
    // 否則 就 淡出
    else arrow.stop().fadeOut(arrowTimeInt)
});

