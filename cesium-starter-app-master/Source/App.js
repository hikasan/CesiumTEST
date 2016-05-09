/*
var cesiumWidget = new Cesium.Viewer('cesiumContainer', {
    imageryProvider: new Cesium.OpenStreetMapImageryProvider({
      url: 'http://cyberjapandata.gsi.go.jp/xyz/std/',
      credit: new Cesium.Credit('地理院タイル', '', 'http://maps.gsi.go.jp/development/ichiran.html')
    }),
    baseLayerPicker: false
  });

Cesium.Math.setRandomNumberSeed(0);

var promise = Cesium.GeoJsonDataSource.load('./Data/test.geojson');
promise.then(function(dataSource) {
    cesiumWidget.dataSources.add(dataSource);

    var entities = dataSource.entities.values;
    
    var colorHash = {};
    for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        var name = entity.name;
        var color = colorHash[name];
        if (!color) {
            color = Cesium.Color.fromRandom({
                alpha : 1.0
            });
            colorHash[name] = color;
        }
        if (entity.polygon != null) {
	        entity.polygon.material = color;
	        entity.polygon.outline = false;
	        entity.polygon.extrudedHeight = entity.properties.AverageValue * 10000.0;
        }
        if (entity.corridor != null) {
	        entity.corridor.outlineColor = color;
	        //entity.corridor.extrudedHeight = entity.properties.AverageValue * 10000.0;
        }
        if (entity.point != null) {
	        //entity.point.Color = color;
	        //entity.billboard.image = './Images/Iplus.png';
	        entity.point.pixelSize = 10;
            entity.point.color = Cesium.Color.YELLOW;

	        //entity.billboard.scale = 2.0;
        }
    }
}).otherwise(function(error){
    window.alert(error);
});
*/
var hakone = './Data/test.geojson';

var promise = Cesium.GeoJsonDataSource.load(hakone);

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

