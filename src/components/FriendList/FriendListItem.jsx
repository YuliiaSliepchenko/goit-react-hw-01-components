import s from './FriendsItem.module.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export const FriendListItem = ({avatar, name, isOnline, id }) => {
    return (
    <li key={id} className={s.item}>
  <span className={clsx(s.status, isOnline && s.isOnline) }>{isOnline}</span>
  <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={s.name}>{name}</p>
</li>
    )}
    
    FriendListItem.propTypes = {
            id:PropTypes.number,
            avatar:PropTypes.element,
            name:PropTypes.string, 
            isOnline:PropTypes.bool, }

            