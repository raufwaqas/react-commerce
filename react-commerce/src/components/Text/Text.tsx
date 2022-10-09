import React from 'react';

interface ITextprops {
  text: string;
  fontSize?: string;
  fontWeight?: string;
  textTransform?: string;
  color?: string;
}

const Text = ({
  text,
  fontSize,
  fontWeight,
  textTransform,
  color,
}: ITextprops) => {
  return (
    <div
      style={{ color: color }}
      className={`${fontSize} ${fontWeight} ${textTransform}`}
    >
      {text}
    </div>
  );
};

export default Text;
