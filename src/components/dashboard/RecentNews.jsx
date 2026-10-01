import { FiEye, FiEdit2, FiTrash2, FiArrowRight } from 'react-icons/fi';
import { RECENT_NEWS } from '../../constants/data';

const RecentNews = () => {
  return (
    <div className="table-card">
      <div className="table-card__header">
        <h3 className="table-card__title">সাম্প্রতিক নিউজ</h3>
        <span className="table-card__action">সব দেখুন <FiArrowRight size={12} /></span>
      </div>
      <table>
        <thead>
          <tr>
            <th>শিরোনাম</th>
            <th>ক্যাটাগরি</th>
            <th>স্ট্যাটাস</th>
            <th>ভিউ</th>
            <th>অ্যাকশন</th>
          </tr>
        </thead>
        <tbody>
          {RECENT_NEWS.map((news) => (
            <tr key={news.id}>
              <td style={{ maxWidth: '220px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontWeight: 500 }}>
                {news.title}
              </td>
              <td style={{ fontSize: '12px', color: '#6b7280' }}>{news.category}</td>
              <td>
                <span className={`status-badge status-badge--${news.status}`}>
                  {news.status === 'published' ? 'প্রকাশিত' : news.status === 'draft' ? 'ড্রাফট' : 'পর্যালোচনা'}
                </span>
              </td>
              <td style={{ fontWeight: 600 }}>{news.views.toLocaleString()}</td>
              <td>
                <div className="table-actions">
                  <button title="দেখুন"><FiEye /></button>
                  <button title="সম্পাদনা"><FiEdit2 /></button>
                  <button className="delete" title="মুছুন"><FiTrash2 /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentNews;
