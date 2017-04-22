import React from 'react';
import Modal from 'react-modal';
import UserSearchContainer from '../users/user_search_container';
import WPForm from 'react-icons/lib/fa/wpforms';

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
    let user_other_id, user_owe_id, userOption, listQuestions;
    this.state = this.props.bill;
    if (props.edit) {
      this.state.listQuestions = true;
      this.state.userOption = props.friend.name;
      this.state.user_other_id = props.friend.id;
      this.state.listElements = false;

    }

    this.handleTotal = this.handleTotal.bind(this)
    this.sliderUpdate = this.sliderUpdate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePayers = this.handlePayers.bind(this)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.selectUser = this.selectUser.bind(this)
    this.changeUnentered = this.changeUnentered.bind(this)
    this.createAndreceive = this.createAndreceive.bind(this)
  }

  openModal(){
    this.setState({modalIsOpen: true})
  }



  closeModal(){
    this.props.receiveErrors([])
    this.setState({modalIsOpen: false});
    if (this.props.new) {
      this.setState({
       listQuestions: false,
       userOption: '',
       user_other_id: 0,
       user_pay_id: this.props.currentUser.id,
       user_owe_id: this.props.currentUser.id,
       percentOfTotal: 50,
       description: '',
       note: '',
       owed: 0,
       total: '',
       date: ''
      });
    }

  }

  componentWillReceiveProps(newProps){
    if (this.props.friend){
      if(! newProps.friend ){
        this.selectUser({});
        this.setState({listQuestions: false});
      }else if(this.props.friend.id != newProps.friend.id ){
        this.selectUser(newProps.friend);
      }
    }else if (newProps.friend) {

    }
  }

  update(field){
    return e => { this.setState({[field]: e.currentTarget.value }); };
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.state.total === '') {this.state.total = 0}
    this.state.owed = (parseFloat(this.state.total).toFixed(2) * this.state.percentOfTotal * .01).toFixed(2)
    this.setState({total: parseFloat(this.state.total).toFixed(2)})
    const billInfo = this.state;
    const bill = {bill:{
      user_owe_id: billInfo.user_owe_id,
      user_pay_id: billInfo.user_pay_id,
      description: billInfo.description,
      note: billInfo.note,
      total: billInfo.total,
      owed: this.state.owed,
      date: billInfo.date,
      id: this.props.bill.id
    }}
    if (this.props.edit){
      this.props.updateBill(bill, bills => this.createAndreceive(bills))
    }else{
      this.props.createBill(bill, bills => this.createAndreceive(bills))
    }
  }

  createAndreceive(bill){
    this.closeModal();
    this.props.receiveBill(bill)
  }




  renderErrors(){
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

  changeUnentered(){
    this.setState({
      listQuestions: false
    })
  }

  selectUser(user){
    this.setState({
      user_other_id: user.id,
      user_owe_id: user.id,
      userOption: user.name,
      listQuestions: true
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
    this.setState({
      total: event.currentTarget.value
    })
  }


  render(){
    const formInput = 'new-bill-form-input'
    return (
      <div>
        <div id='new-bill' className='new-bill button' onClick={this.openModal}><WPForm /></div>
      <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles} >
          <div className='bill-form-container'>

          <button className='kill-button'onClick={this.closeModal}>x</button>
          <h2 ref="subtitle">Create a Bill!</h2>
            <div className="new-bill-form-holder">
              <form onSubmit={this.handleSubmit} className="new-bill-form">
                { this.renderErrors() }

                <div className='new-bill-form-elements'>
                {this.state.listQuestions? "" :<label><div className='title-detail name'>You Split with: </div>
                  <input onChange={this.updateName}></input>
                </label >}
              </div>
                { (this.state.listQuestions) ?
                <div className='new-bill-form load-later'>
                  <div className='title-detail'>Who paid?</div>
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

                  <label><div className='title-detail'>
                    Date of bill
                  </div>
                    <input type='date' onChange={this.update('date')}/>
                  </label>

                  <label><div className='title-detail'>Description: </div>

                  <input
                    type="text"
                    value={this.state.description}
                    onChange={this.update("description")}
                    className={formInput} />
                </label>
                  <label>
                    <div className='title-detail'>
                    Total bill:
                  </div>
                    <input
                      type = 'number'
                      step='any'
                      min="0.01"
                      className='new-bill-form moneyinput'
                      placeholder={0}
                    value={this.state.total}
                    onChange={this.handleTotal}
                    className={formInput}/>
                  </label>

                  <label><div className='title-detail'>
                    What percent of the total bill does
                    {this.props.currentUser.id === this.state.user_owe_id ?
                      ` ${this.props.currentUser.name} ` : ` ${this.state.userOption} `}
                    owe? </div><br />
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={this.state.percentOfTotal}
                      onChange={this.sliderUpdate}/>
                    <input
                      type="number"
                      name="amountInput"
                      min="0" max="100"
                      value={this.state.percentOfTotal}
                      onChange={this.sliderUpdate} />
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





export default ModalBillForm;
