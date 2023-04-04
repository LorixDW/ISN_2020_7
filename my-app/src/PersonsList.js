import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: '',
  }

componentDidMount() {
    Get()
}

  render() {
    return (
      <div>
      </div>
    )
  }
}

async function Get(){
    let res;
    fetch("https://www.vyatsu.ru/internet-gazeta.html/page:1", {
        method:"GET",
        mode:'no-cors',
        headers:{
            'Content-Type': 'text/html; charset=utf-8'
        }
    }).then(response =>{
        return response.type;
    }).then(html =>{
        console.log(html)
    })
}