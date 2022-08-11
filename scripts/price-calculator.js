let subjects = document.querySelectorAll('.price__subject');
let textTitle = document.querySelector('.price__discount__title');
let textDiscount = document.querySelector('.price__discount__number');
let discount = document.querySelector('.price__discount');
let checkSubjects = document.getElementsByClassName('check__subject');
let checkSubjectNames = document.querySelectorAll('.check__subject__name');
let checkSubjectPrices = document.querySelectorAll('.check__subject__price');
let checkSubjectDiscounts = document.querySelectorAll('.check__subject__discount');

$checkSubjectValidation = (numS, priceS, discountS) => {
    let num = parseInt(numS[0]);
    if (numS[1]) {
        $(checkSubjects[num - 1].children[0].children[0]).html(numS + ' предмет');
        $(checkSubjects[num - 1].children[0].children[1]).html(priceS);
        $(checkSubjects[num - 1].children[1]).html(discountS);
    } else {
        $(checkSubjects[num - 1].children[0].children[0]).html('');
        $(checkSubjects[num - 1].children[0].children[1]).html('');
        $(checkSubjects[num - 1].children[1]).html('');
    }
}
$('.price__subject').click(function () {
    $count = $('.price__subject__checkbox:checkbox:checked').length;
    if ($count == 0) {
        $(textTitle).html("");
        discount.style.display = 'none';
        $('.price__period__radio:radio:checked').trigger('click');
    } else if ($count == 1) {
        $(textTitle).html("2–й предмет");
        $(textDiscount).html("-25%");
        discount.style.display = 'flex';
        $('.price__period__radio:radio:checked').trigger('click');
    } else if ($count == 2) {
        $(textTitle).html("3–й предмет");
        $(textDiscount).html("-45%");
        $(document.querySelector('.price__discount__subtitle')).html("");
        $('.price__period__radio:radio:checked').trigger('click');
    } else if ($count == 3) {
        $(textTitle).html("4-ый предмет");
        $(textDiscount).html("%");
        $(document.querySelector('.price__discount__subtitle')).html("Скидка рассчитывается индивидуально");
        $('.price__subject__checkbox:checkbox:not(:checked)').each(function () {
            $(this).attr("disabled", false); //сделал только здесь, но ведь 2 галки сразу не снимет
        });
        $('.price__period__radio:radio:checked').trigger('click');
    } else if ($count == 4) {
        // $(discount).style.display = 'none';
        // $(text).html("Выбрано максимальное кол-во предметов");
        $('.price__subject__checkbox:checkbox:not(:checked)').each(function () {
            $(this).attr("disabled", true);
        });
        $('.price__period__radio:radio:checked').trigger('click');
    }
    if ($('.price__period__radio:radio:checked').length == 0) {
        if ($count == 0) {
            $('#result-price').html('Выберите предметы и период оплаты');
        } else {
            $('#result-price').html('Выберите период оплаты');
        }
    }
});
$('#period__radio1').on('click', function () {
    //понедельная
    if ($('.price__subject__checkbox:checkbox:checked').length == 1) {
        $checkSubjectValidation('1-ый', '165 ₽/ак.ч.', '0%');
        $checkSubjectValidation('2', '', '');
        $checkSubjectValidation('3', '', '');
        $checkSubjectValidation('4', '', '');
    } else if ($('.price__subject__checkbox:checkbox:checked').length == 2) {
        $checkSubjectValidation('1-ый', '165 ₽/ак.ч.', '0%');
        $checkSubjectValidation('2-ой', '134 ₽/ак.ч.', '19%');
        $checkSubjectValidation('3', '', '');
        $checkSubjectValidation('4', '', '');
    } else if ($('.price__subject__checkbox:checkbox:checked').length == 3) {
        $checkSubjectValidation('1-ый', '165 ₽/ак.ч.', '0%');
        $checkSubjectValidation('2-ой', '134 ₽/ак.ч.', '19%');
        $checkSubjectValidation('3-ий', '104 ₽/ак.ч.', '37%');
        $checkSubjectValidation('4', '', '');
    } else if ($('.price__subject__checkbox:checkbox:checked').length == 4) {
        $checkSubjectValidation('1-ый', '165 ₽/ак.ч.', '0%');
        $checkSubjectValidation('2-ой', '134 ₽/ак.ч.', '19%');
        $checkSubjectValidation('3-ий', '104 ₽/ак.ч.', '37%');
        $checkSubjectValidation('4-ый', 'рассчитывается индивидуально', '');
    } else if ($('.price__subject__checkbox:checkbox:checked').length == 0) {
        $(checkSubjects[0].children[0].children[0]).html('Выберите предметы');
        $(checkSubjects[0].children[0].children[1]).html('');
        $(checkSubjects[0].children[1]).html('');
    }
});

$('#period__radio2').on('click', function () {
    // помесячная
    if ($('.price__subject__checkbox:checkbox:checked').length == 1) {
        $checkSubjectValidation('1-ый', '150 ₽/ак.ч.', '9%');
        $checkSubjectValidation('2', '', '');
        $checkSubjectValidation('3', '', '');
        $checkSubjectValidation('4', '', '');
    } else if ($('.price__subject__checkbox:checkbox:checked').length == 2) {
        $checkSubjectValidation('1-ый', '150 ₽/ак.ч.', '9%');
        $checkSubjectValidation('2-ой', '119 ₽/ак.ч.', '28%');
        $checkSubjectValidation('3', '', '');
        $checkSubjectValidation('4', '', '');
    } else if ($('.price__subject__checkbox:checkbox:checked').length == 3) {
        $checkSubjectValidation('1-ый', '150 ₽/ак.ч.', '9%');
        $checkSubjectValidation('2-ой', '119 ₽/ак.ч.', '28%');
        $checkSubjectValidation('3-ий', '89 ₽/ак.ч.', '46%');
        $checkSubjectValidation('4', '', '');
    } else if ($('.price__subject__checkbox:checkbox:checked').length == 4) {
        $checkSubjectValidation('1-ый', '150 ₽/ак.ч.', '9%');
        $checkSubjectValidation('2-ой', '119 ₽/ак.ч.', '28%');
        $checkSubjectValidation('3-ий', '89 ₽/ак.ч.', '46%');
        $checkSubjectValidation('4-ый', 'Стоимость рассчитывается индивидуально', '');
    } else if ($('.price__subject__checkbox:checkbox:checked').length == 0) {
        $(checkSubjects[0].children[0].children[0]).html('Выберите предметы');
        $(checkSubjects[0].children[0].children[1]).html('');
        $(checkSubjects[0].children[1]).html('');
    }
    // if ($('.price__subject__checkbox:checkbox:checked').length == 0) {
    //     $('.form-row').removeClass("show")
    // } else {
    //     $('.form-row').addClass("show")
    // }
});
$('#period__radio3').on('click', function () {//полугодовая
    if ($('.price__subject__checkbox:checkbox:checked').length == 1) {
        $checkSubjectValidation('1-ый', '142 ₽/ак.ч.', '14%');
        $checkSubjectValidation('2', '', '');
        $checkSubjectValidation('3', '', '');
        $checkSubjectValidation('4', '', '');
    } else if ($('.price__subject__checkbox:checkbox:checked').length == 2) {
        $checkSubjectValidation('1-ый', '142 ₽/ак.ч.', '14%');
        $checkSubjectValidation('2-ой', '110 ₽/ак.ч.', '33%');
        $checkSubjectValidation('3', '', '');
        $checkSubjectValidation('4', '', '');
    } else if ($('.price__subject__checkbox:checkbox:checked').length == 3) {
        $checkSubjectValidation('1-ый', '142 ₽/ак.ч.', '14%');
        $checkSubjectValidation('2-ой', '110 ₽/ак.ч.', '33%');
        $checkSubjectValidation('3-ий', '81 ₽/ак.ч.', '51%');
        $checkSubjectValidation('4', '', '');
    } else if ($('.price__subject__checkbox:checkbox:checked').length == 4) {
        $checkSubjectValidation('1-ый', '142 ₽/ак.ч.', '14%');
        $checkSubjectValidation('2-ой', '110 ₽/ак.ч.', '33%');
        $checkSubjectValidation('3-ий', '81 ₽/ак.ч.', '51%');
        $checkSubjectValidation('4-ый', 'Стоимость рассчитывается индивидуально', '');
    } else if ($('.price__subject__checkbox:checkbox:checked').length == 0) {
        $(checkSubjects[0].children[0].children[0]).html('Выберите предметы');
        $(checkSubjects[0].children[0].children[1]).html('');
        $(checkSubjects[0].children[1]).html('');
    }
});
$('#period__radio4').on('click', function () {//годовая
    if ($('.price__subject__checkbox:checkbox:checked').length == 1) {
        $checkSubjectValidation('1-ый', '135 ₽/ак.ч.', '18%');
        $checkSubjectValidation('2', '', '');
        $checkSubjectValidation('3', '', '');
        $checkSubjectValidation('4', '', '');
    } else if ($('.price__subject__checkbox:checkbox:checked').length == 2) {
        $checkSubjectValidation('1-ый', '135 ₽/ак.ч.', '18%');
        $checkSubjectValidation('2-ой', '105 ₽/ак.ч.', '37%');
        $checkSubjectValidation('3', '', '');
        $checkSubjectValidation('4', '', '');
    } else if ($('.price__subject__checkbox:checkbox:checked').length == 3) {
        $checkSubjectValidation('1-ый', '135 ₽/ак.ч.', '18%');
        $checkSubjectValidation('2-ой', '105 ₽/ак.ч.', '37%');
        $checkSubjectValidation('3-ий', '74 ₽/ак.ч.', '55%');
        $checkSubjectValidation('4', '', '');
    } else if ($('.price__subject__checkbox:checkbox:checked').length == 4) {
        $checkSubjectValidation('1-ый', '135 ₽/ак.ч.', '18%');
        $checkSubjectValidation('2-ой', '105 ₽/ак.ч.', '37%');
        $checkSubjectValidation('3-ий', '74 ₽/ак.ч.', '55%');
        $checkSubjectValidation('4-ый', 'Стоимость рассчитывается индивидуально', '');
    } else if ($('.price__subject__checkbox:checkbox:checked').length == 0) {
        $(checkSubjects[0].children[0].children[0]).html('Выберите предметы');
        $(checkSubjects[0].children[0].children[1]).html('');
        $(checkSubjects[0].children[1]).html('');
    }
});