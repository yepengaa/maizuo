
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
//请求影院播放影片的数据
function getPlayApi(id){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.playApi}${id}/film?__t=${new Date().getTime()}`)
        .then((response)=>{
            console.log(response)
            var newArr=response.data.data.filmList.map((item)=>{
                var obj = {};
                obj.filmID = item.filmID;
                obj.filmName = item.filmName;
                obj.posterAddress = item.posterAddress;
                return obj
            })
            resolve(newArr);
        })
        .catch((error)=>{
            console.log(error)
        })
    })
}
//请求影院排片
function getRowPiece(id){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.rowPieceApi}?__t=${new Date().getTime()}&film=0&cinema=${id}`)
        .then((response)=>{
            console.log(response);
            var arr=response.data.data.schedules.map((item)=>{
                var obj={};
                obj.id=item.id;
                obj.hall=item.hall.name;
                obj.imagery=item.imagery;
                obj.price=item.price.min;
                obj.cinema = item.cinema;
                var d = new Date(item.showAt);
                var hour1 = d.getHours>=10?d.getHours:"0"+d.getHours;
                var minute1 = d.getMinutes>=10?d.getMinutes:"0"+d.getMinutes;
                obj.showAt = hour1+":"+minute1;
                var d2 = new Date(item.stopSellingAt)
                var hour2 = d2.getHours>=10?d2.getHours:"0"+d2.getHours;
                var minute2 = d2.getMinutes>=10?d2.getMinutes:"0"+d2.getMinutes;
                obj.stopSellingAt = hour2+":"+minute2;
                if(item.labels.length>0){
                    obj.discounts=item.labels[0].name
                }else{
                    obj.discounts=false
                }
                return obj
            })
            resolve(arr)
        })
        .catch((error)=>{
            console.log(error);
        })
    })
}
//请求小卖品数据
function getShoppingCar(id){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.shoppingCarApi}${id}/item?__t=${new Date().getTime()}`)
        .then((response)=>{
            console.log(response)
            var arr=response.data.data.items;
            var newArr=[]
            for(let i=0;i<arr.length;i++){
                if(arr[i].name.indexOf('套餐')!=-1||arr[i].name.indexOf('12oz')!=-1){
                    newArr.push(arr[i]);
                }
            }
            console.log(newArr)
            var newData=newArr.map((item)=>{
                var obj={}
                obj.id=item.id;
                obj.notices=item.notices[0];
                obj.name=item.name;
                obj.imageUrl=item.extra.sundry.imageUrl;
                obj.cinema=item.price.cinema;
                obj.maizuo=item.price.maizuo;
                obj.num=0;
                obj.isChecked=false;
                return obj;
            })
            resolve(newData);
        })
        .catch((error)=>{
            console.log(error);
        })
    })
}

export default{
    getMovie,
    getReserve,
    getPlayApi,
    getRowPiece,
    getShoppingCar
}


