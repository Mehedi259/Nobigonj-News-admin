import { FiEdit, FiMessageCircle, FiUserPlus, FiEdit3, FiMapPin, FiImage } from 'react-icons/fi';
import { RECENT_ACTIVITIES } from '../../constants/data';

const typeIconMap = {
  post: { Icon: FiEdit, cls: 'post' },
  comment: { Icon: FiMessageCircle, cls: 'comment' },
  user: { Icon: FiUserPlus, cls: 'user' },
  edit: { Icon: FiEdit3, cls: 'edit' },
  place: { Icon: FiMapPin, cls: 'place' },
  media: { Icon: FiImage, cls: 'media' },
};

const ActivityFeed = () => {
  return (
    <div className="activity-card">
      <div className="activity-card__header">
        <h3 className="activity-card__title">সাম্প্রতিক কার্যক্রম</h3>
      </div>
      <div className="activity-card__list">
        {RECENT_ACTIVITIES.map((activity) => {
          const { Icon, cls } = typeIconMap[activity.type] || typeIconMap.post;
          return (
            <div key={activity.id} className="activity-item">
              <div className={`activity-item__icon activity-item__icon--${cls}`}>
                <Icon />
              </div>
              <div>
                <div className="activity-item__text">{activity.text}</div>
                <div className="activity-item__time">{activity.time}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityFeed;
