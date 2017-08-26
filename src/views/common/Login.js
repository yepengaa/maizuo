import React,{Component} from 'react';
import '../../css/login.css'

export default class Login extends Component{
    constructor(){
        super();
        this.state={
            username:'',
            pwd:''
        }

    }
    render(){
        return (          
            <div class="login">
                <p><input type="text" value={this.state.username} placeholder="输入手机号/邮箱" onChange={this.inputChange.bind(this)} class="username"/></p>
                <p><input type="password" value={this.state.pwd} placeholder="输入手密码/验证码" onChange={this.inputChange.bind(this)} class="userage"/></p>
                <div class="btn" onClick={this.goLogin.bind(this)}><button>登录</button></div>
            </div>
        )
    }
    inputChange(){
        let name = document.querySelector('.username').value;
        let pwd = document.querySelector('.userage').value;
        this.setState({pwd:pwd})
        this.setState({username:name})
    }
    goLogin(){
        let name = document.querySelector('.username').value;
        let pwd = document.querySelector('.userage').value;
        if(name.length>0&&pwd.length>1){
            this.props.userData(name)
            this.setState({pwd:''})
            this.setState({username:''})

            let obj={}
            obj.username=name;
            obj.pwd=pwd;
            var d = new Date();
            d.setDate(d.getDate+1);
            document.cookie=encodeURIComponent("users")+'='+encodeURIComponent(obj)+';expires='+d;
        }
        
    }
    










}













