import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Jumbotron, Button, Input, Form, FormGroup, Container} from 'reactstrap'
import axios from 'axios';

class Main extends Component
{
    constructor(props) {
        super(props);
        this.state = {
          name : '',
          searchedvalue : []
      }
      this.moviename = this.moviename.bind(this);
      this.onhandleclick = this.onhandleclick.bind(this);
      
  }

  moviename(e) {
    this.setState({ name : e.target.value });
    console.log(this.state.name);  
} 

onhandleclick(e){
    e.preventDefault();
    axios("https://api.themoviedb.org/3/search/movie?api_key=d272326e467344029e68e3c4ff0b4059&language=en-US&query="+this.state.name)
    .then(res=> this.props.data(res.data.results))
    //.then(res => this.setState({searchedvalue: res.data.results}))
    //.then(this.props.data(this.state.searchedvalue))
}


render(){
    return (
        <div>
        <Jumbotron fluid style={styles.container}>
        <Container fluid>
        <div className="App" style={styles.default}>
        <br />
        <h1 className="App-title">MovieDB</h1>
        <Form onSubmit={this.onhandleclick}>
        <center>
        <FormGroup className="col-md-3 inputGroupContainer">
        <Input type="text" className="CardText" name="moviename" id="moviename" placeholder="Enter Movie Name:" onChange={this.moviename}/>
        </FormGroup>
        <Button type="Submit">Search</Button>
        </center>
        </Form>
        </div>
        </Container>
        </Jumbotron>
        </div>
        );
}
}

const styles = {
    container: {
       backgroundImage: `url(https://ewedit.files.wordpress.com/2017/02/transformers.jpg?w=2000)`,
       backgroundSize: "cover", 
       backgroundRepeat:   "no-repeat",
       backgroundPosition: "center",
   },
   default:{
    color: "white",
    overflowWrap: "break-word",
    wordWrap: "break-word",
    hyphens: "auto"
   }
};

export default Main;
