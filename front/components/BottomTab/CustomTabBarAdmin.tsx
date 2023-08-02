import React, { useContext, useEffect, useState } from 'react';
import {TabAreaAdmin, TabItem, ImageIcon, NewsIcon, StudentIcon, ProfileIcon} from './styles'
import HomeIcon from '../../assets/home.png';
import IconStud from '../../assets/aluna.png';
import AccountIcon from '../../assets/conta.png';
import IconNews from '../../assets/news.png';
import { NavigationHelpers, ParamListBase, TabNavigationState, useRoute } from '@react-navigation/native';
import { BottomTabDescriptorMap, BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { ParamsData } from '../../stacks/mainStack';
import { Buffer } from 'buffer';


interface TabBarProps {
    state: TabNavigationState<ParamListBase>;
    descriptors: BottomTabDescriptorMap;
    navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
    userData: ParamsData;
}
  
export const MyTabBar = ({ state, descriptors, navigation }: TabBarProps) => {
    const route = useRoute<ParamsData>();
    const[picture,setPicture] = useState(route.params?.picture);
  useEffect(()=>{
    var buffer = Buffer.from(picture.data).toString('base64'); 
    setPicture(buffer)
  },[])


    const goTo = (screenName:any) => {
        navigation.navigate(screenName);
    }

    return (
        <TabAreaAdmin>
            <TabItem onPress={()=>goTo('HomeAdmin')}>
                <ImageIcon source={HomeIcon}style={{opacity: state.index===0? 1 : 0.5}}/>
            </TabItem>
            <TabItem onPress={()=>goTo('NewsAdmin')}>
                <NewsIcon source={IconNews} style={{opacity: state.index===1? 1 : 0.5,}}  />
            </TabItem>
            <TabItem onPress={()=>goTo('StudentAdmin')}>
                <StudentIcon source={IconStud} style={{opacity: state.index===2? 1 : 0.5,}}  />
            </TabItem>
            <TabItem onPress={()=>goTo('ProfileAdmin')}>
                {
                    picture != ""
                    ?<ProfileIcon source={{uri:`data:image/png;base64,${picture}` }} />
                    :<ProfileIcon source={AccountIcon} style={{opacity: state.index===3? 1 : 0.5,}}  />


                }
            </TabItem>
            
            
        </TabAreaAdmin>
    );
}
/**<TabItem onPress={()=>goTo('Favorites')}>
                <FavoriteIcon style={{opacity: state.index===3? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />
            </TabItem>
            <TabItem onPress={()=>goTo('Profile')}>
                <AccountIcon style={{opacity: state.index===4? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />

            </TabItem> */