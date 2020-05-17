//图片懒加载实现
var img = document.getElementsByTagName("img");
//存储图片记载到的位置，避免每次都从第一张图片开始遍历
var n = 0; 
lazyload();

//throttle节流函数
function throttle(handle, time){
    let timer = null;
    return function(...args){
        if(!timer){
            timer = setTimeout(() => {
                timer = null;
                handle.apply(this, args);
            }, time)
        }
    }
}

window.addEventListener('scroll', throttle(lazyload, 200))

function lazyload(){
    //可见区域高度
    var seeHeight = window.innerHeight;
    //获取滚动条的距离
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop ;
    for(let i = n; i < img.length; i++){
        console.log(img[i].offsetTop, seeHeight, scrollTop);
        if(img[i].offsetTop < seeHeight + scrollTop){
            if(img[i].getAttribute("src") == "loading.gif"){
                img[i].src = img[i].getAttribute("data-src")
            }
            n = i + 1;
        }
    }
}

//使用IntersectionObserver:一种异步观察目标元素与其祖先元素或顶级文档视窗交叉状态的方法
if(IntersectionObserver){
    let lazyImageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            letlazyImage = entry.target;
            //如果元素可见
            if(entry.intersectionRatio > 0){
                if(lazyImageObserver.getAttribute("src") == "loading.gif"){
                    lazyImage.src = lazyImage.getAttribute("data-src");
                }
            }
        })
    })
    for(let i = 0; i < img.length; i++){
        lazyImageObserver.observe(img[i]);
    }
}