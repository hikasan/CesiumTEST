var viewer = new Cesium.Viewer('cesiumContainer');
viewer.dataSources.add(Cesium.GeoJsonDataSource.load('../../Source/test.geojson', {
  stroke: Cesium.Color.HOTPINK,
  fill: Cesium.Color.PINK,
  strokeWidth: 3,
  markerSymbol: '?'
}));

/*
var geodata = 'http://hikasan.github.io/CesiumTEST/cesium-starter-app-master/Source/test.kml';
var promise = Cesium.KmlDataSource.load(geodata);
*/

/*
var geodata = '/Source/test.geojson';
var promise = Cesium.GeoJsonDataSource.load(geodata);


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
*/