import axios from "axios";

export function GetVyatsu(){
    let res;
    axios.get('https://www.vyatsu.ru/internet-gazeta').then(response => {
      res = response.data;
      var parser = new DOMParser();
      var doc = parser.parseFromString(res, "text/html");
      var elem = doc.querySelector(".items");
      var lis = elem.querySelectorAll('.item')
      var div = document.createElement('div');
      div.classList.add('items');
      var lis_ = [];
      lis.forEach(li => {
        lis_.push(li);
      })
      lis_ = lis_.slice(0, 16);
      lis_.forEach(li =>{
        var div1 = document.createElement('div')
        div1.classList.add('item')
        div.append(div1)
        div1.append(li.querySelector('h6'));
        div1.append(li.querySelector('.preview'));
      })
      document.body.append(div)
      console.log(elem)
      console.log(typeof elem)
    })
}