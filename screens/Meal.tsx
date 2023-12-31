import { View, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import { useLayoutEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type ItemData = {
    item: IMeal;
};

type MealProps = NativeStackScreenProps<RootStackParamList, 'Meal'>;

export default function Meal({ route, navigation }: MealProps) {
    // useRoute is an alternative here!
    const catId = route.params.categoryId;
    const displayMeals = MEALS.filter(item => {
        return item.categoryIds.indexOf(catId) >= 0;
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(el => el.id === catId)?.title;
        navigation.setOptions({
            title: categoryTitle
        });
    }, [catId, navigation]);

    function renderMealItem(data: ItemData) {
        const item = data.item;
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability
        };
        return <MealItem {...mealItemProps} />;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={displayMeals}
                keyExtractor={item => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});
