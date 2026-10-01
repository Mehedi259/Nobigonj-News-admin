import { useState } from 'react';
import { FiFileText, FiPlus, FiSearch, FiEye, FiEdit2, FiTrash2, FiStar } from 'react-icons/fi';
import { ALL_NEWS } from '../constants/data';

const NewsPage = () => {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? ALL_NEWS : ALL_NEWS.filter((n) => n.status === filter);

  return (
    <div className="page-content">
      <h1 className="page-title"><FiFileText /> নিউজ ম্যানেজমেন্ট</h1>

      <div className="page-actions">
        <div className="page-actions__left">
          {['all', 'published', 'draft', 'review'].map((f) => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? 'filter-btn--active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f === 'all' ? 'সবগুলো' : f === 'published' ? 'প্রকাশিত' : f === 'draft' ? 'ড্রাফট' : 'পর্যালোচনা'}
              {f === 'all' && ` (${ALL_NEWS.length})`}
            </button>
          ))}
        </div>
        <div className="page-actions__right">
          <div className="search-input">
            <FiSearch />
            <input type="text" placeholder="নিউজ খুঁজুন..." />
          </div>
          <button className="btn-primary"><FiPlus /> নতুন নিউজ</button>
        </div>
      </div>

      <div className="full-table">
        <table>
          <thead>
            <tr>
              <th>⭐</th>
              <th>শিরোনাম</th>
              <th>ক্যাটাগরি</th>
              <th>লেখক</th>
              <th>তারিখ</th>
              <th>স্ট্যাটাস</th>
              <th>ভিউ</th>
              <th>অ্যাকশন</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((news) => (
              <tr key={news.id}>
                <td><span className="featured-star">{news.featured ? '★' : '☆'}</span></td>
                <td style={{ maxWidth: '260px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontWeight: 500 }}>
                  {news.title}
                </td>
                <td style={{ fontSize: '12px', color: '#6b7280' }}>{news.category}</td>
                <td style={{ fontSize: '12px' }}>{news.author}</td>
                <td style={{ fontSize: '12px', color: '#9ca3af' }}>{news.date}</td>
                <td>
                  <span className={`status-badge status-badge--${news.status}`}>
                    {news.status === 'published' ? 'প্রকাশিত' : news.status === 'draft' ? 'ড্রাফট' : 'পর্যালোচনা'}
                  </span>
                </td>
                <td className="views-count">{news.views.toLocaleString()}</td>
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
        <div className="pagination">
          <span className="pagination__info">মোট {filtered.length}টি নিউজ দেখানো হচ্ছে</span>
          <div className="pagination__buttons">
            <button className="pagination__btn pagination__btn--active">১</button>
            <button className="pagination__btn">২</button>
            <button className="pagination__btn">৩</button>
            <button className="pagination__btn">→</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
