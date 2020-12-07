import React from 'react';
import { Typography } from 'antd';
import { ContainCompanyUsing, ContainCompany } from './styled';

const listCompany = [
  {
    id: 'cty-a',
    icon:
      'https://pcdn.piiojs.com/i/kqctmw/https%3A%2F%2Fmonkeylearn.com.%2Fstatic%2Fimg%2Flogo-segment-grey.svg',
  },
  {
    id: 'cty-b',
    icon: 'https://monkeylearn.com/static/logo-segment-grey-b27bc3330cc2a35edd64abadc41c8384.svg',
  },
  {
    id: 'cty-c',
    icon:
      'https://pcdn.piiojs.com/i/kqctmw/https%3A%2F%2Fmonkeylearn.com.%2Fstatic%2Fimg%2Flogo-drift-grey.svg',
  },
  {
    id: 'cty-d',
    icon:
      'https://pcdn.piiojs.com/i/kqctmw/https%3A%2F%2Fmonkeylearn.com.%2Fstatic%2Fimg%2Flogo-drift-grey.svg',
  },
];

const CompanyUsing = () => {
  return (
    <ContainCompanyUsing>
      <Typography.Title level={3} className="label-company">
        Powering the world’s most innovative companies
      </Typography.Title>
      <ContainCompany>
        {listCompany.map((e) => {
          return (
            <div className="item" key={e.id}>
              <img src={e.icon} alt={e.id} />
            </div>
          );
        })}
      </ContainCompany>
    </ContainCompanyUsing>
  );
};

export default CompanyUsing;
