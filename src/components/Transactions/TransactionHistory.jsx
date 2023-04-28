import PropTypes from 'prop-types';
import s from './Transactions.module.css';

export const TransactionHistory = ({items}) => {
    return (
        <table  className={s.transaction}>
    <thead className={s.title}>
      <tr >
        <th>TYPE</th>
        <th>AMOUNT</th>
        <th>CURRENCY</th>
      </tr>
    
    </thead>
    <tbody className={s.tratsList}>
    {items.map(({id, type, amount, currency }) =>
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    )}
  </tbody>

  </table>)
    }
    TransactionHistory.propTypes = {
        items:PropTypes.arrayOf([{id:PropTypes.number, type:PropTypes.string,amount:PropTypes.number,currency:PropTypes.string}]), 
    }   
   