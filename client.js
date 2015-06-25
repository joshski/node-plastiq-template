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
    h('nav#nav.navbar.navbar-default',{attributes: {'role': 'navigation'}},
        h('button.navbar-toggle',{attributes: {'data-toggle': 'collapse','data-target': '.navbar-collapse'}},
          h('span.icon-bar'),
          h('span.icon-bar'),
          h('span.icon-bar')
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
        h('div#banner-title',
          h('h1', 'Welcome!'),
          h('p', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa'),

          h('div.button', 'Explore')
        )
      ),
      h('div#about.section',
        h('h1', 'about'),
        h('div.overlay')
      ),
      h('div#products.section',
        h('h1', 'products'),
        h('div.overlay')
      ),
      h('div#contact.section',
        h('h1', 'contact'),
        h('div.overlay')
      )
    )
  );
}
$(document).ready(function() {
  $('body').scrollspy();
  $(".navbar-nav li a").click(function (event) {
    $(".navbar-collapse").collapse('hide');
  });

});
plastiq.append(document.body, render, {
  name: ''
});
