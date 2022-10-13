import React from 'react';
import Text from '../Text/Text';

interface ITopHeaderProps {
  promotion?: string;
}

const TopHeader = ({ promotion }: ITopHeaderProps) => {
  return (
    <div className='top-header' aria-hidden='true'>
      <Text
        color='#ffffff'
        fontSize='small-text'
        fontWeight='font-light'
        text={`${promotion}`}
      />
    </div>
  );
};

export default TopHeader;
