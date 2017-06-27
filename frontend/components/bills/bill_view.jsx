import React from 'react'

export const BillView = () => (
  <tr className='bill-table-row'>
    <td className='bill-table-element'>{this.props.bill.date.toDateString()}</td>
    <td className='bill-table-element'>{this.props.bill.description}</td>
    <td className='bill-table-element'>{`$ ${this.props.bill.owed}`}</td>
    <td className='bill-table-element'>{`$ ${this.props.bill.total}`}</td>
    <td className='bill-table-element'>{this.props.bill.name_payer}</td>
    <td className='bill-table-element'>{this.props.bill.ower}</td>

<td className='bill_item_detail'>
    <Modal
      contentLabel='editBill'
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
        ${this.props.bill.owed}</li>
        <li className='bill-detail'><div className='title-detail'> Total Bill:</div>
        ${this.props.bill.total}</li></ul></li>

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
     <li><div onClick={this.switchVeiw} className='edit-bill button'>Edit Bill</div></li>
    </ul>

      <div className='comments-container'>
        Comments container
      </div>
    </div>

    </Modal>

</td>
</tr>
)
