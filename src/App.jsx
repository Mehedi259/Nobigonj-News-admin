import { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import DashboardPage from './pages/DashboardPage';
import NewsPage from './pages/NewsPage';
import PlaceholderPage from './pages/PlaceholderPage';

const pageTitles = {
  dashboard: 'ড্যাশবোর্ড',
  news: 'নিউজ ম্যানেজমেন্ট',
  places: 'স্থানসমূহ',
  categories: 'ক্যাটাগরি',
  media: 'মিডিয়া লাইব্রেরি',
  comments: 'মন্তব্য',
  users: 'ব্যবহারকারী',
  analytics: 'অ্যানালিটিক্স',
  settings: 'সেটিংস',
};

function App() {
  const [activePage, setActivePage] = useState('dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'news':
        return <NewsPage />;
      default:
        return <PlaceholderPage pageId={activePage} />;
    }
  };

  return (
    <div className="admin-layout">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      <div className="main-content">
        <Header pageTitle={pageTitles[activePage] || activePage} />
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
