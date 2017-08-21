import React,{Component} from 'react';

import leftNavData from '../../services/leftNavData';
import '../../css/lieftNav.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Nav extends Component{
    constructor(){
        super();
        this.state={
            
        }
    }
    render(){
        let isShow = {transform:this.props.show ?'none':'translateX(-100%)'} ;
        let isBox = {
            background:this.props.show ? 'rgba(0,0,0,0.5)':'rgba(0,0,0,0)',
            display:this.props.show ? 'block':'none'
        }
        let list = this.props.location.pathname=='/shopping'?leftNavData.shopSilderBarData:leftNavData.homeSilderBarData
        return (
            <div>
                <div class="left_nav" style={isShow}>
                { list.map((item,index)=>{
                        return <p key={index} onClick={this.goPage.bind(this,item)}><span>{item.title}</span><span class="iconfont icon-taobaozhongchou4qizuoyoujiantou1"></span></p>
                    })}
                </div>
          
                <div class="left_masking" style={isBox} onClick={this.setShow.bind(this)}></div>
            </div>
        )
    }

    goPage(item){
        console.log(this.props.history)
        this.props.history.push(item.path);
        this.props.setShow();
        this.props.setTitle(item.header);
    }
    setShow(){
        this.props.setShow();
    }
    

}
