import { FiSearch, FiBell, FiMoon, FiChevronRight } from 'react-icons/fi';

const Header = ({ pageTitle }) => {
  return (
    <header className="header">
      <div className="header__left">
        <div className="header__breadcrumb">
          হোম <FiChevronRight size={12} /> <span>{pageTitle}</span>
        </div>
      </div>
      <div className="header__search">
        <FiSearch size={16} color="#9ca3af" />
        <input type="text" placeholder="সার্চ করুন..." />
      </div>
      <div className="header__right">
        <button className="header__icon-btn" aria-label="Dark mode">
          <FiMoon />
        </button>
        <button className="header__icon-btn" aria-label="Notifications">
          <FiBell />
          <span className="header__badge"></span>
        </button>
        <div className="header__profile">
          <div className="header__profile-avatar">মে</div>
          <span className="header__profile-name">মেহেদী হাসান</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
