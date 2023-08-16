import styled from "styled-components/native";
import { container } from "../../components/shared";
import { colors } from "../../components/colors";
import { Modal } from "react-native";
import { MyTextInput } from "../../components/Texts/MyTextInput";

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
    height: 25%;
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
  margin: 30px 15px 0px 0px;

`;
export const ImgUser = styled.Image`
    width: 130px;
    height: 130px;
    border-radius: 70px;
    background-color: #ececec;
`;
export const ModalCamera = styled.View`
  width: 350px;
  height: 130px;
  background-color: ${colors.white};
  border: 1px solid ${colors.black};
  
  
`;
export const CameraView = styled.TouchableOpacity`
    width: 90%;
    height: 25%;
    margin-top: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 25px;
  
`;
export const TextCamera = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-left: 15px;

`
export const InputArea = styled.View`
    width: 90%;
    height: 40%;

`
export const InputAreaPass = styled.View`
    width: 90%;
    height: 50%;
    justify-content: center;
    margin-top: 100px;
    

`
export const PassInput = styled(MyTextInput)`
    width: 100%;
    height: 60px;
    border: 1px solid ${colors.primary};
    border-radius: 15px;
    font-size: 18px;
    padding-left: 15px;
    color: #111;

`
export const PasswordArea = styled.View`
    width: 100%;
    flex-direction: row;
`
export const Button_save = styled.TouchableOpacity`
    width: 90px;
    height: 90px;
    background-color: ${colors.tertiary};
    border-radius: 30px;
    justify-content: center;
    align-items: center;

`