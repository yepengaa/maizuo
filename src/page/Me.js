import React , {Component}from 'react'
import Login from '../views/common/Login'
import MeMain from '../views/module/MeMain'
import '../css/Me.css'


export default class Me extends Component{
    constructor(){
        super();
        this.state={
            isLogin:false,
            userName:''
        }
    }
    render(){
        let isShow = {
            display:this.state.isLogin?'none':'block'
        }
        let isMeMain = {
            display:this.state.isLogin?'block':'none'
        }
        return(
            <div id="me_page" class="page">
                <div style={isShow}>
                    <Login isLogin={this.state.isLogin} userData={this.userData.bind(this)}/>
                </div>
                <div style={isMeMain}>
                    <MeMain userName={this.state.userName} isQuit={this.isQuit.bind(this)}/>
                </div>
            </div>
        )
        
    }

    userData(name){
        this.setState({isLogin:true});
        this.setState({userName:name});
        console.log("接收到"+name)
    }

    isQuit(){
        this.setState({userName:''})
        this.setState({isLogin:false})
    }











}