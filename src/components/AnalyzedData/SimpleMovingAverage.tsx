import React from 'react';
import { SMAData } from '../../types';
import { dateFormat } from '../../utils/dateFormat';

const SimpleMovingAverage: React.FC<{ data: SMAData[] }> = ({ data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Date (yyyy-mm-dd)</th>
          <th>Opening prices ($)</th>
          <th>SMA5 prices ($)</th>
          <th>Price changes (%)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((value) => (
          <tr key={+value.date}>
            <td>{dateFormat(value.date)}</td>
            <td>${value.open}</td>
            <td>${+value.sma.toFixed(4)}</td>
            <td>{+value.change.toFixed(4)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SimpleMovingAverage;