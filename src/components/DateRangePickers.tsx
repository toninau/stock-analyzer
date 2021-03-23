import React, { useEffect, useState } from 'react';

import { Stock } from '../types';
import { dateFormat } from '../utils/dateFormat';
import DatePicker from './DatePicker';

interface DatePickerProps {
  setDateRange: (obj: { startIndex: number, endIndex: number }) => void;
  start: Date;
  end: Date;
  stockData: Stock[];
}

const DateRangePicker: React.FC<DatePickerProps> = ({ setDateRange, start, end, stockData }) => {
  const [startDate, setStartDate] = useState(start);
  const [endDate, setEndDate] = useState(end);

  useEffect(() => {
    const startIndex = stockData.findIndex((element) =>
      dateFormat(element.date) === dateFormat(startDate));
    const endIndex = stockData.findIndex((element) =>
      dateFormat(element.date) === dateFormat(endDate));
    setDateRange({
      startIndex, endIndex
    });
  }, [startDate, endDate, stockData, setDateRange]);

  useEffect(() => {
    setStartDate(start);
    setEndDate(end);
  }, [start, end]);

  return (
    <div className="date-range__pickers">
      <DatePicker
        value={dateFormat(startDate)}
        min={dateFormat(start)}
        max={dateFormat(endDate)}
        setValue={setStartDate}
      />
      <DatePicker
        value={dateFormat(endDate)}
        min={dateFormat(startDate)}
        max={dateFormat(end)}
        setValue={setEndDate}
      />
    </div>
  );
};

export default DateRangePicker;