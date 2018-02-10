// @St. 2016-01-27-17.14
//      2016-02-13-08.36
//      2016-02-14-21.06

// init controller
//var controller = new ScrollMagic.Controller();
var defaultName = {
    title: '',
    from: '',
    to:   '',
    wish: ''
};

var hashKey = {
    key:     '?d~',
    // symbol: {
    //     start:  '#/',
    //     key:    '~',
    //     space:  '&'
    // },
    from:    'f=',
    to:      't=',
    wish:    'w='
};

// var defaultHash = hashKey.symbol.start + hashKey.key  +
//                   hashKey.symbol.key   + hashKey.from + defaultName.from +
//                   hashKey.symbol.space + hashKey.to   + defaultName.to +
//                   hashKey.symbol.space + hashKey.wish + defaultName.wish;
//
// console.log(defaultHash);

//var defaultMaxNum   = 5;
// var noMoreBtn       = '<li class="add disable"><div>暂无更多</div></li>';
// var noMoreBtnAlbum  = '<div class="add addAlbum disable"><div>暂无更多</div></div>';
//
// var timeoutOnloadData;
// var timeout;
// var timeout2;
// var timeout3;
// var timeout4;

// var href = {
//     convert: function(toggle){
//
//         var array = [];
//         var url;
//         var href;
//         var key = '?';
//         var hrefKey;
//
//         console.log(toggle);
//
//         if (!toggle || toggle ==='go' || toggle === 'off') {
//             array = location.hash.match(/\d+/g);
//             url = homepageMobile + key + array;
//
//             console.log('off: ' + url);
//
//             return url;
//         }
//
//         if (toggle === 'back' || toggle === 'on') {
//             href    = location.href;
//             hrefKey = href.indexOf(key);
//             if (hrefKey !== -1) {
//                 array = href.slice(hrefKey + 1).split(',');
//
//                 console.log(array);
//
//                 url = homepage + hashKey.from + array[0] + hashKey.to + array[1] + hashKey.item + array[2] + hashKey.album + array[3];
//
//                 console.log('back: ' + url);
//
//
//             }
//         }
//         else {
//             url = homepage + defaultHash;
//         }
//
//
//         return url;
//         //console.log('href.convert done!: ' + url);
//
//         //return url;
//     }
// };


// // 初始化判断hash和href (需要重新 逻辑关系可能会有问题 @2015-12-01-17.23)
// (function (){
//     //var hash    = location.hash;
//     //var href = location.href;
//     var loc     = location.href;
//     var cons    = loc.indexOf('?');
//     var cons2   = loc.slice(cons + 1);
//     var cons3   = cons2.indexOf(hashKey.key);
//
//     console.log('cons: ' + cons);
//     console.log('cons2: ' + cons2);
//     console.log('cons>0 && cons2!==: ' + cons>0 && cons2!=='');
//     console.log('cons3' + cons3);
//
//
//
//     if (cons>0 && cons2!=='') {
//         console.log('cons3 === -1: ' + cons3 === -1);
//
//
//         alert(href.convert('back'));
//
//         if (cons3 === -1) {
//
//             console.log(href.convert('back'));
//
//             self.location.href = href.convert('back');
//         }
//
//     }
//     else {
//         console.log('常识修改hash失败');
//     }
//
// })();


//hash监听
// var locator = {
//     start: function (handler) {
//         window.onhashchange = handler;
//         handler();
//     },
//     stop: function () {
//         window.onhashchange = null;
//     }
// };

// //路由规则
// var rules = {
//     // path => Controller
// };
// var router = {
//     route: function (request) {
//
//         console.log('request: ' + request);
//
//         var path = request.path;
//
//         console.log('request: ' + rules[path]);
//
//         if (rules[path]) {
//             return rules[path];
//         }
//         //console.log(404);
//         //backHomePage();
//     },
//     addRule: function (path, Controller) {
//         rules[path] = Controller;
//     }
// };
var url = {
    //var strTo = {
    // unicode: function (str) {
    //
    //     // return escape(str).toLocaleLowerCase().replace(/%u/gi, '\\u');
    //     return escape(encodeURIComponent(str));
    // },
    // GBK: function (str) {
    //     //var str = str.decodeURIComponent();
    //     //return unescape(decodeURIComponent(str).replace(/\\u/gi, '%u'));
    //     console.log(str);
    //     console.log(decodeURIComponent(str).replace(/\\u/gi, '%u'));
    //
    //     return unescape(str);
    // },
    //};
    // decode: function (str) {
    //
    //     // return escape(str).toLocaleLowerCase().replace(/%u/gi, '\\u');
    //     return decodeURI(str);
    // },
    parse: function (hash) {
        var hash  = window.location.href || location.hash;
        // var _this = this;
        // console.log(hash.lastIndexOf(hashKey.key));


        // var newHash = '';
        // if (hash.indexOf('amp;')) {
        //     newHash = hash.replace('amp;','');
        // }
        // else {
        //     newHash = hash;
        // }

        var newHash = hash; // 关闭hash判断模块 @St. 2016-02-15-10.57

        //console.log('newHash: ' + newHash);
        //var queryIndex = newHash.indexOf(hashKey.symbol.key);
        var key = '?d=';
        var keyLen = key.length;

        // console.log(keyLen);

        var queryIndex = newHash.lastIndexOf(key);

        // console.log(newHash.slice(queryIndex + keyLen));

        var query = {};
        if (queryIndex !== -1) {
            query = newHash
                .slice(queryIndex + keyLen) //'?d~'
                .split('&')
                .reduce(function (result, item) {
                        item = item.split('=');
                        if (item[0]) {

                            // console.log(typeof item[1]);
                            // console.log(_this.decode(item[1]));
                            //
                            // result[item[0]] = decodeURI(item[1]);
                            result[item[0]] = item[1];
                        }

                        //console.log(result);

                        return result;
                    }, query);
            newHash = newHash.slice(0, queryIndex);
        }

        // return {
        //     //path:  newHash.slice(1),
        //     //query: query
        // };

        console.log(query);

        return query;


    }
};

//console.log(url.unicode(''));

// var rules = [{
//     hash:    hashKey.key,
//     handler: MVCController
// }];
//
// rules.forEach(function (rule) {
//     console.log(rule);
//     router.addRule(rule.hash, rule.handler);
// });

// var f = encodeURI('李易峰');
// var t = encodeURI('小慧慧');
// var w = encodeURI('我爱你哦');
// var h = '?d=f=' + f + '&w=' + w + '&t=' + t;
// console.log('hash: ' + h);
//
// location.hash = h;

// var hash = {
//     cons: url.parse(location.hash),
//     to: function(){
//         var cons = this.cons;
//         var _defaultName = defaultName.to;
//
//         console.log(cons);
//         console.log(typeof _defaultName);
//
//         if (cons && cons !== _defaultName) {
//             return cons;
//         }
//         else {
//             return _defaultName;
//         }
//     },
//     from: function(){
//
//     },
//     wish: function(){
//
//     }
//
// };

var hash = {
    //query: url.parse(location.hash),
    query: url.parse(),
    judge: function(cons, defaultName){
        //console.log(cons !== defaultName);
        if(cons !== defaultName && cons !== undefined){
            //console.log(cons);
            return decodeURI(cons);
        }
        else {
            return defaultName;
        }
    },
    set: function(key){
        var query = this.query;
        //console.log(key);
        //console.log(query);
        if (key){
            /*
              开发备忘  @St. 2016-02-15-11.08
              ---
              1、这里考虑是否可以使用 forEach 或者 reduce来做？
              2、或者考虑将这个判断添加至 url.parse()?
            */
            if (key === 'to'){
                return this.judge(query.to, defaultName.to);
            }
            else if (key === 'from') {
                return this.judge(query.from, defaultName.from);
            }
            else if (key === 'wish') {
                return this.judge(query.wish, defaultName.wish);
            }
            else if (key === 'title') {
                return this.judge(query.title, defaultName.title);
            }
        }
    }
};


$(function(){

    // var query        = request.query;
    // var from         = query.from;
    // //var to      = query.to;
    // //var item         = query.item;
    // var to           = query.to;
    //
    // var request    = url.parse(location.hash);
    // var Controller = router.route(request);

    var dom = [
        {
            name:   'section5',
            text:   '<div class="sectionIn">'+
                        //'<p>献给'+ hash.set('to') +'<br>' +
                            //hash.set('wish') + '<br>' +
                            //'来自' + hash.set('from') +' / 2016-02-14' +
                        '<p><span id="hashTo"></span><br>' +
                            '<span id="hashWish"></span><br>' +
                        '</p>' +
                        '<img src="img/1518255618.png" width="220" height="220" class="qrcode" /> 扫码或微信长按二维码分享 <br>' +
                        '<div class="license">' +
                            '／后面还有哦／' +
                        '</div>' +
                    '</div>'
        }, {
            name:   'section5',
            text:   '<div class="sectionIn">'+
                        '<h2><a href="#">彩蛋</a></h2>'+                
                    '</div>'
       }
    ];

    // section5 & section6 添加dom
    $('#section5')[0].innerHTML = dom[0].text;
    $('#section6')[0].innerHTML = dom[1].text;


    // 给dom添加 hash截取的 3个字符串 to, wish和from（同时包含 decodeURI 转码过程）
    $('#hashTo').text(hash.set('to'));
    $('#hashWish').text(hash.set('wish'));
    $('#hashFrom').text(hash.set('from'));


    /*
    2016-02-14-23:22 备忘
    ---
    1、缺少二维码生成
    √ //2、缺少onhashchange？
    3、少一个制作工具
    4、发布前需要，打开jplayer自动播放！！！
    x //5、缺少自动添加hash功能？
    */



    // 给封面title添加 hash截取的 title 字符串（同时包含 decodeURI 转码过程）
    $('#title').text(hash.set('title'));


    // 替换title标签文字
    $('title').append($('#hashTo').text() + '' + $('#hashFrom').text());



    // 添加 jplayer 播放控件 dom
    $('body').append('<div id="jquery_jplayer_1" class="jp-jplayer"></div>'+
                     '<div id="jp_container_1" class="jp-audio" role="application" aria-label="media player">' +
                         '<button class="jp-play iconPlay" role="button" tabindex="0">play</button>' +
                     '</div>');
    // 初始化 jPlayer
    $("#jquery_jplayer_1").jPlayer({
        ready: function (event) {
            $(this).jPlayer("setMedia", {
                mp3: 'media/Shayne-Ward-Until-You.mp3'
            });
            // 设置自动播放，iOS safari 受安全限制无效，wechat可以自动播放
            $(this).jPlayer("play").jPlayer("repeat");
        },
        //swfPath: "js",
        supplied: "mp3",
        wmode: "window",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        remainingDuration: true,
        toggleDuration: true,
        volume: 1
    });



});

// function MVCController () {
//
// }
//
// MVCController.prototype.execute = function (request) {
//     var query        = request.query;
//     var from         = query.from;
//     //var to      = query.to;
//     //var item         = query.item;
//     var to           = query.to;
//
//     var request    = url.parse(location.hash);
//     var Controller = router.route(request);
//     var dom = [
//         {
//         text:   '<div class="sectionIn">'+
//                     '<p>献给'+ hash.to() +'<br>' +
//                         + hash.wish() + '<br>' +
//                         '来自' + hash.from() +' / 2016-02-14' +
//                     '</p>' +
//                     '<img src="img/qrcode.gif" width="220" height="220" class="qrcode" /> 扫码或微信长按二维码分享 <br>' +
//                     '<div class="license">' +
//                         '／后面还有哦／' +
//                     '</div>' +
//                 '</div>'
//         }, {
//         text:   '<div class="sectionIn">'+
//                     '<h2>特别感谢</h2>' +
//                     '<p>木木的React老师<a href="https://github.com/hayeah" class="textu">Howard</a>先森<br>' +
//                     'Google doodle／Github！</p>' +
//                     '<div class="btn">' +
//                         '<a href="https://github.com/superwoods">' +
//                         '访问超级木木的Github首页</a>' +
//                     '</div>' +
//                     '<div class="license">' +
//                         '<a href="https://github.com/superwoods">'+
//                             '本页面由 / 超级木木 / 木Studio 设计制作, ' +
//                             '我们使用MIT开源协议, 欢迎转载分享, '+
//                             '但请您务必保留我们的署名, 感谢！'+
//                         '</a>' +
//                     '</div>' +
//                 '</div>'
//        }
//     ];
//
//     $('#section5').html(dom[0].text);
//     $('#section6').html(dom[1].text);
//
//
//     console.log(query);
//
// };

// var currentController;
// locator.start(function () {
//     var request = url.parse(location.hash);
//     var Controller = router.route(request);
//
//     console.log('Controller: ' + Controller);
//     console.log(request.query);
//
//     if (Controller) {
//         //if (currentController) {
// //            currentController.dispose();
// //            currentController = null;
// //        }
//         var controller = new Controller();
//         controller.execute(request);
//     }
//     else {
//         //alert(404);
//         console.log('locator.start: 404');
//         //tinyTip(tipsTxt);
//     }
// });




// 当页面加载完毕时开始动画。
window.onload = function() {
    ani.init();
    updateSliderControl();
    addSmoothScrolling();
};

// 使用 onscroll 回调函数来更新 slider
window.onscroll = function() {
  updateSliderControl();
  //locator.stop();
}

var ani = {
    init: function (){
        this.logo("#hvd");
        this.logo("#ani1");
        this.logo("#ani2");
        this.logo("#ani3");
        //this.robot();
    },
    logo: function (tag){
        TweenMax.fromTo(tag, 2, {
            // from
            css: {
              y: 0,
            }
            },{
            // to
            css: {
              y: "30px",
            },
            // 永久重复动画的选项
            repeat: -1,
            // 反转、重新运行动画的选项
            yoyo: true,
            // 改变 easing 类型
            ease: Sine.easeInOut
            }
        );
    }//,
//    robot: function () {
//       var tag = "#android-robot";
//       //var tag = document.querySelectorAll("#android-robot");
//       var t = new TimelineMax({yoyo: true, repeat: -1, ease: Sine.easeInOut});
//           t.to(tag, 1, {rotation: '-=10deg'})
//            .to(tag, 1, {rotation: '+=20deg'}); // 可以使用 += / -= 在原有角度上做动画
//    },
      // create a scene
  // var scene1 = new ScrollMagic.Scene({
  //         duration: 100,  // the scene should last for a scroll distance of 100px
  //         offset: 50      // start this scene after scrolling for 50px
  //     })
  //     .setPin("#my-sticky-element") // pins the element for the the scene's duration
  //     .addTo(controller); // assign the scene to the controller
    //scene1: function(){
//
//    }
};


// scene.setTween(TweenMax.to("obj"), 1, {x: 100});
// function windowHeight(){
//   return window.innerHeight;
// }


// build scene
//var scene = new ScrollMagic.Scene({
//                    triggerElement: "#intro-section",
//                    triggerHook: "onLeave" ,
//                    duration: window.innerHeight
//                })
//                .setTween("#mask", {opacity: 1}) // trigger a TweenMax.to tween
//                .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
//                .addTo(controller);


function updateSliderControl() {
    // 获得所有的 slider 链接
    var links = document.querySelectorAll("#slider-control a");
    for(var i = 0; i < links.length; i++) {
        var link = links[i];
        //console.log(link);
        var attr = link.getAttribute('href');
        // 获取被链接指向的部分
        //var section = document.querySelector('#intro-section', '#native', '#touch', '#android');
        var section = document.querySelector(attr);

        //console.log(section);


        var sectionTop    = section.offsetTop;
        var sectionBottom = sectionTop + window.innerHeight;  //  section.offsetHeight
        //var sectionBottom = sectionTop + section.offsetHeight;
        //console.log(section.offsetHeight);
        //console.log(sectionTop + " / " + sectionBottom);
        //console.log(window.scrollY);
        //console.log(window.scrollY);

        // 检查 window.scrollY 是否在这部分中
        if(window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            //console.log(attr);
            link.className = "active";
            //event.preventDefault();
            //location.hash = attr;
            //console.log(link);
        }
        else {
            link.className = "";
        }
    }
}


// 练习：网页滚动动画
function scrollToElement(element) {
  // create a scene
  // var scene1 = new ScrollMagic.Scene({
  //         duration: 100,  // the scene should last for a scroll distance of 100px
  //         offset: 50      // start this scene after scrolling for 50px
  //     })
  //     .setPin("#my-sticky-element") // pins the element for the the scene's duration
  //     .addTo(controller); // assign the scene to the controller

  //console.log(num);
  //console.log(element);

    //声明变量topOfElement = element.offsetTop
    var topOfElement = element.offsetTop;
    // window 的动画滚动，使用TweenMax plugins
    TweenMax.to(window, 1, {
    scrollTo: {
        y: topOfElement,
    },
        ease: Sine.easeInOut
    });
}

function addSmoothScrolling() {
    var links = document.querySelectorAll("#slider-control a");

    for(var i = 0; i < links.length; i++) {
        var link = links[i];

        //if (typeof window.addEventListener === 'function'){
        // 闭包
        (function (_link) {
            //console.log('_link: ' + _link);
            //console.log(link);
            link.addEventListener('click', function(event){
                /*
                  这里禁用了鼠标的点击事件, 会导致hash无法更新，
                  也就是说hash就没有作用了
                  动画是否可以考虑换一种逻辑方式，
                  利用hash的方式去执行窗体混动的动画呢？？？
                */
                event.preventDefault();
                var attr = _link.getAttribute('href');
                //console.log('href: ' + _link);
                scrollToElement(document.querySelector(attr));
                //location.hash = attr;
            });
        })(link);
    }
}
