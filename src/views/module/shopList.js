import React,{Component} from 'react';





export default class Shop extends Comment{
    constructor(){
        super();
        this.state={
            index:0
        }
    }
    render(){
        return (
            <div>
                <ul>
                    {
                        this.props.movieData[this.state.index].movie((item,index)=>{
                            return (
                                <li key={index}>
                                
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}


