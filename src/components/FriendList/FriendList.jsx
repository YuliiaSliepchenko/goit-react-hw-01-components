import PropTypes from 'prop-types';
import {FriendListItem} from './FriendListItem'
import s from './Friends.module.css';

export const FriendList = ({friends}) => {
    return(
    <ul className={s.friend}>
            {friends.map((FriendListItem))}
</ul>
    )}
    FriendList.propTypes = {
        friends: PropTypes.arrayOf}
       