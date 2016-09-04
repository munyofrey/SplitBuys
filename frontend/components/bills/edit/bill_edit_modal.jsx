import React from 'react'
import Modal from 'react-modal';


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


class BillEditForm extends React.Component{

  constructor(props){
    super(props)
    const percentOfTotal = (parseFloat(this.props.bill.owed) / parseFloat(this.props.bill.total)).toFixed(2) * 100
    const startingUserOption = (this.props.bill.name_payer === this.props.currentUser.name) ? this.props.bill.ower : this.props.bill.payer_name
    const payer_user_id = (this.props.bill.name_payer === this.props.currentUser.name) ? this.props.currentUser.id : this.props.bill.other_user_id
    const ower_user_id = (this.props.bill.ower === this.props.currentUser.name) ? this.props.currentUser.id : this.props.bill.other_user_id
    this.starting = {
      percentOfTotal: (parseFloat(this.props.bill.owed) / parseFloat(this.props.bill.total)).toFixed(2) * 100,
      startingUserOption: (this.props.bill.name_payer === this.props.currentUser.name) ? this.props.bill.ower : this.props.bill.name_payer,
      payer_user_id: (this.props.bill.name_payer === this.props.currentUser.name) ? this.props.currentUser.id : this.props.bill.other_user_id,
      ower_user_id: (this.props.bill.ower === this.props.currentUser.name) ? this.props.currentUser.id : this.props.bill.other_user_id
    }
    this.onClose = {
      userOption: this.starting.startingUserOption,
      modalIsOpen: false,
      other_user_id: parseInt(this.props.bill.other_user_id),
      user_pay_id: parseInt(this.starting.payer_user_id),
      user_owe_id: parseInt(this.starting.ower_user_id),
      percentOfTotal: this.starting.percentOfTotal,
      description: this.props.bill.description,
      note: this.props.bill.note,
      owed: parseFloat(this.props.bill.owed),
      total: parseFloat(this.props.bill.total),
      date: this.props.bill.date.toISOString().slice(0, 10),
      id: this.props.bill.id
    }

    this.state = {
      userOption: this.starting.startingUserOption,
      modalIsOpen: false,
      other_user_id: parseInt(this.props.bill.other_user_id),
      user_pay_id: parseInt(this.starting.payer_user_id),
      user_owe_id: parseInt(this.starting.ower_user_id),
      percentOfTotal: this.starting.percentOfTotal,
      description: this.props.bill.description,
      note: this.props.bill.note,
      owed: parseFloat(this.props.bill.owed),
      total: parseFloat(this.props.bill.total),
      date: this.props.bill.date.toISOString().slice(0, 10),
      id: this.props.bill.id
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.update = this.update.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateAndreceive = this.updateAndreceive.bind(this)
    this.renderErrors = this.renderErrors.bind(this)
    this.handlePayers = this.handlePayers.bind(this)
    this.sliderUpdate = this.sliderUpdate.bind(this)
    this.updateTextInput = this.updateTextInput.bind(this)
    this.handleTotal = this.handleTotal.bind(this)
  }

  openModal(){
    this.setState({modalIsOpen: true})
  }


// think about what else you need!!!
  closeModal(){
    this.props.receiveErrors([])
    this.setState({
      userOption: this.starting.startingUserOption,
      modalIsOpen: false,
      other_user_id: parseInt(this.props.bill.other_user_id),
      user_pay_id: parseInt(this.starting.payer_user_id),
      user_owe_id: parseInt(this.starting.ower_user_id),
      percentOfTotal: this.starting.percentOfTotal,
      description: this.props.bill.description,
      note: this.props.bill.note,
      owed: parseFloat(this.props.bill.owed),
      total: parseFloat(this.props.bill.total),
      date: this.props.bill.date.toISOString().slice(0, 10),
      id: this.props.bill.id
    })
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
      id: billInfo.id
    }}
    this.props.updateBill(bill, bills => this.updateAndreceive(bills))
  }


  updateAndreceive(bills){
    this.closeModal();
    this.props.receiveBills(bills)
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

  handlePayers(event){
    const payer = parseInt(event.currentTarget.value);
    let ower;
    if (payer === this.props.currentUser.id){
      ower = parseInt(this.state.other_user_id);
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
    this.updateTextInput(event.currentTarget.value)
  }

  updateTextInput(val) {
    document.getElementById('textInput').value=val;
  }

  handleTotal(event){
    this.setState({
      total: event.currentTarget.value
    })
  }

  render(){
    const formInput = 'new-bill-form-input'
    return(
      <div>
        <div onClick={this.openModal} className='edit-bill button'>Edit Bill</div>

            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}>


                  <div className='bill-edit-form-container'>
                  <button className='kill-button' onClick={this.closeModal}>x</button>
                  <h2 ref="subtitle">Edit Your Bill with {` ${this.state.userOption}`}!</h2>
                    <div className="edit-bill-form-holder">
                      <form onSubmit={this.handleSubmit} className="edit-bill-form">
                          { this.renderErrors() }
                          <div className='new-bill-form load-later'>
                            <div className='title-detail'>Who paid?</div>
                            <div className='new-bill-form radio-buttons'>
                                <label> I did
                                    <input type='radio'
                                      className='radio-button'
                                      name='You'
                                      value={this.props.currentUser.id}
                                      onChange={this.handlePayers}
                                      checked= {parseInt(this.state.user_pay_id) === this.props.currentUser.id}
                                      className={formInput}/>
                                    </label>
                                        <br/>
                            <label> {this.state.userOption}
                                  <input type='radio'
                                    className='radio-button'
                                    name={this.state.userOption}
                                    checked ={this.state.user_pay_id === this.state.other_user_id}
                                    value={this.state.other_user_id}
                                    onChange={this.handlePayers}
                                    className={formInput}/>
                                </label>
                            </div>

                            <label><div className='title-detail'>
                              Date of bill
                            </div>
                              <input type='date' onChange={this.update('date')} value={this.state.date}/>
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
                              {currentUser.id === this.state.user_owe_id ?
                                ` ${currentUser.name} ` : ` ${this.state.userOption} `}
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

                          </div>

                        </form>
                      </div>
                    </div>

            </Modal>

      </div>
    )
  }
}

export default BillEditForm;
