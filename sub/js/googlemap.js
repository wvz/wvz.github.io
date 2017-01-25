function myMap() {
  var myCenter = new google.maps.LatLng(37.428306, -173.135944);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 2};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker1 = new google.maps.Marker({
  	position:{lat: 34.6197, lng: 112.4540}
  });
  marker1.setMap(map);
  google.maps.event.addListener(marker1,'click',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Luoyang, Henan, China <br> ?-2008 <br> Born when peonies bloomed. <br> My forever home."
    });
  infowindow.open(map,marker1);
  });

  var marker2 = new google.maps.Marker({
  	position:{lat: 22.4198, lng: 114.2074}
  });
  marker2.setMap(map);
  google.maps.event.addListener(marker2,'click',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Shatin, Hong Kong <br>2011-2015, B.B.A. at the Chinese University of Hong Kong<br> Life in the mountains by the sea."
    });
  infowindow.open(map,marker2);
  });

  var marker3 = new google.maps.Marker({
  	position:{lat: 35.9132, lng: -79.0558}
  });
  marker3.setMap(map);
  google.maps.event.addListener(marker3,'click',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Chapel Hill, NC <br>2014, exchange student at UNC-Chapel Hill<br> Kenan-Flager Business School <br> Go Tar Heels!"
    });
  infowindow.open(map,marker3);
  });

  var marker4 = new google.maps.Marker({
  	position:{lat: 38.5382, lng: -121.7617}
  });
  marker4.setMap(map);
  google.maps.event.addListener(marker4,'click',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Davis, CA<br> 2014, summer sessions at UC-Davis<br>Constantly fly back 'cuz my family is there."
    });
  infowindow.open(map,marker4);
  });

  var marker5 = new google.maps.Marker({
  	position:{lat: 40.8075, lng: -73.9626}
  });
  marker5.setMap(map);
  google.maps.event.addListener(marker5,'click',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"New York, NY <br>2015-2016, M.A. at Columbia University <br> Fun projects grew here. <br> Seeking full-time job opportunities."
    });
  infowindow.open(map,marker5);
  });

  var marker6 = new google.maps.Marker({
  	position:{lat: 34.7466, lng: 113.6253}
  });
  marker6.setMap(map);
  google.maps.event.addListener(marker6,'click',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Zhengzhou, Henan, China <br> 2008-2011, High School Diploma <br> Top 0.05% in the NCEE, a.k.a. Gaokao <br>2nd Prize in the National Mathematics Olympiad 2010"
    });
  infowindow.open(map,marker6);
  });
}