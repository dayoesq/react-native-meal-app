import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
    View,
    Text,
    Image,
    Pressable,
    StyleSheet,
    Platform
} from 'react-native';
import { MealCard } from './MealCard';

type MealProps = {
    id: IMeal['id'];
    title: IMeal['title'];
    imageUrl: IMeal['imageUrl'];
    duration: IMeal['duration'];
    complexity: IMeal['complexity'];
    affordability: IMeal['affordability'];
};

export default function MealItem({
    id,
    title,
    imageUrl,
    duration,
    complexity,
    affordability
}: MealProps) {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    function selectMealItemHandler() {
        navigation.navigate('MealDetails', { mealId: id });
    }
    return (
        <View style={styles.mealItem}>
            <Pressable onPress={selectMealItemHandler}>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                </View>
                <MealCard
                    duration={duration}
                    complexity={complexity}
                    affordability={affordability}
                />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        padding: 8
    }
});
