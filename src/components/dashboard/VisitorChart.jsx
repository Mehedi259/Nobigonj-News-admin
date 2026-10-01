import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { VISITOR_CHART_DATA } from '../../constants/data';

const VisitorChart = () => {
  return (
    <div className="chart-card">
      <div className="chart-card__header">
        <h3 className="chart-card__title">ভিজিটর অ্যানালিটিক্স</h3>
        <div className="chart-card__filter">
          <button className="chart-card__filter-btn chart-card__filter-btn--active">সাপ্তাহিক</button>
          <button className="chart-card__filter-btn">মাসিক</button>
          <button className="chart-card__filter-btn">বার্ষিক</button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={VISITOR_CHART_DATA} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <defs>
            <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1a6b3c" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#1a6b3c" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPageViews" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="name" tick={{ fontSize: 11 }} stroke="#d1d5db" />
          <YAxis tick={{ fontSize: 11 }} stroke="#d1d5db" />
          <Tooltip
            contentStyle={{ borderRadius: '10px', border: '1px solid #e5e7eb', fontSize: '12px', fontFamily: 'Noto Sans Bengali' }}
          />
          <Area type="monotone" dataKey="visitors" stroke="#1a6b3c" strokeWidth={2.5} fill="url(#colorVisitors)" name="ভিজিটর" />
          <Area type="monotone" dataKey="pageViews" stroke="#3b82f6" strokeWidth={2.5} fill="url(#colorPageViews)" name="পেজ ভিউ" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VisitorChart;
