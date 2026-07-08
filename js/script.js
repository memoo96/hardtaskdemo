var width = $(window).width();

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $(function () {
    $("ul.dropdown-menu [data-toggle='dropdown']").on(
      "click",
      function (event) {
        event.preventDefault();
        event.stopPropagation();

        $(this).siblings().toggleClass("show");

        if (!$(this).next().hasClass("show")) {
          $(this)
            .parents(".dropdown-menu")
            .first()
            .find(".show")
            .removeClass("show");
        }
        $(this)
          .parents("li.nav-item.dropdown.show")
          .on("hidden.bs.dropdown", function (e) {
            $(".dropdown-submenu .show").removeClass("show");
          });
      },
    );
  });

  $(document).on("click", function (event) {
    if ($(this).width() <= 991) {
      var $trigger = $(".navbar");
      if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $("#navbarContent").removeClass("show");
        $(".navbar-toggler").addClass("collapsed");
      }
    }
  });

  var scrollButton = $(".scroll_top");
  $(window).scroll(function () {
    if ($("body").css("direction") == "rtl") {
      if ($(this).scrollTop() > 500) {
        scrollButton.css({
          opacity: "1",
          visibility: "visible",
          right: "50px",
        });
      } else {
        scrollButton.css({
          opacity: "0",
          visibility: "hidden",
          right: "0px",
        });
      }
    } else {
      if ($(this).scrollTop() > 500) {
        scrollButton.css({
          opacity: "1",
          visibility: "visible",
          left: "50px",
        });
      } else {
        scrollButton.css({
          opacity: "0",
          visibility: "hidden",
          left: "0px",
        });
      }
    }
  });

  scrollButton.click(function () {
    $("html,body").animate({ scrollTop: 0 }, 1000);
  });

  $(window).scroll(function () {
    if ($(this).width() > 991) {
      var sc = $(this).scrollTop();
      if (sc > 0 && sc < 300) {
        $(".MainNav").css({
          opacity: "0",
          visibility: "hidden",
          top: "-50px",
          "box-shadow": "0 10px 10px -10px #00000059",
        });
        $(".RightSocial ul li a").addClass("changed");
        $(".RightSocial ul li a span").css({
          color: "#000",
        });
      } else if (sc >= 300) {
        $(".MainNav").css({
          "background-color": "#FFF",
          top: "0px",
          opacity: "1",
          visibility: "visible",
          "box-shadow": "0 10px 10px -10px #00000059",
        });
        $(".RightSocial ul li a").addClass("changed");
        $(".RightSocial ul li a span").css({
          color: "#000",
        });
      } else {
        $(".MainNav").css({
          "background-color": "transparent",
          top: "0px",
          opacity: "1",
          visibility: "visible",
          "box-shadow": "unset",
        });
        $(".RightSocial ul li a").removeClass("changed");
        $(".RightSocial ul li a span").css({
          color: "#FFF",
        });
      }
    } else {
      var sc = $(this).scrollTop();
      if (sc > 0 && sc < 300) {
        $(".MainNav").css({
          opacity: "0",
          visibility: "hidden",
          top: "-50px",
          "box-shadow": "0 10px 10px -10px #00000059",
        });
        $(".RightSocial ul li a").addClass("changed");
        $(".RightSocial ul li a span").css({
          color: "#000",
        });
      } else if (sc >= 300) {
        $(".MainNav").css({
          "background-color": "#FFF",
          top: "0px",
          opacity: "1",
          visibility: "visible",
          "box-shadow": "0 10px 10px -10px #00000059",
        });
        $(".RightSocial ul li a").addClass("changed");
        $(".RightSocial ul li a span").css({
          color: "#000",
        });
      } else {
        $(".MainNav").css({
          "background-color": "transparent",
          top: "0px",
          opacity: "1",
          visibility: "visible",
          "box-shadow": "unset",
        });
        $(".RightSocial ul li a").removeClass("changed");
        $(".RightSocial ul li a span").css({
          color: "#FFF",
        });
      }
    }
  });

  $(window).resize(function () {
    var sc = $(this).scrollTop();
    if ($(this).width() != width) {
      if ($(this).width() > 991) {
        if (sc > 10) {
          $(".MainNav").css({
            "background-color": "#FFF",
            "box-shadow": "0 10px 10px -10px #00000059",
          });
        } else {
          $(".MainNav").css({
            "background-color": "transparent",
            "box-shadow": "unset",
          });
        }
      } else {
        if (sc > 10) {
          $(".MainNav").css({
            "background-color": "#FFF",
            "box-shadow": "0 10px 10px -10px #00000059",
          });
        } else {
          $(".MainNav").css({
            "background-color": "transparent",
            "box-shadow": "unset",
          });
        }
      }
      width = $(window).width();
    }
  });

  $(".side_nav .menu_button").click(function () {
    $(".side_menu").addClass("active");
    $(".Body_overlay").css("display", "block");
    $("body").css({
      height: "100vh",
      "overflow-y": "hidden",
    });
  });

  $(".side_4 .side_logo .cancel").click(function () {
    $(".side_menu").removeClass("active");
    $(".Body_overlay").css("display", "none");
    $("body").css({
      height: "unset",
      "overflow-y": "unset",
    });
  });

  $(".side_4 .nav_links ul li.Services_menu").click(function () {
    if ($(".submenu#Serv_menu").hasClass("active")) {
      $(".submenu#Serv_menu").removeClass("active");
    } else {
      $(".submenu#Serv_menu").addClass("active");
    }
  });

  $(".side_4 .nav_links ul li.Portfolio_menu").click(function () {
    if ($(".submenu#Port_menu").hasClass("active")) {
      $(".submenu#Port_menu").removeClass("active");
    } else {
      $(".submenu#Port_menu").addClass("active");
    }
  });




});
