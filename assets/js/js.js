// JavaScript source code
$('#monthly-tab').click(function () {
    $('#monthly').addClass('tab-select');
    $('#annualy').removeClass('tab-select');
})
$('#annualy-tab').click(function () {
    $('#monthly').removeClass('tab-select');
    $('#annualy').addClass('tab-select');
})
$('#left-btn').click(function () {
    $('#left-btn').removeClass('tab-select');
    $('#right-btn').addClass('tab-select');
})
$('#right-btn').click(function () {
    $('#right-btn').removeClass('tab-select');
    $('#left-btn').addClass('tab-select');
})

$("#detail-htcontact").on('hide.bs.collapse', function () {
    $('#sum-htcontact').show();
});
$("#detail-htcontact").on('show.bs.collapse', function () {
    $('#sum-htcontact').hide();
});
$("#detail-app").on('hide.bs.collapse', function () {
    $('#sum-app').show();
});
$("#detail-app").on('show.bs.collapse', function () {
    $('#sum-app').hide();
});
$("#detail-website").on('hide.bs.collapse', function () {
    $('#sum-website').show();
});
$("#detail-website").on('show.bs.collapse', function () {
    $('#sum-website').hide();
});
$("#detail-newupdate").on('hide.bs.collapse', function () {
    $('#sum-newupdate').show();
});
$("#detail-newupdate").on('show.bs.collapse', function () {
    $('#sum-newupdate').hide();
});
$("#detail-htcontact1").on('hide.bs.collapse', function () {
    $('#sum-htcontact1').show();
});
$("#detail-htcontact1").on('show.bs.collapse', function () {
    $('#sum-htcontact1').hide();
});