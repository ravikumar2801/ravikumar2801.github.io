//scrollspy
const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#item'
  })

//navbar bacground color changer

var navbar = document.querySelector('nav')

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}


var  typed = new Typed(".auto-type", {
  strings: ["Web Devloper","Web Designer"],
  typedSpeed: 150,
  backSpeed: 150,
  loop: true

});


AOS.init();

//portfolio
const triggerEl = document.querySelector('#myTab button[data-bs-target="#profile"]')
bootstrap.Tab.getInstance(triggerEl).show() // Select tab by name

const triggerFirstTabEl = document.querySelector('#myTab li:first-child button')
bootstrap.Tab.getInstance(triggerFirstTabEl).show() // Select first tab

