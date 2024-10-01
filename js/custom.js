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
    // remove food items from the cart
    let btnRemove = document.querySelectorAll('.cart-remove')
    btnRemove.forEach((btn) => {
        btn.addEventListener('click', removeItem)
    });

    // product item quantity inside the cart box
    let qtyElements = document.querySelectorAll('.cart-quantity')
    qtyElements.forEach((input) => {
        input.addEventListener('change', changeQty)
    });

    // product cart
    let cartBtns = document.querySelectorAll('.add-to-cart')
    cartBtns.forEach((btn) =>{
        btn.addEventListener('click', addCart)
    })

}

// remove items

function removeItem(){
    this.parentElement.remove()
}

// change quantities
function changeQty(){
    if(isNaN(this.value) || this.value < 1){
        this.value = 1
    }
}

// add cart
function addCart(){
    let food = this.parentElement
    console.log(food.querySelector('.detail-box').innerHTML)    
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