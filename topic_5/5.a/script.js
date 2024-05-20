$(document).ready(function() {
    $('#showCourses').click(function() {
        $('#coursesTable').toggle();
        if ($('#coursesTable').is(':visible')) {
            $('#showCourses').text('Hide Courses');
        } else {
            $('#showCourses').text('Show Courses');
        }
    });

    $('#disableButton').change(function() {
        if ($(this).is(':checked')) {
            $('#showCourses').prop('disabled', true);
        } else {
            $('#showCourses').prop('disabled', false);
        }
    });
});
