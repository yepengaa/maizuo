import React , {Component}from 'react'

import '../css/film.css'
import HomeServices from '../services/Homeservices'


let myscroll;
export default class film extends Component{
    constructor({history}){
        super();
        this.state={
            hotData:[],
            comingSoonData:[],
            isChecked:true,
            history
        }
    }
    render(){
        let hotColor=this.state.isChecked?'checkedColor':'';
        let beColor=this.state.isChecked?'':'checkedColor';
        let hotShow = {
            display:this.state.isChecked?'block':'none'
        }
        let beShow = {
            display:this.state.isChecked?'none':'block'
        }
        return(
            <div class="page">
                <div class="film" ref="film">
                    <div class="wrap">
                        <div class="nav">
                            <button class={hotColor} onClick={this.hotChecked.bind(this)}>正在热映</button>
                            <button class={beColor} onClick={this.beChecked.bind(this)}>即将上映</button>
                        </div>
                        <div class="main">
                            <div class="hot_showing" style={hotShow}>
                                {
                                    this.state.hotData.map((item,index)=>{
                                        return (
                                            <div class="list" key={index} onClick={this.goDetails.bind(this,item.id)}>
                                                <img src={item.coverImg}/>
                                                <div class="message">
                                                    <h2>
                                                        <p><strong>{item.name}</strong></p>
                                                        <p><i>{item.grade}分</i><span class="iconfont icon-taobaozhongchou4qizuoyoujiantou1"></span></p>
                                                    </h2>
                                                    <div>电视剧京东方</div>
                                                    <div>
                                                        <p><span>156</span>家影院</p>
                                                        <p class="buy"><span>1565455</span>认购票</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                
                            </div>
                            <div class="be_about" style={beShow}>
                                {
                                    this.state.comingSoonData.map((item,index)=>{
                                        return (
                                            <div class="list" key={index} onClick={this.goDetails.bind(this,item.id)}>
                                                <img src={item.coverImg}/>
                                                <div class="message">
                                                    <h2>
                                                    <strong>{item.name}</strong><span class="iconfont icon-taobaozhongchou4qizuoyoujiantou1"></span>                                 
                                                    </h2>
                                                    <p>{item.intro}</p>
                                                    <p><span>{item.premiereAt}</span>　<span>{item.weekDay}</span></p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    goDetails(id){
        this.state.history.push('/details/'+id)
    }
    hotChecked(){
        this.setState({isChecked:true})
    }
    beChecked(){
        this.setState({isChecked:false});
        HomeServices.getComingSoon(1)
        .then((data)=>{
            // console.log(data)
            this.setState({comingSoonData:data})
            myscroll.refresh()
        })

    }
    componentWillMount(){
        // console.log(33)
        //获取热映数据
        
        HomeServices.getFilmHot(1)
        .then((data)=>{
            // console.log(data)
            this.setState({hotData:data})
            myscroll.refresh()
        });
    }
    componentDidMount(){
        // console.log(this.refs.film)
        let scroll=myscroll = new IScroll(this.refs.film,{
            scrollbars: true
        })
        let n=1;
        scroll.on("scrollEnd",()=>{
            var Y = scroll.y-scroll.maxScrollY;
            if(Y==0){
                // console.log(11)
                n++;
                if(this.state.isChecked){
                    HomeServices.getFilmHot(n)
                    .then((data)=>{
                        // console.log(22)
                        // console.log(data)
                        let newData=this.state.hotData.concat(data)
                        this.setState({hotData:newData})
                        scroll.refresh()
                    });
                }else if(!this.state.isChecked){
                    // console.log(33)
                    HomeServices.getComingSoon(n)
                    .then((data)=>{
                        // console.log(data)
                        let newData=this.state.comingSoonData.concat(data)
                        this.setState({comingSoonData:newData})
                        scroll.refresh()
                    })
                }
            }
            
        })
        
    }
}