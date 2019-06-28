import React from 'react';
import { connect} from "react-redux";
import { setCurrency} from "../actions/filterActions";
import { setTickets} from "../actions/ticketActions";
import Ticket from '../components/Ticket'
import Filter from '../components/filter/Filter'
import '../styles/App.css'
import TicketList from "../components/ticket/TicketList";

const data = require('../services/db/tickets');

class App extends React.Component {

  componentDidMount() {
    const tickets = Object.values(data.tickets);
    this.props.setTicketsAction(tickets);
  }

  render() {
    const { filter, tickets, setTicketsAction} = this.props;
    return (
        <div className='components'>
          <Filter/>
          <TicketList/>
        </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    filter: store.filter,
    tickets: store.tickets
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrencyAction: (currency) => dispatch(setCurrency(currency)),
    setTicketsAction: (data) => dispatch(setTickets(data)),
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)