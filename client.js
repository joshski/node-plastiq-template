var plastiq = require('plastiq');
var jquery = require('jquery');
global.jQuery = jquery;
global.$ = jquery;

var bootstrap = require('bootstrap-sass');
var h = plastiq.html;



function smoothScroll(ev) {
  var target = $(ev.target);
  var body = $('body');
  var scrollTo = $(target.attr('href')).offset().top;
  $('html, body').animate({
    scrollTop: scrollTo
  }, 800);
  ev.preventDefault();
  return false;
};

google.maps.event.addDomListener(window, 'load', init);
var london = new google.maps.LatLng(51.5081, -0.1281);

function init() {
  var mapOptions = {
    center: london,
    zoom: 17,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    zoomControl: false,


    scaleControl: false,
    disableDefaultUI: true,
    styles: [{
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 17
      }]
    }, {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 20
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 17
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 29
      }, {
        "weight": 0.2
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 18
      }]
    }, {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 16
      }]
    }, {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 21
      }]
    }, {
      "elementType": "labels.text.stroke",
      "stylers": [{
        "visibility": "on"
      }, {
        "color": "#000000"
      }, {
        "lightness": 16
      }]
    }, {
      "elementType": "labels.text.fill",
      "stylers": [{
        "saturation": 36
      }, {
        "color": "#42dca3"
      }, {
        "lightness": 40
      }]
    }, {
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "on"
      }]
    }, {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 19
      }]
    }, {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 20
      }]
    }, {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 17
      }, {
        "weight": 1.2
      }]
    }]
  };
  var mapElement = document.getElementById('map');
  var map = new google.maps.Map(mapElement, mapOptions);
  var image = 'http://icons.iconarchive.com/icons/carlosjj/google-jfk/48/maps-icon.png';
  var myLatLng = london;
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}


function render(model) {
  return h('div',
    h('nav#nav.navbar.navbar-default.wow.bounceInDown', {
        attributes: {
          'role': 'navigation',
          'data-wow-delay': '0.2s'
        }
      },
      h('button.navbar-toggle', {
          attributes: {
            'data-toggle': 'collapse',
            'data-target': '.navbar-collapse'
          }
        },
        h('span.icon-bar.top-bar'),
        h('span.icon-bar.middle-bar'),
        h('span.icon-bar.bottom-bar')
      ),
      h('a.logo',
        h('i.fa.fa-money'),
        h('span', 'My Business')
      ),
      h('div.collapse.navbar-collapse',
        h('ul#nav-links.nav.navbar-nav',
          h('li',
            h('a', {
              href: '#home',
              onclick: smoothScroll
            }, 'Home')
          ),
          h('li',
            h('a', {
              href: '#about',
              onclick: smoothScroll
            }, 'About')),
          h('li',
            h('a', {
              href: '#products',
              onclick: smoothScroll
            }, 'Products')),
          h('li',
            h('a', {
              href: '#contact',
              onclick: smoothScroll
            }, 'Contact'))
        )
      )
    ),
    h('div#main',
      h('div#home.section',
        h('div.banner'),
        h('div.overlay'),
        h('div#banner-title.wow.fadeIn', {
            attributes: {
              'data-wow-delay': '0.4s'
            }
          },
          h('h1', 'Welcome!'),
          h('p', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa'),
          h('a.btn.button.wow.shake', {
            href: '#about',
            onclick: smoothScroll,
            attributes: {
              'data-wow-delay': '1.5s'
            }
          }, 'Explore')
        )
      ),
      h('div#about.section',
        h('h1', 'About'),
        h('div.content.wow.fadeInDown', {
            attributes: {
              'data-wow-delay': '0.4s'
            }
          },
          h('p',
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa'),
          h('p',
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis part Aenean massa. Cum sociis natoque penatibus et magnis dis part ula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis part Aenean massa. Cum sociis natoque penatibus et magnis dis part'),
          h('p',
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis part Aenean massa. Cum sociis natoque penatibus et magnis dis part')
        ),
        h('h2', 'More'),
        h('div#carousel.carousel.slide.carousel-fade.wow.fadeInUp', {
            attributes: {
              'role': 'navigation',
              'data-wow-delay': '0.6s'
            }
          },
          h('div.carousel-inner',
            h('div.item.active',
              h('div.carousel-caption',
                h('div.blur'),
                h('h2', 'Slide 1'),
                h('p', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa')
              )
            ),
            h('div.item',
              h('div.carousel-caption',
                h('h2', 'Slide 2'),
                h('p', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa')
              )
            ),
            h('div.item',
              h('div.carousel-caption',
                h('h2', 'Slide 3'),
                h('p', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa')
              )
            )
          )
        )
      ),
      h('div#products.section',
        h('div.banner'),
        h('h1', 'Products'),
        h('div.container',
          h('div.row',
            h('div.col-md-4.wow.bounceIn', {
                attributes: {
                  'data-wow-delay': '0.4s'
                }
              },
              h('div.product-items',
                h('img', {
                  attributes: {
                    'src': 'http://lorempixel.com/450/350/nightlife/1'
                  }
                })
              )
            ),
            h('div.col-md-4.wow.bounceIn', {
                attributes: {
                  'data-wow-delay': '0.4s'
                }
              },
              h('div.product-items',
                h('img', {
                  attributes: {
                    'src': 'http://lorempixel.com/450/350/nightlife/2'
                  }
                })
              )),
            h('div.col-md-4.wow.bounceIn', {
                attributes: {
                  'data-wow-delay': '0.4s'
                }
              },
              h('div.product-items',
                h('img', {
                  attributes: {
                    'src': 'http://lorempixel.com/450/350/nightlife/3'
                  }
                })
              )),
            h('div.col-md-4.wow.bounceIn', {
                attributes: {
                  'data-wow-delay': '0.4s'
                }
              },
              h('div.product-items',
                h('img', {
                  attributes: {
                    'src': 'http://lorempixel.com/450/350/nightlife/4'
                  }
                })
              )),
            h('div.col-md-4.wow.bounceIn', {
                attributes: {
                  'data-wow-delay': '0.4s'
                }
              },
              h('div.product-items',
                h('img', {
                  attributes: {
                    'src': 'http://lorempixel.com/450/350/nightlife/5'
                  }
                })
              )),
            h('div.col-md-4.wow.bounceIn', {
                attributes: {
                  'data-wow-delay': '0.4s'
                }
              },
              h('div.product-items',
                h('img', {
                  attributes: {
                    'src': 'http://lorempixel.com/450/350/nightlife/6'
                  }
                })
              ))
          )
        )
      ),
      h('div#contact.section',
        h('div.banner'),
        h('h1', 'Contact'),
        h('div.container',
          h('div.contact-details',
            h('p.address', 'My Business', h('br'), '18 Jamestone Road', h('br'), 'EC1R 9JQ, London', h('br'), 'United Kingdom'),
            h('a', {
              href: 'mailto:test@test.com',
            }, 'test@test.com'),
            h('br'),

            h('a.btn.button', {
                href: 'www.facebook.com'
              },
              h('i.fa.fa-phone'),
              h('span', 'Call Us')
            ), h('a.btn.button', {
                href: 'www.facebook.com'
              },
              h('i.fa.fa-facebook'),
              h('span', 'Facebook')
            ), h('a.btn.button', {
                href: 'www.facebook.com'
              },
              h('i.fa.fa-github'),
              h('span', 'Github')
            )
          ),
          h('div#map')

        )
      )
    )
  );
}

$(document).ready(function() {
  $('body').scrollspy();
  new WOW().init();
  $('#carousel').carousel({
    interval: 8000
  });
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
    $(".navbar-toggle").toggleClass("toggled");

  });
  $(".navbar-toggle").on("click", function() {
    $(this).toggleClass("toggled");
  });
});
$(window).scroll(function() {
  var body = $('body');
  var top = $(this).scrollTop();
});
plastiq.append(document.body, render, {
  name: ''
});
