import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from './screens/Categories';
import Meal from './screens/Meal';
import MealDetails from './screens/MealDetails';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style='light' />
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        title: 'All Categories',
                        headerStyle: { backgroundColor: '#555' },
                        headerTintColor: 'white',
                        contentStyle: { backgroundColor: '#555' }
                    }}
                >
                    <Stack.Screen
                        name='Categories'
                        component={Categories}
                        // options={{
                        //     title: 'All Categories',
                        //     headerStyle: { backgroundColor: '#555' },
                        //     headerTintColor: 'white',
                        //     contentStyle: { backgroundColor: '#555' }
                        // }}
                        // options={({route, navigation}) => {
                        //   const catId = route.params.categoryId;
                        //   return {
                        //     title: catId
                        //   }
                        // }}
                    />
                    <Stack.Screen name='Meal' component={Meal} />
                    <Stack.Screen name='MealDetails' component={MealDetails} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {}
});
