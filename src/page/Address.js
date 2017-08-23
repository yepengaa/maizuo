import React , {Component}from 'react'

import Cityservice from '../services/Cityservice'
import '../css/address.css'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Address extends Component{
    constructor({history}){
        super();
        this.state={
            className:'',
            history,
            cityData:[]
        }
    }

    render(){
        return(
            <ReactCSSTransitionGroup
            transitionName="city"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}
            >
                <div id="city" ref="city" class={"page address "+this.state.className}> 
                    <div class="orientation">
                        <h2>GPS定位你所在城市</h2>
                        <ul>
                            <li onClick={this.selectAction.bind(this)}>深圳</li>
                        </ul>
                    </div>
                    <div class="hot_city">
                        <h2>热门城市城市</h2>
                        <ul>
                            <li onClick={this.selectAction.bind(this)}>深圳</li>
                            <li onClick={this.selectAction.bind(this)}>北京</li>
                            <li onClick={this.selectAction.bind(this)}>上海</li>
                            <li onClick={this.selectAction.bind(this)}>广州</li>
                        </ul>
                    </div>
                    <div class="letter">
                        <h2>按字母排序</h2>
                        <ul>
                            {
                                this.state.cityData.map((item,index)=>{
                                    return (
                                        <li key={index} onClick={this.goCity.bind(this,index)} class="bottom_1px">{item.name}</li>
                                    )
                                }) 
                            }
                            
                        </ul>
                    </div>
                    <ul class="city_list">
                        {
                            this.state.cityData.map((item,index)=>{
                                return (
                                    <li key={index}>
                                        <h2 class="city_title">{item.name}</h2>
                                        <ul>
                                            {
                                               item.city.map((city,n)=>{
                                                    return (
                                                        <li key={n} onClick={this.selectAction.bind(this)} class="bottom_1px">{city}</li>
                                                    )
                                               }) 
                                            }
                                            
                                        </ul>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div></div>
                </div>
            </ReactCSSTransitionGroup>
        )
    }
    goCity(n){
        var cityTitle = document.getElementsByClassName('city_title');
        var het=cityTitle[n].offsetTop;
        // console.log(het);
        var timer=setInterval(()=>{
            // var box = document.querySelector("#city");
            var box = this.refs.city;
            box.scrollTop=het-(het-box.scrollTop)/12
            if(het-box.scrollTop<2){
                clearInterval(timer);
                box.scrollTop=het;
            }

        },50)
        
    }
    selectAction(){
        // console.log(this)
        this.setState({className:'leave'});       
        this.state.history.push('/')
    }
    componentWillMount(){
        console.log(12)
        Cityservice.getCity()
        .then((data)=>{
            this.setState({cityData:data})
        })
    }


    componentDidupdate(){
        // console.log(this.className);
    }


}