import React , {Component}from 'react'

import HomeServices from '../services/Homeservices'


export default class film extends Component{
    constructor(){
        super();
        this.state={
            hotData:{}
        }
    }
    render(){
        return(
            <div class="page">
                <div class="film" ref="film">
                    <div class="wrap">
                        <div class="nav">
                            <button>正在热映</button>
                            <button>即将上映</button>
                        </div>
                        <div class="main">
                            <div class="hot_showing">
                                <img src=""/>
                                <div>
                                    <h2>
                                        <p><strong>战狼</strong></p>
                                        <p><span class="iconfont icon-taobaozhongchou4qizuoyoujiantou1"></span></p>
                                    </h2>
                                    <div>电视剧京东方</div>
                                    <div>
                                        <p><strong>156</strong>家影院</p>
                                        <p><strong>1565455</strong>认购票</p>
                                    </div>
                                </div>
                            </div>
                            <div class="be_about">
                                <img src=""/>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentWillMount(){
        console.log(33)
        let n=1;
        HomeServices.getFilmHot(1)
        .then((data)=>{
            console.log(data)
        })
    }
    componentDidMount(){
        // let myscroll=new IScroll(this.refs.film,{
        //     mouseWheel: true,
        //     scrollbars: true
        // })

    }
}