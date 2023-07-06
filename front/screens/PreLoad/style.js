import styled from 'styled-components/native';
import { container } from '../../components/shared';
import { colors } from '../../components/colors';


export const Container = styled(container)`
    width: 100%;
    height: 100%;
    justify-content: center;
`;
export const BackgroundImage = styled.ImageBackground`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;

`;
export const ImageGif = styled.Image`
    width: 200px;
    height: 200px;
    
`;
export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;