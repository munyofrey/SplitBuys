import React from 'react';


class BillFrom extends React.Component{
  constructor(props){
    super(props)
    tempState = {
      percent_of_total: 50,
      payer: this.props.currentUser
    }
    state = {
      user_pay_id: this.props.currentUser,
      user_owe_id: this.props.currentUser,
      description: '',
      note: '',
      owed: 0,
      total: 0
    }
  }

  handlePayerOption(){

  }


  render() {
    return (
      <div className="new-bill-form-holder">
        <form onSubmit={this.handleSubmit} className="new-bill-form">
          <div className='new-bill-form-elements'>
            { this.renderErrors() }
          <label>You Split a Bill with:<br/>
          <input type="text"
            value={this.state.user_pay_id}
            onChange={this.update("user_pay_id")}
            className=new-bill-form-elements />
          </label>

          <label>
            Who paid?
            // onChange _handle
            <input type='radio' name='You'></input>
          </label>

            <label>Your email is:
              <input type="text"
                value={this.state.email}
                onChange={this.update("email")}
                className={formInput} />
            </label>
            <label> Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className={formInput} />
            </label>
            <div className='justify-left-flex submit-level'>
            <input type="submit" className='entry-submit button' value="Submit" />
            </div>
          </div>
          </div>
        </form>
      </div>
    );
  }


}
