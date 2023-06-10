interface IMeal {
    id: string;
    categoryIds: string[];
    title: string;
    affordability: 'pricey' | 'affordable' | 'luxurious';
    complexity: 'simple' | 'challenging' | 'hard';
    imageUrl: string;
    duration: number;
    ingredients: string[];
    steps: string[];
    isGlutenFree: boolean;
    isVegan: boolean;
    isVegetarian: boolean;
    isLactoseFree: boolean;
}
