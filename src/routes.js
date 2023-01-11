import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Entypo,Feather,Ionicons,MaterialIcons} from '@expo/vector-icons';

import { FontAwesome } from '@expo/vector-icons';
import Cadastrar from './Pages/Cadastrar';
import Consultar from './Pages/Consultar';
import Home from './Pages/Home';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';






const HomeStack = createStackNavigator();

function HomeTabStack({navigation}){
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name="Início" component={Home} options={{headerTitle:'',headerTransparent:'true'}} />
            <HomeStack.Screen name="Consultar" component={Consultar} options={{headerTitle:'',headerTransparent:'true'}} />
            <HomeStack.Screen name="Cadastrar" component={Cadastrar} options={{headerTransparent:'true'}} />
        </HomeStack.Navigator>
    );
}





//==========================================================================================================================================
//==========================================================================================================================================
//==========================================================================================================================================


const Tab = createBottomTabNavigator();
export default function Routes(){
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor:'#fff',
                tabBarInactiveTintColor:'#fff',
                tabBarShowLabel:'false',
                tabBarStyle:{
                    position:'absolute',
                    backgroundColor:'#32a852',
                    borderTopColor:'transparent',
                    borderTopWidth:0,

                    bottom:14,
                    left:14,
                    right:14,
                    elevation:0,
                    borderRadius:25,
                    height:60,
                },
                
            }}
        >
            
            <Tab.Screen 
                name="Início" 
                component={HomeTabStack} 
                options={{
                    headerShown:false,
                    tabBarIcon:({size,color,focused})=> {
                        if(focused){
                            return <Ionicons name="home" size={size} color={color}/>
                        }

                        return <Ionicons name="home-outline" size={size} color={color}/>
                        
                }
                }}
            />

            <Tab.Screen 
            name="Consultar" 
            component={Consultar} 
            options={{
                headerShown:false,
                tabBarIcon:({size,color,focused})=> {
                    if(focused){
                        return <Ionicons name="search" size={size} color={color}/>
                    }

                    return <Ionicons name="search-outline" size={size} color={color}/>
                }   
            }}
            />

            <Tab.Screen 
            name="Cadastrar" 
            component={Cadastrar} 
            options={{
                headerShown:false,
                tabBarIcon:({size,color,focused})=> {
                    if(focused){
                        return <FontAwesome name="user" size={24} color="white" />
                    }

                    return <FontAwesome name="user-o" size={24} color="white" />
                }
            }}
            />
            
            

        </Tab.Navigator>

        
    );
}