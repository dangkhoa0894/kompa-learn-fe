import React, { useState } from 'react';
import { Row, Col, Typography } from 'antd';
import LazyLoad from 'react-lazyload';
import { WrapperFeedBackCustomer, BlockFB } from './styled';

const tempListFeedBack = [
  {
    id: '1',
    avatar:
      'https://pcdn.piiojs.com/i/kqctmw/vw,75,vh,0,kc,1,r,0,pr,1,wp,1/https%3A%2F%2Fmonkeylearn.com.%2Fstatic%2Fimg%2Fimg_testimony1.png',
    name: 'Alex MacCaw',
    logoCompany: 'https://monkeylearn.com/static/img/logo-clearbit-color.svg',
    position: 'Co-Founder & CEO @ Clearbit',
    feedBack: 'MonkeyLearn is an integral part of Clearbit - it’s saved countless hours.',
  },
  {
    id: '2',
    avatar:
      'https://pcdn.piiojs.com/i/kqctmw/vw,75,vh,0,kc,1,r,0,pr,1,wp,1/https%3A%2F%2Fmonkeylearn.com.%2Fstatic%2Fimg%2Fimg_testimony2.png',
    name: 'Guillaume Cabane',
    logoCompany: 'https://monkeylearn.com/static/img/logo-drift-color.svg',
    position: 'VP Growth @ Drift',
    feedBack:
      'Working with MonkeyLearn allowed us to quickly and easily create a new feature for our customers, without having to dedicate internal resources or spend months on custom development.',
  },
  {
    id: '3',
    avatar:
      'https://pcdn.piiojs.com/i/kqctmw/vw,75,vh,0,kc,1,r,0,pr,1,wp,1/https%3A%2F%2Fmonkeylearn.com.%2Fstatic%2Fimg%2Fimg_testimony3.png',
    name: 'Rand Fishkin',
    logoCompany: 'https://monkeylearn.com/static/img/logo-moz-color.svg',
    position: 'Co-Founder @ Moz',
    feedBack: `MonkeyLearn is one of the most innovative and compelling platforms I've used. I've also loved working with MonkeyLearn's team - their willingness to help me build great products to help our community have put them among my favorite new companies.`,
  },
  {
    id: '4',
    avatar:
      'https://pcdn.piiojs.com/i/kqctmw/vw,75,vh,0,kc,1,r,0,pr,1,wp,1/https%3A%2F%2Fmonkeylearn.com.%2Fstatic%2Fimg%2Fimg_testimony4.png',
    name: 'Stephen Blum',
    logoCompany: 'https://monkeylearn.com/static/img/logo-pubnub-color.svg',
    position: 'Co-Founder & CTO @ PubNub',
    feedBack: `I'm using MonkeyLearn APIs to get CRM lead categories for marketing drip campaigns. Alert on support desk agent happiness and customer churn risk.`,
  },
];

const FeedBackCustomerView = () => {
  const [listFeedBack] = useState(tempListFeedBack);
  return (
    <WrapperFeedBackCustomer>
      <Row gutter={[32, 32]}>
        {listFeedBack.map((item, index) => {
          return (
            <Col key={item.id} xs={{ span: 24 }} md={{ span: 12 }}>
              {/* eslint-disable-next-line */}
              <BlockFeedBack {...item} index={index} />
            </Col>
          );
        })}
      </Row>
    </WrapperFeedBackCustomer>
  );
};

export default FeedBackCustomerView;

const BlockFeedBack = (props) => {
  return (
    <LazyLoad height={260}>
      <BlockFB index={props?.index}>
        <Row>
          <Col xs={{ span: 6 }} className="image-fb">
            <img src={props?.avatar} alt={`avatar-${props?.name}`} className="img-avatar" />
            <img src={props?.logoCompany} alt={`company-${props?.name}`} className="img-company" />
          </Col>
          <Col xs={{ span: 18 }} className="info-fb">
            <Typography.Text className="info-name">{props?.name}</Typography.Text>
            <Typography.Text className="info-position">{props?.position}</Typography.Text>
            <Typography.Text className="info-feed-back">{props?.feedBack}</Typography.Text>
          </Col>
        </Row>
      </BlockFB>
    </LazyLoad>
  );
};
