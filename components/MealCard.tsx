import { View, Text, StyleSheet, StyleProp, TextStyle } from 'react-native';
export function MealCard({
    duration,
    complexity,
    affordability,
    textStyle
}: {
    duration: IMeal['duration'];
    complexity: IMeal['complexity'];
    affordability: IMeal['affordability'];
    textStyle?: StyleProp<TextStyle>;
}) {
    return (
        <View style={styles.details}>
            <Text
                style={[styles.detailItem, textStyle]}
            >{`${duration}m   | `}</Text>
            <Text style={[styles.detailItem, textStyle]}>
                {`${complexity.toUpperCase()}   | `}
            </Text>

            <Text style={[styles.detailItem, textStyle]}>
                {affordability.toUpperCase()}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
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
