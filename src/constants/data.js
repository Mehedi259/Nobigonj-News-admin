// Sidebar navigation items
export const SIDEBAR_ITEMS = [
  { id: 'dashboard', label: 'ড্যাশবোর্ড', icon: 'FiGrid', path: '/' },
  { id: 'news', label: 'নিউজ ম্যানেজমেন্ট', icon: 'FiFileText', path: '/news' },
  { id: 'places', label: 'স্থানসমূহ', icon: 'FiMapPin', path: '/places' },
  { id: 'categories', label: 'ক্যাটাগরি', icon: 'FiFolder', path: '/categories' },
  { id: 'media', label: 'মিডিয়া লাইব্রেরি', icon: 'FiImage', path: '/media' },
  { id: 'comments', label: 'মন্তব্য', icon: 'FiMessageSquare', path: '/comments' },
  { id: 'users', label: 'ব্যবহারকারী', icon: 'FiUsers', path: '/users' },
  { id: 'analytics', label: 'অ্যানালিটিক্স', icon: 'FiBarChart2', path: '/analytics' },
  { id: 'settings', label: 'সেটিংস', icon: 'FiSettings', path: '/settings' },
];

// Dashboard stats
export const DASHBOARD_STATS = [
  { id: 'total-news', label: 'মোট নিউজ', value: '১,২৪৭', change: '+১২%', trend: 'up', icon: 'FiFileText', color: '#4CAF50' },
  { id: 'total-views', label: 'মোট ভিউ', value: '৮৫,৪৩২', change: '+২৩%', trend: 'up', icon: 'FiEye', color: '#2196F3' },
  { id: 'total-users', label: 'ব্যবহারকারী', value: '৩,৮৯১', change: '+৮%', trend: 'up', icon: 'FiUsers', color: '#FF9800' },
  { id: 'total-comments', label: 'মন্তব্য', value: '১২,৫৬৭', change: '+১৫%', trend: 'up', icon: 'FiMessageSquare', color: '#9C27B0' },
];

// Chart data for visitors
export const VISITOR_CHART_DATA = [
  { name: 'শনি', visitors: 2400, pageViews: 4000 },
  { name: 'রবি', visitors: 1398, pageViews: 3000 },
  { name: 'সোম', visitors: 3800, pageViews: 5200 },
  { name: 'মঙ্গল', visitors: 3908, pageViews: 5800 },
  { name: 'বুধ', visitors: 4800, pageViews: 6100 },
  { name: 'বৃহঃ', visitors: 3490, pageViews: 4900 },
  { name: 'শুক্র', visitors: 4300, pageViews: 5600 },
];

// Category distribution
export const CATEGORY_CHART_DATA = [
  { name: 'হ্যালো নবীগঞ্জ', value: 420, fill: '#4CAF50' },
  { name: 'জাতীয়', value: 280, fill: '#2196F3' },
  { name: 'বিনোদন', value: 190, fill: '#FF9800' },
  { name: 'খেলাধুলা', value: 175, fill: '#9C27B0' },
  { name: 'শিক্ষা', value: 120, fill: '#F44336' },
  { name: 'প্রযুক্তি', value: 62, fill: '#00BCD4' },
];

// Recent news for dashboard
export const RECENT_NEWS = [
  { id: 1, title: 'নবীগঞ্জে নতুন সড়ক প্রকল্পের কাজ শুরু', category: 'হ্যালো নবীগঞ্জ', status: 'published', author: 'মেহেদী হাসান', date: '18 Sep 2026', views: 1247 },
  { id: 2, title: 'নবীগঞ্জে শিক্ষার মানোন্নয়ের উদ্যোগ', category: 'শিক্ষা', status: 'published', author: 'রাকিব হাসান', date: '17 Sep 2026', views: 842 },
  { id: 3, title: 'কৃষকদের মুখে হাসি, ভালো ফলনের উৎপাদন', category: 'হ্যালো নবীগঞ্জ', status: 'draft', author: 'সাব্বির আহমেদ', date: '16 Sep 2026', views: 0 },
  { id: 4, title: 'নবীগঞ্জে যুবসমাজের উদ্যোগে পরিচ্ছন্নতা অভিযান', category: 'হ্যালো নবীগঞ্জ', status: 'published', author: 'মেহেদী হাসান', date: '15 Sep 2026', views: 990 },
  { id: 5, title: 'এশিয়া কাপের জন্য প্রস্তুতি নিচ্ছে বাংলাদেশ', category: 'খেলাধুলা', status: 'published', author: 'রাকিব হাসান', date: '14 Sep 2026', views: 1340 },
  { id: 6, title: 'নবীগঞ্জে স্বায়ত্বশাসনের নতুন সম্ভাবনা', category: 'জাতীয়', status: 'review', author: 'সাব্বির আহমেদ', date: '13 Sep 2026', views: 0 },
];

// Recent activities
export const RECENT_ACTIVITIES = [
  { id: 1, text: 'মেহেদী হাসান নতুন নিউজ পোস্ট করেছেন', time: '২ মিনিট আগে', type: 'post' },
  { id: 2, text: 'রাকিব হাসান একটি মন্তব্য অনুমোদন করেছেন', time: '১৫ মিনিট আগে', type: 'comment' },
  { id: 3, text: 'নতুন ব্যবহারকারী নিবন্ধন হয়েছে', time: '১ ঘণ্টা আগে', type: 'user' },
  { id: 4, text: 'সাব্বির আহমেদ একটি নিউজ আপডেট করেছেন', time: '২ ঘণ্টা আগে', type: 'edit' },
  { id: 5, text: '"চা বাগান" স্থানের তথ্য আপডেট হয়েছে', time: '৩ ঘণ্টা আগে', type: 'place' },
];

// All news for management
export const ALL_NEWS = [
  { id: 1, title: 'নবীগঞ্জে নতুন সড়ক প্রকল্পের কাজ শুরু', category: 'হ্যালো নবীগঞ্জ', status: 'published', author: 'মেহেদী হাসান', date: '18 Sep 2026', views: 1247, featured: true },
  { id: 2, title: 'নবীগঞ্জে শিক্ষার মানোন্নয়ের উদ্যোগ', category: 'শিক্ষা', status: 'published', author: 'রাকিব হাসান', date: '17 Sep 2026', views: 842, featured: false },
  { id: 3, title: 'কৃষকদের মুখে হাসি', category: 'হ্যালো নবীগঞ্জ', status: 'draft', author: 'সাব্বির আহমেদ', date: '16 Sep 2026', views: 0, featured: false },
  { id: 4, title: 'পরিচ্ছন্নতা অভিযান', category: 'হ্যালো নবীগঞ্জ', status: 'published', author: 'মেহেদী হাসান', date: '15 Sep 2026', views: 990, featured: false },
  { id: 5, title: 'এশিয়া কাপের প্রস্তুতি', category: 'খেলাধুলা', status: 'published', author: 'রাকিব হাসান', date: '14 Sep 2026', views: 1340, featured: true },
  { id: 6, title: 'স্বায়ত্বশাসনের নতুন সম্ভাবনা', category: 'জাতীয়', status: 'review', author: 'সাব্বির আহমেদ', date: '13 Sep 2026', views: 0, featured: false },
  { id: 7, title: 'উন্নয়নের গতি ত্বরান্বিত', category: 'জাতীয়', status: 'published', author: 'মেহেদী হাসান', date: '12 Sep 2026', views: 2100, featured: true },
  { id: 8, title: 'নতুন সিনেমা নিয়ে আসছেন', category: 'বিনোদন', status: 'published', author: 'রাকিব হাসান', date: '11 Sep 2026', views: 3400, featured: false },
];
