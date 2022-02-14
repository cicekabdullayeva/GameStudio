$(document).ready(function () {
    $('.navbar-toggler').on("click", function () {
        $(".mobile-menu").css(
            {
                "left": 0,
                'display': 'block'
            }
        )
        $("body").css("overflow", 'hidden')
    })
    $('.mobile-menu .btn-close , .mobile-menu .nav-link').on("click", function () {
        $(".mobile-menu").css(
            {
                "left": "100%",
                'display': 'none'
            }
        )
        $("body").css("overflow", 'auto')
    })
    $(".modal").on('shown.bs.modal', function () {
        $('.modal-backdrop').css('background', '#fff');
    });

    $(".modal").on('hidden.bs.modal', function () {
        $('.modal-backdrop').css('background', '#000');
    });
    // $(".mobile-menu .nav-link").click(function () {

    // })
    $(".pagination li:first-child span ,.pagination li:first-child a").html("<svg width=\"9\" height=\"12\" viewBox=\"0 0 9 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
        "<path d=\"M8.16016 1.41L3.58016 6L8.16016 10.59L6.75016 12L0.750156 6L6.75016 0L8.16016 1.41Z\"fill=\"#C4CDD5\" />\n" +
        "</svg>\n")

    $(".pagination li:last-child a ,.pagination li:last-child span ").html("<svg width=\"9\" height=\"12\" viewBox=\"0 0 9 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
        " <path d=\"M0.839844 1.41L5.41984 6L0.839844 10.59L2.24984 12L8.24984 6L2.24984 0L0.839844 1.41Z\" fill=\"#C4CDD5\"/>\n" +
        " </svg>\n")

    $(document).on('click', ".career .careerCard .btn-green", (function () {
        let jobId = $(this).attr('id');
        $.get('/job/' + jobId, function (response) {
            let data = response.job;
            console.log(data)
            $('.careerModal .modal-title').html(data.name);
            $('.careerModal .jobContent').html(data.content);
            $(".applyModal form ").attr("action",'/job/'+jobId)
            // $('.jobsModal .jobType').html(data.type);
            // $('.jobsModal .jobLocation').html(data.location);
            // $('.jobsModal .created').html(data.created_at);
            // $('.jobsModal form').attr("action","/"+lang+"/jobs/"+data.id+"")
        });
    }))
    $(".resume input[type='file']").on("change", function (e) {
        let value = e.target.files[0].name;
        $(".resume input[type=text]").val(value)
    })



})