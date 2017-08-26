import React,{Component} from 'react';
import '../../css/memain.css'

export default class Memain extends Component{
    render(){
        return (
            <div class="user">
                <div class="user_message">
                    <div class="portrait"><img src="../../static/img/tou.jpg"/></div>
                    <div class="message">
                        <p>手机用户{this.props.userName}</p>
                        <p>ID545665545</p>
                        <p><button onClick={this.quit.bind(this)}>退出</button></p>
                    </div>
                </div>
                <div class="user_list">
                    <ul>
                        <li>
                            <p><i class="iconfont icon-shape"></i><span>影票订单</span></p>
                            <p><span>0</span>张<i class="iconfont icon-jiantouxiaozuoyou"></i></p>
                        </li>
                        <li>
                            <p><i class="iconfont icon-qingdan"></i><span>影票代付订单</span></p>
                            <p><span>0</span>张<i class="iconfont icon-jiantouxiaozuoyou"></i></p>
                        </li>
                        <li>
                            <p><i class="iconfont icon-daifukuan"></i><span>商城订单</span></p>
                            <p><i class="iconfont icon-jiantouxiaozuoyou"></i></p>
                        </li>
                        <li class="bottom_1px">
                            <p><i class="iconfont icon-diyongquan"></i><span>我的现金券</span></p>
                            <p><span>0</span>张<i class="iconfont icon-jiantouxiaozuoyou"></i></p>
                        </li>
                        <li class="bottom_1px">
                            <p><i class="iconfont icon-yue-copy"></i><span>账户余额</span></p>
                            <p><span>0</span>元<i class="iconfont icon-jiantouxiaozuoyou"></i></p>
                        </li>
                        <li>
                            <p><i class="iconfont icon-wodeqianbao_yinhangqia"></i><span>我的卖座卡</span></p>
                            <p><span>0</span>张<i class="iconfont icon-jiantouxiaozuoyou"></i></p>
                        </li>
                        <li>
                            <p><i class="iconfont icon-shezhi"></i><span>设置</span></p>
                            <p><i class="iconfont icon-jiantouxiaozuoyou"></i></p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

    quit(){
        this.props.isQuit();
        var d=new Date();
        d.setDate(d.getDate-2);
        document.cookie=encodeURIComponent("users")+'=;expires='+d;
    }
}