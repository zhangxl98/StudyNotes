const http=require('http');

http.createServer((req, res) => {

  let GET={};
  let url;

  if (req.url.indexOf('?')!=-1) {
    let arr=req.url.split('?');
    //arr[0]=>地址
    url=arr[0];
    //arr[1]=>数据
    let arr2=arr[1].split('&');

    arr2.forEach((item, index) => {
      let arr3=item.split('=');
      //arr3[0]=>名字
      //arr3[1]=>数据
      GET[arr3[0]]=arr3[1];
    });

  } else {
    url=req.url;
  }
  console.log(url, GET);
  res.write('aaa');
  res.end;
}).listen(8080);
