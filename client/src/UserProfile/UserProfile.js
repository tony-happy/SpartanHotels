import React from 'react';
import { withRouter } from 'react-router-dom'
import axios from 'axios';
import "./UserProfile.css";
import homeImage from './homeImage7.jpg';
import ProfileEditName from './ProfileEditName'
import ProfileEditPassword from './ProfileEditPassword'

import { Card, CardText,
		Button, CardHeader,
		Container, Row, Col } from 'reactstrap';

var topSectionStyle = {
	width: "100%",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	backgroundPosition: "center center",
	backgroundImage: `url(${homeImage})`,

};

class UserProfile extends React.Component{
  state = {
 
    name: "",
    email: "",
    reward: "",
    currentDates: "",
    futureDates: "",
    rewardsEarned: "",
    transaction: "",
    currentRewardsHistory: [],
    futureRewardsHistory: [],
    user : []
    
  }

  RewardHistory(event) {
  	event.preventDefault()
  	this.props.history.push('/RewardHistory')
  }
  
  change = e =>{
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) => {//able to se values once submitted
    e.preventDefault();
    this.props.onSubmit(this.state)//possibly delete this.state
    console.log(this.state); 
  };
  fileSelectedHandler = event =>{
      console.log(event.target.files[0]);
  }
  

  componentDidMount() {
  	/*
<<<<<<< HEAD
  	var that = this
  	axios.all([axios.get('/api/profile'), axios.get('/api/currentRewardsHistory'), axios.get('/api/futureRewardsHistory')])
  		.then(axios.spread(function(profile, currentRewardsHistory, futureRewardsHistory) {

  			var currentRewardsTableData = []
  			for(var x = 0; x < currentRewardsHistory.data.length; x++) {
  				var date = currentRewardsHistory.data[x].date_active
  				var points = currentRewardsHistory.data[x].change
  				var transaction = currentRewardsHistory.data[x].reason

  				currentRewardsTableData[x] = {date, points, transaction} 
  			}
  			console.log(currentRewardsTableData)

  			var futureRewardsTableData = []
  			for(var x = 0; x < futureRewardsHistory.data.length; x++) {
  				var date = futureRewardsHistory.data[x].date_active
  				var points = futureRewardsHistory.data[x].change
  				var transaction = futureRewardsHistory.data[x].reason

  				futureRewardsTableData[x] = {date, points, transaction} 
  			}
  			console.log(futureRewardsTableData)

  			that.setState({
  				name: profile.data.name,
  				email: profile.data.email,
  				reward: profile.data.reward,
  				currentRewardsHistory: currentRewardsTableData,
  				futureRewardsHistory: futureRewardsTableData
  			})
  			
  		}))
  		.catch(error => console.log('asdasdasd', error))

  }

   renderCurrentRewardsTableData() {
      return this.state.currentRewardsHistory.map((current, index) => {
         const { date, points, transaction } = current //destructuring
         return (
            <tr >
               <td>{date}</td>
               <td>{points}</td>
               <td>{transaction}</td>
            </tr>
         )
      })
   }
   renderFutureRewardsTableData() {
      return this.state.futureRewardsHistory.map((future, index) => {
         const { date, points, transaction } = future//destructuring
         return (
            <tr >
               <td>{date}</td>
               <td>{points}</td>
               <td>{transaction}</td>
            </tr>
         )
      })
   }   

	  render() {
			return (
				<div className="col-lg-12 profile-container col-auto" style={topSectionStyle}>
					<div className="profile-form-container col-lg-12">
						<br/>
						<br/>
						<br/>
						<br/>         
						<br/> 
						<div>
							<Container>
								<Row>
									<Col sm="12" md={{ size: 6, offset: 3 }}>
										<Card body className="text-center"  style={{height: "710px"}}>
											<CardBody>
												<CardTitle> <h1> Hello {this.state.name}! </h1></CardTitle>
				         						<br />
				          						<Row>
					         						<Col>
					         							<Card>
					         								<CardHeader tag="h4"> ABOUT </CardHeader>
					         								<CardBody>
					         									<Row>
						         									<Col xs="6" sm="4">	
						         										<br />				         									
								         								<img src="https://png.pngtree.com/svg/20160308/_user_profile_icon_1108089.png" width="90" />
								         							</Col>
								         							<Col>
								         								<CardText> 
								         									<br />
								         									<b> Email: </b> {this.state.email}
							         										<br />
							         										<b> Name: </b> {this.state.name}
							         										<br />
							         										<b> Password: </b> ********
									         							</CardText>
								         							</Col>
							         							</Row>
							         							<Row>
							         								<Col xs="4"></Col>
									         						<Col xs="8">
									         							<Button size = "sm" color ="link"> <ProfileEditName /> </Button>
									         							<Button size = "sm" color = "link"> <ProfileEditPassword /> </Button>
									         						</Col>
							         							</Row>
					         								</CardBody>
					         							</Card>
					         						</Col>
					         					</Row>
					         					<br/>
					         					<Row>
					          						<Col>
					          							<Card>
					          								<CardHeader tag="h4"> REWARDS </CardHeader>
					         								<CardBody>
					         									<CardText>
					         										Total Points: {this.state.reward} 
					         										<br />
					         										<br />
					         										<div className="profile-table-wrapper-scroll-y profile-scrollbar">
					         											<Table hover>
					         												<thead>
					         													<tr>
					         														<th> Date </th>
					         														<th> Points Earned </th>
					         														<th> Transaction </th>
					         													</tr>
					         												</thead>
					         												<tbody>
					         													{this.renderCurrentRewardsTableData()}
					         												</tbody>
					         												<br/>
					         												<br/>
					         												<br/>
					         												<tbody>
					         													{this.renderFutureRewardsTableData()}
					         												</tbody>
					         											</Table>
					         										</div>
					         									</CardText>
					         								</CardBody>
					         							</Card>
					          						</Col>
					          					</Row>
				        					</CardBody>
				      					</Card>
				      				</Col>
			      				</Row>
			      			</Container>
	    				</div>
					</div>
=======
*/
      axios.get('/api/profile')
        .then(res => 
          this.setState({
            name: res.data.name,
            email: res.data.email,
            reward: res.data.reward
          }))  
  }

  
  render() {
		return (
			<div className="col-lg-12 profile-container col-auto" style={topSectionStyle}>
				<div className="profile-form-container col-lg-12">
					<br/>
					<br/>
					<br/>
					<br/>         
					<br/> 
					<div>
						<Container>
							<Row>
								<Col sm="12" md={{ size: 6, offset: 3 }}>
									<div className="profile-card">
										<div className="profile-center-title"> <h1> Hello {this.state.name}! </h1></div>
		         						<br />
		          						<div className="profile-card-body profile-inner-card">
			         						<Col>
			         							<Card>
			         								<CardHeader className="profile-inner-cardheader" tag="h4"> ABOUT </CardHeader>
			         								<div className="profile-inner-cardbody">
			         									<Row>
				         									<Col xs="6" sm="4">	
				         										<br />	
				         										<br />			         									
						         								<img className="profile-human-pic" src="https://png.pngtree.com/svg/20160308/_user_profile_icon_1108089.png" alt="profile" width="115" />
						         							</Col>
						         							<Col>
						         								<CardText className="profile-text-row"> 
						         									<br />
						         									<b> Email: </b> {this.state.email}
					         										<br />
					         										<b> Name: </b> {this.state.name}
					         										<br />
					         										<b> Password: </b> ********
							         							</CardText>
						         							</Col>
					         							</Row>
					         							<Row>
					         								<Col xs="4"></Col>
							         						<Col xs="8">
							         							<Button size = "sm" color ="link"> <ProfileEditName /> </Button>
							         							<Button size = "sm" color = "link"> <ProfileEditPassword /> </Button>
							         							<br/ >
							         							<br />
							         						</Col>
					         							</Row>
			         								</div>
			         							</Card>
			         						</Col>
			         					</div>
			         					<div className="profile-card-body profile-inner-card">
			          						<Col>
			          							<Card>
			          								<CardHeader className="profile-inner-cardheader" tag="h4"> REWARDS </CardHeader>
			         								<div className="profile-inner-cardbody">
			         									<CardText>
			         										<br />
			         										Total Points: {this.state.reward} 
			         										<br />
			         										<br />
			         										<Button onClick={this.RewardHistory.bind(this)} color="info"> See my reward history > </Button>
			         										<br />
			         										<br />
			         									</CardText>
			         								</div>
			         							</Card>
			          						</Col>
			          					</div>
			      					</div>

			      				</Col>
		      				</Row>
		      			</Container>
    				</div>
				</div>
			);
		}

}

export default withRouter(UserProfile);