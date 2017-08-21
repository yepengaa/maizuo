
//首页轮播http://m.maizuo.com/v4/api/film/now-playing?__t=1503148621966&page=1&count=5
const homeBannerApi = "/v4/api/billboard/home";
//首页热映http://m.maizuo.com/v4/api/film/now-playing?__t=1503294784254&page=1&count=5
const homeHot = '/v4/api/film/now-playing?page=1&count=5';
//首页即将上映http://m.maizuo.com/v4/api/film/coming-soon?__t=1503294784256&page=1&count=3
const beAboutTo = '/v4/api/film/coming-soon?page=1&count=3'
//详情页信息http://m.maizuo.com/v4/api/film/3828?__t=1503302814754
const detailsApi = '/v4/api/film/'
//请求影片数据http://m.maizuo.com/v4/api/film/now-playing?page=1&count=7
const filmApi = '/v4/api/film/now-playing?&count=7'
export default{
    homeBannerApi,
    homeHot,
    beAboutTo,
    detailsApi,
    filmApi
}


