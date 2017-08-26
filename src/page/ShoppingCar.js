
import React,{Component} from 'react';
import Movieservice from '../services/Movieservice'
import '../css/shopCar.css'







export default class Car extends Component{
    constructor({match}){
        super();
        // console.log(history)
        this.state={
            match,
            shoppingData:[],
            checkedShop:[]
        }
    }
    render(){
        let buynum=0;
        let totalPrices=0;
        let result = [];
        if(this.state.checkedShop.length>0){
            for(let c=0;c<this.state.checkedShop.length;c++){
                buynum+=this.state.checkedShop[c].num;
                totalPrices+=this.state.checkedShop[c].num*this.state.checkedShop[c].maizuo;
                var str="￥"+this.state.checkedShop[c].num+"x"+this.state.checkedShop[c].maizuo;
                result.push(str);
            }
        }
        var newStr = result.join('+');
        var isShow = {
            bottom:buynum>0?'40px':'0px'
        }
        return (
            <div id="set_meal" class="page">
                <div class="set_meal_header">
                    <h2>{this.state.match.params.name}</h2>
                    <p>{this.state.match.params.address}</p>
                </div>
                <div class="set_list">
                    {
                        this.state.shoppingData.map((item,index)=>{
                            return (
                                <div key={index} class="noe_set">
                                    <div class="set_top">
                                        <img src={item.imageUrl}/>
                                        <div class="text">
                                            <h3>{item.name}</h3>
                                            <p>{item.notices}</p>
                                        </div>
                                    </div>
                                    <div class="set_botton">
                                        <p><span>￥{item.maizuo}</span><i>￥{item.cinema}</i></p>
                                        <p>
                                            <button onClick={this.sub.bind(this,index,item)}>-</button>
                                            <input type="text" value={item.num} onChange={this.inpChange.bind(this)} ref="shop_num"/>
                                            <button onClick={this.plus.bind(this,index,item)}>+</button>
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div class="set_meal_footer">
                    <p>不需要</p>
                    <p>购买</p>
                </div>
                <div class="account" style={isShow}>
                    <p>已选件{buynum}商品，总额:￥{totalPrices}</p>
                    <p>{newStr}</p>
                </div>
            </div>
        )
    }
    inpChange(){

    }
    sub(n,val){
        if(this.state.shoppingData[n].num>0){
            for(let j=0;j<this.state.checkedShop.length;j++){
                if(val.id==this.state.checkedShop[j].id){
                    this.state.checkedShop[j].num=this.state.checkedShop[j].num-1;
                    this.setState({checkedShop:this.state.checkedShop})
                    if(this.state.checkedShop[j].num==0){
                        this.state.checkedShop.splice(j,1);
                    }
                }
            }

        }
        

        
    }
    plus(n,val){

        console.log(this.state.checkedShop.length+"长")
        if(this.state.checkedShop.length>0){
            console.log(1)
            console.log(this.state.checkedShop.length+"长2")
            for(let i=0;i<this.state.checkedShop.length;i++){
                if(val.id==this.state.checkedShop[i].id){
                    console.log(2)
                    this.state.checkedShop[i].num=this.state.checkedShop[i].num+1;
                    this.setState({checkedShop:this.state.checkedShop})
                    break;
                }else{
                    console.log(3)
                    this.state.checkedShop.push(val);
                    this.setState({checkedShop:this.state.checkedShop});
                }
            }
        }else{
            console.log(4)
            this.state.shoppingData[n].num=1
            this.setState({shoppingData:this.state.shoppingData});
            val.num=1;
            this.state.checkedShop.push(val);
            this.setState({checkedShop:this.state.checkedShop});
            console.log(this.state.checkedShop)
        }
        
        // var storage=window.localStorage;
        // var data = JSON.stringify(this.state.checkedShop)
        // storage.setItem('buyData',data);
        // var str=storage.getItem('buyData');
        // this.setState({checkedShop:JSON.parse(str)});

    }

    componentWillMount(){
        // var storage=window.localStorage;
        // if(storage.getItem('buyData')){
        //     this.setState({checkedShop:storage.getItem('buyData')})
        // }
        // storage.getItem('buyData');

        var id = this.state.match.params.id
        Movieservice.getShoppingCar(id)
        .then((data)=>{
            console.log(data)
            this.setState({shoppingData:data})
        })
    }




}





