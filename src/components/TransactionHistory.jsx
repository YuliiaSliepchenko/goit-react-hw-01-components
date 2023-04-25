import PropTypes from 'prop-types';

export const TransactionHistory = ({items}) => {
    return (
        <table  class="transaction-history">
    <thead>
        {items.map(({id, type, amount, currency }) =>
      <tr key={id}>
        <th>{type}</th>
        <th>{amount}</th>
        <th>{currency}</th>
      </tr>
      )}
    </thead>
          
    {/* <tbody>
      {items.map(({id, type, amount, currency }) =>  
      <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
      )}
    </tbody> */}
  </table>)
    }
    TransactionHistory.propTypes = {
        title:PropTypes.string,
        stats:PropTypes.exact({id:PropTypes.string, type:PropTypes.string,amount:PropTypes.number,currency:PropTypes.string}), 
    }   
   