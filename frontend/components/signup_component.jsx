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
		this.loginuser = this.loginuser.bind(this);
	}

	componentWillReceiveProps(newProps){
		if (newProps.loggedin){
			hashHistory.push("/landing");
		}
	}

	loginuser(){
    const user = {user: {email:'guestuser@splitbys.com', password:'password'}};
    this.props.login(user);
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
			<ul className='errors'>
				{this.props.errors.map( (error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}
	//
	// navLink(){
	// 	return(
	// 		<Link to="/" className='kill-button margin-down'>x</Link>
	// 		)
	// 	}



	render() {
		const formInput= this.props.formType + '-input';
		const formType= this.props.formType + '-form-box';
		return (
			<div className="login-form-container">

					{this.props.loginType ?
						<p className='welcome-text'>Welcome back!</p> :

								<p className='welcome-text'>Welcome to <br/> SplitBys!</p>
							}
				<form className={formType}>
						{ this.renderErrors() }
						{this.props.loginType ? '' :

						    <label>
								<input type="text"
											value={this.state.name}
											placeholder="Your name"
											onChange={this.update("name")}
											className={formInput} />
										<br/>
									</label>
											}
						<label>
							<input type="text"
								value={this.state.email}
								placeholder="Email"
								onChange={this.update("email")}
								className={formInput} />
						</label><br/>
						<label>
							<input type="password"
								value={this.state.password}
								placeholder="Password"
								onChange={this.update("password")}
								className={formInput} />
						</label><br/>
					<div className="signin-buttons">

						<input type="submit" className='entry-submit button' onClick={this.handleSubmit} value={this.props.loginType ? "Login" : "Sign up"} />
						<button className='button guest-user' onClick={this.loginuser} >Demo</button>
					</div>
				</form>
			</div>
		);
	}

}


export default SignupForm;
