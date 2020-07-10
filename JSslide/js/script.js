function byId(id) {
    return typeof id === "string" ? document.getElementById(id) : id;

}

//全局变量
var index = 0,
    timer = null,
    pics = byId("banner").getElementsByTagName("div"),
    len = pics.length,
    //这里span的个数和上边的length个数一定一致所以不用取了。
    dots = byId("dots").getElementsByTagName("span");
function slideImg() {
    var main = byId("main");
    //划过清除定时器，离开继续
    main.onmouseover = function () {
        //划过清除定时器，清除定时器之后
        if (timer) clearInterval(timer);
        console.log(timer);
    }
    main.onmouseout = function () {
        timer = setInterval(function () {
            index++;
            index = index % 3
            console.log(index);
            //切换图片
            changeImag();

        }, 2000);
    }
    //打开窗口就在main上触发鼠标离开时间
    main.onmouseout();
    //遍历所有的点击，且绑定点击事件，点击圆点切换图片。
    for (var d = 0; d < len; d++) {
        // index = d;
        dots[d].id = d;
        dots[d].onclick = function () {
            //改变index为当前span的id值
            index = this.id;
            // 调用changeImag
            changeImag();
            this.className = "active";
            dots[(index + 1) % 3].className = "";
            dots[(index + 2) % 3].className = "";
        }
    }

    //切换图片
    function changeImag() {
        pics[index].style.display = "block";
        pics[(index + 1) % 3].style.display = "none";
        pics[(index + 2) % 3].style.display = "none";

    }
}

slideImg();