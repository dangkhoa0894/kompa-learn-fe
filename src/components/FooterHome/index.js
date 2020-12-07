import React from 'react';
import { Row, Col, Typography } from 'antd';
import { WrapperFooter } from './styled';
import CompanyName from '../common/CompanyName';

const siteMap = {
  resources: {
    label: 'resources',
    item: [
      {
        id: '1-1',
        label: 'Pricing',
        pathName: '/',
      },
      {
        id: '1-2',
        label: 'Help',
        pathName: '/',
      },
      {
        id: '1-3',
        label: 'API Reference',
        pathName: '/',
      },
      {
        id: '1-4',
        label: 'Blog',
        pathName: '/',
      },
    ],
  },
  guides: {
    label: 'Guides',
    item: [
      {
        id: '2-1',
        label: 'Sentiment Analysis',
        pathName: '/',
      },
      {
        id: '2-2',
        label: 'Word Cloud',
        pathName: '/',
      },
      {
        id: '2-3',
        label: 'Machine Learning',
        pathName: '/',
      },
      {
        id: '2-4',
        label: 'Natural Language Processing',
        pathName: '/',
      },
    ],
  },
  company: {
    label: 'company',
    item: [
      {
        id: '3-1',
        label: 'About',
        pathName: '/',
      },
      {
        id: '3-2',
        label: `Careers (we're hiring)`,
        pathName: '/',
      },
      {
        id: '3-3',
        label: 'Twitter',
        pathName: '/',
      },
      {
        id: '3-4',
        label: 'Git Hub',
        pathName: '/',
      },
    ],
  },
  legal: {
    label: 'legal',
    item: [
      {
        id: '4-1',
        label: 'Privacy Policy',
        pathName: '/',
      },
      {
        id: '4-2',
        label: `Terms`,
        pathName: '/',
      },
      {
        id: '4-3',
        label: 'Data Collection',
        pathName: '/',
      },
    ],
  },
};

const FooterHome = () => {
  return (
    <WrapperFooter>
      <Row>
        <Col xs={{ span: 24 }} lg={{ span: 7 }} className="company">
          <CompanyName color="black" />
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 17 }}>
          <Row>
            <Col xs={{ span: 12 }} md={{ span: 5 }} className="col-data">
              <Typography.Text className="title">{siteMap.resources.label}</Typography.Text>
              <ul className="contain-site">
                {siteMap.resources.item.map((item) => {
                  return <li key={item.id}>{item.label}</li>;
                })}
              </ul>
            </Col>
            <Col xs={{ span: 12 }} md={{ span: 7 }} className="col-data">
              <Typography.Text className="title">{siteMap.guides.label}</Typography.Text>
              <ul className="contain-site">
                {siteMap.guides.item.map((item) => {
                  return <li key={item.id}>{item.label}</li>;
                })}
              </ul>
            </Col>
            <Col xs={{ span: 12 }} md={{ span: 6 }} className="col-data">
              <Typography.Text className="title">{siteMap.company.label}</Typography.Text>
              <ul className="contain-site">
                {siteMap.company.item.map((item) => {
                  return <li key={item.id}>{item.label}</li>;
                })}
              </ul>
            </Col>
            <Col xs={{ span: 12 }} md={{ span: 6 }} className="col-data">
              <Typography.Text className="title">{siteMap.legal.label}</Typography.Text>
              <ul className="contain-site">
                {siteMap.legal.item.map((item) => {
                  return <li key={item.id}>{item.label}</li>;
                })}
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </WrapperFooter>
  );
};

export default FooterHome;
