var page = require('./page')

var checkboxPage = Object.create(page, {
    /**
     * define elements
     */

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        page.open.call(this, '');
    } }
});

module.exports = checkboxPage