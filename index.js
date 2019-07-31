    var city = ''

    // 获取地理位置

    // 初始化geolocation对象

    var geo = new BMap.Geolocation();

    //获取用户当前位置

    geo.getCurrentPosition(function(p) {

    console.log(p);

    // 打印获取到的位置信息

    console.log(p.address.city);

    console.log(p.longitude)

    // 注册点击事件
    city = p.address.city

    getWeather(city)
});


function getWeather (city) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://www.tianqiapi.com/api/?version=v6&city='+ city);
    xhr.send(null);
    xhr.onload = function () {
            // 通过 xhr 的 responseText 获取到响应的响应体
        var response = JSON.parse(this.responseText)
        console.log(JSON.parse(this.responseText))
        document.querySelector('.con').innerText = 'Current conditions for '+response.cityEn
        document.querySelector('.center').innerText = response.tem + '℃'
        document.querySelector('.footer').innerText = response.win_meter  + ' WNW ' +  response.win_speed
     }
}
