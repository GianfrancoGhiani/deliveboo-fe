import {reactive} from 'vue';
import axios from 'axios';

export const store = reactive({
    apiBaseUrl: 'http://127.0.0.1:8000/api',
    imagBasePath: 'http://127.0.0.1:8000/storage/',
    productsArray: [],
    isLoading: false,
    openCart: false,
    shoppingCart: [],
    cartData: [],
    restaurant: {},
    infoRestaurant(){
        if(this.cartData.length){

            axios.get(`${this.apiBaseUrl}/restaurant/${this.cartData[0].restaurant_id}`).then((response) => {
                console.log(response);
                this.restaurant = response.data.results;
                console.log(this.restaurant);
              })

        }
          
        },
    menuItems: [
        {
            label: 'Home',
            routeName: 'homepage'
        },
        {
            label: 'Store',
            routeName: 'store'
        },
        {
            label: 'About',
            routeName: 'about'
        },
        {
            label: 'Contacts',
            routeName: 'contacts'
        },
    ],

    carouselcard: [
        {
            title: 'High level of efficiency',
            content: 'I absolutely love this makeup website! The selection is fantastic and the prices are unbeatable. The quality of the products is amazing and I always receive my orders quickly. Highly recommend!',
            name: 'mina hollace',
            pic: '02'
        },

        {
            title: 'It\'s a choice of quality for people with special needs',
            content: 'I\'ve been a customer of this makeup website for over a year now and I have to say I\'m extremely satisfied. The website is user-friendly and easy to navigate. The customer service is top-notch and they have always helped me with any questions I have. I highly recommend!',
            name: 'forence themes',
            pic: '03'
        },

        {
            title: 'Professional team of specialists and passionate',
            content: 'This makeup website has a great variety of products, but I was a bit disappointed with the quality. Some of the items I received were not up to my standards, but their customer service was quick to resolve the issue. Overall, I would still recommend giving them a try.',
            name: 'madley pondor',
            pic: '04'
        },

        {
            title: 'Amazingly products',
            content: 'I was pleasantly surprised by the prices on this makeup website. The products are reasonably priced and the shipping was very fast. I was a bit hesitant about the quality, but I was pleasantly surprised. I will definitely be ordering from them again!',
            name: 'Pough Bigsley',
            pic: '01'
        },


    ],


});