import styled from 'styled-components'

export const WrapperCarousel = styled.div`
width:100%;
.slick-slide>div{
    width:100%;
    display:flex;
    justify-content:center;

}
    /* padding: 10px;
    border: 1px solid #e2e2e2;
    border-radius: 5px;
    box-shadow: -1px 0px 6px 3px #ececec;
    margin: 5px;
    height: 250px;
    display: flex;
    flex-direction: column; */
`
export const LeftArrow = styled.div`
    position: absolute;
    top: 50%;
    margin-top: -10px;
    transform: translateX(-50px);
    display: flex;
    align-items: center;
    justify-items: center;
    /* border: 1px solid #c7c7c7; */
    height: 50px;
    cursor: pointer;
    span{
        font-size:20px;
        color:#c7c7c7;
        
    }
    :hover{
            box-shadow: 0px 0px 8px 3px #e6e6e6;
        }
    `

export const RightArrow = styled.div`
    position: absolute;
    top: 50%;
    right:0;
    margin-top: -25px;
    transform: translateX(50px);
    display: flex;
    align-items: center;
    justify-items: center;
    /* border: 1px solid #f3f3f3; */
    height: 50px;
    cursor: pointer;
    span{
        font-size:20px;
        color:#c7c7c7
    }
    :hover{
            box-shadow: 0px 0px 8px 3px #e6e6e6;
        }
    `