import React from 'react';
import '../../scss/Ticket.scss'
import logo from '../../static/images/dddb6e70e25fdd6553238ce7aecfa37661376fbb.png'
import plane from '../../static/images/plane-silhouette-grey.svg'


const TicketItem = ( {ticket, currency}) => {
  console.log('TICKET_FILTER', ticket, currency);
  const converterCurrency = (currency, price) => {
    switch (currency) {
      case 'EUR':
        return {newCurrency: '€', newPrice: Math.round(price / 71)};
      case 'USD':
        return {newCurrency: '$', newPrice: Math.round(price / 62)};
      case 'RUB':
        return {newCurrency: '₽', newPrice: price}
    }
  };
  const convert = converterCurrency(currency, ticket.price);
  console.log(currency, ticket.price);
  return (
      <div className='ticket'>
        <div className='ticket__logo-with-btn'>
          <div className='logo'>
            <img src={logo} alt='logo' width="130px"/>
          </div>
          <button className='button-buy'>КУПИТЬ
            <div>ЗА {convert.newPrice} {convert.newCurrency}</div></button>
        </div>
        <div className='ticket__info'>
          <div className='ticket__info__from'>
            <div className='ticket__info__from__time'>{ticket.departure_time}</div>
            <div className='ticket__info__from__destination'>
              <span className='origin'>{ticket.origin},</span>
              <span className='origin-name'> {ticket.origin_name}</span>
            </div>
            <div className='ticket__info__from__departure-date'>{ticket.departure_date}</div>
          </div>
          <div className='ticket__info__transfer'>
            {
              ticket.stops === 0 && <a/>
            }
            { ticket.stops === 1 &&
            <a>{ticket.stops} ПЕРЕСАДКА</a>
            }
            {
              ticket.stops > 1 &&
              <a>{ticket.stops} ПЕРЕСАДКИ</a>
            }
            <div className='line-with-plane'>
              <hr className='line'/>
              <img className='plane' src={plane} alt='plane'/>
            </div>
          </div>
          <div className='ticket__info__to'>
            <div className='ticket__info__to__time'>{ticket.arrival_time}</div>
            <div className='ticket__info__to__destination'>
              <span className='origin-name'> {ticket.destination_name}, </span>
              <span className='origin'>{ticket.destination}</span>
            </div>
            <div className='ticket__info__to__arrival-date'>{ticket.arrival_date}</div>
          </div>
        </div>
      </div>
  );
};
export default TicketItem;
