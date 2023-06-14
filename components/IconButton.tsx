import { GestureResponderEvent, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function IconButton({
    onPress
}: {
    onPress: (event: GestureResponderEvent) => void;
}) {
    return (
        <Pressable onPress={onPress}>
            <Ionicons name='star' color='white' size={24}/>
        </Pressable>
    );
}
