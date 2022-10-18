import React from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { NavItem } from '../../components/Data/DataHeader';
import Blanket from '../../components/OrderForm/Blanket';

const Checkout = () => {
  return (
    <div>
      {' '}
      <Breadcrumb
        title={NavItem[5].name}
        path={NavItem[0].name}
        pagepath={NavItem[5].name}
        sectionpath={NavItem[5].slug}
      />
      <div>
        <Blanket />
      </div>
    </div>
  );
};

export default Checkout;
