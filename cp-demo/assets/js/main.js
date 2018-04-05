$(window).on('load', function() {
    "use strict";
	
    var preloader = $('.pre-loader');
    var sliderOne = $('#slider_one');
    var testimonialSlider = $('#testimonal-slider');
    var partnerSlider = $('#partner-slider');
    var relatedProduct = $('#related_product');
    var fancyboxImg = $('.fancybox');
    var accordionFAQ = $("#accordion");
    var shippingAddress = $('.ship-to-different-address-checkbox');
    var Account_open = $('#account');
    var accountBox = $('.account-box');
    var inputCheckbox = $('input[type=checkbox]');
    var showLogin = $('.showlogin');
    var showCoupon = $('.showcoupon');
    var showGrid = $('.grid');
    var showlist = $('.list');
    var productGrid = $('.product_grid');
    var productList = $('.product_list');
    var counter_one = $('.counter');
    var add_plus = $('.add');
    var removeMinus = $('.minus');
    var sliderRange = $("#slider-range");
    var Amount = $("#amount");
    var sliderEight = $('.slider8');
    var horizontalSlider = $('#horizantal_slider_one');
    var mapDiv = $('#gmap_canvas');
    var commingDemo = $('#demo');
    var searchElement = $('#search, #search button.close');
    var searchAnchor = $('a[href="#search"]');
    var searchID = $('#search');
    var searchInput = $('#search > form > input[type="search"]');

    /*
    ========================================
    Preloder Setting
    ========================================
    */
    if (preloader.length) {
        preloader.fadeOut();
    }
    /*
    =================
    SEARCH BOX POPUP
    =================
    */

	searchAnchor.on('click', function(event) {
		searchID.addClass('open');
		searchInput.focus();
	});
	searchElement.on('click keyup', function(event) {
		if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
			$(this).removeClass('open');
		}
	});


    /*
    ==================
    HEADER SLIDER
    ==================
    */
    var nextNav = '<i class="fa fa-angle-right" aria-hidden="true"></i>';
    var prevNav = '<i class="fa fa-angle-left" aria-hidden="true"></i>';
    if (sliderOne.length) {
        sliderOne.owlCarousel({
            loop: true,
            margin: 0,
            dots: false,
            nav: true,
            autoplay: true,
            navText: [prevNav, nextNav],
            responsive: {
                0: {
                    items: 1

                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    }
    /*
    ==================
    TESTIMONAL SLIDER
    ==================
    */
    if (testimonialSlider.length) {
        testimonialSlider.owlCarousel({
            loop: true,
            margin: 10,
            dots: false,
            nav: true,
            navText: [prevNav, nextNav],
            responsive: {
                0: {
                    items: 1

                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    }
    /*
    ==================
    PARTNER SLIDER
    ==================
    */
    if (partnerSlider.length) {
        partnerSlider.owlCarousel({
            loop: true,
            margin: 0,
            dots: false,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 3
                }
            }
        });
    }
    /*
    ==========================
    RELATED PRODUCT SLIDER
    ==========================
    */
    if (relatedProduct.length) {
        relatedProduct.owlCarousel({
            loop: true,
            margin: 0,
            dots: false,
            nav: true,
            navText: [prevNav, nextNav],
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        });
    }
    /*
    ==============
    FANCY-BOX SECTION
    ==================
    */
    if (fancyboxImg.length) {
        fancyboxImg.fancybox();
    }
    /*
    ===================
    accordion
    =====================
    */
    if (accordionFAQ.length) {
        accordionFAQ.accordion();
    };
    /*
    ==========================
    ADDITIONAL INFORMATION HIDE
    ============================
    */
	var shippingFields = $('.shipping-fields');
    if (shippingAddress.length) {
        shippingAddress.on('click', function(e) {
            e.preventDefault();
            shippingFields.slideToggle("slow");
        });
    }
    /*
    ======================
    CREATE ACCOUNT
    ======================
    */
    if (Account_open.length) {
        Account_open.on('change', function() {
			accountBox.slideToggle('slow');
        });
    }
    /*
    ====================
    SHOW LOGIN
    ====================
    */
	var logsIn= $('.login');
	
    if (showLogin.length) {
        showLogin.on('click', function(e) {
            e.preventDefault();
            logsIn.slideToggle("slow");
        });
    }
    /*
    ==================
    SHOW COUPON
    =================
    */
	var checkoutCoupon= $('.checkout_coupon');
    if (showCoupon.length) {
        showCoupon.on('click', function(e) {
            e.preventDefault();
            checkoutCoupon.slideToggle("slow");
        });
    }
    /*
    ======================
    SHOW GRID
    ======================
    */
    if (showGrid.length) {
        showGrid.on('click', function() {
            document.getElementById('show_grid').style.display = 'block';
            document.getElementById('show_list').style.display = 'none';
        });
    }
    /*
    ======================
    SHOW LIST
    ======================
    */
    if (showlist.length) {
        showlist.on('click', function() {
            document.getElementById('show_grid').style.display = 'none';
            document.getElementById('show_list').style.display = 'block';
        });
    }
    /*
    ========================
    with-sidebar grid
    ==========================
    */
    if (productGrid.length) {
        productGrid.on('click', function() {
            document.getElementById('collection_box').style.display = 'block';
            document.getElementById('collection_sidebar_list').style.display = 'none';
        });
    }
    /*
    ==================
    with-sidebar list
    =====================
    */
    if (productList.length) {
        productList.on('click', function() {
            document.getElementById('collection_box').style.display = 'none';
            document.getElementById('collection_sidebar_list').style.display = 'block';
        });
    }
    /*
    =====================
    count down
    =====================
    */
	var counters = $('.counter');
    if (counter_one.length) {
        counter_one.appear(function() {
            counters.each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');

                $({
                    countNum: $this.text()
                }).animate({
                        countNum: countTo
                    },

                    {
                        duration: 8000,
                        easing: 'linear',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(this.countNum);
                            //alert('finished');
                        }

                    });
            });
        });
    }
    /*
    ==========================
    your product title button
    ==========================
    */
   
    add_plus.on('click', function() {
        var $qty = $(this).closest('p').find('.qty');
        var currentVal = parseInt($qty.val(), 10);
            if (!isNaN(currentVal)) {
                $qty.val(currentVal + 1);
            }
    });
    removeMinus.on('click', function() {
		var $qty = $(this).closest('p').find('.qty');
        var currentVal = parseInt($qty.val(), 10);
            if (!isNaN(currentVal) && currentVal > 0) {
                $qty.val(currentVal - 1);
            }
    });
    /*
    ================================
    INCRESS & DECREASE order BUTTON
    ================================
    */
    
    add_plus.on('click', function() {
        var $qty = $(this).closest('ul').find('.qty');
        var currentVal = parseInt($qty.val(), 10);
            if (!isNaN(currentVal)) {
                $qty.val(currentVal + 1);
            }
    });
    removeMinus.on('click', function() {
        var $qty = $(this).closest('ul').find('.qty');
        var currentVal = parseInt($qty.val(), 10);
            if (!isNaN(currentVal) && currentVal > 0) {
                $qty.val(currentVal - 1);
            }
    });
    /*
    ===================
    FILTER
    ===================
    */
	if(sliderRange.length) {
        sliderRange.slider({
            range: true,
            min: 0,
            max: 500,
            values: [75, 300],
            slide: function(event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        Amount.val("$" + sliderRange.slider("values", 0) +
            " - $" + sliderRange.slider("values", 1));
   
	}
    /*
	=========================
	PRODUCT VERTICAL SLIDER
	=========================
	*/
    if (sliderEight.length) {
        sliderEight.bxSlider({
            mode: 'vertical',
            slideWidth: 300,
            minSlides: 3,
            slideMargin: 10,
            pager: false,
        });
    }
    /*
    ============================
    Horizantal slider one slider
    ============================
    */
    if (horizontalSlider.length) {
        horizontalSlider.owlCarousel({
            loop: true,
            margin: 4,
            dots: false,
            nav: true,
            navText: [prevNav, nextNav],
            autoplay: true,
            responsive: {
                0: {
                    items: 3
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        });
    }
    /*
    =====================
    Map section start
    ===================
    */

    //***************************************
    // Map initialization function Calling
    //****************************************

    if (mapDiv.length) {
        initMap();
    }

    /*
    ======================
    COMMINNG SOON TIMER
    ========================
    */
	if(commingDemo.length){
	  commingSoon(); 
	}

});

function commingSoon(){
 // Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2018 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("demo").innerHTML = "<div class='col-md-3 col-sm-3 col-xs-6'><div class='timer'>" + days + "</div><span>days</span></div><div class='col-md-3 col-sm-3 col-xs-6'><div class='timer'>" + hours + "</div><span>hours</span></div><div class='col-md-3 col-sm-3 col-xs-6'><div class='timer'> " + minutes + "</div><span>minutes </span></div> <div class='col-md-3 col-sm-3 col-xs-6'><div class='timer'>" + seconds + "</div><span>seconds </span></div> ";

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);

}

function initMap() {
    "use strict";
    var mapDiv = $('#gmap_canvas');
    if (mapDiv.length) {
        var myOptions = {
            zoom: 10,
            scrollwheel: false,
            center: new google.maps.LatLng(-37.81614570000001, 144.95570680000003),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
        var marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(-37.81614570000001, 144.95570680000003)
        });
        var infowindow = new google.maps.InfoWindow({
            content: '<strong>Envato</strong><br>Envato, King Street, Melbourne, Victoria<br>'
        });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });
        infowindow.open(map, marker);
    }

}