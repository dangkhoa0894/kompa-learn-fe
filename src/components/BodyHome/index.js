import React from 'react';
import { WrapperBodyHome, Container1, Container2 } from './styled';
import CompanyUsing from './components/CompanyUsing';
import Solution from './components/Solution';
import FeedBackCustomerView from './components/FeedBackCustomer';
import RequestJoin from './components/RequestJoin';

const BodyHome = () => {
  return (
    <WrapperBodyHome>
      <Container1>
        <CompanyUsing />
        <Solution />
      </Container1>
      <Container2>
        <div>
          <FeedBackCustomerView />
          <RequestJoin />
        </div>
      </Container2>
    </WrapperBodyHome>
  );
};

export default BodyHome;
