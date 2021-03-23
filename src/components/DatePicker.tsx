import React from 'react';

interface DatePickerProps {
  value: string;
  min: string;
  max: string;
  setValue: (date: Date) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ value, min, max, setValue }) => {

  const dateChanger = (date: Date | null) => {
    if (date) {
      setValue(date);
    }
  };

  return (
    <input value={value}
      min={min}
      max={max}
      type="date"
      onChange={({ target }) => dateChanger(target.valueAsDate)} />
  );
};

export default DatePicker;