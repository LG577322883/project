
// 监控区域模块
;(function(){
    $('.monitor .tabs').on('click','a',function(){
        $(this).addClass('active').siblings('a').removeClass('active');

        // $('.monitor .content').eq($(this).index()).show().siblings('.content').hide();
        $('.monitor .content').eq($(this).index()).css('display','block').siblings('.content').css('display','none');
    })
    $('.marquee-view .marquee').each(function(){
       let rows= $(this).children().clone();
       $(this).append(rows);
    })
})()
// 点位分布统计模块
;(function(){
    //实例化对象
    var myChart=echarts.init(document.querySelector('.pie'));
    //指定配置项
    var option = {
        
        textStyle:{
            fontSize:10
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
        series: [
          {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: ["7%","80%"],
            center: ['50%', '50%'],
            roseType: 'radius',
            itemStyle: {
              borderRadius: 8
            },
            label: {
              show: true,
              rotate: 0,
              overflow: "truncate",
              position: "outer",
              alignTo: "none",
              edgeDistance: "25%",
              bleedMargin: 10,
              distanceToLabelLine: 5,
              margin:"10%"
              },
              labelLine:{
                show: true,
                length: 1,
                length2: 3,
                smooth: false,
                minTurnAngle: 90,
                maxSurfaceAngle: 90,
              },
            data: [
              { value: 40, name: '北京' },
              { value: 38, name: '湖北' },
              { value: 32, name: '云南' },
              { value: 30, name: '山东' },
              { value: 28, name: '河北' },
              { value: 26, name: '江苏' },
              { value: 22, name: '浙江' },
              { value: 18, name: '四川' }
            ]
          }
        ]
      };
      //配置项和数据给实例化对象
      myChart.setOption(option);
      //浏览器缩放时，图标自动缩放
      window.addEventListener('resize',function(){
        myChart.resize();
      })
})()

/* 柱形图模块 */
;(function(){
  var myChart=echarts.init(document.querySelector('.bar'));
  var option = {
   color: {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [{
          offset: 0, color: '#00fffb' // 0% 处的颜色
      }, {
          offset: 1, color: '#0061ce' // 100% 处的颜色
      }],
      global: false // 缺省为 false
    },
    tooltip: {
      trigger: 'item',
      // axisPointer: {
      //   type: 'shadow'
      // }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top:'3%',
      containLabel: true,
      // show:true,
      borderColor:"rgba(0,240,255,0.3)"
    },
    xAxis: [
      {
        type: 'category',
        data: ['北京', '湖北', '云南', '山东', '河北', '江苏', '浙江','四川'],
        axisTick: {
          alignWithLabel: true,
          show:false,

        }
        ,axisLabel:{
          color:'#fff'
        },
        splitLine:{
          show:false
        }

      }
    ],
    yAxis: [
      {
        type: 'value'
        ,axisLabel:{
          color:'#fff'
        },
        splitLine:{
          show:false
        }
      }
      
    ],
    series: [
      {
        name: 'Direct',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 
        {value:334,
          itemStyle:{
            color:'#aaffccdd'
          },
          emphasis:{
            disable:false,
            itemStyle:{
              color:'#aaffccdd'
            },
          },
          tooltip:{
            extraCssText:"opacity:0"
          }

        }, 390, 330, 220,10],
      }
      
    ]
  };
  myChart.setOption(option);
  window.addEventListener('resize',function(){
    myChart.resize();
  })
})()
// 销售额折线图
;(function(){
  //准备切换数据
  var data={   
     //年
     year:[
      [12,1,14,16,23,54,65,87,345,876,23,87],
      [12,34,456,78,34,47,39,3,51,56,321,678],
     ],
    //季
   quarter:[
      [38,4,352,567,231,76,21,69,41,68,13,79],
      [12,34,456,78,34,47,39,3,51,56,321,678],
    ],
    
    //月
    month:[
      [12,1,14,16,23,54,65,87,345,876,23,87],
      [38,4,352,567,231,76,21,69,41,68,13,79],
    ],
    
    //周
    week:[
       [38,4,352,567,231,76,21,69,41,68,13,79],
    [12,34,67,23,71,564,679,564,24,78,23,78]
    ]
   
    };
  var myChart=echarts.init(document.querySelector('.sales .line'));
 var  option = {

    tooltip: {
      trigger: 'axis'
    },
    legend: {
      right:'10%',
      textStyle:{
        color:'#4c9bfd'
      },
      data: [ 'Direct', 'Search Engine']
    },
    grid: {
      top:'20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      // show:true,
      borderColor:'#12f4a'
    },
  
    xAxis: {
      type: 'category',
      boundaryGap: false,//去除轴间距
      data: ['1月', '2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
      axisTick: {
        alignWithLabel: true,
        show:false,
      },
      axisLabel:{
        color:'#fff'
      },
      axisLine:{
        lineStyle:{
        color:'skyblue'
      }
      }
      
    },
    yAxis: {
      type: 'value',
      splitLine:{
        show:false
      },
      axisLabel:{
        color:'#fff'
      },
      axisLine:{
        lineStyle:{
        color:'skyblue'
      }
      }
    },
    series: [   
      {
        smooth:true,
        name: 'Direct',
        type: 'line',
        stack: 'Total',
        data: data['year'][0]
      },
      {
        smooth:true,
        name: 'Search Engine',
        type: 'line',
        stack: 'Total',
        data: data['year'][1]
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener('resize',function(){
    myChart.resize();
  });
  var lunBo=0;
  // tab栏切换
  $('.sales .caption').on('click','a',function(){
    $(this).addClass('active').siblings('a').removeClass('active');
    //获取点击元素的自定义属性值
    // console.log(this.dataset.type) ;
    //根据自定义属性值取数组
    var arr =data[this.dataset.type];
    // console.log(arr);
    //改变折线图optio的数据
    option.series[0].data=arr[0];
    option.series[1].data=arr[1];
    //从新渲染option
    // console.log(option.series[0].data);
    myChart.setOption(option);
    // console.log($(this).index()-1);
   lunBo=$(this).index()-1;
  });
  //定时器自动轮播数据
  // var timer;
  var a=$('.sales .caption a');
  // console.log(a)
  // function timers(){
    var timer=setInterval(function(){ 
      lunBo++;
      // console.log(lunBo)
      if(lunBo>3)lunBo=0;
      a.eq(lunBo).click(); 
  },1000);
})()
//渠道模块
;(function(){
  //雷达图
  var myChart=echarts.init(document.querySelector('.radar'));
  const dataBJ = [
    [85, 19, 96, 10.46, 77, 16, 11], 
  ];
  
  const lineStyle = {
    width: 1,
    opacity: 0.5,
    color:"red"
  };
  var option = {
    // backgroundColor: '#161627',
    tooltip:{
      show:true
    },
    radar: {
     
        center:['45%','50%'],
        radius:'60%',
        splitNumber:5,
      
      indicator: [
        { name: '北京', max: 300,color:'blue' },
        { name: '山东', max: 100 },
        { name: '上海', max: 100 },
        { name: '河北', max: 100 },
        { name: '浙江', max: 100 },
        { name: '四川', max: 100 }
      ],
      shape: 'circle',
      splitNumber: 5,
      axisName: {
        color: 'rgb(238, 197, 102)'
      },
      splitLine: {
        lineStyle: {
          color: [
            'rgba(238, 197, 102, 0.1)',
            'rgba(238, 197, 102, 0.2)',
            'rgba(238, 197, 102, 0.4)',
            'rgba(238, 197, 102, 0.6)',
            'rgba(238, 197, 102, 0.8)',
            'rgba(238, 197, 102, 1)'
          ].reverse()
        }
      },
      splitArea: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(238, 197, 102, 0.5)'
        }
      }
    },
    
    series: [
      {
        name: 'Beijing',
        type: 'radar',
        lineStyle: lineStyle,
        data: dataBJ,
        //设置图形标记。折点

        symbol: 'circle',
        symbolSize:3,
        itemStyle:{
          color:"#fff",
        },
        // itemStyle: {
        //   color: '#F9713C'
        // },
        label:{
          show:true,

        },
        areaStyle: {
          // opacity: 1,
         color:"rgba(228,197,102,0.7)"
        },
        
        
      }
      
    ]
  };
  myChart.setOption(option);
  window.addEventListener('resize',function(){
    myChart.resize();
  });
})()
;(function(){
  var myChart=echarts.init(document.querySelector('.quarter .gauge')) ;

  var option = {
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['130%', '150%'],
        center:['48%','80%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: false,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        hoverOffset:0,
        startAngle:270,
        data: [
          { value: 500},
          { value: 500},
          { value: 0,
            itemStyle:{
              color:"transparent",
            }
          }
          
        ]
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener('resize',function(){
    myChart.resize();
  })
})()
// 全国热榜模块
;(function() {
  // 1. 准备相关数据
  var hotData = [
    {
      city: "北京", // 城市
      sales: "25, 179", // 销售额
      flag: true, //  上升还是下降
      brands: [
        //  品牌种类数据
        { name: "可爱多", num: "9,086", flag: true },
        { name: "娃哈哈", num: "8,341", flag: true },
        { name: "喜之郎", num: "7,407", flag: false },
        { name: "八喜", num: "6,080", flag: false },
        { name: "小洋人", num: "6,724", flag: false },
        { name: "好多鱼", num: "2,170", flag: true }
      ]
    },
    {
      city: "河北",
      sales: "23,252",
      flag: false,
      brands: [
        { name: "可爱多", num: "3,457", flag: false },
        { name: "娃哈哈", num: "2,124", flag: true },
        { name: "喜之郎", num: "8,907", flag: false },
        { name: "八喜", num: "6,080", flag: true },
        { name: "小洋人", num: "1,724", flag: false },
        { name: "好多鱼", num: "1,170", flag: false }
      ]
    },
    {
      city: "上海",
      sales: "20,760",
      flag: true,
      brands: [
        { name: "可爱多", num: "2,345", flag: true },
        { name: "娃哈哈", num: "7,109", flag: true },
        { name: "喜之郎", num: "3,701", flag: false },
        { name: "八喜", num: "6,080", flag: false },
        { name: "小洋人", num: "2,724", flag: false },
        { name: "好多鱼", num: "2,998", flag: true }
      ]
    },
    {
      city: "江苏",
      sales: "23,252",
      flag: false,
      brands: [
        { name: "可爱多", num: "2,156", flag: false },
        { name: "娃哈哈", num: "2,456", flag: true },
        { name: "喜之郎", num: "9,737", flag: true },
        { name: "八喜", num: "2,080", flag: true },
        { name: "小洋人", num: "8,724", flag: true },
        { name: "好多鱼", num: "1,770", flag: false }
      ]
    },
    {
      city: "山东",
      sales: "20,760",
      flag: true,
      brands: [
        { name: "可爱多", num: "9,567", flag: true },
        { name: "娃哈哈", num: "2,345", flag: false },
        { name: "喜之郎", num: "9,037", flag: false },
        { name: "八喜", num: "1,080", flag: true },
        { name: "小洋人", num: "4,724", flag: false },
        { name: "好多鱼", num: "9,999", flag: true }
      ]
    }
  ];
  //  2. 根据数据渲染各省热销 sup 模块内容
  // (1) 遍历 hotData对象
  var liSpan='';

  $.each(hotData,function(index,item){
    liSpan+=`<li>
    <span>${item.city}</span>
    <span>${item.sales}<s class=${item.flag? "icon-up":"icon-down"}></s></span>
  </li>`
  })

  $('.province .sup').html(liSpan)
  $('.province .sup').on('mouseenter','li',function(){
     
    liIndex=$(this).index();
    render($(this));
  });
  function render(currentEle) {
    currentEle
      .addClass("active")
      .siblings()
      .removeClass();
    // 拿到当前城市的品牌对象
    // console.log($(this).index());
    // 可以通过hotData[$(this).index()] 得到当前的城市
    // console.log(hotData[$(this).index()]);
    // 我们可以通过hotData[$(this).index()].brands 拿到的是城市对象的品牌种类
    // console.log(hotData[$(this).index()].brands);
    // 开始遍历品牌数组
    var subHTML = "";
    $.each(hotData[currentEle.index()].brands, function(index, item) {
      // 是对应城市的每一个品牌对象
      // console.log(item);
      subHTML += `<li><span>${item.name}</span><span> ${item.num}<s class=
    ${item.flag ? "icon-up" : "icon-down"}
    ></s></span></li>`;
    });
    // 把生成的6个小li字符串给 sub dom盒子
    $(".sub").html(subHTML);
  };
  // 4. 默认把第一个小li处于鼠标经过状态
  var lis = $(".province .sup li");
  lis.eq(0).mouseenter();;
  // console.log(lis)

  //定时器自动滚波
  
  var liIndex=0;
  var timer=setInterval(function(){
    liIndex++;
    if(liIndex>4)liIndex=0;
    // lis.eq(liIndex).mouseenter();
    render(lis.eq(liIndex));
  },1000);


  $(".province .sup").hover(
    // 鼠标经过事件
    function() {
      clearInterval(timer);
      console.log('a')
    },
    // 鼠标离开事件
    function() {
      clearInterval(timer);
      timer = setInterval(function() {
        liIndex++;
        if (liIndex >4) liIndex = 0;
        // lis.eq(liIndex).mouseenter();
        render(lis.eq(liIndex));
      }, 1000);
    }
  );
 
})();

