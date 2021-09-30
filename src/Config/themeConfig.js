import logo from '../images/price.png'
export const themeConfig = {
    web:{
        webName:"Maxima",
        webLogoImage:`url(${logo})`,
    },
    layout:{
        isRTL:false,
        skin:'dark',
        routerTransition:'fadeIn',
        type:'vertical',
        contentWidth:'full',
        menu:{
            isHidden:false,
            isCollapsed:false,
        },
        navbar:{
            type:'floating',
            backgroundColor:'#fff',
        },
        footer:{
            type:'static',
        },
        customizer:false,
        scrollTop:true
    },
}