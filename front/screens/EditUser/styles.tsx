import styled from "styled-components/native";
import { container } from "../../components/shared";
import { colors } from "../../components/colors";

export const EditContainer = styled(container)`
    background-color: ${colors.white};
    width: 100%;
    height: 100%;
`;
export const TopSection = styled.View`
    width: 100%;
    height: 100px;
    align-items: center;
    justify-content: center;
    background-color: ${colors.primary};
    
`;
export const TopImg = styled.View`
    width: 100%;
    height: 30%;
    align-items: center;
    margin-top: 30px;
    
`;
export const TopArea = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
export const TopText = styled.Text`
  font-size: 22px;
  color: ${colors.white};
  margin: 20px 15px 0px 0px;

`;
export const ImgUser = styled.Image`
    width: 130px;
    height: 130px;
    border-radius: 70px;
    background-color: #ececec;
`;