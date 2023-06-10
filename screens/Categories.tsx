import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

type ItemData = {
    item: { title: string; color: string };
};

// Placed outside because it doesn't have to be re-created!
function renderCategoryItem(itemData: ItemData) {
    return (
        <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
        />
    );
}

export default function Categories() {
    return (
        <FlatList
            data={CATEGORIES}
            renderItem={item => renderCategoryItem(item)}
            keyExtractor={(item, _index) => item.id}
            numColumns={2}
        />
    );
}
