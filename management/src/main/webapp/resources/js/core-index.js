$(function() {
    //Login
    $("#linkLogin").click(function(e) {
        event.preventDefault();
        var url = BASE_URL + "login";
        // Redirect to page list
        ajaxRedirect(url);
    })
});

