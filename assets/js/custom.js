jQuery(document).ready(function ($) {
  "use strict";

  $(function () {
    $("#tabs").tabs();
  });

  // Page loading animation

  $("#preloader").animate(
    {
      opacity: "0",
    },
    600,
    function () {
      setTimeout(function () {
        $("#preloader").css("visibility", "hidden").fadeOut();
      }, 300);
    }
  );

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var box = $(".header-text").height();
    var header = $("header").height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });
  if ($(".owl-clients").length) {
    $(".owl-clients").owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      items: 1,
      margin: 30,
      autoplay: false,
      smartSpeed: 700,
      autoplayTimeout: 6000,
      responsive: {
        0: {
          items: 1,
          margin: 0,
        },
        460: {
          items: 1,
          margin: 0,
        },
        576: {
          items: 3,
          margin: 20,
        },
        992: {
          items: 5,
          margin: 30,
        },
      },
    });
  }
  if ($(".owl-testimonials").length) {
    $(".owl-testimonials").owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      items: 1,
      margin: 30,
      autoplay: false,
      smartSpeed: 700,
      autoplayTimeout: 6000,
      responsive: {
        0: {
          items: 1,
          margin: 0,
        },
        460: {
          items: 1,
          margin: 0,
        },
        576: {
          items: 2,
          margin: 20,
        },
        992: {
          items: 2,
          margin: 30,
        },
      },
    });
  }
  if ($(".owl-banner").length) {
    $(".owl-banner").owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      items: 1,
      margin: 0,
      autoplay: false,
      smartSpeed: 700,
      autoplayTimeout: 6000,
      responsive: {
        0: {
          items: 1,
          margin: 0,
        },
        460: {
          items: 1,
          margin: 0,
        },
        576: {
          items: 1,
          margin: 20,
        },
        992: {
          items: 1,
          margin: 30,
        },
      },
    });
  }

  $(".Modern-Slider").slick({
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    dots: true,
    pauseOnDotsHover: true,
    cssEase: "linear",
    // fade:true,
    draggable: false,
    prevArrow: '<button class="PrevArrow"></button>',
    nextArrow: '<button class="NextArrow"></button>',
  });

  $(".filters ul li").click(function () {
    $(".filters ul li").removeClass("active");
    $(this).addClass("active");

    var data = $(this).attr("data-filter");
    $grid.isotope({
      filter: data,
    });
  });

  // esse comendo vai para o botao carregar mais...

  $(".product-button").click(function () {
    $(".filters ul li").removeClass("active");
    $(this).addClass("active");

    var data = $(this).attr("data-filter");
    $grid.isotope({
      filter: data,
    });
  });

  //fim do comando

  var $grid = $(".grid").isotope({
    itemSelector: ".all",
    percentPosition: true,
    masonry: {
      columnWidth: ".all",
    },
  });
  $(".accordion > li:eq(0) a").addClass("active").next().slideDown();

  $(".accordion a").click(function (j) {
    var dropDown = $(this).closest("li").find(".content");

    $(this).closest(".accordion").find(".content").not(dropDown).slideUp();

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this).closest(".accordion").find("a.active").removeClass("active");
      $(this).addClass("active");
    }

    dropDown.stop(false, true).slideToggle();

    j.preventDefault();
  });
});
// aqui começa a parte das pagina
document.addEventListener("DOMContentLoaded", function () {
  const products = document.querySelectorAll(".product-item");
  const loadMoreButton = document.getElementById("load-more");
  let currentFilter = "all";
  let currentCount = 0;
  const itemsPerPage = 6;

  function showProducts(filter) {
    currentCount = 0;
    currentFilter = filter;
    products.forEach((product) => {
      if (filter === "all" || product.classList.contains(filter)) {
        product.style.display = currentCount < itemsPerPage ? "block" : "none";

        currentCount++;
      } else {
        product.style.display = "none";
      }
    });
    loadMoreButton.style.display =
      currentCount > itemsPerPage ? "block" : "none";
  }

  function loadMore() {
    let shown = 0;
    products.forEach((product) => {
      if (
        product.style.display === "none" &&
        (currentFilter === "all" || product.classList.contains(currentFilter))
      ) {
        product.style.display = shown < itemsPerPage ? "block" : "none";
        shown++;
      }
    });
    loadMoreButton.style.display = shown < itemsPerPage ? "none" : "block";
  }

  loadMoreButton.addEventListener("click", loadMore);

  // Inicializa mostrando todos os produtos
  showProducts("all");
});
