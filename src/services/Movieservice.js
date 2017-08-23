
import axios from 'axios'
import API from '../api/Api'

function getMovie(){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.movieApi}?__t=${new Date().getTime()}`)
        .then((response)=>{
            console.log(response);
            if(response.data.status==0){
                console.log(55)
                var arr=response.data.data.cinemas;
                var newArr=[]
                for(let i=0;i<arr.length;i++){
                    if(newArr.indexOf(arr[i].district.name)==-1){
                        newArr.push(arr[i].district.name)
                    }
                }
                // console.log(newArr);
                var newData=[];
                for(let j=0;j<newArr.length;j++){
                    var obj={};
                    var movie=[];
                    obj.district=newArr[j]
                    obj.movie = movie;
                    newData.push(obj);
                }
                for(let c=0;c<arr.length;c++){
                    for(let d=0;d<newData.length;d++){
                        if(arr[c].district.name==newData[d].district){
                            newData[d].movie.push(arr[c]);
                        }
                    }
                }
                console.log(newData);
                resolve(newData);
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    })
}
//请求预定页面数据
function getReserve(id){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.reserveApi}${id}?__t=${new Date().getTime()}`)
        .then((response)=>{
            console.log(response)
            resolve(response.data.data.cinema)
        })
        .catch((error)=>{
            console.log(error)
        })
    })
}



export default{
    getMovie,
    getReserve
}


