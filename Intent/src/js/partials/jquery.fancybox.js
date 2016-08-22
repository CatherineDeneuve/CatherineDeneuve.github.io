(function($){

    $.fn.fancybox = function(options){

      var defaults = {
        overlayColor: 'rgba(0, 0, 0, 0.8)'
      }

      var settings = $.extend(defaults, options);

      var $link = this;
      var $body = $('body');
      var $modal;
      var $overlay;



          function showModal(e) {
            e.preventDefault();

            var href = $(this).attr('href');

            $modal = $('<div class="parent"><div class="fancybox-modal"><img src="' + href + '"></div></div>');
            $overlay = $('<div class="fancybox-overlay"></div>');


            $overlay.css({
              'background-color': settings.overlayColor
            });
            e.preventDefault();

            $modal.one('click', hideModal);

            $body.append($overlay);
            $body.append($modal);
        }

        function hideModal() {
            $modal.remove();
            $overlay.remove();
        }

        

      $link.on('click', showModal);
      // $link.on('click', animate);

      return this;
    };

})(jQuery);
