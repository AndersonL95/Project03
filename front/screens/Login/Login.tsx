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
import AsyncStorage from "@react-native-async-storage/async-storage";


const Login = () => {
    const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
    const navigation = useNavigation<stackTypes>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loadding,setLoadding] = useState<String>('')
    const [user,setUser] = useState([]);
    const {logIn} = useAuth();
    const [keyboardStatus, setKeyboardStatus] = useState('');

    const handleSignClick = async () => {
        try {
            setTimeout(async()=>{
                
                if(email != '' && password != '') {
                    await logIn(email, password)
                    .then((res:any)=>{
                        setUser(res.user)
                        if(res !=null){
                            setLoadding('loggin in')
                            AsyncStorage.setItem('role',(res.cargo))
                            if(res.cargo == 'admin'){
                                navigation.reset({
                                    index:1,
                                    routes:[
                                        {
                                            name:'AdminTab'
                                        }
                                    ]
                                })
                            }else{
                                setLoadding('loggin in')
                                navigation.reset({
                                    index: 1,
                                    routes: [
                                      {
                                        name: 'MainTab', 
                                        
                                      },
                                    ],
                                  }) 
                            }
                        }else {
                            Alert.alert('Login ou senha incorretos.')
                        }
                    })
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
