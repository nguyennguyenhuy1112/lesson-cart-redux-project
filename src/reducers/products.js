var initialState = [
    {
        id: 1,
        name: 'Iphone 7 Plus',
        image: 'https://cdn.tgdd.vn/Products/Images/42/78124/apple-iphone-7-plus-1-400x460-400x460.png',
        description: 'Sản phẩm do Apple sản xuất',
        price: 500, //giá
        inventory: 10, //số lượng còn trong kho
        rating: 4
    },
    {
        id: 2,
        name: 'Samsung galaxy S7',
        image: 'https://cdn.tgdd.vn/Products/Images/42/74113/samsung-galaxy-s7-2-400x460.png',
        description: 'Sản phẩm do Samsung sản xuất',
        price: 400, //giá
        inventory: 10, //số lượng còn trong kho
        rating: 3
    },
    {
        id: 3,
        name: 'Zenphone 3',
        image: 'https://cdn.tgdd.vn/Products/Images/42/75994/asus-zenfone-3-3-400x460.png',
        description: 'Sản phẩm do ASUS sản xuất',
        price: 450, //giá
        inventory: 10, //số lượng còn trong kho
        rating: 5
    }
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
}

export default products;