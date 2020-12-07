import styled from 'styled-components'

export const ProgressBarContainer = styled.div`
    width:100%;
    .ant-progress-bg{
        height:${props => props.height} !important;
    }
`