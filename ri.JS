const http= require('http');
url= require('url');
http.createServer((req,res)=>{
    
    console.log(req.url);
    var rit= url.parse(req.url,true).query;
    console.log(rit);
    console.log(rit.value1);
    console.log(rit.value2);
    console.log(rit.value3);
    var r = Number(rit.value1);
    var l = Number(rit.value2);
    var b = Number(rit.value3);
    var area1 = (3.14)*r*r;
    var area2 = l*b;
    res.write("Area of the circle is :"+area1+"\nArea of the rectangle is :"+area2);
    res.end();
    
}).listen(8080);
