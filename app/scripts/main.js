$(document).ready(function () {

    var ADDITIONAL_CONTENT_HEIGHT = 60
    var frameContentHeight =  $('.header').height()
            + $('.footer').height()
            + ADDITIONAL_CONTENT_HEIGHT

    var listHeight = $(window).height() - frameContentHeight

    var clientListSelector = 'ul.hack'
    $(clientListSelector).height(listHeight)
    stroll.bind( clientListSelector );

})
