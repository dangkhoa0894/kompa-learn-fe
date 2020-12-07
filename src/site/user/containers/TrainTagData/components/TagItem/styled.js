import styled from 'styled-components';

export const TagItemContent = styled.div`
  display: flex;
  width: fit-content;
  background: ${(props) => props.isModify && '#f3f6ff'};
  border-radius: 5px;
  margin: 4px 0px;
  label {
    display: flex;
    align-items: center;
    padding: 5px 10px;
  }
  span {
    cursor: pointer;
  }
`;

export const InputTag = styled.div`
  position: relative;
  span[aria-label='close'] {
    position: absolute;
    top: 50%;
    right: 10px;
    margin-top: -7px;
    height: 15px;
    width: 15px;
    color: ${({ theme: { colors } }) => colors.gray.gray_1};
    :hover {
      color: ${({ theme: { colors } }) => colors.blue.blue_1};
    }
  }
`;
