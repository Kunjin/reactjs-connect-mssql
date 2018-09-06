import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Test2 from './Test2';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students : []
    }
  }
  
  getStudent = () => {
    fetch('http://172.16.12.30:4000/studies')
    .then(recordset  => recordset.json())
    .then(recordset => this.setState({studies : recordset}))
  }

  componentDidMount() {
    this.getStudent();
  }
  

  // loadData = (url) => {
  //   var xhttp = new XMLHttpRequest();
  //   xhttp.onreadystatechange = function() {
  //     if (xhttp.readyState === 4 && xhttp.status === 200) {
  //        console.log(xhttp.responseText);
  //     }
  //   };
  //   xhttp.open("GET", url, true);
  //   xhttp.send();
  // }

  render() {
    const checkRecordset = this.state.studies !== undefined;
    let data;

    if (checkRecordset) {
      data = this.state.studies.recordset.map((value,key) => {
        return (
          <div key={key}>
              <h1>{value.ID}</h1>
              <h1 id={value.ID}>{value.Name}</h1>
          </div>
        )
      })
    } else {
      data = <div>Null</div>
    }
    return (
     
      <div className="App">
              { data }
      </div>
    );
  }
}

export default App;
