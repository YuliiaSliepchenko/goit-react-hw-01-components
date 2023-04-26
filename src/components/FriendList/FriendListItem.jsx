import s from './FriendsItem.module.css';
import clsx from 'clsx';

export const FriendListItem = ({avatar, name, isOnline, id }) => {
    return (
    <li key={id} class={s.item}>
  <span className={clsx(s.status, isOnline && s.isOnline) }>{isOnline}</span>
  <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={s.name}>{name}</p>
</li>
    )}
    
    