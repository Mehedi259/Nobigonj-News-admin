import { FiGrid, FiFileText, FiMapPin, FiFolder, FiImage, FiMessageSquare, FiUsers, FiBarChart2, FiSettings, FiLogOut } from 'react-icons/fi';
import { SIDEBAR_ITEMS } from '../../constants/data';

const iconMap = { FiGrid, FiFileText, FiMapPin, FiFolder, FiImage, FiMessageSquare, FiUsers, FiBarChart2, FiSettings };

const Sidebar = ({ activePage, onNavigate }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__logo-icon">হে</div>
        <div className="sidebar__logo-text">
          <h2>Hello Nabiganj</h2>
          <p>অ্যাডমিন প্যানেল</p>
        </div>
      </div>
      <nav className="sidebar__nav">
        {SIDEBAR_ITEMS.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <div
              key={item.id}
              className={`sidebar__nav-item ${activePage === item.id ? 'sidebar__nav-item--active' : ''}`}
              onClick={() => onNavigate(item.id)}
            >
              {Icon && <Icon />}
              <span>{item.label}</span>
            </div>
          );
        })}
      </nav>
      <div className="sidebar__footer">
        <div className="sidebar__user">
          <div className="sidebar__avatar">মে</div>
          <div>
            <div className="sidebar__user-name">মেহেদী হাসান</div>
            <div className="sidebar__user-role">সুপার অ্যাডমিন</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
