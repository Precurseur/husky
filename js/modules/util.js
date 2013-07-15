(function($, window, document, undefined) {
    'use strict';

    Husky.util.ajax = function(options) {
        options = $.extend({
            // default settings
        }, options);

        return $.ajax(options);
    };

})(Husky.$, this, this.document);