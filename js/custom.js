// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

let opnShopping = document.querySelector('.shopping')
let closeShopping = document.querySelector('.closeShopping')
let list = document.querySelector('.list')
let listCard = document.querySelector('.listCard')
let body = document.querySelector('body')
let total = document.querySelector('.total')
let quantity = document.querySelector('.quantity')

// validate the cart items into a array
// const itemList = []
// const newProduct = {title, price,imgSrc}
// push the product into the Array
// if(itemList.find((el) => el.title == newProduct.title)){
//     return
// }
// else{
//     itemList.push(newProduct)
// }


opnShopping.addEventListener('click', () => {
    body.classList.add('active')
})
closeShopping.addEventListener('click', () =>{
    body.classList.remove('active')
})

document.addEventListener('DOMContentLoaded', loadFood)


function loadFood(){
    loadContent()
}
function loadContent(){

    // product item quantity inside the cart box  I think it is not necessary but i dont recomend to touch it
    let qtyElements = document.querySelectorAll('.cart-quantity')
    qtyElements.forEach((input) => {
        input.addEventListener('change', changeQty)
    });

    // product cart
    const cartBtns = document.querySelectorAll('.add-to-cart')
    cartBtns.forEach((btn) =>{
        btn.addEventListener('click', addCart)
    })
}
updateTotal()
// remove cart items

function removeItem($key){
    let listCart = document.querySelectorAll('.cartItems .box')
    listCart.forEach(box => {
        if(box.getAttribute('data-key') == $key){
            box.remove()
        }
    })
}



// add to cart
let box = document.querySelectorAll('.col-sm-6 .box')
box.forEach(box => {
    box.addEventListener('click', function(event){
        if(event.target.classList.contains('cart-icon')){
            var boxNew = box.cloneNode(true)
            let checkIsSet = false

            let listCart = document.querySelectorAll('.cartItems .box')
            listCart.forEach(cartItems => {
                if(cartItems.getAttribute('data-key') == boxNew.getAttribute('data-key')){
                    checkIsSet = true
                    cartItems.classList.add('danger')
                    setTimeout(function(){
                        cartItems.classList.remove('danger')
                    },500)
                }
            })
            if(checkIsSet == false){
                document.querySelector('.cartItems').appendChild(boxNew).appendChild(btnRemove)

            }
        }
        
    })
})



// update total in cart
function updateTotal(){
    const totalItems = document.querySelectorAll('.cartItems h6')
    const totalValue = document.querySelector('.total-price')

    let total = 0
    totalItems.forEach(product => {
        let priceElement = product.querySelector('h6')
        let priceEle = parseFloat(priceElement.innerHTML.replace("₹", ""))
        let qty = product.querySelector('.cart-quantity').value
        total += (priceEle * qty)
        product.querySelector('h6').innerText = "₹" + priceEle * qty
    })

    totalValue.innerHTML = "₹" + total
}


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