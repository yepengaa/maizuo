
import React,{Component} from 'react'
import '../css/reserve.css'
import Movieservice from '../services/Movieservice'

export default class Reserve extends Component{
    constructor({history,match}){
        super();
        this.state={
            match,
            history,
            reserveData:{},
            footerData:"",
            footerText:"暂无信息"
        }
    }

    render(){
        let num = this.state.reserveData.telephones==undefined?'':this.state.reserveData.telephones[0];
        let ticket = "";
        let abbr = "";
        let park = "";
        let discounts = "";
        let  traffic = "";
        if(this.state.reserveData.services!=undefined){
            let arr = this.state.reserveData.services;
            for(let i=0;i<arr.length;i++){
                if(arr[i].name=="取票"){
                    ticket=arr[i].description
                }else{
                    ticket="暂无信息" 
                }
                if(arr[i].name=="3D"){
                    abbr=arr[i].description
                }else{
                    abbr="暂无信息" 
                }
                if(arr[i].name=="停车"){
                    park=arr[i].description
                }else{
                    park="暂无信息" 
                }
                if(arr[i].name=="优惠"){
                    discounts=arr[i].description
                }else{
                    discounts="暂无信息" 
                }
                if(arr[i].name=="交通"){
                    traffic=arr[i].description
                }else{
                    traffic="暂无信息" 
                }
            }
        }
        console.log(num)
        return (
            <div id="reserve" class="page">
                <img src="../../static/img/img02.png"/>
                <div class="reserve_main">
                    <ul class="reserve_list">
                        <li>
                            <div class="icon"><i class="iconfont icon-duihao"></i></div>
                            <div class="bottom_1px reserve_text">
                                <h3><strong>订座票</strong><button onClick={this.gobuyTickets.bind(this,this.state.reserveData.id)}>立即订座</button></h3>
                                <p>选好场次及座位，到影院自助机取票</p>
                            </div>                            
                        </li>
                        <li>
                            <div class="icon"><i class="iconfont icon-diyongquan"></i></div>
                            <div class="bottom_1px reserve_text">
                                <h3><strong>通兑票</strong><button>立即订座</button></h3>
                                <p>有效期内影院到前台兑换迎票</p>
                            </div>                            
                        </li>
                        <li>
                            <div class="icon"><i class="iconfont icon-gouwuchekong"></i></div>
                            <div class="bottom_1px reserve_text">
                                <h3><strong>小卖品</strong><button onClick={this.goCar.bind(this,this.state.reserveData.id,this.state.reserveData.name,this.state.reserveData.address)}>购买</button></h3>
                            </div>                            
                        </li>
                        <li>
                            <div class="icon"><i class="iconfont icon-unie64c"></i></div>
                            <div class="bottom_1px reserve_text">
                                <h3>{this.state.reserveData.address}</h3>
                            </div>                            
                        </li>
                        <li>
                            <div class="icon"><i class="iconfont icon-dianhua"></i></div>
                            <div class="reserve_text">
                               <h3>{num}</h3>
                            </div>                            
                        </li>
                    </ul>
                    <div class="reserve_footer">
                        <ul class="bottom_1px" ref="reserve_ul">
                            <li onClick={this.byValue.bind(this,ticket,0)}><i class="iconfont icon-wodeqianbao_yinhangqia"></i><span>取票</span></li>
                            <li onClick={this.byValue.bind(this,abbr,1)}><i class="iconfont icon-paizhao"></i><span>3D</span></li>
                            <li onClick={this.byValue.bind(this,park,2)}><i class="iconfont icon-dingwei"></i><span>停车</span></li>
                            <li onClick={this.byValue.bind(this,discounts,3)}><i class="iconfont icon-ring"></i><span>优惠</span></li>
                            <li onClick={this.byValue.bind(this,traffic,4)}><i class="iconfont icon-huochepiao"></i><span>交通</span></li>                            
                        </ul>
                        <p>{this.state.footerText}</p>
                    </div>
                </div>
            </div>
        )
    }
    goCar(id,name,address){
        this.state.history.push('/shopcar/'+id+'/'+name+'/'+address)
    }
    gobuyTickets(id){
        this.state.history.push('/rowpiece/'+id)
    }
    byValue(val,n){
        console.log(val)
        this.setState({footerText:val});
        let Ul = this.refs.reserve_ul;
        let fotLi=Ul.children;
        let fotI = Ul.getElementsByTagName('i');
        for(let j=0;j<fotLi.length;j++){
            
            if(j==n){
                fotLi[j].style.borderBottom='3px solid #faab12';
                fotI[j].style.color='#faab12';
                fotI[j].style.borderColor='#faab12';
            }else{
                fotLi[j].style.borderBottom='none';
                fotI[j].style.color='#666';
                fotI[j].style.borderColor='#666';
            }
            
        }
        console.log(fotLi)
    }
    componentWillMount(){
        let id = this.state.match.params.id
        Movieservice.getReserve(id)
        .then((data)=>{
            console.log(data)
            this.setState({reserveData:data});
        })
    }


}


