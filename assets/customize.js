$(document).ready(function() {

    // create sidebar and attach to menu open
    $('.ui.sidebar').sidebar('attach events', '.toc.item');

    // lazy loading
    $('img.ui.image').visibility({
      type: 'image',
    });

});
