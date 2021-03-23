import React from 'react';
import { StockA } from '../../types';
import { dateFormat } from '../../utils/dateFormat';

const UpwardTrend: React.FC<{ data: StockA }> = ({ data }) => {
  const start = dateFormat(data.start.date);
  const end = dateFormat(data.end.date);

  return (
    <div className="upward-trend">
      <p>Close/Last price increased {data.length} days in a row between {start} and {end}</p>
      <p>From ${data.start['close/last']} to ${data.end['close/last']}</p>
    </div>
  );
};

export default UpwardTrend;