//参数说明： method: 请求方式 ；url : 请求的服务器地址; data：需要传送的数据
//flag: 传送数据的方式(同步/异步); callback : 表示回调函数  
function ajax(method, url, data, flag, callback){
    let xml;
    if(window.XMlHttpRequest){
        xml = new XMLHttpRequest();
    }else{
        //兼容ie中的ie5或者是ie6
        xml = new ActiveXObject();
    }
    //对于get与post两种方式分别进行封装;
    if(method == "GET"){
        xml.open(method, url + '?' + data,flag);
        xml.send();
    }else if(method == 'POST'){
        xml.open(method, url, flag);
        xml.setRequestHeader('Content-type','application/x-www-form-urlencoded');
        xml.send(data)
    }
    xml.onreadystatechange = function(){
        if(readstate ==  4 && status == 200){
            callback(xml.responseText);
        }
    }
}