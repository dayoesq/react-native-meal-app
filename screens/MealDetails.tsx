import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { MealCard } from '../components/MealCard';
import { useLayoutEffect } from 'react';
import { IconButton } from '../components/IconButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type MealDetailsProps = NativeStackScreenProps<
    RootStackParamList,
    'MealDetails'
>;

export default function MealDetails({ route, navigation }: MealDetailsProps) {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    function pressHandler() {
        //console.log('pressed!!!');
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton onPress={pressHandler} />;
            }
        });
    }, [navigation, pressHandler]);

    return (
        <>
            {selectedMeal && (
                <ScrollView style={styles.rootContainer}>
                    <Image
                        style={styles.image}
                        source={{ uri: selectedMeal.imageUrl }}
                    />
                    <Text style={styles.title}>{selectedMeal.title}</Text>
                    <MealCard
                        complexity={selectedMeal.complexity}
                        affordability={selectedMeal.affordability}
                        duration={selectedMeal.duration}
                        textStyle={styles.detailText}
                    />
                    <View style={styles.listOuterContainer}>
                        <View style={styles.listContainer}>
                            <View style={styles.subtitleContainer}>
                                <Text style={styles.subTitle}>Ingredients</Text>
                            </View>
                            {selectedMeal.ingredients.map(ingredient => (
                                <View style={styles.listItem} key={ingredient}>
                                    <Text style={styles.itemText}>
                                        {ingredient}
                                    </Text>
                                </View>
                            ))}
                            <View style={styles.subtitleContainer}>
                                <Text style={styles.subTitle}>Steps</Text>
                            </View>
                            {selectedMeal.steps.map(step => (
                                <View style={styles.listItem} key={step}>
                                    <Text style={styles.itemText}>{step}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </ScrollView>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        width: '80%'
    },
    detailText: {
        color: 'white'
    },
    subTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 4,
        textAlign: 'center',
        color: '#d5d3eb'
    },
    subtitleContainer: {
        padding: 6,
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        marginHorizontal: 24,
        marginVertical: 4
    },
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 4,
        backgroundColor: '#d5d3eb'
    },
    itemText: {
        color: '#555',
        textAlign: 'center'
    }
});
