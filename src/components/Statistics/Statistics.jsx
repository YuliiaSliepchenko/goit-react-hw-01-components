import PropTypes from 'prop-types';
import s from './Statistics.module.css';

import {getRandomHexColor} from '../../helpers/changeColor'

export const Statistics = ({title, stats}) => {

   return (
    <section className={s.statistics}>
  {title && <h2 className={s.title}>{title}</h2>}

  <ul className={s.stat}>
    {stats.map(({ id, label, percentage}) =>
    <li key={id} className={s.item}style={{backgroundColor:getRandomHexColor()}}>
      <span className={s.label}>{label}</span><br />
      <span className={s.percentage}>{percentage}%</span>
    </li>
    )}
  </ul>
</section>)
}
Statistics.propTypes = {
    title:PropTypes.string.isRequired,
    stats:PropTypes.arrayOf(PropTypes.shape({
      id:PropTypes.string.isRequired,
       label:PropTypes.string.isRequired,
       percentage:PropTypes.number.isRequired
      })
    )
};
