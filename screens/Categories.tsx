import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type ItemData = {
    item: { id: string; title: string; color: string };
};

type CategoriesProps = NativeStackScreenProps<RootStackParamList, 'Categories'>;

export default function Categories({ navigation }: CategoriesProps) {
    function renderCategoryItem(itemData: ItemData) {
        function pressHandler() {
            navigation.navigate('Meal', { categoryId: itemData.item.id });
        }
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={pressHandler}
            />
        );
    }
    return (
        <FlatList
            data={CATEGORIES}
            renderItem={item => renderCategoryItem(item)}
            keyExtractor={(item, _index) => item.id}
            numColumns={2}
        />
    );
}
