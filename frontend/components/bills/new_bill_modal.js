import React from 'react';
import Modal from 'react-modal';
import UserSearchContainer from '../users/user_search_container';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class ModalBillForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      userOption: 'john',
      modalIsOpen: false,
      user_other_id: 0,
      user_pay_id: this.props.currentUser.id,
      user_owe_id: this.props.currentUser.id,
      description: '',
      note: '',
      owed: 0,
      total: 0
    }

    this.tempState = {
      percent_of_total: 50,
      payer: this.props.currentUser
    }
    this.handlePayers = this.handlePayers.bind(this)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.selectUser = this.selectUser.bind(this)
    // this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
  }

  openModal(){
    this.setState({modalIsOpen: true})
  }

  closeModal(){
    this.setState({modalIsOpen: false})
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
      <ul className='after'>
        {this.props.errors.map( (error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  selectUser(user){
    this.setState({
      user_other_id: user.id,
      userOption: user.name,
    });
    }


  handlePayers(event){
    const payer = parseInt(event.currentTarget.value);
    let ower;
    if (payer === this.props.currentUser.id){
      ower = parseInt(this.state.user_other_id);
    }else{ ower = parseInt(this.props.currentUser.id);}
    this.setState({
      user_pay_id: payer,
      user_owe_id: ower
    });
    console.log(this.state);
    console.log(currentUser.id);
  }

  render(){
    const formInput = 'new-bill-form-input'
    return (
      <div>
        <div id='new-bill' className='new-bill button' onClick={this.openModal}>Add Bill</div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles} >

          <button class='button'onClick={this.closeModal}>close</button>
          <h2 ref="subtitle">Create a Bill!</h2>
            <div className="new-bill-form-holder">
              <form onSubmit={this.handleSubmit} className="new-bill-form">
                { this.renderErrors() }
                <div className='new-bill-form-elements'>
                <label>You Split a Bill with:<br/>
                    <UserSearchContainer selectUser={this.selectUser} userOptions={this.state.userOption}/>
                </label>

                <label>
                  Who paid?<label>
                   I did
                  <input type='radio'
                    name='You'
                    value={this.props.currentUser.id}
                    onChange={this.handlePayers}
                    checked={this.state.user_pay_id === this.props.currentUser.id}
                    className={formInput}/>
                </label>
                  <br/>
                  <label>
                  {this.state.userOption}
                  <input type='radio'
                    name={this.state.userOption}
                    checked ={this.state.user_pay_id === this.state.user_other_id}
                    value={this.state.user_other_id}
                    onChange={this.handlePayers}
                    className={formInput}/>
                </label>
                </label>

                  <label>Description:
                    <input type="text"
                      value={this.state.description}
                      onChange={this.update("description")}
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
              </form>
            </div>
        </Modal>
      </div>
    );
  }
}





export default ModalBillForm;
