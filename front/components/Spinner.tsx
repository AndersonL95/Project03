import React from 'react'
import styled from 'styled-components/native';
import { container } from './shared';
import { colors } from './colors';

export const SpinnerContainer = styled(container)`
    background-color: #111;
    opacity: 0.6;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    flex: 1;
    z-index: 5;

`;
export const LoadingIcon = styled.ActivityIndicator`
    
`;
const Spinner = () => {
  return (
    <SpinnerContainer>
        <LoadingIcon size={100} color="#FF0000"/>
    </SpinnerContainer>
  )
}

export default Spinner