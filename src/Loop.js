import React, { Component } from 'react';
//import logo from './logo.svg';
import Main from './Main.js'
import TextTruncate from 'react-text-truncate';
import { Route, BrowserRouter, Link, Switch} from 'react-router-dom'
import './App.css';
import Routingpage from './Routingpage'
import StarRatingComponent from 'react-star-rating-component';
import 'bootstrap/dist/css/bootstrap.css';
import { Jumbotron, Button, Form, FormGroup,  CardImgOverlay, Collapse, CardBody, Card, CardImg, CardTitle, Container, Row, Col} from 'reactstrap'
import axios from 'axios';
import 'react-router-modal/css/react-router-modal.css'

let arr:number[] = new Array(300000).fill(false);


class Loop extends Component{
	constructor(props) {
		super(props);
		this.state = {
			name : '',
			searchedvalue : [],
			collapse: false
		}
		this.toggle = this.toggle.bind(this);
	}
	
	toggle = (e) =>
	{
		if(arr[e.target.id] === false)
		{
			arr.fill(false);
			arr[e.target.id] = true;
		}
		else
		{
			arr.fill(false)
		}
		this.setState({collapse:"changed"})
	}

	componentWillReceiveProps(){
		arr.fill(false)
	}
	
	render(){
		return(
			<div>
			{this.props.searchedvalue.map((searchedvalue,index) =>
				<div>
				<Row>
				<Col sm="12" md={{ size: 8, offset: 2 }}>
				<Card>
				<CardBody>
				<CardTitle id={index} color="primary" key={searchedvalue.index} onClick={this.toggle}>{searchedvalue.title} ({searchedvalue.release_date})</CardTitle>
				</CardBody>
				</Card>
				<Collapse isOpen={arr[index]}>
				<div className="divcard">
				<Card inverse>
				<CardImg className='imgs' style={styles.image} width='100%' src={"https://image.tmdb.org/t/p/w500/"+searchedvalue.backdrop_path} onError={(e)=>{e.target.src="http://i.imgur.com/lL3LtFD.jpg"}} alt="error"></CardImg>
				<CardImgOverlay className="divcard">
				<CardBody id={index}>
				<br />
				<div className="CardText">
				<p key={searchedvalue.index}>
				<img src={"https://image.tmdb.org/t/p/w500/"+searchedvalue.poster_path} className="imgpost" alt="error" />		
				<ul className="list" key={searchedvalue.index}>
				<li>TITLE : <b>{searchedvalue.title}</b></li>
				<li>LANGUAGE: <b>{searchedvalue.original_language} </b> </li>
				<li>RATINGS  : <b>{searchedvalue.vote_average}</b> </li>
				<StarRatingComponent
				name="rate1" 
				editing={false}
				starCount={10}
				value={searchedvalue.vote_average}
				renderStarIconHalf={() => <span className="fa fa-star-half-full" />}
				/>
				<li>OVERVIEW : 
				<TextTruncate
				line={4}
				truncateText="…"
				text={searchedvalue.overview}
				/></li>
				</ul>
				</p>
				</div>
				<Link 
				to={{ 
					pathname: '/Routingpage', 
					state: { searchedvalue: searchedvalue} 
				}} >
				<Button className="More" style={styles.container}>More...</Button>
				</Link>
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

const styles = {
	container:{
		backgroundColor: "white", color:"black", marginLeft:"200px"
	},
	image:{
		borderRadius: "20px"
	}
}

export default Loop