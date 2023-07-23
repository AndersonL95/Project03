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
    align-items:flex-end;
    
`;
export const LogoutBtn = styled(MyButton)`
    width: 70px;
    height: 40px;
    border-radius: 5px;
    margin-right: 10px;

`