//navbar
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageTOffset ||
    this.document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.top="-50px";
    } else {
        navbar.style.top = "-0";
    }
    lastScrollTop = scrollTop;
});





//typed
/* pour faire fonctionner ce code, il faut décommenter la ligne 48 de mon code HTML */
// let typed = new Typed('.typed', {
//     strings: ['Dynamique','Perséverante','Curieuse'],
//     typeSpeed: 50,
//     backSpeed: 50,
//     smartBackSpace: true, //by default
//     loop: true
// });

// les , permettent de faire repartir le texte au début
let typed = new Typed('.typed', {
    strings: ['Bonjour, je me présente, Aurore', 'forte d une expérience de 15 ans dans les centres de contact, je me suis reconvertie via une formation Developpeur intégrateur Web', 'je travaille depuis 3 ans en tant qu Analyste Programmeur'],
    typeSpeed: 50,
});

//Compteur live
let compteur = 0;

$(window).scroll(function(){
    const top = $('.counter').offset().top -
    window.innerHeight;

    if(compteur== 0 && $(window).scrollTop() > top){
        $('.counter-value').each(function() {
            let $this = $(this),
            countTo = $this.attr('data-count');
            $({
                countNum : $this.text()
            }).animate({
                countNum : countTo
            },
            {
                duration: 10000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                   $this.text(this.countNum); 
                }
            });
        });
        compteur=1;
    }
});

//AOS
AOS.init();