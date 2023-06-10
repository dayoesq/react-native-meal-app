import { View, Text, StyleSheet, FlatList } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

type ItemData = {
    item: IMeal;
};

export default function Meal({ route }: { route: any }) {
    // useRoute is an alternative here!
    const catId = route.params.categoryId;
    const displayMeals = MEALS.filter(item => {
        return item.categoryIds.indexOf(catId) >= 0;
    });

    function renderMealItem(data: ItemData) {
        const item = data.item;
        const mealItemProps = {
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
