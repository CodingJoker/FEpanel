/**
 * Created by zhangbin on 2015/12/23.
 */
var w = document.body.clientWidth;
function yz(_this) {
    if ($(_this).hasClass('no')) {
        return;
    } else {
        var text = $(_this).html();
        $(_this).addClass('no');
        var t = 30;
        var timer = null;
        $(_this).html(t + 's');
        clearInterval(timer);
        timer = setInterval(function () {
            t--;
            $(_this).html(t + 's');
            if (t <= 0) {
                clearInterval(timer);
                $(_this).html(text);
                $(_this).removeClass('no');
            }
        }, 1000);
    }
}
$(function(){
    //菜单显示与隐藏
    $('#meunIco').click(function(){
        //$('#bg').show();
        $('#menuCon').show(300);
    });
    $('#menuCon .clos').click(function(){
        //$('#bg').hide();
        $('#menuCon').hide();
    });
   
        $('#menuCon ul li').attr('data-f',0);
   
    $('#menuCon ul li').click(function(e){
        var _this = this;


            if ($(_this).attr('data-f') == 0) {
                $('#menuCon ul li').find('dl').hide(300);
                $('#menuCon ul li').attr('data-f', 0);
                var h=$(_this).find('dl dd').length*49+'px';
                $(_this).find('dl').show().animate({"height":h},300);
                $(_this).attr('data-f',1);
                $('#menuCon ul li div.t').removeClass('active');
                $(_this).find('div.t').addClass('active');

            }else{
                $(_this).find('dl').animate({"height":0},300,function(){
                    $(_this).find('dl').hide();
                });
                $(_this).attr('data-f',0);
                $(_this).find('div.t').removeClass('active');
            }
        
    });
  
    $('#fxBtn').click(function(){
        if($('#fxBox').is(':hidden')){
            $('#fxBox').show(300);
        }else{
            $('#fxBox').hide();
        }

    });
    $('#fxBoxsy').click(function(){
        if($('#er').is(':hidden')){
            $('#er').show(300,function(){
                function heidEr(ev){
                    if(!$(ev.target).is('#er p')&&!$(ev.target).is('#er img')&&!$(ev.target).is('#er li')&&!$(ev.target).is('#er a')){
                        $("body").unbind("click", heidEr);
                        $('#er').hide();
                    }
                }
                $('body').bind('click',heidEr);
            });


        }else{
            $('#er').hide();
        }
    });
    //用户登录框显示与隐藏
    $('#userBtn').click(function(){
        $('#bg').show();
        $('#userBox').show(300);
    });
    $('#userBtn1').click(function () {
        window.location.href = "/umbraco/surface/member/EditUserInfo";
    });
    $('#userBox .clos').click(function(){
        $('#bg').hide();
        $('#userBox').hide();
    });
    // 搜索显示与隐藏
    $('#seachBox .seach,#seachBox2 .seach').click(function(){
        $('#seachBox,#seachBox2').width('auto');
        if(w<=768){
            $('#seachBox,#seachBox2').width('100%');
        }
        $('#seachBox a.clos,#seachBox2 a.clos').show().css({"display":"inline-block"});
        $('#seachBox input,#seachBox2 input').show(300);
       // $('#seinc,#seinc2').show(300);
    });
    $('#seachBox a.clos,#seachBox2 a.clos').click(function(){
        $('#seachBox,#seachBox2').width('auto');
        $('#seachBox').width('46px');
        $('#seachBox a.clos,#seachBox2 a.clos').hide();
        $('#seachBox input,#seachBox2 input').hide();
        $('#seinc,#seinc2').hide();
    });
    //弹出框
    $('#adt a.clos').click(function () {

        $('#adt').animate({ "width":'63px' }, 300);
    });
    !function(){
        if(w>768){
            var cur=0;
            var timer=0;
            $('#bannersw ul').html($('#bannersw ul').html()+$('#bannersw ul').html());
            $('#bannersw ul li').width(w+'px');
            $('#bannersw ul').width($('#bannersw ul li').length*$('#bannersw ul li:eq(0)').width()+'px');

            $('#bannersw ul').css({position:"absolute",left:"0",top:'0',height:"652px"});
            $('#adt div.r ul li').eq(1).addClass('pitchon');
            $('#bannersw ul li').eq(0).show();
            $('#bannersw ul li').eq(cur).show();
            $('#adt div.r ul li').click(function(){
                if($(this).index()==0){
                    $('#adt').hide();
                    return;
                }
                cur=$(this).index()-1;
                if($(this).index()!=0){
                    $('#adt div.r ul li').removeClass('pitchon');
                    $(this).addClass('pitchon');
                    $('#bannersw ul').animate({left:-cur*w+'px'},500);
                }

                $('#adt .box').hide();
                $('#adt .box').eq(cur).show(300);
            });
            if($('#adt').length>0){
                timer=setInterval(setHead,5000);
            }
            function setHead(){
                cur++;
                if(cur>$('#bannersw ul li').length/2){
                    cur=0;
                    $('#bannersw ul').css({left:-cur*w+'px'});
                    cur++;
                }
                $('#bannersw ul').animate({left:-cur*w+'px'},500,function(){
                    $('#adt div.r ul li').removeClass('pitchon');
                    $('#adt div.r ul li').eq(cur+1).addClass('pitchon');
                });
            }
            function setHeadj(){
                cur--;
                if(cur<0){
                    cur=$('#bannersw ul li').length/2;
                    $('#bannersw ul').css({left:-cur*w+'px'});
                    cur--;
                }
                $('#bannersw ul').animate({left:-cur*w+'px'},500,function(){
                    $('#adt div.r ul li').removeClass('pitchon');
                    $('#adt div.r ul li').eq(cur+1).addClass('pitchon');
                });
            }
            $('#header').mouseenter(function(){
                clearInterval(timer);
            });
            $('#header').mouseleave(function(){
                timer=setInterval(setHead,5000);
            });
            $('#header .prev').click(function(){
                setHeadj();
            });
            $('#header .next').click(function(){
                setHead();
            });
        }

    }();
    //用户导航
    $('#navuser').hover(function(){
            $(this).find('dl').show(300);
        },function(){
        $(this).find('dl').hide();
    });
    $('#seinc .clos,#seinc2 .clos').click(function(){
        $('#seinc,#seinc2').hide();
    });
    //二级导航的效果
    $('#nav a').mouseenter(function(){
       
            var id = $(this).data("id");
            var box = $('#navBranch').find('.box').first();
            box.html('');
            if (id == 0)
            {
                return;
            }
            else if (id == 1068)
            {
                var a1 = $('<a href="/umbraco/surface/Article/ArticleList?id=1069">新车</a>');
                var a2 = $('<a href="/umbraco/surface/Article/ArticleList?id=1074">车展</a>');
                var a3 = $('<a href="/umbraco/surface/Article/ArticleList?id=1075">人物</a>');
                var a4 = $('<a href="/umbraco/surface/Article/ArticleList?id=1076">赛车</a>');
                box.append(a1);
                box.append(a2);
                box.append(a3);
                box.append(a4);
            }
            else if (id == 1070)
            {
                var a1 = $('<a href="/umbraco/surface/Article/ArticleList?id=1077">试车</a>');
                var a2 = $('<a href="/umbraco/surface/Article/ArticleList?id=1078">对比</a>');
                var a3 = $('<a href="/umbraco/surface/Article/ArticleList?id=1079">MotorTrend</a>');
                box.append(a1);
                box.append(a2);
                box.append(a3);
      
            }
            else if (id == 1071)
            {
                var a1 = $('<a href="/umbraco/surface/Article/ArticleList?id=1080">人文</a>');
                var a2 = $('<a href="/umbraco/surface/Article/ArticleList?id=1081">导购</a>');
                var a3 = $('<a href="/umbraco/surface/Article/ArticleList?id=1082">技术控</a>');
                box.append(a1);
                box.append(a2);
                box.append(a3);
            }
            else if (id == 1072)
            {
                var a1 = $('<a href="/umbraco/surface/Article/ArticleList?id=1083">年度车型评选</a>');
                var a2 = $('<a href="/umbraco/surface/Article/ArticleList?id=1084">年度车轮评选</a>');
                var a3 = $('<a href="/umbraco/surface/Article/ArticleList?id=1085">高校汽车辩论赛</a>');
                box.append(a1);
                box.append(a2);
                box.append(a3);
            }
            else if (id == 1073)
            {
                var a1 = $('<a href="/umbraco/surface/Article/ArticleList?id=1086">视频</a>');
                var a2 = $('<a href="/umbraco/surface/Article/ArticleList?id=1087">用车</a>');
                var a3 = $('<a href="/umbraco/surface/Article/ArticleList?id=1088">改装</a>');
                box.append(a1);
                box.append(a2);
                box.append(a3);
            }
            if ($('#navBranch').is(':hidden')) {
            $('#navBranch').show().animate({"height":"58px"},300);
        }
    });

    //二级导航的效果
    $('#nav2 a').mouseenter(function () {
        if ($('#navBranch').is(':hidden')) {
            $('#navBranch').show().animate({ "height": "58px" }, 300);
        }
    });
    !function(){
        var timer=null;
        $('#navBranch').mouseenter(function(){
            clearTimeout(timer);
        });
        $('#navBranch,#nav,#nav2').mouseleave(function(){
            timer=setTimeout(function(){
                $('#navBranch').animate({"height":0},300,function(){
                    $('#navBranch').hide();
                });
            },2000);
        });
    }();
    //复选框效果
    $('#through').click(function(){
        if($(this).hasClass('on')){
            $(this).removeClass('on');
        }else{
            $(this).addClass('on');
        }
    });
    //短信效果
    $('#shortMess,#shortMess2').click(function(){
       
    });


    //切换
    $('#switchTitle a').click(function(){
        $('#switchTitle a').removeClass('on');
        $(this).addClass('on');
        $('#switchCon .switch').hide();
        $('#switchCon .switch').eq($(this).index()).show(300);
    });
    //返回顶部
    $('#goTop').click(function(){
        $('html,body').animate({scrollTop:0},500);
    });
    if($('#goTop').length>0){
        $(window).scroll(function(){
            var t=$(document).scrollTop();
            if(t>50){
                $('#goTop').show();
            }else{
                $('#goTop').hide();
            }
        });
    }
    //编辑
    $('#user .b').click(function (){
        $(this).hide();
        $(this).parents('li').find('a.sq').show();
        $(this).parents('li').find('div.xz').show(300);
    });
    $('#user .sq').click(function (){
        $(this).hide();
        $(this).parents('li').find('a.b').show();
        $(this).parents('li').find('div.xz').hide(300);
    });

    //移动端导航
    if(document.querySelector('#nsMenuBtn')){
        document.querySelector('#nsMenuBtn').addEventListener('touchstart',function(ev){
            if($('#nav').is(':hidden')||$('#nav2').is(':hidden')){
                $('.bgBox').show();
                $('#nav,#nav2').fadeIn();
            }else{
                $('.bgBox').hide();
                $('#nav,#nav2').hide();
            }
            ev.preventDefault();
        },false);
    }

    $('#sex a.fx').click(function(){
        $('#sex a.fx').removeClass('on');
        $(this).addClass('on');
    });

});

//没有内容了
function noList(obj){
    $(obj).addClass('z').html('没有内容了');
    setTimeout(function(){
        $(obj).fadeOut();
    },3000);
}

//回复框
function messHtml(){
    var html='';
    //html+='<div class="mess mess2 messAppend" style="display: none;">';
    html+=  '<div class="head">';
    html+=      '<span>回复@jake677：</span>';
    html+=  '</div>';
    html+=  '<div class="c">';
    html+=      '<div class="area">';
    html+=          '<textarea name="" id=""></textarea>';
    html+=      '</div>';

    html+=      '<div class="sub">';
    html+=          '<span>（200字）</span>';
    html+=          '<a href="javascript:;" class="sub">提交</a>';
    html+=          '<a href="javascript:;" class="clos">关闭</a>';
    html+=      '</div>';
    html+=  '</div>';
    //html+='</div>';
    var oDiv=document.createElement('div');
    $(oDiv).addClass('mess mess2 messAppend').css({"display":"none"});
    $(oDiv).html(html);
    return $(oDiv);
}


//搜索相关
var searchIndex = 0;
var searchWord = "";
var perPageCount = 4;
var searchResults = $("#seinc");
var ul = searchResults.find("ul").first();
var up = searchResults.find('.n').first();
var down = searchResults.find('.p').first();
down.click(function () {
    searchIndex++;
    doSearch();
});
up.click(function () {
    searchIndex--;
    doSearch();
});
$("#searchInput").keypress(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        searchIndex = 0;
        doSearch();
    }

});
$("#searchInput").change(function () {
    searchIndex = 0;
    doSearch();
});
$('#searchBtn').click(function () {
    searchIndex = 0;
    doSearch();
});

var doSearch = function () {
    var keyWord = $('#searchInput').val();
    $.get("/Umbraco/Api/ArticlesService/GetSearchResult", { keyWord: keyWord, index: searchIndex, perPageCount: perPageCount }).done(function (data) {
        var count = 0;

        ul.html('');
        var searchCountEl = $('#searchCount');

        if (data) {
            count = data.Result.length;
            for (var i = 0; i < count; i++) {
                var art = data.Result[i];
                var article = $('<li>' +
           '<div class="i">' +
               '<a href="javascript:;" class="detailUrl"><img src="~/umbraco/images/i.jpg" class="thumb"></a>' +
          ' </div>' +
          ' <div class="c">' +
               '<h4><a href="javascipt:;" class="tt detailUrl" >时尚前沿</a></h4>' +
               '<p><a href="javascript:;" class="aabs detailUrl" >一台携带着法拉利基因的3.0升双涡轮增压6缸</a><span><a href="javascript:;" class="detailUrl">Read More</a></span></p>' +
          ' </div>' +
       '</li>');
                var img = article.find(".thumb").first();
                img.attr('src', art.ImageUrl);
                var title = article.find(".tt").first();
                title.text(art.Title);
                var abs = article.find(".aabs").first();
                abs.text(art.Abstract);
                 article.find("a").each(function () {
                    $(this).attr('href', art.DetailUrl);
                });
                
                ul.append(article);
            }
        }
        if (count == 0) {
            up.hide();
            down.hide();
            searchCountEl.text('已搜到' + 0 + '个相关结果');
        }
        else if (searchIndex < 1) {
            up.hide();
        }
        else {
            up.show();

        }

        if (data.CurrentCount < data.TotalCount) {
            down.show();
        }
        else {
            down.hide();
        }
        searchCountEl.text('已搜到' + data.TotalCount + '个相关结果');
        $('#seinc,#seinc2').show(300);
    });
}