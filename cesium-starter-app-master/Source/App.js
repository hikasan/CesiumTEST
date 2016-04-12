/*
var viewer = new Cesium.Viewer('cesiumContainer', {
  imageryProvider: new Cesium.OpenStreetMapImageryProvider({
    url: 'http://cyberjapandata.gsi.go.jp/xyz/std/',
      credit: new Cesium.Credit('地理院タイル', '', 'http://maps.gsi.go.jp/development/ichiran.html')
    }),
  baseLayerPicker: false
}); 
viewer.dataSources.add(Cesium.KmlDataSource.load('file://D:/work\cesium-starter-app-master/Source/test.kml'))

//add point
var point = viewer.entities;
point.add({
  position : Cesium.Cartesian3.fromDegress(38.938605,141.1048496),
  point : {
    pixelSize : 1000,
    color : Cesium.Color.YELLOW
  }
});

//add a line
var line1 = viewer.entities;
line1.add({
  name : 'Red line on the surface',
  polyline : {
    positions : Cesium.Cartesian3.fromDegreesArray([-75, 35, -125, 35]),
    width : 500,
    material : Cesium.Color.RED
  }
});
//add polygon
var Polygon = viewer.entities;
Polygon.add({
  name : 'Polygon',
  polygon : {
    hierarchy : Cesium.Cartesian3.fromDegreesArray([-108.0, 42.0, -100.0, 42.0, -104.0, 40.0]),
    extrudedHeight: 500000.0,
    material : Cesium.Color.GREEN
  }
});
*/



var geodata = 'Source/test.geojson';
var promise = Cesium.GeoJsonDataSource.load(geodata);


/*
var kmldata = 'Source/test.kml';
var promise = Cesium.KmlDataSource.load(kmldata);
*/

promise.then(function(datasource){
  var viewer = new Cesium.Viewer('mapdiv', {
    animation : false,
    baseLayerPicker: false,
    fullscreenButton: false,
    geocoder: false,
    homeButton: false,
    navigationHelpButton: false,
    sceneModePicker: false,
    scene3DOnly: true,
    timeline: false,
    imageryProvider: new Cesium.OpenStreetMapImageryProvider({
      url: '//cyberjapandata.gsi.go.jp/xyz/relief/'
      //credit: new Cesium.Credit('地理院タイル', '', 'http://maps.gsi.go.jp/development/ichiran.html')
    }),
    terrainProvider: new Cesium.JapanGSITerrainProvider({
      heightPower: 1.0
    })
  });

  var layers = viewer.scene.imageryLayers;
  var osm = layers.addImageryProvider(
    new Cesium.OpenStreetMapImageryProvider()
  );
  osm.alpha = 0.6;

  viewer.dataSources.add(datasource);
  viewer.zoomTo(datasource);
});

