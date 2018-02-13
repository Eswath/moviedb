import React, { Component } from 'react';
import './route.css';
import { Jumbotron, Button, Form, FormGroup,  CardImgOverlay, Collapse, CardBody, Card, CardImg, CardTitle, Container, Row, Col} from 'reactstrap'
import StarRatingComponent from 'react-star-rating-component';
import CountUp from 'react-countup';


class Routingpage extends Component {
	render() {
		return (
			<div className="rcorners">
			<center>
			<Card inverse style={styles.cardsize}>
			<CardImg className='imgs' style={styles.image} src={"https://image.tmdb.org/t/p/w500/"+this.props.location.state.searchedvalue.backdrop_path} onError={(e)=>{e.target.src="http://i.imgur.com/lL3LtFD.jpg"}} alt="error"></CardImg>
			<CardBody>
			<CardImgOverlay>
			<br />
			<div className="CardText">
			<p>
			<img src={"https://image.tmdb.org/t/p/w500/"+this.props.location.state.searchedvalue.poster_path} className="imgpost" alt="error" />		
			<ul className="list" key={this.props.location.state.searchedvalue.index}>
			<li>TITLE : <b>{this.props.location.state.searchedvalue.title} -- {this.props.location.state.searchedvalue.original_title}</b></li>
			<li>LANGUAGE: <b>{this.props.location.state.searchedvalue.original_language} </b> </li>
			<li>RATINGS  : <b><CountUp start={0} end={this.props.location.state.searchedvalue.vote_average} duration={4} /></b> </li>
			<StarRatingComponent
			name="rate1" 
			editing={false}
			starCount={10}
			value={this.props.location.state.searchedvalue.vote_average}
			renderStarIconHalf={() => <span className="fa fa-star-half-full" />}
			/>
			<li> RELEASE DATE : <b> {this.props.location.state.searchedvalue.release_date} </b></li> 
			<li> POPULARITY : <b> <CountUp start={0} end={this.props.location.state.searchedvalue.popularity} duration={3} /> %</b> </li> <br />
			<li>OVERVIEW : 
			{this.props.location.state.searchedvalue.overview}
			</li>
			</ul>
			</p>
			</div>
			</CardImgOverlay>
			</CardBody>
			</Card>	
			</center>
			</div>
			);
	}
}

const styles = {
	image:{
		marginTop: "20px",
		borderSize : "cover"
	},
	cardsize:{
		minWidth:"130%",
		backgroundColor:"#9eede0",
		marginRight:"200px"
	},
	border:{
		marginRight: "200px",
	}
}
export default Routingpage;