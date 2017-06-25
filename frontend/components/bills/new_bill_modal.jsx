import React from 'react';
import Modal from 'react-modal';
import UserSearchContainer from '../users/user_search_container';
import DatePicker from 'react-datepicker';
import moment from 'moment';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    padding               : "0px"
  }
};

class BillForm extends React.Component{
  constructor(props){
    super(props)
    let user_other_id, user_owe_id, userOption, listQuestions;
    this.state = this.props.bill;
    this.state.friends = [];
    if (props.edit) {
      this.state.listQuestions = true;
      this.state.userOption = props.friend.name;
      this.state.user_other_id = props.friend.id;
      this.state.listElements = false;
      this.state.percentOfTotal = parseInt(props.bill.owed / props.bill.total * 100);
      this.state.date = moment(props.bill.date)
    } else {
      this.state.date = moment()
    }

    this.intial = props.bill;

    this.handleTotal = this.handleTotal.bind(this);
    this.sliderUpdate = this.sliderUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePayers = this.handlePayers.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.selectUser = this.selectUser.bind(this);
    this.changeUnentered = this.changeUnentered.bind(this);
    this.createAndreceive = this.createAndreceive.bind(this);
    this.updateName = this.updateName.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
  }

  openModal () {
    this.setState({modalIsOpen: true})
  }


  closeModal () {
    this.props.receiveErrors([])
    this.setState({modalIsOpen: false});
    this.setState(this.inital);
    }

  componentWillReceiveProps (newProps) {
    if (this.props.friend){
      if(! newProps.friend ){
        this.selectUser({});
        this.setState({listQuestions: false});
      }else if(this.props.friend.id != newProps.friend.id ){
        this.selectUser(newProps.friend);
      }
    }
  }

  update (field) {
    return event => { this.setState({[field]: event.currentTarget.value }); };
  }

  updateName (event) {
    const friends = this.props.friends.filter(friend => (friend.name.toLowerCase().includes(event.currentTarget.value.toLowerCase()) && friend.id != this.props.currentUser.id));
    this.setState({ friends })
  }

  handleSubmit (e) {
    e.preventDefault();
    if (this.state.total === '') {this.state.total = 0}
    this.state.owed = (parseFloat(this.state.total).toFixed(2) * this.state.percentOfTotal * .01).toFixed(2)
    this.setState({total: parseFloat(this.state.total).toFixed(2)})
    const billInfo = this.state;
    const bill = { bill :{
      user_owe_id: billInfo.user_owe_id,
      user_pay_id: billInfo.user_pay_id,
      description: billInfo.description,
      note: billInfo.note,
      total: billInfo.total,
      owed: this.state.owed,
      date: billInfo.date._d,
      id: this.props.bill.id
    }}
    console.log(bill);
    if (this.props.edit){
      this.props.updateBill(bill, bills => this.createAndreceive(bills))
    }else{
      this.props.createBill(bill, bills => this.createAndreceive(bills))
    }
  }

  createAndreceive (bill) {
    this.closeModal();
    this.props.receiveBill(bill)
  }

  renderErrors () {
    return(
      <ul className='errors after'>
        {this.props.errors.map( (error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  changeUnentered () {
    this.setState({
      listQuestions: false,
      friends: []
    })
  }

  selectUser (user) {
    this.setState({
      user_other_id: user.id,
      user_owe_id: user.id,
      userOption: user.name,
      listQuestions: true
    });
    }

  handlePayers (payer) {
    return e => {
      let ower;
      if (payer === this.props.currentUser.id){
        ower = this.state.user_other_id;
      }else{
        ower = this.props.currentUser.id;}
      this.setState({
        user_pay_id: payer,
        user_owe_id: ower
      });
    }
  }

  sliderUpdate (event) {
    this.setState({
      percentOfTotal: event.currentTarget.value
    })
  }



  handleChangeDate(date){
    this.setState({
        date
       });
  }

  handleTotal (event) {
    this.setState({
      total: event.currentTarget.value
    })
  }

  render(){
    const payer = this.state.user_pay_id === this.props.currentUser.id;
    const updater = payer ? this.state.user_other_id : this.props.currentUser.id;
    const formInput = 'new-bill-form-input'
    return (
      <div>
        <div id='new-bill' className='new-bill button' onClick={this.openModal}>Bill</div>
      <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles} >
          <div className='bill-form-container'>

          <button className='kill-button'onClick={this.closeModal}>x</button>
          <h2 ref="subtitle">Create a Bill</h2>
            <div className="new-bill-form-holder">
              <form onSubmit={this.handleSubmit} className="new-bill-form">
                { this.renderErrors() }

                <div className='new-bill-form-elements'>
                {this.state.listQuestions ? "" : <label><div className='title-detail name'>You Split with: </div>
                  <input onChange={this.updateName}></input>
                  <ul>{this.state.friends.map(friend => <li
                                                          key={`friend-list-${friend.id}`}
                                                          onClick={this.selectUser.bind(this, friend)}
                                                          >{friend.name}</li>)}</ul>
              </label >}
              </div>
                { (this.state.listQuestions) ?
                <div className='new-bill-form load-later'>


                  <div className="bill-info-container">
                  <input
                    type="text"
                    value={this.state.description}
                    onChange={this.update("description")}
                    className={`${formInput} description-box`}
                    placeholder="Description"
                    />

                    <div className='cost'>
                      <span className="currency">$</span>
                    <input
                      type ='number'
                      step='any'
                      min="0.00"
                      className='new-bill-form moneyinput'
                      placeholder={"0.00"}
                      value={this.state.total}
                      onChange={this.handleTotal}
                      className={formInput}/>
                  </div></div>
                <section><span onClick={ this.handlePayers(updater)} className="user-switch">{payer ? this.props.currentUser.name : this.state.userOption}</span> paid for this
                <br/>
                on:
                  <DatePicker
                    selected={this.state.date}
                    onChange={this.handleChangeDate}
                    />
                  </section>

                  <label><div className='title-detail'>
                    What percent of the total bill does
                    {this.props.currentUser.id === this.state.user_owe_id ?
                      ` ${this.props.currentUser.name} ` : ` ${this.state.userOption} `} <br/>
                    owe? </div><br />
                  <div className="range-slider__range">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      id='r3'
                      className='tip'
                      value={this.state.percentOfTotal}
                      onChange={this.sliderUpdate}/>
                    <span className="range-slider__value">{this.state.percentOfTotal}%</span>
                </div>
              </label>

                    <br/>
                  <label> <div className='title-detail'>Notes: </div>
                    <textarea
                      value={this.state.note}
                      onChange={this.update("note")}
                      placeholder='(optional)'
                      className={formInput} />
                  </label>

                  <div className='justify-left-flex submit-level'>
                    <input type="submit" className='entry-submit button' value="Submit" />
                  </div>

                </div> : ''}
              </form>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}





export default BillForm;
