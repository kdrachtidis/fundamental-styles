function clickTab1() {
    $('.link-1').attr('aria-selected', true);
    $('.link-2').attr('aria-selected', false);
    $('.link-3').attr('aria-selected', false);

    $('#tab1').attr('aria-expanded', true);
    $('#tab2').attr('aria-expanded', false);
    $('#tab3').attr('aria-expanded', false);
}

function clickTab2() {
    $('.link-1').attr('aria-selected', false);
    $('.link-2').attr('aria-selected', true);
    $('.link-3').attr('aria-selected', false);

    $('#tab1').attr('aria-expanded', false);
    $('#tab2').attr('aria-expanded', true);
    $('#tab3').attr('aria-expanded', false);
}

function clickTab3() {
    $('.link-1').attr('aria-selected', false);
    $('.link-2').attr('aria-selected', false);
    $('.link-3').attr('aria-selected', true);

    $('#tab1').attr('aria-expanded', false);
    $('#tab2').attr('aria-expanded', false);
    $('#tab3').attr('aria-expanded', true);
}