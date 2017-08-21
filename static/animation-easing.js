/**
 * Created by Administrator on 2017/6/3 0003.
 */

function animate(obj,attr,iTarget,fn) {

    clearInterval(obj.timer);  //进来就清掉上一次的定时器

    obj.timer=setInterval(function () {


            //1。获取当前位置
            var current;
            if(attr=="opacity"){
                current = Math.round(getStyle(obj,attr))*100;
            }
            else {
                current = parseInt(getStyle(obj,attr));
            }
            //2.运动参数
            var speed = (iTarget-current)/8;

            speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);

            //3.临界值
            if(current==iTarget){
                clearInterval(obj.timer);
                if(fn){
                    fn();
                }
                return;

            }

            //4.负值运动
            if(attr=="opacity"){

                console.log(88888);
                obj.style[attr] = (current + speed) / 100;
                obj.style.filter = "alpha(opacity="+ (current+speed) +")";
            }
            else {
                obj.style[attr] = current + speed +"px";
            }

    },30)


}

function getStyle(obj,attr) {

    if(window.getComputedStyle){
         return window.getComputedStyle(obj,null)[attr]; //非IE
    }
    else {
        return obj.currentStyle[attr];   //IE
    }

}



//终极封装


function animate2(obj,json,fn) {

    clearInterval(obj.timer);  //进来就清掉上一次的定时器

    obj.timer=setInterval(function () {

        var bStop = true;
        for(var attr in json){

            var iTarget = json[attr];

            //1。获取当前位置
            var current;
            if(attr=="opacity"){
                current = Math.round(getStyle(obj,attr) * 100);
            }
            else {
                current = parseInt(getStyle(obj,attr));
            }
            //2.运动参数
            var speed = (iTarget-current)/8;

            speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);

            //3.临界值
            if(current!=iTarget){
                bStop = false;
            }

            //4.负值运动
            if(attr=="opacity"){
                obj.style[attr] = (current + speed) / 100;
                obj.style.filter = "alpha(opacity="+ (current+speed) +")";
            }
            else {
                obj.style[attr] = current + speed +"px";
            }
        }

        //如果bStop=true， 则说明所有样式属性都到达了目标值
        if(bStop){
            clearInterval(obj.timer);
            if(fn){
                fn();
            }
            return;
        }

    },30)


}
