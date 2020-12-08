import PropTypes from "prop-types";
import React from "react";
import { Row, Col, Typography } from "antd";
import { FaArrowRight } from "react-icons/fa";
import { ContainSolution, BlockSol, ContainItemTag } from "./styled";

const listSolution = [
  {
    id: "1",
    title: "For Support Teams",
    descriptions:
      "Automate ticket tagging and routing to help your support team move from putting out fires to elevating the conversation.",
    items: [
      { id: "1-1", label: "support", pathName: "/" },
      { id: "1-2", label: "ticket tagging", pathName: "/" },
      { id: "1-3", label: "routing", pathName: "/" },
    ],
    pathName: "/home/gi-do",
    textButton: "learn more",
    theme: ["#2EBF6D", "#e9f9f0"],
    icon:
      "https://static.monkeylearn.com/static/intent-8aeb28fb1eea4fefd0a084439e6937a3.svg",
  },
  {
    id: "2",
    title: "For Product & CX Teams",
    descriptions:
      "Infuse your product roadmap with insights from customer conversations, product reviews, surveys, and NPS.",
    items: [
      { id: "2-1", label: "customer feedback", pathName: "/" },
      { id: "2-2", label: "reviews", pathName: "/" },
      { id: "2-3", label: "nps", pathName: "/" },
    ],
    pathName: "/home/gi-do",
    textButton: "learn more",
    theme: ["#41a1f0", "#41a1f01a"],
    icon:
      "https://static.monkeylearn.com/static/intent-8aeb28fb1eea4fefd0a084439e6937a3.svg",
  },
  {
    id: "3",
    title: "For Developer",
    descriptions:
      "Train custom text analysis models and integrate them into your stack with our powerful API, simple SDKs and docs.",
    items: [
      { id: "3-1", label: "developers", pathName: "/" },
      { id: "3-2", label: "api", pathName: "/" },
      { id: "3-3", label: "sdks", pathName: "/" },
    ],
    pathName: "/home/gi-do",
    textButton: "learn more",
    theme: ["#ff7c3f", "#ff7c3f1a"],
    icon:
      "https://static.monkeylearn.com/static/intent-8aeb28fb1eea4fefd0a084439e6937a3.svg",
  },
];

const Solution = () => {
  return (
    <ContainSolution>
      <Row gutter={[20, 24]} className="contain-block">
        {listSolution.map((item) => {
          return (
            <Col
              key={`${item.id}current`}
              xs={{ span: 24 }}
              md={{ span: 8 }}
              className="gutter-row"
            >
              {/* eslint-disable-next-line */}
              <BlockSolution {...item} />
            </Col>
          );
        })}
      </Row>
    </ContainSolution>
  );
};

export default Solution;

const BlockSolution = (props) => {
  const { title, descriptions, textButton, theme, icon, items } = props;
  return (
    <BlockSol color={theme}>
      <div className="header-sol">
        <div className="header-avatar">
          <img src={icon} alt={title} />
        </div>
        <div className="header-title">
          <Typography.Title level={4}>{title}</Typography.Title>
        </div>
      </div>
      <div className="body-sol">
        <div className="body-descriptions">
          <Typography.Text>{descriptions}</Typography.Text>
        </div>
        <div className="body-tags">
          {items.length > 0 &&
            items.map((item) => {
              return (
                // eslint-disable-next-line
                <ItemTag {...item} key={item.id} color={theme} />
              );
            })}
        </div>
      </div>
      <div className="footer-sol">
        <div className="footer-button">
          {textButton}
          <FaArrowRight className="arrow" />
        </div>
      </div>
    </BlockSol>
  );
};

BlockSolution.propTypes = {
  title: PropTypes.string,
  descriptions: PropTypes.string,
  textButton: PropTypes.string,
  theme: PropTypes.instanceOf(Array),
  icon: PropTypes.string,
  items: PropTypes.instanceOf(Array),
};
BlockSolution.defaultProps = {
  title: "",
  descriptions: "",
  textButton: "",
  theme: [],
  icon: "",
  items: [],
};

const ItemTag = (props) => {
  return <ContainItemTag color={props?.color}>{props?.label}</ContainItemTag>;
};
