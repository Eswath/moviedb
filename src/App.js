import React, { Component } from 'react';
//import logo from './logo.svg';
import Main from './Main.js'
import Loop from './Loop.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
//import { Jumbotron, Button, Input, Media, Form, FormGroup,  CardImgOverlay, Collapse, CardBody, Card, CardImg, CardTitle, Container, Row, Col} from 'reactstrap'
//import axios from 'axios';

  class App extends Component{
    constructor(props) {
      super(props);
      this.state = {
        searchedvalue : []
      }
      this.handlevalue = this.handlevalue.bind(this)
    }
    handlevalue(e){
      this.setState({searchedvalue:e})
      console.log("Here" + this.state.searchedvalue)
      if(this.state.searchedvalue.length === 0)
      {
        alert("No Movies Found")
      }
    }

      render() {
        return (
          <div className="bottom">
          <Main data={this.handlevalue}/>
          <Loop searchedvalue={this.state.searchedvalue} />
          </div>
          );
      }
    }
  export default App;
