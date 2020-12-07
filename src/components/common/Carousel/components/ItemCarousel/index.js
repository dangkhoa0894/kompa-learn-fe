
import React from 'react'
import { Row, Col, Avatar } from "antd";
import { MoreOutlined } from '@ant-design/icons';
import { ContainerItem } from './styled'
export const DefaultItem = (props) => {
    return (
        <ContainerItem>
            <Row justify='space-between' align='middle'>
                <Col >
                    <Avatar size="30" src={props.avatar}>
                    </Avatar>
                </Col>
                <Col>
                    <MoreOutlined />
                </Col>
            </Row>
            <Row justify='start' style={{ flex: 1 }}>
                <Col >
                    {props.title}
                </Col>
            </Row>
            <Row justify='end'>
                <Col >
                    <Avatar size="15" src={'https://s.gravatar.com/avatar/4a54a82f55e4c2092a37db7ba5d0f0ea?size=496&default=retro'}>
                    </Avatar>
                </Col>
            </Row>
        </ContainerItem>
    )
}