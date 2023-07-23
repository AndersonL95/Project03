import React, { useContext } from 'react';
import {TabArea, TabItem, ImageIcon, NewsIcon, StudentIcon, ProfileIcon} from './styles'
import HomeIcon from '../../assets/home.png';
import IconStud from '../../assets/aluna.png';
import AccountIcon from '../../assets/conta.png';
import IconNews from '../../assets/news.png';
import { NavigationHelpers, ParamListBase, TabNavigationState } from '@react-navigation/native';
import { BottomTabDescriptorMap, BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';


interface TabBarProps {
    state: TabNavigationState<ParamListBase>;
    descriptors: BottomTabDescriptorMap;
    navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}
  
export const MyTabBar = ({ state, descriptors, navigation }: TabBarProps) => {

    const goTo = (screenName:any) => {
        navigation.navigate(screenName);
    }

    return (
        <TabArea>
            <TabItem onPress={()=>goTo('Home')}>
                <ImageIcon source={HomeIcon}style={{opacity: state.index===0? 1 : 0.5}}/>
            </TabItem>
            <TabItem onPress={()=>goTo('News')}>
                <NewsIcon source={IconNews} style={{opacity: state.index===1? 1 : 0.5,}}  />
            </TabItem>
            <TabItem onPress={()=>goTo('Student')}>
                <StudentIcon source={IconStud} style={{opacity: state.index===2? 1 : 0.5,}}  />
            </TabItem>
            <TabItem onPress={()=>goTo('Profile')}>
                <ProfileIcon source={AccountIcon} style={{opacity: state.index===3? 1 : 0.5,}}  />
            </TabItem>
            
            
        </TabArea>
    );
}
/**<TabItem onPress={()=>goTo('Favorites')}>
                <FavoriteIcon style={{opacity: state.index===3? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />
            </TabItem>
            <TabItem onPress={()=>goTo('Profile')}>
                <AccountIcon style={{opacity: state.index===4? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />

            </TabItem> */