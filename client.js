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
function render(model) {
  return h('div',
    h('nav#nav.navbar.navbar-default.wow.bounceInDown',{attributes: {'role': 'navigation','data-wow-delay': '0.2s'}},
        h('button.navbar-toggle',{attributes: {'data-toggle': 'collapse','data-target': '.navbar-collapse'}},
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
        h('div#banner'),
        h('div.overlay'),
        h('div#banner-title.wow.bounceInUp',{attributes: {'data-wow-delay': '0.4s'}},
          h('h1', 'Welcome!'),
          h('p', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa'),
          h('a.btn.button.wow.shake',{
            href: '#about',
            onclick: smoothScroll,
            attributes: {'data-wow-delay': '2s'}
          }, 'Explore')
        )
      ),
      h('div#about.section',
        h('h1', 'About'),
        h('p.wow.bounceInUp',{attributes: {'role': 'navigation','data-wow-delay': '0.4s'}},
         'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa'),
        h('p.wow.bounceInDown',{attributes: {'role': 'navigation','data-wow-delay': '0.6s'}},
         'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis part Aenean massa. Cum sociis natoque penatibus et magnis dis part ula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis part Aenean massa. Cum sociis natoque penatibus et magnis dis part'),
        h('p.wow.bounceInUp',{attributes: {'role': 'navigation','data-wow-delay': '0.8s'}},
         'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis part Aenean massa. Cum sociis natoque penatibus et magnis dis part'),
        h('h2', 'More'),
        h('div#carousel.carousel.slide.carousel-fade.wow.bounceInUp',{attributes: {'role': 'navigation','data-wow-delay': '0.6s'}},
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
        h('h1', 'Products'),
        h('div.container',
          h('div.row',
            h('div.col-sm-3.col-xs-6',
              h('div.product-items')
            ),
            h('div.col-sm-3.col-xs-6',
              h('div.product-items')
            ),
            h('div.col-sm-3.col-xs-6',
              h('div.product-items')
            ),
            h('div.col-sm-3.col-xs-6',
              h('div.product-items')
            )
          )
        )
      ),
      h('div#contact.section',
        h('h1', 'Contact')
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
  $(".navbar-nav li a").click(function (event) {
    $(".navbar-collapse").collapse('hide');
    $(".navbar-toggle").toggleClass("toggled");

  });
  $(".navbar-toggle").on("click", function () {
      $(this).toggleClass("toggled");
  });
});
  $(window).scroll(function(){
    var body = $('body');
    var top = $(this).scrollTop();
  });
plastiq.append(document.body, render, {
  name: ''
});
