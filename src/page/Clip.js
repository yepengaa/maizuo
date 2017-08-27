import React , {Component}from 'react'
import '../css/clip.css'



export default class Me extends Component{
    constructor(){
        super();
        this.state={
            isShow:true
        }
    }
    render(){
        let clipColor = {
            color:this.state.isShow?"#f6821b":"#333",
            borderBottom:this.state.isShow?"3px solid #f6821b":"none"
        }
        let electronicColor={
            color:this.state.isShow?"#333":"#f6821b",
            borderBottom:this.state.isShow?"none":"3px solid #f6821b"
        }
        let isclip={display:this.state.isShow?"block":"none"}
        let iselectronic={display:this.state.isShow?"none":"block"}
        return(
            <div id="clip" class="page">
                <div class="clip_nav">
                    <p onClick={this.gomaizuoClip.bind(this)} style={clipColor}>卖座卡</p>
                    <p onClick={this.goelectronic.bind(this)} style={electronicColor}>电子卖座卡</p>
                </div>
                <div class="maizuo_clip" style={isclip}>
                    <p><span>卡号 :</span><input type="text" placeholder="请输入卡号"/></p>
                    <p><span>密码 :</span><input type="password" placeholder="请输入密码"/></p>
                </div>
                <div class="electronic" style={iselectronic}>
                    <p><span>卡号 :</span><input type="text" placeholder="请输入15位电子卖座卡"/></p>
                </div>
                <div class="see_about"><button>查询</button></div>
            </div>
        )
    }
    gomaizuoClip(){
        this.setState({isShow:true})
    }
    goelectronic(){
        this.setState({isShow:false})
    }








}