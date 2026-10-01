import { FiMapPin, FiFolder, FiImage, FiMessageSquare, FiUsers, FiBarChart2, FiSettings } from 'react-icons/fi';

const iconMap = {
  places: FiMapPin,
  categories: FiFolder,
  media: FiImage,
  comments: FiMessageSquare,
  users: FiUsers,
  analytics: FiBarChart2,
  settings: FiSettings,
};

const titleMap = {
  places: 'স্থানসমূহ ম্যানেজমেন্ট',
  categories: 'ক্যাটাগরি ম্যানেজমেন্ট',
  media: 'মিডিয়া লাইব্রেরি',
  comments: 'মন্তব্য ম্যানেজমেন্ট',
  users: 'ব্যবহারকারী ম্যানেজমেন্ট',
  analytics: 'অ্যানালিটিক্স',
  settings: 'সেটিংস',
};

const PlaceholderPage = ({ pageId }) => {
  const Icon = iconMap[pageId] || FiSettings;
  const title = titleMap[pageId] || pageId;

  return (
    <div className="page-content">
      <h1 className="page-title"><Icon /> {title}</h1>
      <div style={{
        background: 'white',
        borderRadius: '14px',
        padding: '60px 40px',
        textAlign: 'center',
        border: '1px solid #e5e7eb',
        boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
      }}>
        <div style={{ fontSize: '48px', marginBottom: '16px', opacity: 0.3 }}><Icon /></div>
        <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#374151', marginBottom: '8px' }}>
          {title}
        </h2>
        <p style={{ fontSize: '14px', color: '#9ca3af', maxWidth: '400px', margin: '0 auto' }}>
          এই পেজটি শীঘ্রই তৈরি করা হবে। বর্তমানে ড্যাশবোর্ড এবং নিউজ ম্যানেজমেন্ট পেজ সম্পূর্ণ ফাংশনাল।
        </p>
      </div>
    </div>
  );
};

export default PlaceholderPage;
