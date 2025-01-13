/**
    * headerFixed
    * reaction
    * footer
    * changeValue
    * action_click
    * showform
    * video
    * tabs
    * filterTab
    * datePicker
    * showPass
    * deleteImg
    * parallaxImage
    * loademore
    * showHideDashboard
    * goTop
    * animationtext
    * preloader 
**/

(function ($) {
    ("use strict");

    /* headerFixed
  -------------------------------------------------------------------------------------*/
    var headerFixed = function () {
        if ($("header").hasClass("header-fixed")) {
            var nav = $("#header-main");
            if (nav.length) {
                var offsetTop = nav.offset().top,
                    headerHeight = nav.height();

                $(window).on("load scroll", function () {
                    if ($(window).scrollTop() > offsetTop + headerHeight) {
                        nav.addClass("is-fixed");
                    } else {
                        nav.removeClass("is-fixed");
                    }

                    if ($(window).scrollTop() > 300) {
                        nav.addClass("is-small");
                    } else {
                        nav.removeClass("is-small");
                    }
                });
            }
        }
    };

    /* reaction
  -------------------------------------------------------------------------------------*/
    var reaction = function () {
        if ($(".action-button-list").length > 0) {
            $(".action-button").click(function () {
                $(this)
                    .closest(".action-button-list")
                    .find(".active")
                    .removeClass("active");
                $(this).toggleClass("active");
            });
        }
    };

     /* footer
  -------------------------------------------------------------------------------------*/
    var footer = function () {
        function checkScreenSize() {
            if (window.matchMedia("(max-width: 767px)").matches) {
                $(".tf-collapse-content").css("display", "none");
            } else {
                $(".footer-menu-list").siblings().removeClass("open");
                $(".tf-collapse-content").css("display", "unset");
            }
        }
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        var args = { duration: 250 };
        $(".title-mobile").on("click", function () {
            $(this).parent(".footer-col-block").toggleClass("open");
            if (!$(this).parent(".footer-col-block").is(".open")) {
                $(this).next().slideUp(args);
            } else {
                $(this).next().slideDown(args);
            }
        });
    };

    /* changeValue
  -------------------------------------------------------------------------------------*/
    var changeValue = function () {
        if ($(".tf-dropdown-sort").length > 0) {
            $(".select-item").click(function (event) {
                $(this)
                    .closest(".tf-dropdown-sort")
                    .find(".text-sort-value")
                    .text($(this).find(".text-value-item").text());
                $(this)
                    .closest(".dropdown-menu")
                    .find(".select-item.active")
                    .removeClass("active");
                $(this).addClass("active");
            });
        }
    };

    /* action_click
  -------------------------------------------------------------------------------------*/
    var action_click = function () {
        if ($(".tf-action-btns").length > 0) {
            $(".tf-action-btns").on("click", function () {
                $(this).toggleClass("active");
            });
        }
    };

    /* showform
  -------------------------------------------------------------------------------------*/
    var showform = function () {
        if ($(".show-form").length > 0) {
            $(".show-form").on("click", function (e) {
                e.preventDefault();
                $(this).toggleClass("click");
                $(".wd-search-form").toggleClass("show");
            });
        }
    };

    /* video
  -------------------------------------------------------------------------------------*/
    var video = function () {
        if ($("div").hasClass("widget-video")) {
            $(".popup-youtube").magnificPopup({
                type: "iframe",
            });
        }
    };

    /* tabs
  -------------------------------------------------------------------------------------*/
    var tabs = function () {
        $(".widget-tabs").each(function () {
            $(this).find(".widget-content-tab").children().hide();
            $(this).find(".widget-content-tab").children(".active").show();
            $(this)
                .find(".widget-menu-tab")
                .children(".item-title")
                .on("click", function () {
                    var liActive = $(this).index();
                    var contentActive = $(this)
                        .siblings()
                        .removeClass("active")
                        .parents(".widget-tabs")
                        .find(".widget-content-tab")
                        .children()
                        .eq(liActive);
                    contentActive.addClass("active").fadeIn("slow");
                    contentActive.siblings().removeClass("active");
                    $(this)
                        .addClass("active")
                        .parents(".widget-tabs")
                        .find(".widget-content-tab")
                        .children()
                        .eq(liActive)
                        .siblings()
                        .hide();
                });
        });
    };

    /* filterTab
  -------------------------------------------------------------------------------------*/
    var filterTab = function () {
        if ($(".tf-btns-filter").length > 0) {
            var $btnFilter = $(".tf-btns-filter").click(function () {
                if (this.id == "all") {
                    $("#parent > div").show();
                } else {
                    var $el = $("." + this.id).show();
                    $("#parent > div").not($el).hide();
                }
                $btnFilter.removeClass("is--active");
                $(this).addClass("is--active");
            });
        }
    };

    /* datePicker
  -------------------------------------------------------------------------------------*/
    var datePicker = function () {
        if ($("#datepicker1").length > 0) {
            $("#datepicker1").datepicker({
                firstDay: 1,
                dateFormat: "dd/mm/yy",
            });
        }
        if ($("#datepicker2").length > 0) {
            $("#datepicker2").datepicker({
                firstDay: 1,
                dateFormat: "dd/mm/yy",
            });
        }
        if ($("#datepicker3").length > 0) {
            $("#datepicker3").datepicker({
                firstDay: 1,
                dateFormat: "dd/mm/yy",
            });
        }
        if ($("#datepicker4").length > 0) {
            $("#datepicker4").datepicker({
                firstDay: 1,
                dateFormat: "dd/mm/yy",
            });
        }
    };

    /* Show Pass
  -------------------------------------------------------------------------------------*/
    var showPass = function () {
        if ($(".show-pass").length > 0) {
            $(".show-pass").on("click", function () {
                $(this).toggleClass("active");
                if ($(".password-field").attr("type") == "password") {
                    $(".password-field").attr("type", "text");
                } else if ($(".password-field").attr("type") == "text") {
                    $(".password-field").attr("type", "password");
                }
            });
        }
        if ($(".show-pass2").length > 0) {
            $(".show-pass2").on("click", function () {
                $(this).toggleClass("active");
                if ($(".password-field2").attr("type") == "password") {
                    $(".password-field2").attr("type", "text");
                } else if ($(".password-field2").attr("type") == "text") {
                    $(".password-field2").attr("type", "password");
                }
            });
        }
        if ($(".show-pass3").length > 0) {
            $(".show-pass3").on("click", function () {
                $(this).toggleClass("active");
                if ($(".password-field3").attr("type") == "password") {
                    $(".password-field3").attr("type", "text");
                } else if ($(".password-field3").attr("type") == "text") {
                    $(".password-field3").attr("type", "password");
                }
            });
        }
    };

    /* Delete image 
  -------------------------------------------------------------------------------------*/
    var deleteImg = function (e) {
        if ($(".remove-file").length > 0) {
            $(".remove-file").on("click", function (e) {
                e.preventDefault();
                var $this = $(this);
                $this.closest(".file-delete").remove();
            });
        }
    };

    /* parallaxImage 
  -------------------------------------------------------------------------------------*/
    var parallaxImage = function () {
        if ($(".parallax-img").length > 0) {
            $(".parallax-img").each(function () {
                new SimpleParallax(this, {
                    delay: 0.6,
                    orientation: "up",
                    scale: 1.3,
                    transition: "cubic-bezier(0,0,0,1)",
                    customContainer: "",
                    customWrapper: "",
                });
            });
        }
    };

    // loademore
    var loademore = function () {
        $(".fl-item").slice(0, 3).show();
        $(".fl-item-1").slice(0, 3).show();
        $(".fl-item-2").slice(0, 3).show();
        $(".fl-item-3").slice(0, 3).show();
        $(".fl-item-4").slice(0, 3).show();
        $(".fl-item-5").slice(0, 3).show();
        $(".fl-item-6").slice(0, 12).show();
        $(".fl-item-7").slice(0, 12).show().css("display", "flex");

        if ($(".loadmore-item").length > 0) {
            $(".btn-loadmore").on("click", function () {
                setTimeout(() => {
                    $(".fl-item:hidden").slice(0, 3).show();
                    if ($(".fl-item:hidden").length == 0) {
                        $(".view-more-button").hide();
                    }
                }, 600);
            });
        }

        if ($(".loadmore-item-1").length > 0) {
            $(".btn-loadmore-1").on("click", function () {
                setTimeout(() => {
                    $(".fl-item-1:hidden").slice(0, 3).show();
                    if ($(".fl-item-1:hidden").length == 0) {
                        $(".view-more-button-1").hide();
                    }
                }, 600);
            });
        }

        if ($(".loadmore-item-2").length > 0) {
            $(".btn-loadmore-2").on("click", function () {
                setTimeout(() => {
                    $(".fl-item-2:hidden").slice(0, 3).show();
                    if ($(".fl-item-2:hidden").length == 0) {
                        $(".view-more-button-2").hide();
                    }
                }, 600);
            });
        }

        if ($(".loadmore-item-3").length > 0) {
            $(".btn-loadmore-3").on("click", function () {
                setTimeout(() => {
                    $(".fl-item-3:hidden").slice(0, 3).show();
                    if ($(".fl-item-3:hidden").length == 0) {
                        $(".view-more-button-3").hide();
                    }
                }, 600);
            });
        }

        if ($(".loadmore-item-4").length > 0) {
            $(".btn-loadmore-4").on("click", function () {
                setTimeout(() => {
                    $(".fl-item-4:hidden").slice(0, 3).show();
                    if ($(".fl-item-4:hidden").length == 0) {
                        $(".view-more-button-4").hide();
                    }
                }, 600);
            });
        }

        if ($(".loadmore-item-5").length > 0) {
            $(".btn-loadmore-5").on("click", function () {
                setTimeout(() => {
                    $(".fl-item-5:hidden").slice(0, 3).show();
                    if ($(".fl-item-5:hidden").length == 0) {
                        $(".view-more-button-5").hide();
                    }
                }, 600);
            });
        }

        if ($(".loadmore-item-6").length > 0) {
            $(".btn-loadmore-6").on("click", function () {
                setTimeout(() => {
                    $(".fl-item-6:hidden").slice(0, 3).show();
                    if ($(".fl-item-6:hidden").length == 0) {
                        $(".view-more-button-6").hide();
                    }
                }, 600);
            });
        }

        if ($(".loadmore-item-7").length > 0) {
            $(".btn-loadmore-7").on("click", function () {
                setTimeout(() => {
                    $(".fl-item-7:hidden")
                        .slice(0, 2)
                        .show()
                        .css("display", "flex");
                    if ($(".fl-item-7:hidden").length == 0) {
                        $(".view-more-button-7").hide();
                    }
                }, 600);
            });
        }
    };

    /* Handle dashboard
  -------------------------------------------------------------------------------------*/
    var showHideDashboard = function () {
        if ($(".button-show-hide").length > 0) {
            $(".button-show-hide").on("click", function () {
                $(".page-layout").toggleClass("full-width");
            });
            $(".mobile-nav-toggler,.overlay-dashboard").on(
                "click",
                function () {
                    $(".page-layout").removeClass("full-width");
                }
            );
        }
    };

    if ($(".wow").length > 0) {
        new WOW({
            offset: 0,
            live: true,
        }).init();
    }

    /* goTop
  -------------------------------------------------------------------------------------*/
    var goTop = function () {
        if ($("div").hasClass("progress-wrap")) {
            var progressPath = document.querySelector(".progress-wrap path");
            var pathLength = progressPath.getTotalLength();
            progressPath.style.transition =
                progressPath.style.WebkitTransition = "none";
            progressPath.style.strokeDasharray = pathLength + " " + pathLength;
            progressPath.style.strokeDashoffset = pathLength;
            progressPath.getBoundingClientRect();
            progressPath.style.transition =
                progressPath.style.WebkitTransition =
                    "stroke-dashoffset 10ms linear";
            var updateprogress = function () {
                var scroll = $(window).scrollTop();
                var height = $(document).height() - $(window).height();
                var progress = pathLength - (scroll * pathLength) / height;
                progressPath.style.strokeDashoffset = progress;
            };
            updateprogress();
            $(window).scroll(updateprogress);
            var offset = 200;
            var duration = 0;
            jQuery(window).on("scroll", function () {
                if (jQuery(this).scrollTop() > offset) {
                    jQuery(".progress-wrap").addClass("active-progress");
                } else {
                    jQuery(".progress-wrap").removeClass("active-progress");
                }
            });
            jQuery(".progress-wrap").on("click", function (event) {
                event.preventDefault();
                jQuery("html, body").animate({ scrollTop: 0 }, duration);
                return false;
            });
        }
    };

    /* animationtext
  -------------------------------------------------------------------------------------*/
    var animationtext = function () {
        if ($(".text-anime-wave").length > 0) {
            let animatedTextElements =
                document.querySelectorAll(".text-anime-wave");
            animatedTextElements.forEach((element) => {
                if (element.animation) {
                    element.animation.progress(1).kill();
                    element.split.revert();
                }
                element.split = new SplitText(element, {
                    type: "lines,words,chars",
                    linesClass: "split-line",
                });
                gsap.set(element, { perspective: 400 });

                gsap.set(element.split.chars, {
                    opacity: 0,
                    y: "30px",
                });
                element.animation = gsap.to(element.split.chars, {
                    scrollTrigger: { trigger: element, start: "top 90%" },
                    opacity: 1,
                    y: "0",
                    duration: 0.6,
                    ease: "back",
                    transformOrigin: "0% 50% -50",
                    stagger: {
                        amount: 1,
                        from: "start",
                        ease: "sine.inOut",
                    },
                });
            });
        }
    };

    var ajaxSubscribe = {
        obj: {
          subscribeEmail: $("#subscribe-email"),
          subscribeButton: $("#subscribe-button"),
          subscribeMsg: $("#subscribe-msg"),
          subscribeContent: $("#subscribe-content"),
          dataMailchimp: $("#subscribe-form").attr("data-mailchimp"),
          success_message:
            '<div class="notification_ok">Thank you for joining our mailing list! Please check your email for a confirmation link.</div>',
          failure_message:
            '<div class="notification_error">Error! <strong>There was a problem processing your submission.</strong></div>',
          noticeError: '<div class="notification_error">{msg}</div>',
          noticeInfo: '<div class="notification_error">{msg}</div>',
          basicAction: "mail/subscribe.php",
          mailChimpAction: "mail/subscribe-mailchimp.php",
        },
    
        eventLoad: function () {
          var objUse = ajaxSubscribe.obj;
    
          $(objUse.subscribeButton).on("click", function () {
            if (window.ajaxCalling) return;
            var isMailchimp = objUse.dataMailchimp === "true";
    
            if (isMailchimp) {
              ajaxSubscribe.ajaxCall(objUse.mailChimpAction);
            } else {
              ajaxSubscribe.ajaxCall(objUse.basicAction);
            }
          });
        },
    
        ajaxCall: function (action) {
          window.ajaxCalling = true;
          var objUse = ajaxSubscribe.obj;
          var messageDiv = objUse.subscribeMsg.html("").hide();
          $.ajax({
            url: action,
            type: "POST",
            dataType: "json",
            data: {
              subscribeEmail: objUse.subscribeEmail.val(),
            },
            success: function (responseData, textStatus, jqXHR) {
              if (responseData.status) {
                objUse.subscribeContent.fadeOut(500, function () {
                  messageDiv.html(objUse.success_message).fadeIn(500);
                });
              } else {
                switch (responseData.msg) {
                  case "email-required":
                    messageDiv.html(
                      objUse.noticeError.replace(
                        "{msg}",
                        "Error! <strong>Email is required.</strong>"
                      )
                    );
                    break;
                  case "email-err":
                    messageDiv.html(
                      objUse.noticeError.replace(
                        "{msg}",
                        "Error! <strong>Email invalid.</strong>"
                      )
                    );
                    break;
                  case "duplicate":
                    messageDiv.html(
                      objUse.noticeError.replace(
                        "{msg}",
                        "Error! <strong>Email is duplicate.</strong>"
                      )
                    );
                    break;
                  case "filewrite":
                    messageDiv.html(
                      objUse.noticeInfo.replace(
                        "{msg}",
                        "Error! <strong>Mail list file is open.</strong>"
                      )
                    );
                    break;
                  case "undefined":
                    messageDiv.html(
                      objUse.noticeInfo.replace(
                        "{msg}",
                        "Error! <strong>undefined error.</strong>"
                      )
                    );
                    break;
                  case "api-error":
                    objUse.subscribeContent.fadeOut(500, function () {
                      messageDiv.html(objUse.failure_message);
                    });
                }
                messageDiv.fadeIn(500);
              }
            },
            error: function (jqXHR, textStatus, errorThrown) {
              alert("Connection error");
            },
            complete: function (data) {
              window.ajaxCalling = false;
            },
          });
        },
      };

    /* preloader
  -------------------------------------------------------------------------------------*/
    var preloader = function () {
        $("#loading").fadeOut("slow", function () {
            $(this).remove();
        });
    };

    // Dom Ready
    $(function () {
        headerFixed();
        reaction();
        footer();
        changeValue();
        action_click();
        showform();
        video();
        tabs();
        filterTab();
        datePicker();
        showPass();
        deleteImg();
        parallaxImage();
        loademore();
        showHideDashboard();
        goTop();
        animationtext();
        ajaxSubscribe.eventLoad();
        preloader();
    });
})(jQuery);
