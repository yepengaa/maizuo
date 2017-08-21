import React , {Component}from 'react'

import HomeServices from '../services/Homeservices'
import '../css/home.css'


export default class Home extends Component{

    constructor({history}){
        super();
        this.state={
            bannerData:[],
            gotShowing:[],
            beAboutToData:[],
            history
        }
    }
    render(){
        let isShow = {
            display:this.state.bannerData?'block':'none'
        }
        return(
            <div class="home_main">
                <div class="baner_wrap" style={isShow}>
                    <ul id="baner_box">
                        {
                            this.state.bannerData.map((item,index)=>{
                            return (
                                <li key={index} class="banner_list"><img src={item.imageUrl}/></li>
                            )
                        })}
                    </ul>
                </div>
                <div class="home_film">
                    <ul class="hot_showing">
                        {this.state.gotShowing.map((item,index)=>{
                            return (
                                <li key={index} onClick={this.goDetails.bind(this,item.id)}>
                                    <img src={item.cover.origin} />
                                    <div class="hot_fotter">
                                        <div class="hot_text">
                                            <h3>{item.name}</h3>
                                            <p>{item.cinemaCount}家影院上映 {item.watchCount}人购票</p>
                                        </div>
                                        <div class="hot_point">{item.grade}分</div>
                                    </div>
                                </li>
                            )
                        })}
                        <div class="even_more" onClick={this.gofilm.bind(this)}><button>更多热映电影</button></div>
                    </ul>
                    <ul class="upcoming">
                        <h2><p>即将上映</p></h2>
                        {
                            this.state.beAboutToData.map((item,index)=>{
                                return (
                                    <li key={index} onClick={this.goDetails.bind(this,item.id)}>
                                        <img src={item.cover.origin} />
                                        <div class="up_fotter">
                                            <p class="name">{item.name}</p>
                                            <p class="time">8.25号上映</p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                        
                        <div class="even_more" onClick={this.gofilm.bind(this)}><button>更多即将上映电影</button></div>
                    </ul>
                </div>
            </div>
        )
    }
    goDetails(id){

        // console.log(this.state.history)
        this.state.history.push('/details/'+id);
    }
    gofilm(){
        this.state.history.push("/film")
    }
    componentWillMount(){
        HomeServices.getHomeBanner()
        .then((data)=>{
            // console.log(33);
            // console.log(data);
            this.setState({bannerData:data})
        });
        HomeServices.getHomeHot()
        .then((data)=>{
            this.setState({gotShowing:data})
        });
        HomeServices.getBeAboutTo()
        .then((data)=>{
            // console.log(data)
            this.setState({beAboutToData:data})
        })

    }
    componentDidMount(){
        setTimeout(function(){
            let windowWidth=document.documentElement.clientWidth;
            // console.log(windowWidth)
            let bannerUl = document.querySelector('#baner_box');
            let bannerWrap = document.querySelector('.baner_wrap');
            let bannerLi = document.getElementsByClassName("banner_list");
            bannerUl.appendChild(bannerLi[0].cloneNode(true));

            for(let i=0;i<bannerLi.length; i++){
                bannerLi[i].style.width=windowWidth+"px";
            }
            // console.log(bannerLi)
            document.querySelector('#baner_box').style.width=windowWidth*(bannerLi.length+1)+"px";
            let n=0;
            let timer=setInterval(function(){
                n++;
                move();
            },2000)
            function move(){
                if(n>=bannerLi.length){
                    n=1;
                    bannerUl.style.left=0;
                }else if(n<0){
                    n=bannerLi.length-2;
                    bannerUl.style.left=(bannerLi.length-2)*windowWidth + 'px';
                }
                animate2(bannerUl,{left:-windowWidth*n});
            }
          
            bannerWrap.addEventListener( 'touchstart',function(event){
                
                clearInterval(timer);
                let startX=0;
                let X = 0;
                     //如果这个元素的位置内只有一个手指的话
                     if( event.targetTouches.length == 1 ){
                          var touch = event.targetTouches[ 0 ];
                        startX=touch.pageX;
                        // console.log(touch.pageX+"上")
                          //把元素放在手指所在的位置
                //           obj.style.left = touch.pageX+'px';
                //           obj.style.top = touch.pageY+'px';
                      }
                document.addEventListener('touchmove',function(event){
                    clearInterval(timer);
                    if( event.targetTouches.length == 1 ){
                        var touch = event.targetTouches[ 0 ];
                        // console.log(touch.pageX+"下");
                        let box = document.querySelector('#baner_box');
                        box.style.left=(touch.pageX-startX)+"px";
                        X=touch.pageX-startX;
                    }
                })

                    document.addEventListener('touchend',function(event){
                        // console.log(2);
                        clearInterval(timer);
                        if(X>0){
                            n--;
                            move();
                        }
                        else if(X<=0){
                            n++;
                            move();
   
                        }
                        
                        setTimeout(function(){
                            timer = setInterval(function () {
                                n++;
                                move();
                            },2000)
                        },2000)
                        
                    })

                });
                
            

        },300)
        
        // document.querySelector('.banner_list').style.width=windowWidth+"px";
        
    }
    componentDidupdate(){
        console.log(55)
    }


}