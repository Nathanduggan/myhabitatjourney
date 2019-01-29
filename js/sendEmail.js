function sendMail(contactForm) {
    emailjs.send("gmail", "nathan", {
        "from_name": contactForm.name.value,
        "from_email":contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
    // To block from loading a new page
}

/*-------------------------JQuery*/

$("input").focus(function() {
    $(this).css("background-color", "#BFC9CA");
});

$("textarea").focus(function() {
    $(this).css("background-color", "#BFC9CA");
});