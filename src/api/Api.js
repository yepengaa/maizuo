
//首页轮播http://m.maizuo.com/v4/api/film/now-playing?__t=1503148621966&page=1&count=5
const homeBannerApi = "/v4/api/billboard/home";
//首页热映http://m.maizuo.com/v4/api/film/now-playing?__t=1503294784254&page=1&count=5
const homeHot = '/v4/api/film/now-playing?page=1&count=5';
//首页即将上映http://m.maizuo.com/v4/api/film/coming-soon?__t=1503294784256&page=1&count=3
const beAboutTo = '/v4/api/film/coming-soon?page=1&count=3'
//详情页信息http://m.maizuo.com/v4/api/film/3828?__t=1503302814754
const detailsApi = '/v4/api/film/'
//请求影片热映数据http://m.maizuo.com/v4/api/film/now-playing?page=1&count=7
const filmApi = '/v4/api/film/now-playing?&count=7'
//请求即将上映http://m.maizuo.com/v4/api/film/coming-soon?page=1&count=7
const comingSoonApi = '/v4/api/film/coming-soon?count=7'
//城市数据http://m.maizuo.com/v4/api/city?__t=1503452398479
const addressApi = '/v4/api/city'
//影院数据http://m.maizuo.com/v4/api/cinema?__t=1503471947023
const movieApi = '/v4/api/cinema'
//预定数据http://m.maizuo.com/v4/api/cinema/5901?__t=1503495072690
const reserveApi = '/v4/api/cinema/'
//影院上播映影片http://m.maizuo.com/v4/api/cinema/230/film?__t=1503648429141
const playApi = '/v4/api/cinema/'
//影院排片信息http://m.maizuo.com/v4/api/schedule?__t=1503626835273&film=0&cinema=4895
const rowPieceApi = '/v4/api/schedule'
//请求小卖品数据http://m.maizuo.com/v4/api/cinema/256/item?__t=1503712466509
const shoppingCarApi = '/v4/api/cinema/'

export default{
    homeBannerApi,
    homeHot,
    beAboutTo,
    detailsApi,
    filmApi,
    comingSoonApi,
    addressApi,
    movieApi,
    reserveApi,
    playApi,
    rowPieceApi,
    shoppingCarApi
}


