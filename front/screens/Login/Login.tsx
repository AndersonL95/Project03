import React,{useState} from "react";
import { StatusBar } from "expo-status-bar";
import { LoginContainer, TopSection, TopImage, BottomSection, MiddleSetion } from "./style";
import logo from '../../assets/logo.png';
import { MyTextInput } from "../../components/Texts/MyTextInput";
import { MyButton } from "../../components/Buttons/MyButton";
import { useAuth } from "../../api/Auth";
import { Route, useNavigation } from "@react-navigation/native";
import { stackTypes } from "../../stacks/mainStack";
import { InforData } from "../../api/ServiceApi";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Login = () => {

    const navigation = useNavigation<stackTypes>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user,setUser] = useState<Array<[]>>([]);     
    const {logIn} = useAuth();
    //const {infor} = useInfor()
    const handleSignClick = async () => {
        try {
            setTimeout(async()=>{
                if(email != '' && password != '') {
                    const res:void = await logIn(email, password)
                        if(res !=null){
                          //console.log("MEUTOKEN: "+ res)
                         await InforData()
                            .then((data)=>{
                               // console.log("MEUS DADOS: ",data.user)
                                if(data.user.cargo === 'admin'){

                                    navigation.push('AdminTab',{
                                        id: data.user._id ,
                                        name: data.user.name,
                                        email: data.user.email,
                                        cargo: data.user.cargo,
                                        verified: data.user.verified,
                                        password: data.user.password,
                                        picture: data.user.picture
                                    })
                                }else{
                                    navigation.reset({
                                        index: 1,
                                        routes: [
                                          {
                                            name: 'MainTab', 
                                            params:{
                                                id: data.user._id,
                                                name:data.user.name,
                                                email:data.user.email,
                                                cargo: data.user.cargo,
                                                verified: data.user.verified,
                                                password: data.user.password

                                             } 
                                          },
                                        ],
                                      }) 
                                }
                            })
                            //console.log("FINAL")

                        }
                }   
            },1000)
           
            /**c*/
        } catch (error:any) {
            alert(error.response.data.message)
        }
    }

    return (
        <>
            <StatusBar style="light"/>
            <LoginContainer>
                <TopSection>
                    <TopImage source={logo}/>
                </TopSection>
                <MiddleSetion>
                    <MyTextInput 
                        placeholder="E-mail" 
                        value={email} 
                        onChangeText={setEmail}    
                    />
                    <MyTextInput 
                        placeholder="Senha" 
                        value={password}
                        onChangeText={setPassword}    
                    />
                </MiddleSetion>
                <BottomSection>
                    <MyButton
                        title="Entrar"
                        onPress={handleSignClick}    
                    />
                </BottomSection>
            </LoginContainer>
        </>
    )
}
export default Login;
/**if(res == null){
                    navigation.reset({
                        index: 1,
                        routes: [
                          { name: 'Home' },
                        ],
                      })
                  console.log("RESPONSE:")
                }
            }else {
               return Alert.alert('Campo vazio!');
            } */