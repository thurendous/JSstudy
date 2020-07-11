function byId(id) {
    return typeof id === "string" ? document.getElementById(id) : id;

}

//グローバル変数、このindexは一番重要です
var index = 0,
    timer = null,
    pics = byId("banner").getElementsByTagName("div"),
    len = pics.length,
    //这里span的个数和上边的length个数一定一致所以不用取了。
    dots = byId("dots").getElementsByTagName("span"),
    prev = byId("prev"),
    next = byId("next"),
    menu = byId("menu-content"),
    subMenu = byId("sub-menu"),
    innerBox = subMenu.getElementsByClassName("inner-box"),
    menuItems = document.getElementsByClassName("menu-item");

function slideImg() {
    var main = byId("main");
    //划过清除定时器，离开继续
    main.onmouseover = function () {
        //划过清除定时器，清除定时器之后
        if (timer) clearInterval(timer);
    }
    main.onmouseout = function () {
        timer = setInterval(function () {
            index++;
            index = index % 3
            //切换图片
            changeImag();

        }, 2000);
    }
    //打开窗口就在main上触发鼠标离开事件
    main.onmouseout();
    //遍历所有的点击，且绑定点击事件，点击圆点切换图片。
    for (var d = 0; d < len; d++) {
        // index = d;
        dots[d].id = d;
        dots[d].onclick = function () {
            //改变index为当前span的id值
            index = this.id;
            this.className = "active";
            // 调用changeImag
            changeImag();
            // dots[(index + 1) % 3].className = "";
            // dots[(index + 2) % 3].className = "";
        }
        //次のページ
        next.onclick = function () {
            index++;
            if (index >= len) index = 0;
            console.log(index);
            changeImag();
        }
        //前のページ
        prev.onclick = function () {
            index--;
            if (index < 0) index = len - 1;
            console.log(index);
            changeImag();
        }
    }

    //切换图片
    function changeImag() {
        // pics[index].style.display = "block";
        // pics[(index + 1) % 3].style.display = "none";
        // pics[(index + 2) % 3].style.display = "none";
        //遍历banner下多有的div以及dots下所有的，将其隐藏
        for (var i = 0; i < len; i++) {
            pics[i].style.display = "none";
            dots[i].className = "";
        }
        pics[index].style.display = "block";
        dots[index].className = "active";

    }

    //导航菜单
    //遍历主菜单且绑定事件
    for (var m = 0; m < menuItems.length; m++) {
        // 设置属性值
        menuItems[m].setAttribute("data-index", m);
        menuItems[m].onmouseover = function () {
            subMenu.className = "sub-menu";
            // innerBox[m].style.display = "none";
            var idx = this.getAttribute("data-index");
            for (var j = 0; j < innerBox.length; j++) {
                innerBox[j].style.display = "none";
                menuItems[j].style.background = "none";
            }
            menuItems[idx].style.background = "rgba(0,0,0,0.1)";
            //每一个menu-item定一个属性
            innerBox[idx].style.display = "block";

        }
    }
    menu.onmouseout = function () {
        subMenu.className = "sub-menu hide";
    }
    subMenu.onmouseover = function () {
        this.className = "sub-menu";
    }
    subMenu.onmouseout = function () {
        this.className = "sub-menu hide";
    }
}


slideImg();