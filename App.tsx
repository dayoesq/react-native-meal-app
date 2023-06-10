import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from './screens/Categories';
import Meal from './screens/Meal';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style='light' />
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name='Categories'
                        component={Categories}
                        options={{ title: 'All Categories' }}
                    />
                    <Stack.Screen name='Meal' component={Meal} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {}
});
