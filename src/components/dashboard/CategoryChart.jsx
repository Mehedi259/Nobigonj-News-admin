import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { CATEGORY_CHART_DATA } from '../../constants/data';

const CategoryChart = () => {
  return (
    <div className="chart-card">
      <div className="chart-card__header">
        <h3 className="chart-card__title">ক্যাটাগরি বিতরণ</h3>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={CATEGORY_CHART_DATA}
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={85}
            paddingAngle={3}
            dataKey="value"
          >
            {CATEGORY_CHART_DATA.map((entry, index) => (
              <Cell key={index} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ borderRadius: '10px', border: '1px solid #e5e7eb', fontSize: '12px', fontFamily: 'Noto Sans Bengali' }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', padding: '0 16px 16px' }}>
        {CATEGORY_CHART_DATA.map((cat) => (
          <div key={cat.name} style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: '#6b7280' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: cat.fill, display: 'inline-block' }}></span>
            {cat.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryChart;
