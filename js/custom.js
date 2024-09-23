// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// let opnShopping = document.querySelector('.shopping')
// let closeShopping = document.querySelector('.closeShopping')
// let list = document.querySelector('.list')
// let listCard = document.querySelector('.listCard')
// let body = document.querySelector('body')
// let total = document.querySelector('.total')
// let quantity = document.querySelector('.quantity')


// opnShopping.addEventListener('click', () => {
//     body.classList.add('active')
// })
// closeShopping.addEventListener('click', () =>{
//     body.classList.remove('active')
// })

// let products = [ 
//     {
//         id : 1,
//         name : "product name 1",
//         image : "1.png",
//         price : 749
//     },
//     {
//         id : 2,
//         name : "product name 2",
//         image : "2.png",
//         price : 749
//     },
//     {
//         id : 3,
//         name : "product name 3",
//         image : "3.png",
//         price : 749
//     },
//     {
//         id : 4,
//         name : "product name 4",
//         image : "4.png",
//         price : 749
//     },
//     {
//         id : 5,
//         name : "product name 5",
//         image : "5.png",
//         price : 749
//     },
//     {
//         id : 6,
//         name : "product name 6",
//         image : "6.png",
//         price : 749
//     },
//     {
//         id : 7,
//         name : "product name 7",
//         image : "7.png",
//         price : 749
//     },
//     {
//         id : 8,
//         name : "product name 8",
//         image : "8.png",
//         price : 749
//     },
//     {
//         id : 9,
//         name : "product name 9",
//         image : "9.png",
//         price : 749
//     },
//     {
//         id : 10,
//         name : "product name 10",
//         image : "10.png",
//         price : 749
//     },
//     {
//         id : 11,
//         name : "product name 11",
//         image : "11.png",
//         price : 749
//     },
//     {
//         id : 12,
//         name : "product name 12",
//         image : "12.png",
//         price : 749
//     },
//     {
//         id : 13,
//         name : "product name 13",
//         image : "13.png",
//         price : 749
//     },
//     {
//         id : 14,
//         name : "product name 14",
//         image : "41.png",
//         price : 749
//     },
//     {
//         id : 15,
//         name : "product name 15",
//         image : "15.png",
//         price : 749
//     },
//     {
//         id : 16,
//         name : "product name 16",
//         image : "16.png",
//         price : 749
//     },
//     {
//         id : 17,
//         name : "product name 17",
//         image : "17.png",
//         price : 749
//     },
//     {
//         id : 18,
//         name : "product name 18",
//         image : "18.png",
//         price : 749
//     },
//     {
//         id : 19,
//         name : "product name 19",
//         image : "19.png",
//         price : 749
//     },
//     {
//         id : 20,
//         name : "product name 20",
//         image : "20.png",
//         price : 749
//     },
//     {
//         id : 21,
//         name : "product name 21",
//         image : "21.png",
//         price : 749
//     }

// ]

// let listCards = []
// // function initApp(){
// //     products.forEach((value,key) =>{
// //         let newDiv = document.createElement('div')
// //         newDiv.innerHTML = `
// //             <img src="images/${value.image}
// //         `
// //         list.appendChild(newDiv)
// //     })
// // }
// // initApp()

// function addToCard(key){
//     if(listCards[key] == null){
//         listCards[key] = products[key]
//         listCards[key].quantity = 1
//     }
//     reloadCard()
// }

// function reloadCard(){
//     listCard.innerHTML = ""
//     let count = 0
//     let totalPrice = 0
//     listCards.forEach((value, key) => {
//         totalPrice = totalPrice + value.price
//         count = count + value.quantity

//         if(value != null){
//             let newDiv = document.createElement('li')
//             newDiv.innerHTML = `

//             `
//             listCard.appendChild(newDiv)
//         }
//     })
//     total.innerText = totalPrice.toLocaleString()
//     quantity.innerText = count
// }


// isotope js
$(window).on('load', function () {
    $('.filters_menu li').click(function () {
        $('.filters_menu li').removeClass('active');
        $(this).addClass('active');

        var data = $(this).attr('data-filter');
        $grid.isotope({
            filter: data
        })
    });

    var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: false,
        masonry: {
            columnWidth: ".all"
        }
    })
});

// nice select
$(document).ready(function() {
    $('select').niceSelect();
  });

/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});