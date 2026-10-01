import { FiFileText, FiEye, FiUsers, FiMessageSquare, FiTrendingUp } from 'react-icons/fi';
import { DASHBOARD_STATS } from '../../constants/data';

const iconMap = { FiFileText, FiEye, FiUsers, FiMessageSquare };

const StatsCards = () => {
  return (
    <div className="stats-grid">
      {DASHBOARD_STATS.map((stat) => {
        const Icon = iconMap[stat.icon];
        return (
          <div key={stat.id} className="stat-card">
            <div className="stat-card__icon" style={{ background: `${stat.color}15`, color: stat.color }}>
              {Icon && <Icon />}
            </div>
            <div>
              <div className="stat-card__value">{stat.value}</div>
              <div className="stat-card__label">{stat.label}</div>
              <div className={`stat-card__change stat-card__change--${stat.trend}`}>
                <FiTrendingUp size={10} /> {stat.change}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;
