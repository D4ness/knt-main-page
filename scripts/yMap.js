var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init() {

    myMap = new ymaps.Map('map', {
        controls: ['zoomControl'],
        center: [56.838105, 60.609588],
        zoom: 17
    }, {
        // searchControlProvider: 'yandex#search',
        restrictMapArea: [
            [56.83601425509375, 60.597196670714],
            [56.840265909641936, 60.61367616290153]
        ]
    }),

        myMap.behaviors.disable('scrollZoom'),

        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark([56.838105, 60.609588], {
            hintContent: 'просп. Ленина, 36, 1 этаж',
            balloonContent: 'просп. Ленина, 36, 1 этаж'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'images/map/location.svg',
            iconImageSize: [90, 120],
            iconImageOffset: [-30, -65]
        });


    myMap.geoObjects
        .add(myPlacemark);

}
