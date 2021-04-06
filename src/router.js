
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native';

import Home from './pages/Home';
import Details from './pages/Details';

const Stack = createStackNavigator();

function Routes () {
    return (
        <NavigationContainer>
            <Stack.Navigator> 
                <Stack.Screen 
                    name="Home"
                    component={Home}
                    options={{ headerShown:false }}
                />
                <Stack.Screen 
                    name="Detalhes"
                    component={Details}
                    options={{
                        headerRight: () => (
                            <TouchableOpacity style={{ marginRight: 15 }}>
                                <FontAwesome5 name={'cart-plus'} color="black" size={24} />
                            </TouchableOpacity>
                        )
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Routes;
