var cesiumWidget = new Cesium.Viewer('cesiumContainer');

var Button1 = document.getElementById('Button1');
Button1.addEventListener('click', function(){
    var camera_start = Cesium.Cartesian3.fromDegrees(139.45, 35.41, 1000);
    var camera_direction = Cesium.Cartesian3.fromDegrees(-75.0, 70.0, 0);
    var testdata = './Data/test.geojson';

    cesiumWidget = new Cesium.Viewer('cesiumContainer', {
      imageryProvider: new Cesium.OpenStreetMapImageryProvider({
        url: 'http://cyberjapandata.gsi.go.jp/xyz/std/',
        credit: new Cesium.Credit('地理院タイル', '', 'http://maps.gsi.go.jp/development/ichiran.html')
      }),
      baseLayerPicker: false
    });

    var promise = Cesium.GeoJsonDataSource.load(testdata);

	promise.then(function(datasource){
      cesiumWidget.dataSources.add(dataSource);
      var scene = cesiumWidget.scene;
      //scene.globe.depthTestAgainstTerrain = true;
      //scene.camera.lookAt(camera_start, camera_direction, Cesium.Cartesian3.UNIT_Z);
      cesiumWidget.zoomTo(datasource);
    }).otherwise(function(error){
        window.alert(error);
	});

}, false);

var Button2 = document.getElementById('Button2');
Button2.addEventListener('click', function(){
	var camera_start = Cesium.Cartesian3.fromDegrees(139.45, 35.41, 1000);
	var camera_direction = Cesium.Cartesian3.fromDegrees(-75.0, 70.0, 0);
	var testdata = './Data/test.geojson';

	var promise = Cesium.GeoJsonDataSource.load(testdata);

	promise.then(function(datasource){
	  var viewer = new Cesium.Viewer('mapdiv', {
//	    animation : false,
//	    baseLayerPicker: false,
//	    fullscreenButton: false,
//	    geocoder: false,
//	    homeButton: false,
//	    navigationHelpButton: false,
//	    sceneModePicker: false,
//	    scene3DOnly: true,
//	    timeline: false,
        imageryProvider: new Cesium.OpenStreetMapImageryProvider({
          url: 'http://cyberjapandata.gsi.go.jp/xyz/relief/'
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

      cesiumWidget = new Cesium.Viewer('cesiumContainer', {
          imageryProvider: new Cesium.JapanGSIImageryProvider({
              layerLists: ["ort","relief","std"]
          }),
          terrainProvider: new Cesium.JapanGSITerrainProvider({
          }),
          baseLayerPicker: false,
          mapProjection: new Cesium.WebMercatorProjection(Cesium.Ellipsoid.WGS84)
      });
      var scene = cesiumWidget.scene;
      //scene.globe.depthTestAgainstTerrain = true;
      //scene.camera.lookAt(camera_start, camera_direction, Cesium.Cartesian3.UNIT_Z);

	  cesiumWidget.dataSources.add(datasource);
	  cesiumWidget.zoomTo(datasource);
	});
}, false);


