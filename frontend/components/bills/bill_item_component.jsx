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


class BillDetail extends React.Component{


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
  console.log(bill);
  this.props.deleteBill(bill, () => this.closeModal)
}

  render(){
    // debugger

    // new Date(this.props.bill.date)
    return(

        <tbody  onClick={this.openModal}>
          <tr className='bill-table-row'>
            <td className='bill-table-element'>{this.props.bill.date.toDateString()}</td>
            <td className='bill-table-element'>{this.props.bill.description}</td>
            <td className='bill-table-element'>{this.props.bill.owed}</td>
            <td className='bill-table-element'>{this.props.bill.total}</td>
            <td className='bill-table-element'>{this.props.bill.name_payer}</td>
            <td className='bill-table-element'>{this.props.bill.ower}</td>

          <td className='bill_item_detail'>
              <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}>

                <ul className='bill-item-detail' >
                  <li className='bill-detail'>
                    Date:</li>
                  <li>{this.props.bill.date.toDateString()}</li>
                  <li className='bill-detail'>Description:</li>
                  <li> {this.props.bill.description}</li>
                  <li className='bill-detail'>Amount owed:</li>
                  <li> ${this.props.bill.owed}</li>
                  <li className='bill-detail'>Total Bill:</li>
                  <li> ${this.props.bill.total}</li>
                  <li className='bill-detail'>Who paid: </li>
                  <li>{this.props.bill.name_payer}</li>
                  <li className='bill-detail'>Who owes:</li>
                  <li> {this.props.bill.ower}</li>
                  <li className='bill-detail'>Note:</li>
                  <li> {this.props.bill.note}</li>
                  <li className='delete-bill' onClick={this.deleteBillItem.bind(this, this.props.bill)}>Delete Bill</li>
                </ul>

              </Modal>
            </td>

          </tr>







  </tbody>
    )
  }
}

export default BillDetail;
