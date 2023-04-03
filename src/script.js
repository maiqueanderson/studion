$(document).ready(() =>{
    const slickOptions = {
        dots: false,
        autoplay: true,
        prevArrow: '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>',
        nextArrow: '<button type="button" class="slick-next slider__next-arrow">Next</button>',
       
      };
    $(".slider").slick(slickOptions);

    $('.footer__form-button').on('click', () => {
        const email = $('#email'.valueOf());
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "username",
            Password : "password",
            To : 'maique.ss@gmail.com',
            From : email,
            Subject : "Por favor me adicione a Newslatter",
            Body : `Olá eu gostaria de ser adicionado a newsletter do site.
            Meu email é ${email}
            Obrigado!`
        }).then(
          message => alert(message)
        );
    })

  });

