$(function () {
    var videoBtn = $('.video-btn');

    videoBtn.click(function () {
        var videoContainer = $(this).closest('.video-container');
        var src = videoContainer.data('url');
        var title = videoContainer.data('title');
        var videoFrame = $('<iframe>', {
            src: src,
            frameborder: 0,
            title: title,
            allow : "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ,
            class: 'video-iframe'
        });

        videoContainer.append(videoFrame);
    });
});

$(function() {
    document.addEventListener("DOMContentLoaded", function () {
        var modal = document.getElementById("e119");
      
        modal.addEventListener("shown.bs.modal", function () {
          document.body.style.overflow = "auto";
        });
      
        modal.addEventListener("hidden.bs.modal", function () {
          document.body.style.overflow = "";
        });
      });
});