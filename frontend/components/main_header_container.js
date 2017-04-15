import React from 'react';
import { connect } from 'react-redux';
import MainHeader from './main_header_component';
import {values} from 'lodash';

const mapStateToProps = (state, ownProps) => ({
    friend: state.friends.friends[ownProps.friendId],
    bills: Boolean(values(state.bills.bills).length > 0)
  })

const mapDispatchToProps = () => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);
