import { FiGrid } from 'react-icons/fi';
import StatsCards from '../components/dashboard/StatsCards';
import VisitorChart from '../components/dashboard/VisitorChart';
import CategoryChart from '../components/dashboard/CategoryChart';
import RecentNews from '../components/dashboard/RecentNews';
import ActivityFeed from '../components/dashboard/ActivityFeed';

const DashboardPage = () => {
  return (
    <div className="page-content">
      <h1 className="page-title"><FiGrid /> ড্যাশবোর্ড</h1>
      <StatsCards />
      <div className="charts-row">
        <VisitorChart />
        <CategoryChart />
      </div>
      <div className="content-row">
        <RecentNews />
        <ActivityFeed />
      </div>
    </div>
  );
};

export default DashboardPage;
