import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

type MealProps = {
    title: IMeal['title'];
    imageUrl: IMeal['imageUrl'];
    duration: IMeal['duration'];
    complexity: IMeal['complexity'];
    affordability: IMeal['affordability'];
};

export default function MealItem({
    title,
    imageUrl,
    duration,
    complexity,
    affordability
}: MealProps) {
    return (
        <View style={styles.mealItem}>
            <Pressable>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                </View>
                <View>
                    <Text>{duration}m</Text>
                    <Text>{complexity.toUpperCase()}</Text>
                    <Text>{affordability.toUpperCase()}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white'
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18
    }
});
