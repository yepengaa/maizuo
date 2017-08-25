import React,{Component} from 'react'
import Movieservice from '../services/Movieservice'
import '../css/rowpPiece.css'


let requestData=null;
let bannerMove=null;
export default class RowPiece extends Component{
    constructor({match}){
        super();
        this.state={
            match,
            topBanner:[],
            PieceData:[]
        }
    }
    render(){
        return (
            <div id="rowp_piece" class="page">
                 <div class="piece_banner" ref="piece_banner">
                     <ul class="banner_list" ref="banner_list">
                         {
                            this.state.topBanner.map((item,index)=>{
                                return (
                                    <li key={index}><img src={item.posterAddress} class="imag"/></li>
                                )
                            })
                         }
                     </ul>
                 </div>
            </div>
        )
    }

    componentWillMount(){
        var id = this.state.match.params.id;
        console.log(id)
        Movieservice.getPlayApi(id)
        .then((data)=>{
            this.setState({topBanner:data});
            requestData(data.id);
            bannerMove();
        });
        let that = this;
        requestData=function(id){
            console.log(6896)
            Movieservice.getRowPiece(id)
            .then((data)=>{
                that.setState({PieceData:data});
            })
        }
    }
    componentDidMount(){
        bannerMove=()=>{
            var piece_banner = this.refs.piece_banner;
            var ulList = this.refs.banner_list;
            var ulLi = ulList.children;
            var distance = (piece_banner.offsetWidth-ulLi[0].offsetWidth)/2
            var img = document.getElementsByClassName('imag');
            ulList.style.left = distance +"px";
      
           var oW=0;
           var downX=0;
           var spert=0;
           var X=0;
           var that=this;
            piece_banner.addEventListener("touchstart", function(e) {
                var touches = e.touches[0];
                oW = touches.clientX - ulList.offsetLeft;
                downX = touches.clientX
                //阻止页面的滑动默认事件
                document.addEventListener("touchmove",defaultEvent,false);
               },false)
              
               document.addEventListener("touchmove", function(e) {
                //    console.log(ulList.offsetWidth)
                    var touches = e.touches[0];
                    X = touches.clientX - oW
                    spert=touches.clientX-downX;
                    console.log(ulLi[0].offsetLeft);
                   
                        ulList.style.left = (touches.clientX - oW) +"px";
            
                    
                 
               },false);               
               document.addEventListener("touchend",function() {
                   console.log(ulList.offsetLeft+spert)
                 
                    if(spert<0){
                        for(let i=0;i<ulLi.length;i++){
                            if(Math.abs(spert)>ulLi[i].offsetLeft&&Math.abs(spert)<(ulLi[i].offsetLeft+ulLi[i].offsetWidth)){
                                ulList.style.left = (ulList.offsetLeft-ulLi[i].offsetLeft)+"px";
                                img[i].style.opacity=1;
                                var id=that.state.topBanner[i].id
                                console.log(id)
                            }
                        }
                    }else if(spert>0){
                        for(let j=0;j<ulLi.length;j++){
                            if(spert>ulLi[j].offsetLeft&&spert<(ulLi[j].offsetLeft+ulLi[j].offsetWidth)){
                                ulList.style.left = (ulList.offsetLeft+ulLi[j].offsetLeft)+"px";
                            }
                        }
                    }
                    if(X>distance){
                        ulList.style.left = distance+'px';
                    }
                    else if(X<=-(ulList.offsetWidth-distance-ulLi[0].offsetWidth)){
                        ulList.style.left = -(ulList.offsetWidth-distance-ulLi[0].offsetWidth)+'px'
                    }
                    document.removeEventListener("touchmove",defaultEvent,false);
               },false);
               function defaultEvent(e) {
                e.preventDefault();
               }
            
        }


    }





}





