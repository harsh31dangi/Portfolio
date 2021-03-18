$(window).on("load", function(){
    "use strict";
        var windowLoaded = false;
        $(window).on("load", function(){
            windowLoaded = true;
        });


        /*=================== Sticky Header ===================*/
        function StickyHeader(){
            var header_stick;
            if ($("header").hasClass('stick')) {
                var header_stick = $("header").offset().top;
            }
            if ($("header").hasClass('stick')) {
                $(window).on("scroll",function() {
                    var scroll = $(window).scrollTop();
                    var stickyheader = $("header.stick");
                    if (scroll > header_stick) {
                        stickyheader.addClass("sticky");
                        var header_height = stickyheader.innerHeight();
                        $(".menu-height").css({
                            "height": header_height
                        });
                    } else {
                        stickyheader.removeClass("sticky");
                        $(".menu-height").css({
                            "height": 0
                        });
                    }
                });
            }

        }
        StickyHeader();


        /* =========== Revive Search ========== */
        var revive_search = $(".revive-search");
        $(".search-btn").on("click",function(){
            revive_search.fadeIn();
            return false;
        });
        $(".close-search").on("click",function(){
            revive_search.fadeOut();
            return false;
        });


        /*================== Revive Sidemenu  =====================*/
        var sidemenu = $(".sidemenu");
        $(".menu-btn").on("click",function(){
            sidemenu.addClass("slidein");
            $("body").addClass("stop");
            return false;
        });
        $("html, .close-menu").on("click",function(){
            sidemenu.removeClass("slidein");
            $("body").removeClass("stop");
        });
        $(".close-menu").on("click",function(){return false})
        sidemenu.on("click",function(e){
            e.stopPropagation();
        });


        /*================== Revive Sidemenu Dropdown =====================*/
        $(".sidemenu ul ul").parent().addClass("menu-item-has-children");
        $(".sidemenu ul li.menu-item-has-children > a").on("click", function() {
            $(this).parent().toggleClass("active").siblings().removeClass("active");
            $(this).next("ul").slideToggle();
            $(this).parent().siblings().find("ul").slideUp();
            return false;
        });



        /* ============ Bg Carousel ================*/
        $('.bg-carousel').owlCarousel({
            autoplay:true,
            loop:true,
            smartSpeed:1000,
            dots:false,
            nav:false,
            margin:0,
            mouseDrag:true,
            autoHeight:true,
            URLhashListener:true,
            items:1,
            singleItem:true,
            animateIn:"fadeIn",
            animateOut:"fadeOut"
        });

        /* ============ Reviews Carousel ================*/
        $('.reviews-carousel').owlCarousel({
            autoplay:true,
            loop:true,
            smartSpeed:1000,
            dots:true,
            nav:false,
            margin:0,
            mouseDrag:true,
            autoHeight:true,
            items:1,
            singleItem:true,
            animateIn:"fadeIn",
            animateOut:"fadeOut"
        });




        /* ============ Featured Area Background Image For Responsive ================*/
        if ($(window).width() <= 980){
            /* === Check Opacity Class ===*/

            var featured_text = $(".featured-text");
            if($(".featured-area > img").hasClass('opacity')){
                featured_text.addClass('opacity');    
            }

            /* === Copy The Image Path and Set To Background ===*/
            var img_path = $(".featured-area > img").attr('src');
            featured_text.css({
                "background-image":'url(' + img_path + ')'
            });
        }



        $('.sidemenu > ul,.sidepanel-inner').enscroll({
            showOnHover: true,
            scrollIncrement:30,
            easingDuration:100,
            addPaddingToPane:false,
            verticalTrackClass: 'track4',
            verticalHandleClass: 'handle4'
        });



    /* =============== Ajax Contact Form ===================== */
    $('#contactform').submit(function(){
        var action = $(this).attr('action');
        $("#message").slideUp(750,function() {
        $('#message').hide();
            $('#submit')
            .after('<img src="adminResources/image/ajax-loader.gif" class="loader" />')
            .attr('disabled','disabled');
        $.post(action, {
            name: $('#name').val(),
            email: $('#email').val(),
            subject: $('#subject').val(),
            comments: $('#comments').val(),
            verify: $('#verify').val()
        },
            function(data){
                document.getElementById('message').innerHTML = data;
                $('#message').slideDown('slow');
                $('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
                $('#submit').removeAttr('disabled');
                if(data.match('success') != null) $('#contactform').slideUp('slow');

            }
        );
        });
        return false;
    });



        /* ============ Sidepanel Functions ================*/
        $(".button-set").each(function(){
            $('button').on("click",function(){
                $(this).siblings().removeClass('active');
                $(this).addClass("active");
            });
        });

        /* Sticky Header */
        $(".stick-header").on("click",function(){
            $("header").addClass("stick");
            StickyHeader();
        });
        $(".no-stick-header").on("click",function(){
            $("header").removeClass("stick sticky");
        });

        /* Transparent Header */
        $(".transparent-header").on("click",function(){
            $("header").addClass("transparent");
        });
        $(".no-transparent-header").on("click",function(){
            $("header").removeClass("transparent");
        });

        /* Container Header */
        $(".contain-header").on("click",function(){
            $("header > div:first").addClass("container");
        });
        $(".no-contain-header").on("click",function(){
            $("header > div:first").removeClass("container");
        });

        /* Menu Hide/Show */
        $(".show-menu").on("click",function(){
            $("nav > ul li").fadeIn();
        });
        $(".hide-menu").on("click",function(){
            $("nav > ul li").fadeOut();
        });        

        /* Header Icons */
        $(".show-icons").on("click",function(){
            $(".other-links a").fadeIn();
        });
        $(".hide-icons").on("click",function(){
            $(".other-links a").fadeOut();
        });        

        /* Header Style */
        $(".header2-on").on("click",function(){
            $("header").addClass('style2');
        });
        $(".header2-off").on("click",function(){
            $("header").removeClass('style2');
        });

        $(".header-dark").on("click",function(){
            $("header").removeClass('lighter');
        });
        $(".header-light").on("click",function(){
            $("header").addClass('lighter');
        });

        /* Featured Style */
        $(".featured-style1").on("click",function(){
            $(".featured-text").attr('class','featured-text');
            $(".featured-text .container .row > div").attr('class', 'col-md-9');
        });
        $(".featured-style2").on("click",function(){
            $(".featured-text").attr('class','featured-text style2');
            $(".featured-text .container .row > div").attr('class', 'col-md-10 col-md-offset-1');
        });
        $(".featured-style3").on("click",function(){
            $(".featured-text").attr('class','featured-text style3');
            $(".featured-text .container .row > div").attr('class', 'col-md-9');
        });
        $(".featured-style4").on("click",function(){
            $(".featured-text").attr('class','featured-text style4');
            $(".featured-text .container .row > div").attr('class', 'col-md-8 col-md-offset-4');
        });

        /* Featured Layer */
        $(".layer-on").on("click",function(){
            $(".featured-area").addClass('layer');
        });
        $(".layer-off").on("click",function(){
            $(".featured-area").removeClass('layer');
        });
 
        /* Featured Text Color */
        $(".text-dark").on("click",function(){
            $(".featured-text").removeClass('light');
        });
        $(".text-light").on("click",function(){
            $(".featured-text").addClass('light');
        });

        /* Featured Parallax Effect */
        $(".parallax-on").on("click",function(){
            $('.featured-area img').removeClass("stop-parallax");
            $('.bg-carousel').removeClass("stop-parallax");
        });
        $(".parallax-off").on("click",function(){
            $('.featured-area img').addClass("stop-parallax");
            $('.bg-carousel').addClass("stop-parallax");
        });

        /* Featured Image Opacity */
        $(".opacity-light").on("click",function(){
            $('.featured-area img').addClass("opacity");
        });
        $(".opacity-full").on("click",function(){
            $('.featured-area img').removeClass("opacity");
        });


        /* Portfolio Styles */
        $(".portfolio-style1").on("click",function(){
            $(".portfolio-img").each(function(){
                $(".portfolio-img").attr("class", "portfolio-img");
            });
            $('.masonary').isotope( 'reloadItems' ).isotope({ sortBy: 'original-order' });
            $grid.masonry('layout');
        });

        $(".portfolio-style2").on("click",function(){
            $(".portfolio-img").each(function(){
                $(".portfolio-img").attr("class", "portfolio-img style2");
            });
            $('.masonary').isotope( 'reloadItems' ).isotope({ sortBy: 'original-order' });
            $grid.masonry('layout');
        });

        $(".portfolio-style3").on("click",function(){
            $(".portfolio-img").each(function(){
                $(".portfolio-img").attr("class", "portfolio-img style3");
            });
            $('.masonary').isotope( 'reloadItems' ).isotope({ sortBy: 'original-order' });
            $grid.masonry('layout');
        });


        $(".portfolio-style4").on("click",function(){
            $(".portfolio-img").each(function(){
                $(".portfolio-img").attr("class", "portfolio-img style4");
            });
            $('.masonary').isotope( 'reloadItems' ).isotope({ sortBy: 'original-order' });
        });


        $(".portfolio-style5").on("click",function(){
            $(".portfolio-img").each(function(){
                $(".portfolio-img").attr("class", "portfolio-img style5");
            });
            $('.masonary').isotope( 'reloadItems' ).isotope({ sortBy: 'original-order' });
            $grid.masonry('layout');
        });

        /* Portfolio Section Container */
        $(".contain-portfolio").on("click",function(){
            $(".revive-portfolio").closest(".block > div").addClass("container");
            $('.masonary').isotope( 'reloadItems' ).isotope({ sortBy: 'original-order' });;;
        });
        $(".uncontain-portfolio").on("click",function(){
            $(".revive-portfolio").closest(".block > div").removeClass("container");
            $('.masonary').isotope( 'reloadItems' ).isotope({ sortBy: 'original-order' });;;
        });

        /* Portfolio Section Gaps */
        $(".add-portfolio-gap").on("click",function(){
            $(".revive-portfolio").removeClass("no-gap");
            $('.masonary').isotope( 'reloadItems' ).isotope({ sortBy: 'original-order' });;;
        });
        $(".remove-portfolio-gap").on("click",function(){
            $(".revive-portfolio").addClass("no-gap");
            $('.masonary').isotope( 'reloadItems' ).isotope({ sortBy: 'original-order' });;;
        });
        


        $('#cp4').colorpicker().on('changeColor', function(ev){
         jQuery.ajax({
          url: "http://templates.stillidea.net/revive/css/color.css",
          dataType: "text",
          success: function(cssText) {
           jQuery("<style></style>").appendTo("head").html(cssText.replace(/#78b8b4/g,ev.color.toHex()));
          }
         });
        });


        $(".panel-btn").on("click",function(){
            $(this).parent().parent().toggleClass("active");
            return false;
        });

        $('html').on('click',function(){
            $('.sidepanel').removeClass("active");
        });

        $('.panel-btn, .sidepanel, .colorpicker').on("click",function(e){
            e.stopPropagation();
        });

});/*=== Window.Load Ends Here ===*/