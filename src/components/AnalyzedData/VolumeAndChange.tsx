import React from 'react';
import { VACData } from '../../types';
import { dateFormat } from '../../utils/dateFormat';

const VolumeAndChange: React.FC<{ data: VACData[] }> = ({ data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Date (yyyy-mm-dd)</th>
          <th>Trading volumes</th>
          <th>Price changes ($)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((value) => (
          <tr key={+value.date}>
            <td>{dateFormat(value.date)}</td>
            <td>{value.volume}</td>
            <td>${+value.change.toFixed(4)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default VolumeAndChange;