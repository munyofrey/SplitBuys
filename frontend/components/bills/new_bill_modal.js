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
      listElements: true,
      listQuestions: false,
      userOption: '',
      modalIsOpen: false,
      user_other_id: 0,
      user_pay_id: this.props.currentUser.id,
      user_owe_id: this.props.currentUser.id,
      percentOfTotal: 50,
      description: '',
      note: '',
      owed: 0,
      total: 0,
      date: ''
    }

    this.handleTotal = this.handleTotal.bind(this)
    this.sliderUpdate = this.sliderUpdate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePayers = this.handlePayers.bind(this)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.selectUser = this.selectUser.bind(this)
    this.changeUnentered = this.changeUnentered.bind(this)
    this.resetModal = this.resetModal.bind(this)

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
    this.state.owed = (this.state.total * this.state.percentOfTotal * .01).toFixed(2)
    const billInfo = this.state;
    const bill = {bill:{
      user_owe_id: billInfo.user_owe_id,
      user_pay_id: billInfo.user_pay_id,
      description: billInfo.description,
      note: billInfo.note,
      total: billInfo.total,
      owed: this.state.owed,
      date: billInfo.date
    }}


    this.props.createBill(bill, (newBills) => {this.resetModal})
  }

  resetModal(){
      this.closeModal();
         this.setState({
          listElements: true,
          listQuestions: false,
          userOption: '',
          modalIsOpen: false,
          user_other_id: 0,
          user_pay_id: this.props.currentUser.id,
          user_owe_id: this.props.currentUser.id,
          percentOfTotal: 50,
          description: '',
          note: '',
          owed: 0,
          total: 0,
          date: ''
        });
        this.props.receiveBills(newBills)
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

  changeUnentered(){
    this.setState({
      listQuestions: false,
      listElements: true
    })
  }

  selectUser(user){
    this.setState({
      user_other_id: user.id,
      userOption: user.name,
      listQuestions: true,
      listElements: false
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
  }

  sliderUpdate(event){
    this.setState({
      percentOfTotal: event.currentTarget.value
    })
  }

  handleTotal(event){
    let totalString = event.currentTarget.value
    totalString = totalString === '' ? '0' : totalString
    this.setState({
      total: parseInt(totalString)
    })
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

          <button className='kill-button'onClick={this.resetModal}>x</button>
          <h2 ref="subtitle">Create a Bill!</h2>
            <div className="new-bill-form-holder">
              <form onSubmit={this.handleSubmit} className="new-bill-form">
                { this.renderErrors() }
                <div className='new-bill-form-elements'>
                <label>You Split a Bill with:<br/>
                    <UserSearchContainer
                      selectUser={this.selectUser}
                      nameEntered= {this.state.nameEntered}
                      userOptions={this.state.userOption}
                      listElements={this.state.listElements}
                      changeUnentered={this.changeUnentered}/>
                </label >
              </div>
                { (this.state.listQuestions) ?
                <div className='new-bill-form load-later'>
                  Who paid?<br />
                  <div className='new-bill-form radio-buttons'>
                      <label> I did
                          <input type='radio'
                            className='radio-button'
                            name='You'
                            value={this.props.currentUser.id}
                            onChange={this.handlePayers}
                            checked={this.state.user_pay_id === this.props.currentUser.id}
                            className={formInput}/>
                          </label>
                              <br/>
                  <label> {this.state.userOption}
                        <input type='radio'
                          className='radio-button'
                          name={this.state.userOption}
                          checked ={this.state.user_pay_id === this.state.user_other_id}
                          value={this.state.user_other_id}
                          onChange={this.handlePayers}
                          className={formInput}/>
                      </label>
                  </div>

                  <label>
                    Date of bill
                    <input type='date' onChange={this.update('date')}/>
                  </label>

                  <label>
                    Total bill:
                    <input className='new-bill-form moneyinput'
                    name={this.state.total}
                    value={this.state.total}
                    onChange={this.handleTotal}
                    className={formInput}/>
                  </label>

                  <label>
                    What percent of the total bill does
                    {currentUser.id === this.state.user_owe_id ? ` ${currentUser.name} ` : ` ${this.state.userOption} `} owe? <br />
                    <input
                      type="range"
                      min="0"
                      max="100"
                      defaultValue={50}
                      onChange={this.sliderUpdate}/>
                  </label>

                  <label>Description:
                    <br/>
                    <input
                      type="text"
                      value={this.state.description}
                      onChange={this.update("description")}
                      className={formInput} />
                  </label>

                  <label> notes:
                    <textarea
                      value={this.state.note}
                      onChange={this.update("note")}
                      className={formInput} />
                  </label>

                  <div className='justify-left-flex submit-level'>
                    <input type="submit" className='entry-submit button' value="Submit" />
                  </div>

                </div> : ''}
              </form>
            </div>
        </Modal>
      </div>
    );
  }
}





export default ModalBillForm;
