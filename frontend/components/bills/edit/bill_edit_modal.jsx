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
  this.state = {
    modalIsOpen: false
  }
  this.openModal = this.openModal.bind(this)
  this.closeModal = this.closeModal.bind(this)
  this.deleteBillItem = this.deleteBillItem.bind(this)
}

openModal(){
  this.setState({modalIsOpen: true})
}

closeModal(){
  this.setState({modalIsOpen: false})
}

deleteBillItem(bill){
  this.props.deleteBill(bill, () => this.closeModal)
}

  render(){
    return(
      <div>
        <div onClick={this.openModal} className='edit-bill button'>Edit Bill</div>

            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}>

              <h1>Hi from modal</h1>

                <div className='bill-edit-form-container'>

                <button className='kill-button' onClick={this.closeModal}>x</button>
                <h2 ref="subtitle">Edit You Bill!</h2>
                  <div className="new-bill-form-holder">
                    <form onSubmit={this.handleSubmit} className="new-bill-form">
                      { this.renderErrors() }

                      <div className='new-bill-form-elements'>
                      <label><div className='title-detail'>You Split with:</div>
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

                      </div> : ''}
                    </form>
                  </div>
                </div>

            </Modal>

      </div>
    )
  }
}

export default BillEditForm;
