import React from 'react';
import {connect} from 'react-redux';
import "../../styles/Filter.css"
import {setCurrency} from "../../actions/filterActions";

class Currency extends React.Component {

  handleButtonClick = (choiceCurrency) => {
    this.props.setCurrency(choiceCurrency);
  };

  render() {
    return (
        <div>
          <div className="label-currency">ВАЛЮТА</div>
          <button className={this.props.filter.currency === 'RUB'
              ? 'button-rub button-rub--checked'
              : 'button-rub'
          }
                  onClick={() => this.handleButtonClick('RUB')}>
            RUB
          </button>
          <button className={this.props.filter.currency === 'USD'
              ? 'button-usd button-usd--checked'
              : 'button-usd'
          } onClick={() => this.handleButtonClick('USD')}>
            USD
          </button>
          <button className={this.props.filter.currency === 'EUR'
              ? 'button-eur button-eur--checked'
              : 'button-eur'
          } onClick={() => this.handleButtonClick('EUR')}>
            EUR
          </button>
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
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Currency);