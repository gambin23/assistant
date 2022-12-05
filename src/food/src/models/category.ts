export interface Category {
    id: string;
    name: string;
}

export const getCategory = (id: string) => categories.find(x => x.id === id)?.name;

export const categories: Category[] = [
    {
        id: 'burger',
        name: 'Burger'
    },
    {
        id: 'chicken',
        name: 'Chicken'
    },
    {
        name: 'Fish',
        id: 'fish'
    },
    {
        id: 'meat',
        name: 'Meat'
    },
    {
        name: 'Pasta',
        id: 'pasta'
    },
    {
        name: 'Pizza',
        id: 'pizza'
    },
    {
        id: 'pork',
        name: 'Pork'
    },
    {
        id: 'rice',
        name: 'Rice'
    },
    {
        id: 'salad',
        name: 'Salad'
    },
    {
        id: 'soup',
        name: 'Soup'
    },
    {
        name: 'Steak',
        id: 'steak'
    },
    {
        name: 'Vegan',
        id: 'vegan'
    },
    {
        id: 'vegeterian',
        name: 'Vegeterian'
    }
]
