import React , {Component}from 'react'
import Movieservice from '../services/Movieservice'
import '../css/movie.css'


export default class Me extends Component{
    constructor({history}){
        super();
        this.state={
           movieData:[],
           num:null,
           history
        }
    }
    render(){
        
        return(
            <div id="movie" class="page">
                <ul class="district" ref="district">
                    {
                        this.state.movieData.map((item,index)=>{
                            var obj = index == 0 ? {"display": "block"} : {};
                            return (
                                <li key={index}>
                                    <h2 onClick={this.olShow.bind(this,index)}>{item.district}</h2>
                                    <ol class="movie_list" style={obj} >
                                        {
                                            item.movie.map((list,n)=>{
                                                return (                                                   
                                                    <li key={n} class="bottom_1px" onClick={this.goReserve.bind(this,list.name,list.id)}>
                                                        <h3><strong>{list.name}</strong><span class="iconfont icon-taobaozhongchou4qizuoyoujiantou1"></span></h3> 
                                                        <p class="labels">
                                                            {
                                                                list.labels.map((text,i)=>{
                                                                    return <span key={i}>{text.name}</span>
                                                                })
                                                            }
                                                        </p>
                                                        <p class="address">{list.address}</p>
                                                        <p class="distance">距离未知</p>
                                                    </li>                                                    
                                                )
                                            })
                                        }
                                    </ol>
                                </li>
                            )
                        })
                    }
                </ul>
                <button class="return_top iconfont icon-fanhuidingbu" ref="return_top" onClick={this.goBack.bind(this)}></button>
            </div>
        )
    }
    goReserve(name,id){
        this.state.history.push('/reserve/'+id);
    }
    goBack(){
        
        let timer=setInterval(()=>{
            let scroll=this.refs.district;
            if(scroll.scrollTop<2){
                clearInterval(timer);
                scroll.scrollTop=0;
            }
            scroll.scrollTop=(scroll.scrollTop-scroll.scrollTop/10)
        },30)
    }
    olShow(n){
        let list=document.getElementsByClassName('movie_list');       
        for(let j=0; j<list.length; j++){
            if(j==n){
                list[j].style.display="block";
            }else{
                list[j].style.display="none";
            }
        }
        if(n==this.state.num){
            list[n].style.display="none";
            this.setState({num:null})
        }else{
            this.setState({num:n})
        }
       
    }
    componentWillMount(){
        Movieservice.getMovie()
        .then((data)=>{
            // console.log(100)
            // console.log(data)
            this.setState({movieData:data});
            this.myscroll();
        })
    }
    componentUpMount(){
        this.myscroll();
        
    }
    myscroll(){
        let listWrap=this.refs.district;
        let returnTop =this.refs.return_top;
        listWrap.addEventListener('scroll',function(){
            // console.log(listWrap.scrollTop)
            if(listWrap.scrollTop>300){
                // console.log(returnTop)
                returnTop.style.bottom='40px';
            }else{
                returnTop.style.bottom='-40px';
                               
            }
        },false)
    }

}