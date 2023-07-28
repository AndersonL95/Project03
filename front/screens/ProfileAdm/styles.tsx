import styled from "styled-components/native";
import { container } from "../../components/shared";
import { colors } from "../../components/colors";
import { MyButton } from "../../components/Buttons/MyButton";

export const ProfileContainer = styled(container)`
    background-color: ${colors.white};
    width: 100%;
    height: 100%;
`;
export const TopSection = styled.View`
    width: 100%;
    height: 30%;
    align-items: center;
    margin-top: 25px;
    
`;
export const LogoutBtn = styled.TouchableOpacity`
    width: 95%;
    height: 40px;
    margin-top: 30px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
export const LogoutArea = styled.View`
    width: 100%;
    align-items: flex-end;
`;
export const ImgUser = styled.Image`
    width: 130px;
    height: 130px;
    border-radius: 70px;
    background-color: #ececec;
`;
export const UserName = styled.Text`
  font-size: 17px;
  font-weight: bold;
  margin-top: 10px;
`;
export const UserEmail = styled.Text`
  font-size: 16px;
  margin-top: 5px;
`;
export const ModalBottom = styled.View`
  width:100%;
  height: 50%;
  background-color: #fff;
  border-radius: 45px 45px 0 0;
  

`;
export const TextModal = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;

`;