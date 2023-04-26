import PropTypes from 'prop-types';
import s from './Profile.module.css';

export const Profile = ({ username , tag, location, avatar, stats}) => {
  
    return (
    <div className={s.profile}>
    <div className={s.description}>
      <img
        src={avatar}
        alt={username}
        className={s.avatar}
      />
      <p className={s.name}>{username}</p>
      <p className={s.tag}>@{tag}</p>
      <p className={s.location}>{location}</p>
    
  
    <ul className={s.stats}>
    <li className={s.item}>
      <span className={s.label}>Followers</span><br />
      <span className={s.quantity}>{stats.followers}</span>
    </li>
    <li className={s.item}>
      <span className={s.label}>Views</span><br />
      <span className={s.quantity}>{stats.views}</span>
    </li>
    <li className={s.item}>
      <span className={s.label}>Likes</span><br />
      <span className={s.quantity}>{stats.likes}</span>
    </li> 
    </ul>
  </div>
  </div>)
}

Profile.propTypes = {
    username:PropTypes.string,
    tag:PropTypes.string,
    location:PropTypes.string,
    avatar:PropTypes.string,
    stats:PropTypes.exact({ followers:PropTypes.number,views:PropTypes.number,likes:PropTypes.number }), 

}