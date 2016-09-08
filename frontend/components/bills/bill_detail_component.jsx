import React from 'react';
import Modal from 'react-modal';
import BillEditFormContainer from './edit/bill_edit_container';
import CommentContainer from '../comments/comments_container';


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
  this.props.deleteBill(bill)
}

  render(){
    return(
        <tbody  onClick={this.openModal}>
          <tr className='bill-table-row'>
            <td className='bill-table-element'>{this.props.bill.date.toDateString()}</td>
            <td className='bill-table-element'>{this.props.bill.description}</td>
            <td className='bill-table-element'>{`$ ${parseFloat(this.props.bill.owed).toFixed(2)}`}</td>
            <td className='bill-table-element'>{`$ ${parseFloat(this.props.bill.total).toFixed(2)}`}</td>
            <td className='bill-table-element'>{this.props.bill.name_payer}</td>
            <td className='bill-table-element'>{this.props.bill.ower}</td>

        <td className='bill_item_detail'>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}>
            <div className='bill-item-detail'>
              <ul className='bill-item-detail' >
                <li className='bill-detail'><div className='title-detail'>
                  Date: </div>
                {this.props.bill.date.toDateString()}</li>
              <li className='bill-detail'><div className='title-detail'>Description:</div>
                {this.props.bill.description}</li>

              <li className='bill-detail'> <ul className='bill-item-small-list'>
                <li className='bill-detail'><div className='title-detail'>{this.props.bill.name_payer} owes:</div>
                ${parseFloat(this.props.bill.owed).toFixed(2)}</li>
                <li className='bill-detail'><div className='title-detail'> Total Bill:</div>
                ${parseFloat(this.props.bill.total).toFixed(2)}</li></ul></li>

                <li className='bill-detail'><ul className='bill-item-small-list'>
                <li className='bill-detail'><div className='title-detail'>Who paid:</div>
                {this.props.bill.name_payer}</li>
                <li className='bill-detail'><div className='title-detail'>Who owes:</div>
                 {this.props.bill.ower}</li></ul></li>

                <li className='bill-detail'><div className='title-detail'>Note:</div>
                 {this.props.bill.note}</li>
               <li className='delete-edit-button-container'>
             <div
               className='delete-bill button'
               onClick={this.deleteBillItem.bind(this, this.props.bill)}
               >Delete</div>

               <BillEditFormContainer
                 bill={this.props.bill}/>
               </li >
            </ul>

              <div className='comments-container'>
                <CommentContainer bill={this.props.bill}/>
              </div>
            </div>

            </Modal>

        </td>
      </tr>
    </tbody>
    )
  }
}

export default BillDetail;
