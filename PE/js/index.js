$(function(){
    //加载侧边栏内容
    var obj = [
        {
            title: '主办单位',
            children: [
                '全球PE论坛组委会',
                '北京市地方金融监督管理局',
                '北京市海淀区人民政府',
                '北京市顺义区人民政府'
            ]
        },
        {
            title: '承办单位',
            children: [
                '北京基金业协会'
            ]
        },
        {
            title: '支持单位',
            children: [
                '北京股权交易中心',
                '全球私募资本协会',
                '另类投资管理协会',
                '卢森堡私募股权和风险投资协会',
                '香港创业及私募投资协会',
                '台湾股权投资协会',
                '中关村创业投资和股权投资基金协会',
                '中关村并购发展促进会'
            ]
        },
        {
            title: '合作单位',
            children: [
                '厚朴投资',
                '弘毅投资',
                'IDG资本',
                'CPE源峰',
                '中美绿色基金',
                '朗姿韩亚资管',
                '首钢基金'
            ]
        }
    ]
    var obj2 = [
        {
            title1: '新华网',
            title2: '主论坛',
            img: './img/zb1.jpg'
        },
        {
            title1: '北京电视台',
            title2: '主论坛',
            img: './img/zb2.jpg'
        },
        {
            title1: '金融街午餐会',
            title2: '主论坛',
            img: './img/zb3.jpg'
        },
        {
            title1: '中新经纬',
            title2: '主论坛和平行论坛一、三、五',
            img: './img/zb4.jpg'
        },
        {
            title1: '中新经纬',
            title2: '平行论坛二、四、六',
            img: './img/zb5.jpg'
        },
        {
            title1: '中国经营报',
            title2: '主论坛',
            img: './img/zb6.jpg'
        },
        {
            title1: '中国经营报',
            title2: '平行论坛一、三、五',
            img: './img/zb7.jpg'
        },
        {
            title1: '中国经营报',
            title2: '平行论坛二、四、六',
            img: './img/zb8.jpg'
        },
        {
            title1: '凤凰财经',
            title2: '主论坛和平行论坛一、三、五',
            img: './img/zb9.jpg'
        },
        {
            title1: '凤凰财经',
            title2: '平行论坛二、四、六',
            img: './img/zb10.jpg'
        },
        {
            title1: '新浪财经',
            title2: '主论坛',
            img: './img/zb11.jpg'
        },
        {
            title1: '新浪财经',
            title2: '平行论坛一、三、五',
            img: './img/zb12.jpg'
        },
        {
            title1: '新浪财经',
            title2: '平行论坛二、四、六',
            img: './img/zb13.jpg'
        },
        {
            title1: '和讯网',
            title2: '主论坛和平行论坛一、三、五',
            img: './img/zb14.jpg'
        },
        {
            title1: '和讯网',
            title2: '平行论坛二、四、六',
            img: './img/zb15.jpg'
        }
    ]
    obj.forEach(item=>{
        console.log(item)
        var title = '<div class="title">'+item.title+'</div>'
        var $con = $('<div class="list-box"></div>');
        item.children.forEach(item2=>{
            var list =
                '<p class="list-item">'+
                '<img src="./img/title.gif" width="12" height="9">'+
                '<span>'+ item2 +'</span>'+
                '</p>';
            $con.append(list)
        })
        $('#sidebar-1').append(title+$con.html())
    })
    $('#sidebar-2').append(`
    <div id="yyf-demomt" class="sidebar-2">
    <div id="yyf-demo1">
    <img src="./img/c01.jpg" width="157">
    <img src="./img/c02.jpg" width="157">
    <img src="./img/c03.jpg" width="157">
    <img src="./img/c04.jpg" width="157">
    <img src="./img/c05.jpg" width="157">
    <img src="./img/c06.jpg" width="157">
    <img src="./img/c08.jpg" width="157">
    <img src="./img/c07.jpg" width="157">
    <img src="./img/c09.jpg" width="157">
    </div>
    <div id="yyf-demo2">
    <img src="./img/c01.jpg" width="157" height="90">
    <img src="./img/c02.jpg" width="157" height="90">
    <img src="./img/c03.jpg" width="157" height="47">
    <img src="./img/c04.jpg" width="157">
    <img src="./img/c05.jpg" width="157">
    <img src="./img/c06.jpg" width="157">
    <img src="./img/c08.jpg" width="157">
    <img src="./img/c07.jpg" width="157">
    <img src="./img/c09.jpg" width="157">
    </div></div>`);
    obj2.forEach(item=>{
        var title1 = '<span>'+ item.title1 +'</span>'
        var title2 = '<span>'+ item.title2 +'</span>'
        var img = '<img src="'+item.img+'" width="116" height="116">'
        $('#sidebar-3').append(title1+title2+img)
    })

    //控制滚动
    function getElement(id) {
        return document.getElementById(id)
    }
    //向上滚动函数，demo包含demo1与demo2,speed是滚动速度，flag一个网页内有多个时设置为不同的任意字符。
    (function totop1() {
        var speed = 40;
        var demo = getElement('yyf-demomt');
        var demo1 = getElement('yyf-demo1');
        var demo2 = getElement('yyf-demo2');
        var flag = null;

        function Marquee() {
            // console.log(demo2.offsetTop)
            // console.log(demo.scrollTop)
            if (demo1.offsetHeight + demo2.offsetHeight === demo.scrollTop + demo.offsetHeight) {
                demo.scrollTop -= demo1.offsetHeight
            } else {
                demo.scrollTop++
            }
        }

        flag = setInterval(Marquee, speed)
        demo.onmouseover = function () {
            clearInterval(flag);
        }
        demo.onmouseout = function () {
            flag = setInterval(Marquee, speed);
        }
    })()
});