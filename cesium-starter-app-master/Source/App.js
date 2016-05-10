
var hakone = './Data/hakone_shelter.geojson';

var promise = Cesium.GeoJsonDataSource.load(hakone);

var cesiumWidget = new Cesium.Viewer('mapdiv', {
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
    url: 'http://cyberjapandata.gsi.go.jp/xyz/relief/'
  }),
  terrainProvider: new Cesium.JapanGSITerrainProvider({
    heightPower: 1.0
  })
});

promise.then(function(datasource){
  var layers = cesiumWidget.scene.imageryLayers;
  var osm = layers.addImageryProvider(
    new Cesium.OpenStreetMapImageryProvider()
  );
  osm.alpha = 0.6;

  cesiumWidget.dataSources.add(datasource);
  cesiumWidget.zoomTo(datasource);
});

