// function initMap() {
//   var uluru = {lat: 13.756810, lng: 100.565552  };
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 18,
//     center: uluru
//   });
//   var marker = new google.maps.Marker({
//     position: uluru,
//     map: map
//   });
// }

function initMap() {

        var styledMapType = new google.maps.StyledMapType(
          [
          {
            "elementType": "geometry",
            "stylers": [
            {
              "color": "#f5f5f5"
            }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
            {
              "visibility": "off"
            }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
            {
              "color": "#616161"
            }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
            {
              "color": "#f5f5f5"
            }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels",
            "stylers": [
            {
              "visibility": "off"
            }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
            {
              "color": "#bdbdbd"
            }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
            {
              "color": "#eeeeee"
            }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [
            {
              "visibility": "off"
            }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
            {
              "color": "#757575"
            }
            ]
          },
          {
            "featureType": "poi.business",
            "stylers": [
            {
              "visibility": "off"
            }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
            {
              "color": "#e5e5e5"
            }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text",
            "stylers": [
            {
              "visibility": "off"
            }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
            {
              "color": "#9e9e9e"
            }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
            {
              "color": "#ffffff"
            }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
            {
              "color": "#757575"
            }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
            {
              "color": "#dadada"
            }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
            {
              "color": "#616161"
            }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels",
            "stylers": [
            {
              "visibility": "off"
            }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
            {
              "color": "#9e9e9e"
            }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
            {
              "color": "#e5e5e5"
            }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
            {
              "color": "#eeeeee"
            }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
            {
              "color": "#c9c9c9"
            }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
            {
              "color": "#9e9e9e"
            }
            ]
          }
          ],
          {name: 'Styled Map'});

        // Create a map object, and include the MapTypeId to add
        // to the map type control.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 13.756810, lng: 100.565552},
          zoom: 18,
          mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
            'styled_map']
          }
        });

        var marker = new google.maps.Marker({
          position: {lat: 13.756810, lng: 100.565552},
          map: map
        });
        //Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');
      }



// Text Overlay <SLIDE>
var flag = 0, texts = [], time = 5000;

      $(".text").each(function() {
        texts[flag++] = $(this).text();
      });

      function slide() {
        if (flag >= texts.length) flag = 0;
        $('#opt').html(texts[flag++]);
        $('#opt').fadeIn('slow').animate({opacity: 1.0}, time).fadeOut('slow', 
         function() {
           return slide()
         }
         );      
      }  

slide();

window.sr = ScrollReveal();
sr.reveal('.reveal');
sr.reveal('#member');
sr.reveal('#member-s');



var $grid = $('.grid').masonry({
  
  initLayout: false,

});

$grid.masonry( 'on', 'layoutComplete', function() {
  console.log('layout is complete');
});

// $grid.masonry();



var $container = $('.grid');
$container.masonry({
  itemSelector: '.grid-item'
});

// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry();
});  

function show (what) {

    $('#g-1').hide();
    $('#g-2').hide();
    $('#g-3').hide();
    $('#g-4').hide();
    $('#g-5').hide();
    $('#g-6').hide();
    $('#g-all').hide();
    

  if (what == 'all') {
    $('#g-all').show();
    $('#filter-a').css({ "font-weight": "bold" });
  }
  else {
    $('#filter-a').css({ "font-weight": "normal" });
  }
  
  for (var i = 1; i <= 6; i++) {
    if (i == what) {
      $('#g-' + i).show();
      $('#filter-' + i).css({ "font-weight": "bold" });
    }
    else {
      $('#filter-' + i).css({ "font-weight": "normal" });
    }
  }

  $grid.masonry();
}

function submitForm() {

  var empty = 0;

  if ($('input')[0].value == '') {
    empty++;
    $('#form-name').addClass('uk-form-danger');
      UIkit.notification("Name Required", {status:'danger'})
  }
  
  if ($('input')[1].value == '') {
    empty++;
    $('#form-phone').addClass('uk-form-danger');
    UIkit.notification("Phone Required", {status:'danger'})
  }

  if ($('input')[2].value == '') {
    empty++;
    $('#form-email').addClass('uk-form-danger');
    UIkit.notification("E-Mail Required", {status:'danger'})
  }

  if ($('textarea')[0].value == '') {
    empty++;
    $('#form-text').addClass('uk-form-danger');
    UIkit.notification("Message Required", {status:'danger'})
  }

  if (empty == 0) {
    UIkit.notification({message: 'Form has been sent. Thank you.'}, {status:'success'});
    console.log("message");
    $('input')[0].value = '';
    $('input')[1].value = '';
    $('input')[2].value = '';
    $('textarea')[0].value = '';

    $('#form-name').removeClass('uk-form-danger');
    $('#form-phone').removeClass('uk-form-danger');
    $('#form-email').removeClass('uk-form-danger');
    $('#form-text').removeClass('uk-form-danger');

  } 
  else {
    console.log(empty + "field required");
  }
}
