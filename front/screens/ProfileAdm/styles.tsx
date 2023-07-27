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
    
`;
export const LogoutBtn = styled(MyButton)`
    width: 70px;
    height: 40px;
    border-radius: 5px;
    margin-right: 10px;
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