import { ADD_TO_CART } from '../types/types';

const initialState = {
    items: [
        {id:1, title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110, img: 'https://crossplus.com.ua/content/images/6/1000x1000l80nn0/muzhskie-krossovki-nike-air-max-720-gray-orange-64067564792480.jpeg'},
        {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80, img: 'https://styles.ua/content/images/43/krossovki-adidas-usa-84-fv2049-white-88268983145576_small11.jpeg'},
        {id:3,title:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120, img: 'https://styles.ua/content/images/13/kedy-vans-old-skool-mte-pink-93991313820043.jpeg'},
        {id:4,title:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260, img: 'https://beshop.com.ua/upload/resize/510408/krossovki_puma_cali_white_black_.jpeg'},
        {id:5,title:'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160, img: 'https://redriver.top/storage/cropped/product-colors/image_catalog_231_min.jpeg'},
        {id:6,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90, img: 'https://styles.ua/content/images/42/krossovki-new-balance-520-x-hanon-fishermans-blues-u520hnf-69550019714705_small11.jpg'},
        {id:7,title:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260, img: 'https://krossovki.kiev.ua/upload/resize/510408/krossovki_nike_air_force_1_07_just_do_it_pack_white.jpeg'},
        {id:8,title:'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160, img: 'https://krosovki.com/image/cache/catalog/man/cross//9/853092900-new-balance-ml515cgs-1200x800.jpeg'},
        {id:9,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90, img: 'https://www.be-in.ru/media/beingallery/gallary/things/2020/03/20/01_640_square_Qw2Yn3V.jpg'}
        ],
    addedItems:[],
    total: 0
}

const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                addedItems: [...state.addedItems, action.addedItem],
            }
        default: return state
    }
}
export default cartReducer;
