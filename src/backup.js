import React, { Component } from 'react';
//import logo from './logo.svg';
import Main from './Main.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Jumbotron, Button, Input, Media, Form, FormGroup,  CardImgOverlay, Collapse, CardBody, Card, CardImg, CardTitle, Container, Row, Col} from 'reactstrap'
import axios from 'axios';

/*const Main = (props) =>
{
  return (
    <div>
    <Jumbotron>
    <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">MovieDB</h1>
    <Form>
    <center>
    <FormGroup className="col-md-3 inputGroupContainer">
    <Input type="text" name="moviename" id="moviename" placeholder="Enter Movie Name:" onChange = {props.valuechange}/>
    </FormGroup>
    <Button onClick ={ props.click}>Search</Button>
    </center>
    </Form>
    </div>
    </Jumbotron>
    </div>
    );
}*/

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      name : '',
      searchedvalue : [],
      collapse: false
    }
    this.moviename = this.moviename.bind(this);
    this.onhandleclick = this.onhandleclick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  moviename(e) {
    this.setState({ name : e.target.value });
    console.log(this.state.name);  
  } 

  onhandleclick(){
    axios("https://api.themoviedb.org/3/search/movie?api_key=d272326e467344029e68e3c4ff0b4059&language=en-US&query="+this.state.name)
    .then(res => this.setState({searchedvalue: res.data.results}))
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }


  render() {
    return (
      <div>
      <Main click={this.onhandleclick} valuechange={this.moviename}/>
      {this.state.searchedvalue.map(searchedvalue =>
        <div>
        <Row>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
        <Card>
        <CardBody>
        <CardTitle id={searchedvalue.id} color="primary" onClick={this.toggle}>{searchedvalue.title} ({searchedvalue.release_date})</CardTitle>
        </CardBody>
        </Card>
        <Collapse isOpen={this.state.collapse} >
        <div>
        <Card inverse>
        <CardImg className='imgs' width='100%' src={"https://image.tmdb.org/t/p/w500/"+searchedvalue.backdrop_path} ></CardImg>
        <CardImgOverlay>
        <CardBody>
        <br />
        <div className="CardText">
        <p>
        <img src={"https://image.tmdb.org/t/p/w500/"+searchedvalue.poster_path} className="imgpost" />
        <ul className="list">
        <li>TITLE : <b>{searchedvalue.title}</b></li>
        <li>LANGUAGE: <b>{searchedvalue.original_language} </b> </li>
        <li>RATINGS  : <b>{searchedvalue.vote_average}</b> </li>
        <li>OVERVIEW : {searchedvalue.overview}</li>
        </ul>
        </p>
        </div>
        </CardBody>
        </CardImgOverlay>
        </Card>
        </div>
        </Collapse>
        </Col>
        </Row>
        </div>
        )}
      </div>
      );
  }
}

export default App;


{/*}
{this.state.searchedvalue.map(searchedvalue =>
        <div>
        <Row>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
        <Card>
        <CardBody>
        <CardTitle id={searchedvalue.id} color="primary" onClick={this.toggle}>{searchedvalue.title} ({searchedvalue.release_date})</CardTitle>
        </CardBody>
        </Card>
        <Collapse isOpen={this.state.collapse} >
        <div>
        <Card inverse>
        <CardImg width='100%'  src={"https://image.tmdb.org/t/p/w500/"+searchedvalue.backdrop_path} alt="Card image cap" />
        <CardImgOverlay>
        <CardBody>  
        <p className="CardText"> Title : <b>{searchedvalue.title}</b>  <br />
        Language: <b>{searchedvalue.original_language}</b>  <br />
        Ratings : <b>{searchedvalue.vote_average}</b> <br />
        Overview: <b>{searchedvalue.overview}</b></p>
        </CardBody>
        </CardImgOverlay>
        </Card>
        </div>
        </Collapse>
        </Col>
        </Row>
        </div>
      )}*/}