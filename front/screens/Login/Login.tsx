import React,{useEffect, useState} from "react";
import { StatusBar } from "expo-status-bar";
import { LoginContainer, TopSection, TopImage, BottomSection, MiddleSetion, PasswordArea, PassInput } from "./style";
import logo from '../../assets/logo.png';
import { MyTextInput } from "../../components/Texts/MyTextInput";
import { MyButton } from "../../components/Buttons/MyButton";
import { useAuth } from "../../api/Auth";
import { useNavigation } from "@react-navigation/native";
import { stackTypes } from "../../stacks/mainStack";
import { InforData } from "../../api/ServiceApi";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTogglePasswordVisibility } from "../../components/useTogglePasswordVisibility";
import { Alert, Keyboard, Pressable } from "react-native";
import Spinner from "../../components/Spinner";


const Login = () => {
    const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
    const navigation = useNavigation<stackTypes>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loadding,setLoadding] = useState<String>('')
    const {logIn} = useAuth();
    const [keyboardStatus, setKeyboardStatus] = useState('');
    const handleSignClick = async () => {
        try {
            setTimeout(async()=>{
                if(email != '' && password != '') {
                    const res:void = await logIn(email, password)
                        if(res !=null){
                            setLoadding('loggin in')
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
                                    setLoadding('loggin in')
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

                        }else {
                            Alert.alert('Login ou senha incorretos.')
                        }
                }   
            },1000)
           
            /**c*/
        } catch (error:any) {
            alert(error.response.data.message)
        }
    }
    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
          setKeyboardStatus('Keyboard Shown');
        });
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
          setKeyboardStatus('Keyboard Hidden');
        });
    
        return () => {
          showSubscription.remove();
          hideSubscription.remove();
        };
      }, []);
    return (
        
        
            <LoginContainer>
               {
                loadding === 'loggin in' ? <Spinner/> : ""
               }
                <TopSection>
                    <TopImage source={logo}/>
                </TopSection>
                <MiddleSetion>
                    <MyTextInput
                        name="email" 
                        placeholder="E-mail" 
                        value={email} 
                        onChangeText={setEmail}    
                        keyboardType="email-address"
                        onSubmitEditing={Keyboard.dismiss}
                    />
                    <PasswordArea>
                    <PassInput 
                        placeholder="Senha" 
                        value={password}
                        secureTextEntry={passwordVisibility}
                        onChangeText={setPassword}
                    />
                     <Pressable 
                        onPress={handlePasswordVisibility}
                        
                    >
                        <MaterialCommunityIcons 
                            name={rightIcon} 
                            size={22} 
                            color="#232323"  
                            style={{position:'absolute',right:10, marginTop:20}}    
                        />
                    </Pressable>
                    </PasswordArea>
                   
                </MiddleSetion>
                <BottomSection>
                    <MyButton
                        title="Entrar"
                        onPress={handleSignClick}    
                    />
                </BottomSection>
            </LoginContainer>
        
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