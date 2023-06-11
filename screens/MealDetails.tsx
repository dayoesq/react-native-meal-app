import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function MealDetails({ navigation }: { navigation: any }) {
    function navigateHandler() {
        navigation.navigate('MealDetails');
    }
    return (
        <View>
            <Pressable onPress={navigateHandler}>
                <View>
                    <Text>The Meals Details page</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({});
