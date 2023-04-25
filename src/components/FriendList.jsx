import PropTypes from 'prop-types';
import {FriendListItem} from '../components/FriendListItem'

export const FriendList = ({friends}) => {
    return(
        <ul class="friend-list">
            {friends.map((FriendListItem))}
</ul>
    )}
    FriendList.propTypes = {
        friends:PropTypes.exact
        ({id:PropTypes.string,
             avatar:PropTypes.img,
              name:PropTypes.string, 
              isOnline:PropTypes.boolean}), }