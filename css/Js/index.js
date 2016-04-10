/**
 * Created by zhangbin on 2015/12/22.
 */
$(function(){
    $(window).scroll(function () {
        if ($(window).scrollTop() > 652) {
            if ($('#navsIndex').length > 0) {
                $('#navsIndex').css({ "position": "fixed", "width": "100%", "left": "0", "top": "0", "z-index": "999999", "max-width": "100%",  "background": "#000000"});
                $('#navsIndex .nav').css({ "left": "50%", "margin-left": "-500px" });
                $("#seinc").css({ "position": "fixed", "top": "80px", "left": "50%", "margin-left": "-500px" });
            }
        } else {
          
            $('#navsIndex').css({ "position": "static", "width": "auto", "left": "0", "top": "0", "z-index": "999999", "max-width": "100%", "background": "none" });
            $('#navsIndex .nav').css({ "left": "0", "margin-left": "0" });
            $("#seinc").css({ "position": "absolute", "bottom": "80px", "top": "250px", "left": "38px", "margin-left": "0" });
        }
    });
    $('#menuCon ul li dl dd').click(function (e) {

        e.stopPropagation();
    });
    $('.level1a').click(function () {
        var levelId = $(this).data('id');
        GetLevel2ForIndex(levelId);
    });
    function GetLevel2ForIndex(levelId)
    {
        $.get("/Umbraco/Api/ArticlesService/GetLevel2ForIndex", { contentId: levelId }).done(function (data) {
            var articlesContainer = $('.list').first();
            articlesContainer.html('');
            if (data) {

                for (var i = 0; i < data.length; i++) {
                    var art = data[i];
                    var article = $('<li>' +
            '<div class="pic"><img src="~/umbraco/images/car_05.jpg"><a href="javascript:;" class="z"></a></div>' +
            '<h3><a href="javascript:;" class="atitle">奶爸新宠</a></h3>' +
            '<p><a href="javascript:;" class="aabs">dd</a></p>' +
            '<div class="b"><a href="javascript:;" class="r">2015-02-05</a><a href="javascript:;" class="l">Read More</a></div>' +
            '<span class="label">对比</span></li>');
                    var img = article.find('img').first();
                    img.attr('src', art.ImageUrl);
                    var title = article.find('.atitle').first();
                    title.text(art.Title);
                    title.attr('href', art.DetailUrl);
                    var abs = article.find('.aabs').first();
                    abs.text(art.Title);
                    abs.attr('herf', art.DetailUrl);
                    var l = article.find('.l').first();
                    l.attr('href', art.DetailUrl);
                    var label = article.find('.label').first();
                    label.text(art.ParentName);
                    var date = article.find('.r').first();
                    date.text(art.PublishDateString);
                    articlesContainer.append(article);
                }


            }
        });
    }
    $('#navsIndex div a').click(function (e) {
        var levelId = $(this).data('id');
        if (levelId == 0)
        {
            getAll();
            return;
        }
        GetLevel2ForIndex(levelId);
        e.stopPropagation();
    });

   


    function getAll()
    {
        $.get("/Umbraco/Api/ArticlesService/GetAllForIndex").done(function (data) {
            if (data) {
                var articlesContainer = $('.list').first();
                articlesContainer.html('');
                for (var i = 0; i < data.length; i++) {
                    var art = data[i];
                    var article = $('<li>' +
            '<div class="pic"><a href="" class="imgLink"><img src="~/umbraco/images/car_05.jpg"></a><a href="javascript:;" class="z"></a></div>' +
            '<h3><a href="javascript:;" class="atitle">奶爸新宠</a></h3>' +
            '<p><a href="javascript:;" class="aabs">dd</a></p>' +
            '<div class="b"><a href="javascript:;" class="r">2015-02-05</a><a href="javascript:;" class="l">Read More</a></div>' +
            '<span class="label">对比</span></li>');
                    var img = article.find('img').first();
                    img.attr('src', art.ImageUrl);
                    var imgLink = article.find('.imgLink').first();
                    imgLink.attr('href', art.DetailUrl);
                    var title = article.find('.atitle').first();
                    title.text(art.Title);
                    title.attr('href', art.DetailUrl);
                    var abs = article.find('.aabs').first();
                    abs.text(art.Abstract);
                    abs.attr('herf', art.DetailUrl);
                    var l = article.find('.l').first();
                    l.attr('href', art.DetailUrl);
                    var label = article.find('.label').first();
                    label.text(art.ParentName);
                    var date = article.find('.r').first();
                    date.text(art.PublishDateString);
                    articlesContainer.append(article);
                }


            }
        });
    }
    getAll();

});