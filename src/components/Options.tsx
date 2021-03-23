import React from 'react';

interface OptionsProps {
  currentOption: string;
  setOption: (value: string) => void;
}

const Options: React.FC<OptionsProps> = ({ setOption, currentOption }) => {
  const options = [
    {
      type: 'A',
      desc: 'Longest bullish (upward) trend'
    }, {
      type: 'B',
      desc: 'Trading volume and stock price change'
    }, {
      type: 'C',
      desc: 'SMA 5'
    }
  ];

  return (
    <div className="option-bar">
      {options.map((option) => (
        <button
          key={option.type}
          onClick={() => setOption(option.type)}
          id={currentOption === option.type ? 'active' : ''}>
          {option.desc}
        </button>
      ))}
    </div>
  );
};

export default Options;