import Slider from "react-slick";
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DefaultItem } from './components/ItemCarousel'
import { WrapperCarousel, LeftArrow, RightArrow } from './styled'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
function Carousel(props) {

    const ItemCarousel = (value) => {
        switch (props.type) {
            default:
                return <DefaultItem {...value} />
        }
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <WrapperCarousel >

            <Slider {...settings}>
                {
                    props.listItem && props.listItem.length > 0 && props.listItem.map(
                        e => {
                            return ItemCarousel(e)
                        }
                    )
                }
            </Slider>
        </WrapperCarousel>
    )
}

export default Carousel

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <LeftArrow onClick={onClick}  >
            <LeftOutlined />
        </LeftArrow>
    );
}
const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <RightArrow
            onClick={onClick}
        >
            <RightOutlined />
        </RightArrow>
    );
}