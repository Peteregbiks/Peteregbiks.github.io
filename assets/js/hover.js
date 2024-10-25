// Hover on navigation items
$('.nav-item a').hover(
    function(event) {
        // Get the href of the hovered nav item (e.g., #work)
        var hrefValue = $(this).attr('href'); // Get the href attribute
        // Find the associated article using the href value
        var $article = $(hrefValue); // Select the article based on href

        // Find the role element inside the associated article
        var roleText = $article.find('.role').text();

        // Use regex to extract role text before parentheses, if any
        var extractedRole = roleText.match(/Role:\s*([A-Za-z\s]+)(?:\s*\(.*\))?/);
        if (extractedRole) {
            roleText = extractedRole[1].trim(); // Extract only the role part
        }

        // Update the tooltip with the extracted role text and make it visible
        $('#tooltip').text(roleText).css({
            display: 'block',
            top: event.pageY + 10 + 'px',
            left: event.pageX + 10 + 'px'
        });
    }, 
    function() {
        // Hide the tooltip when the mouse leaves
        $('#tooltip').css('display', 'none');
    }
);

$('.nav-item a').mousemove(function(event) {
    // Update the position of the tooltip as the mouse moves
    $('#tooltip').css({
        top: event.pageY + 10 + 'px',
        left: event.pageX + 10 + 'px'
    });
});