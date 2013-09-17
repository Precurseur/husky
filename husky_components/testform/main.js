/*
 * This file is part of the Sulu CMS.
 *
 * (c) MASSIVE ART WebServices GmbH
 *
 * This source file is subject to the MIT license that is bundled
 * with this source code in the file LICENSE.
 *
 * Name: testform
 * Options:
 *
 * Provided Events:
 *
 */

define([], function() {

    var defaults = {
    };


    return {

        initialize: function() {
            this.sandbox.logger.log('initialize', this);
            this.sandbox.logger.log(arguments);

            // extend default options
            this.options = this.sandbox.util.extend({}, defaults, this.options);

            this.render();
        },

        render: function() {
            this.html(this.template());
            this.sandbox.validate.create('#form');
        },

        template: function() {
            return [
                '<form id="form">',
                '<label>Name *</label>',
                '<input type="text" class="form-element" data-validate="true" data-required="true" />',
                '</form>'
            ].join('');
        }

    }
});
