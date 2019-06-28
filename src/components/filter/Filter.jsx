import React from "react";
import "../../styles/Filter.css";
import {connect} from "react-redux";
import {setCurrency, setTransfer} from "../../actions/filterActions";
import Currency from './Currency';
import Transfer from './Transfer'

class Filter extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="filter-tickets">
        <div className="choice-currency">
          <Currency/>
        </div>
        <div className="choice-transfer">
          <Transfer/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  console.log('STORE', store);
  return {
    filter: store.filter,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrency: (currency) => dispatch(setCurrency(currency)),
    setTransfer: (transfer) => dispatch(setTransfer(transfer))
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);
