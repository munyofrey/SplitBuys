import React from 'react';
import { Link, hashHistory } from 'react-router';



class SignupForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			email: "",
			password: "",
			name: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate(){
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn(){
		if (this.props.loggedIn){
			hashHistory.push("/");
		}
	}

	update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

	handleSubmit(e){
		e.preventDefault();
		const user = this.state;
		if(this.props.loginType){
		this.props.login({user});
		}else{this.props.signup({user})}
	}

	renderErrors(){
		return(
			<ul>
				{this.props.errors.map( (error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		const formInput= this.props.formType + '-input';
		const formType= this.props.formType + '-form-box';
		return (
			<div className="login-form-container">
				<form onSubmit={this.handleSubmit} className={formType}>
					Welcome to SplitBys!
					<br/>
					{ this.renderErrors() }
					<div className={formInput}>
						{this.props.loginType ? '' :
						    <label> You go by:<br/>
								<input type="text"
											value={this.state.name}
											onChange={this.update("name")}
											className={formInput} />
									</label>
											}
						<br />
						<label>Your email is:
							<input type="text"
								value={this.state.email}
								onChange={this.update("email")}
								className={formInput} />
						</label>

						<br />
						<label> Password:
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className={formInput} />
						</label>

						<br />
						<input type="submit" value="Submit" />
					</div>
				</form>
			</div>
		);
	}

}


export default SignupForm;
