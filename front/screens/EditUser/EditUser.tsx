import {Alert, Image, Keyboard, Text, Touchable, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button_save, CameraView, EditContainer, ImgUser, InputArea, ModalCamera, PassInput, TextCamera, TopArea, TopImg, TopSection, TopText } from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ParamsData, stackTypes } from '../../stacks/mainStack'
import UserImg from '../../assets/conta.png';
import { IconButton, Portal, Provider} from 'react-native-paper'
import { colors } from '../../components/colors'
import { MyTextInput } from '../../components/Texts/MyTextInput'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { UpdateUser } from '../../api/ServiceApi'
import * as ImagePicker from 'expo-image-picker';
import Modal from "react-native-modal";
import Spinner from '../../components/Spinner'

const EditUser = () => {
  const route = useRoute<ParamsData>();
  const navigation = useNavigation<stackTypes>();
  const id = route.params?.id as number;
  const picture = route.params?.picture;
  const [email,setEmail] = useState<string>(`${route.params?.email}`);
  const [name,setName] = useState<string>(`${route.params?.name}`);
  const [image, setImage] = useState<any>();
  const [visible, setVisible] = useState<boolean>(false);
  const [keyboardStatus, setKeyboardStatus] = useState('');
  const [loadding,setLoadding] = useState<boolean>(false)




  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);  

  const handleBack = () =>{
    navigation.goBack()
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result:any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const openCamera = async () => {
    let permissionResult = await ImagePicker.getCameraPermissionsAsync();
    if(permissionResult.status !== 'granted') {
        permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    }
    if(permissionResult.status !== 'granted') {
        alert("You must turn on camera permissions to record a video.");
    }
    else {
        let result:any = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          allowsMultipleSelection: false,
          exif: false,
          aspect: [1, 1],
        });    
        console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
}
  }
  
  const handleSubmit = async() =>{
    const token = await AsyncStorage.getItem('refreshToken');
    const formData = new FormData();
    const file:any ={
      uri : image,
      type: "image/jpeg",
      name: image.split("/").pop()
    }
    formData.append('user', file);
    formData.append('name', name);
    await UpdateUser(id,formData,token);
      setTimeout(() =>{
        AsyncStorage.removeItem('profileImg');
        navigation.navigate('EditUser');
      },2000);
      
    
   
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

  
console.log(loadding)



  return (
    <EditContainer>
       {
        loadding === true ? <Spinner/> : ""
        }
      <TopSection>
        <TopArea>
        <IconButton
          icon='keyboard-backspace'
          onPress={handleBack}
          size={30}
          iconColor={colors.white}
          style={{marginTop:35}}
        />
          <TopText>
            Editar usuario
          </TopText>
          
        </TopArea>
      </TopSection>
      <TopImg>
       {
        image == null
        ?  <ImgUser source={{uri: picture ? `data:image/png;base64,${picture}`: UserImg }}/>
        :  <ImgUser source={{ uri: image }}  />

       }
        <IconButton
          icon='camera'
          size={45}
          iconColor={colors.primary}
          style={{position:'absolute', right:110, top: 70}}
          onPress={showModal}
        
        />
        <Modal 
          isVisible={visible} 
          onDismiss={hideModal}
          style={{width:100}}
        >
        <ModalCamera>
          <IconButton 
            icon='close-box-outline'
            onPress={hideModal}
            style={{position:'absolute', top: -10, right:-10}}
            iconColor={colors.primary}
          />
          <CameraView
            onPress={openCamera}
          >
            <TextCamera>Camera</TextCamera>
            <IconButton 
              icon='camera'
              size={30}
              iconColor={colors.primary}
              style={{marginLeft:20}}
            />
        </CameraView>
        <CameraView
          onPress={pickImage}
        >
            <TextCamera>Galeria</TextCamera>
            <IconButton 
              icon='file-image'
              size={30}
              iconColor={colors.primary}
              style={{marginLeft:20}}
            />
        </CameraView>
      </ModalCamera>
      </Modal>
        
      </TopImg>
      
      <InputArea>
       
        <PassInput 
          placeholder=''
          value={name}
          onChangeText={setName}
          name='name'        
          onSubmitEditing={Keyboard.dismiss}
        />
      </InputArea>
      <Button_save
        onPress={handleSubmit}

      >
      <IconButton 
        icon='content-save-edit'
        size={55}
        iconColor={colors.white}
      />
      </Button_save>
    </EditContainer>
  )
}

export default EditUser