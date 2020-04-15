// 登录
var divLogin=document.querySelector('.header .login');
divLogin.onclick=function(){
    var divLoginArea=document.querySelector('.login-area');
    divLoginArea.style.display='block';
}
var divClose=document.querySelector('.login-area .close');
divClose.onclick=function(){
    var divLoginArea=document.querySelector('.login-area');
    divLoginArea.style.display='none';
}
// 轮播图
function imagesSwitch(n){
   var value='-'+n+"00%";
   var bannerImg=document.querySelector('.banner-img');
   bannerImg.style.marginLeft=value;
   //每次图片轮换清除active
   var li=document.querySelector('.banner-title .active');
     li.className=" ";
   var lis=document.querySelector('.banner-title');
   lis.children[n].className='active';
}
var timer="";
var currentIndex=0;
function start(){
    clearInterval(timer);
    timer=setInterval(function(){
      currentIndex++;
      if(currentIndex==5)
      {
          currentIndex=0;
      }
      imagesSwitch(currentIndex);
    },3000);
 }
 function stop(){
     clearInterval(timer);
 }
 start();
//设置鼠标移入事件
var mouseBannerImg=document.querySelector('.banner-img');
mouseBannerImg.onmouseover=function(){
    stop();
}
mouseBannerImg.onmouseout=function(){  
     start();
}

var mouseOnlis=document.querySelector('.banner-title');
mouseOnlis.onmouseover=function(e){
  var lisArray=Array.from(mouseOnlis.children);
  var liIndex=lisArray.indexOf(e.target);
  currentIndex=liIndex;
  imagesSwitch(currentIndex);
}

//新闻轮播

function newsSWitch(n){
  var value="-"+n+"00%";
  var newsBolcks=document.querySelector('.news-container .news-banner .news-blocks');
  newsBolcks.style.marginLeft=value;

  // 清除active
  var activeTitles=document.querySelector('.news-container .title-container .active');
  activeTitles.className="";

  var title=document.querySelector('.news-container .title-container');
    title.children[n].className='active';

}
var titles=document.querySelector('.news-container .title-container');
titles.onmouseover=function(e){
  if(e.target.tagName!='LI')
  {
    return;
  }
   var li=Array.from(titles.children);
   var Index=li.indexOf(e.target);
   if(Index>=5)
   {
     return;
   }
   newsSWitch(Index);
   
}
