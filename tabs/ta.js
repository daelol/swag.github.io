$(document).ready(function() {
    $('#send info').click(function() {
        $('#email').attr('action',
                       'mailto:amorence@aum.edu?subject=' +
                       $('#FName').val() + '&body=' + $('#LName').val() + '&body=' + $('#Phonenum').val() + '&body=' + $('#aumemail').val() + '&body=' + $('#message').val() + '&body=' + $('#message2').val() + '&body=' + $('#refname').val() + '&body=' + $('#refPhonenum').val() + '&body=' + $('#refemail').val() + '&body=' + $('#ref2name').val() + '&body=' + $('#Ref2Phonenum').val() + '&body=' + $('#Ref2email').val())
        $('#email').submit();
    });
});

