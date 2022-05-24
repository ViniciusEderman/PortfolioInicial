$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky")
        }else{
            $('.navbar').removeClass("sticky")
        }if(this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    var typed = new Typed(".typing", {
        strings:["Devoloper", "Trainee", "Technology Lover"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

    var typed = new Typed(".typing-2", {
        strings:["About Me", "Sobre Mim"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

    var typed = new Typed(".typing-3", {
        strings:["Experiences", "Experiências"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

    var typed = new Typed(".typing-4", {
        strings:["My Skills", "Minhas Habilidades"],
        typeSpeed:100,
        backSpeed:50,
        loop:true
    });

    var typed = new Typed(".typing-5", {
        strings:["Contact", "Contato"],
        typeSpeed:100,
        backSpeed:50,
        loop:true
    });

});