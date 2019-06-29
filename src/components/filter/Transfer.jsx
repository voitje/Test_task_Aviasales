import React from 'react';
import {connect} from "react-redux";
import {setTransfer} from "../../actions/filterActions";

class Transfer extends React.Component {

  handleCheckBoxClick = (choiceTransfer) => {
    const array = this.props.filter.transfer;
    array[choiceTransfer] = !array[choiceTransfer];
    this.props.setTransfer(array);
  };

  render() {
    return (
        <div className='choice-transfer'>
          <div className="transfer_label">КОЛИЧЕСТВО ПЕРЕСАДОК</div>
          <label className="transfer_item">
             <span className="checkbox-cont">
              <input
                  type="checkbox"
                  onClick={() => this.handleCheckBoxClick(0)}/>
              <span className="checkmate" />
             </span>
            <p className="choice-transfer__item">Все</p>
          </label>
          <label className="transfer_item">
             <span className="checkbox-cont">
              <input
                  type="checkbox"
                  onClick={() => this.handleCheckBoxClick(1)}/>
              <span className="checkmate"/>
             </span>
            <p className="choice-transfer__item">Без пересадок</p>
          </label>
          <label className="transfer_item">
             <span className="checkbox-cont">
              <input
                  type="checkbox"
                  onClick={() => this.handleCheckBoxClick(2)}/>
              <span className="checkmate" />
             </span>
            <p className="choice-transfer__item">1 пересадка</p>
          </label>
          <label className="transfer_item">
             <span className="checkbox-cont">
              <input
                  type="checkbox"
                  onClick={() => this.handleCheckBoxClick(3)}/>
              <span className="checkmate" />
             </span>
            <p className="choice-transfer__item">2 пересадки</p>
          </label>
          <label className="transfer_item">
             <span className="checkbox-cont">
              <input
                  type="checkbox"
                  onClick={() => this.handleCheckBoxClick(4)}/>
              <span className="checkmate" />
             </span>
            <p className="choice-transfer__item">3 пересадки</p>
          </label>
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
    setTransfer: (transfer) => dispatch(setTransfer(transfer))
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Transfer);