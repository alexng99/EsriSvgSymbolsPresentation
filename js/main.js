
var $ = window.jQuery;
require(["esri/map", "esri/layers/FeatureLayer"], function (Map, FeatureLayer) {
  var incidentsUrl = "http://sampleserver3.arcgisonline.com/ArcGIS/rest/services/SanFrancisco/311Incidents/MapServer/0";

  var createDefaultMap = function (id) {
    return new Map(id, {
      basemap: "gray",
      showAttribution: false,
      center: [-122.485237, 37.737219],
      zoom: 15
    });
  };

  var pictureSlide = function () {
    var map = createDefaultMap("map-picturemarkersymbol");
    var layer = new FeatureLayer(incidentsUrl, {
      mode: FeatureLayer.MODE_ONDEMAND
    });
    layer.setDefinitionExpression("req_type = 'Tree Maintenance or Damage'");

    map.addLayer(layer);
    
  };

  $(function () {

    $(document).on("impress:stepenter", function () {
      console.log("impress:stepenter", arguments)
    });

    pictureSlide();
  });



  
});