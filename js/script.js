$(document).ready(function () {

  $(".phone-number-input").inputmask({
    mask: "+7 (999)-999-999-9",
  });

  $(".leave-request-form").validate({

  });

  $(".login-form").validate({
    submitHandler: function(form) {
      // Переход на другую страницу при успешной валидации
      window.location.href = "login2.html";
    }
  });

  $(".code-form").validate({
    submitHandler: function(form) {
      // Переход на другую страницу при успешной валидации
      window.location.href = "app-index2.html";
    }
  });

  const grayStar = 'img/star-gray.svg';
  const greenStar = 'img/star-green.svg';

  document.querySelectorAll('.star-rating').forEach(ratingBlock => {
    const stars = ratingBlock.querySelectorAll('.star');
    let currentRating = 0;

    stars.forEach((star, index) => {
      star.addEventListener('click', () => {
        currentRating = index + 1;

        stars.forEach((s, i) => {
          s.src = i < currentRating ? greenStar : grayStar;
        });

        // если нужно — можно сохранить рейтинг:
        ratingBlock.dataset.rating = currentRating;
      });
    });
  });

  $('.popup').magnificPopup({
    type: 'inline',
    mainClass: 'mfp-fade'
});

const fileInput = document.getElementById('fileInput');
const preview = document.getElementById('preview');
const submitBtn = document.getElementById('submitBtn');

if (fileInput && preview && submitBtn) {
  fileInput.addEventListener('change', function() {
    const file = this.files[0];

    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();

      reader.onload = function(e) {
        preview.src = e.target.result;
        preview.style.display = 'block';
        submitBtn.style.display = 'inline-block';
      }

      reader.readAsDataURL(file);
    }
  });

  submitBtn.addEventListener('click', function() {
    alert('Изображение отправлено!');
    // Тут можно реализовать реальную отправку
  });
}


  $(".select-wrap select").select2({
    minimumResultsForSearch: 6,
  });

  $('.card-slider').slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $('.tenant-slider').slick({
    dots: false,
    arrows: false,
    infinite: false,
    variableWidth: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
  
      const target = tab.getAttribute('data-tab');
      contents.forEach(c => {
        c.classList.remove('active');
        if (c.getAttribute('data-content') === target) {
          c.classList.add('active');
        }
      });
    });
  });
  
  function initAllTabSliders() {
    document.querySelectorAll('.tab-content .popup-slider').forEach(slider => {
      const $slider = $(slider);
      if (!$slider.hasClass('slick-initialized')) {
        $slider.slick({
          dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        });
      }
    });
  }
  
  initAllTabSliders(); // вызываем один раз при загрузке
  

  
  
  document.querySelectorAll('.checkerboard-items').forEach(items => {
    items.addEventListener('click', function (e) {
      if (!isMobile()) return;
  
      const cube = e.target.closest('.cube');
      if (!cube) return;
  
      currentCube = cube;
      showPopup(); // мобилка — центр
    });
  
    items.addEventListener('mouseover', function (e) {
      if (isMobile()) return;
  
      const cube = e.target.closest('.cube');
      if (!cube) return;
  
      currentCube = cube;
  
      const rect = cube.getBoundingClientRect();
      showPopup(rect.right, rect.top);
    });
  
    items.addEventListener('mouseout', function (e) {
      if (isMobile()) return;
  
      const related = e.relatedTarget;
      if (!popup.contains(related)) hidePopup();
    });
  });
  
  $('.main-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    centerPadding: '60px',
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '20px',
        }
      },
    ]
  });

  $('.main-slider2').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    centerPadding: '60px',
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
  });

  $('.concept-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    centerPadding: '60px',
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '20px',
        }
      },
    ]
  });

  $('.about-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    centerPadding: '60px',
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          centerPadding: '20px',
        }
      },
    ]
  });

  $(".cityes-btns .btn").on("click", function(){
    $(".cityes-btns .btn").removeClass("active");
    $(this).addClass("active");
  })
  
  $(".info-wrapper .more").on("click", function(){
    $(this).closest(".wrapper").find(".info-item").removeClass("hide");
  })

  $(".sex .item").on("click", function(){
    $(".sex .item").removeClass("active");
    $(this).addClass("active");
  });

  $(".drop-icon").on("click", function(){
    $(".menu-wrap").addClass("open");
    $("body, html").addClass("overflow");
  })

  $(".menu-wrap .close").on("click", function(){
    $(".menu-wrap").removeClass("open");
    $("body, html").removeClass("overflow");
  })

  

});
