import React, {Component} from 'react';
import {setCurrency} from "../../actions/filterActions";
import {setTickets} from "../../actions/ticketActions";
import {connect} from "react-redux";

import TicketItem from "./TicketItem";

class TicketList extends Component {

  filterTranser = () => {
    const { tickets, filter } = this.props;
    let filterTickets = [];
    if (filter.transfer[0] === true)
    {
      return tickets.ticketsList;
    }
    if (filter.transfer[1] === true)
    {
      let newTickets = [].concat(tickets.ticketsList.filter(item => {
        return item.stops === 0;
      }));
      for (let i = 0; i < newTickets.length; i++)
      {
        filterTickets.push(newTickets[i]);
      }
    }
    if (filter.transfer[2] === true)
    {
      let newTickets = [].concat(tickets.ticketsList.filter(item => {
        return item.stops === 1;
      }));
      for (let i = 0; i < newTickets.length; i++)
      {
        filterTickets.push(newTickets[i]);
      }
    }
    if (filter.transfer[3] === true)
    {
      let newTickets = [].concat(tickets.ticketsList.filter(item => {
        return item.stops === 2;
      }));
      for (let i = 0; i < newTickets.length; i++)
      {
        filterTickets.push(newTickets[i]);
      }
    }
    if (filter.transfer[4] === true)
    {
      let newTickets = [].concat(tickets.ticketsList.filter(item => {
        return item.stops === 3;
      }));
      for (let i = 0; i < newTickets.length; i++)
      {
        filterTickets.push(newTickets[i]);
      }
    }
    if (
        filter.transfer[0] === false &&
        filter.transfer[1] === false &&
        filter.transfer[2] === false &&
        filter.transfer[3] === false &&
        filter.transfer[4] === false)
    {
      return tickets.ticketsList;
    }
    return filterTickets;
  };

  render() {
    const { filter } = this.props;
    let filteredTickets = this.filterTranser();
    console.log(filteredTickets);
    let filterTickets = filteredTickets.slice();
    console.log('FILTER_DO_PEREDACHI', filter);
    const ticketList = filterTickets.map((item) => {
      return (<TicketItem ticket={item} currency={filter.currency}/>)
    });
    return (
        <div className='ticket-list'>
          {ticketList}
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
)(TicketList)