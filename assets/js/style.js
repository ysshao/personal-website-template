$(function () {


    $(".section_header").append('<hr>');

    // Select Sophia's name from author list and highlight
    $(".pub_authors").html(function () {
        re = /Yakun Sophia Shao/g;
        match_content = $(this).text().match(re)
        // return $(this).html().replace(match_content, '<strong>' + match_content + '</strong>')
        return $(this).html().replace(match_content, '<div class="pub_sophia">' + match_content + '</div>')
    });

    // Append award icon before .exp_title .font-award
    $("#awards .exp_title").prepend('<i class="fas fa-award"></i>&nbsp&nbsp');

    // Append building icon before .exp_title .font-class
    $("#teach .exp_title").prepend('<i class="fas fa-landmark"></i>&nbsp&nbsp');

    $("#services .exp_title").prepend('<i class="far fa-file-alt"></i>&nbsp&nbsp');

    $("#news .exp_title").prepend('<i class="far fa-newspaper"></i>&nbsp&nbsp');
    
    $("#students .student_name").prepend('<i class="far fa-lightbulb"></i>&nbsp&nbsp');

    // $(".service_content").html(function () {
    //     re = /.* of ([^\n\r]*)/g;
    //     match_content = re.exec($(this).text())[1];
    //     return $(this).html().replace(match_content, '<strong>'+match_content+'</strong>')
    // });

    $(".software_name").html(function () {
        re = /(.*):([^\n\r]*)/g;
        match_content = re.exec($(this).text())[1];
        return $(this).html().replace(match_content, '<strong>' + match_content + '</strong>');
    });

    $(".software_name").prepend('<i class="fas fa-microchip"></i>&nbsp&nbsp')

    // convert software link to icon
    $(".software_link").html(function () {
        return '<a href="' + $(this).text() + '" target="_blank"><i class="fas fa-arrow-circle-down"></i></a>'
    });

    $("a.pub_pdf").prepend('<i class="fas fa-file-pdf"></i>');
    $("a.pub_pdf").attr('target', '_blank')
    $("a.pub_pdf").attr('data-toggle', 'tooltip')
    $("a.pub_pdf").attr('data-placement', 'bottom')
    $("a.pub_pdf").attr('title', 'PDF')

    $("a.pub_ppt").prepend('<i class="fas fa-file-powerpoint"></i>');
    $("a.pub_ppt").attr('target', '_blank')
    $("a.pub_ppt").attr('data-toggle', 'tooltip')
    $("a.pub_ppt").attr('data-placement', 'bottom')
    $("a.pub_ppt").attr('title', 'Slides')

    $("a.pub_poster").prepend('<i class="fas fa-file-image"></i>');
    $("a.pub_poster").attr('target', '_blank')
    $("a.pub_poster").attr('data-toggle', 'tooltip')
    $("a.pub_poster").attr('data-placement', 'bottom')
    $("a.pub_poster").attr('title', 'Poster')

    $("a.pub_bib").prepend('<i class="fas fa-book"></i>');
    $("a.pub_bib").attr('target', '_blank')
    $("a.pub_bib").attr('data-toggle', 'tooltip')
    $("a.pub_bib").attr('data-placement', 'bottom')
    $("a.pub_bib").attr('title', 'Bibtex')

    $("a.pub_buy").prepend('<i class="fas fa-shopping-cart"></i>');
    $("a.pub_buy").attr('target', '_blank')
    $("a.pub_buy").attr('data-toggle', 'tooltip')
    $("a.pub_buy").attr('data-placement', 'bottom')
    $("a.pub_buy").attr('title', 'Purchase')

    $("a.pub_extlink").prepend('<i class="fas fa-external-link-alt"></i>');
    $("a.pub_extlink").attr('target', '_blank')
    $("a.pub_extlink").attr('data-toggle', 'tooltip')
    $("a.pub_extlink").attr('data-placement', 'bottom')
    $("a.pub_extlink").attr('title', 'Link')

    // initialize tooltips
    $('[data-toggle="tooltip"]').tooltip();

    // close navbar after tap anywhere:
    $(function () {
        $(document).click(function (event) {
            $('.navbar-collapse').collapse('hide');
        });
    });
    // The following code causes problem when click twice id links
    // window.addEventListener("hashchange", function () { scrollBy(0, -62) });

    // center about-info at different screen sizes
    var ctr_about_info = function () {
        if ($(window).width() < 768) {
            $('.about_info').removeClass('d-flex');
        } else {
            $('.about_info').addClass('d-flex');
        }
    }
    ctr_about_info();
    $(window).resize(ctr_about_info);


    var exp_date_format = 1;
    var resolution_handler = function () {

        // Change Awards date format according to screen width
        // Named experience date at the begining. Experience then switched to
        // exp_date_long classÍ
        if ($(window).width() < 768) {

            if (exp_date_format == 1) {
                $('.exp_date').prev().html(function () {
                    return $(this).html() + ', ' + $(this).next().text()
                });
                $('.exp_date').hide();
                exp_date_format = 0;
            }
        } else {
            $('.exp_date').prev().html(function () {
                return $(this).html().replace(', ' + $(this).next().text(), '');
            });
            $('.exp_date').show();
            exp_date_format = 1;
        }

        // Allow click to show dropdown when navbar collapsed
        if ($(window).width() < 1024) {
            $('#homeDropdown').attr('data-toggle', 'dropdown');
            $('#pubDropdown').attr('data-toggle', 'dropdown');
        }

    };
    resolution_handler();
    $(window).resize(resolution_handler);

});
