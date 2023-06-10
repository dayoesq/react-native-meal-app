import {
    View,
    Text,
    Image,
    Pressable,
    StyleSheet,
    Platform
} from 'react-native';

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
                <View style={styles.details}>
                    <Text style={styles.detailItem}>{`${duration}m   | `}</Text>
                    <Text style={styles.detailItem}>
                        {`${complexity.toUpperCase()}   | `}
                    </Text>

                    <Text style={styles.detailItem}>
                        {affordability.toUpperCase()}
                    </Text>
                </View>
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
    },
    details: {
        margin: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    detailItem: {
        margin: 4,
        fontWeight: '400'
    }
});
