/*
//    var testdata = './Data/test.geojson';

//    var cesiumWidget = new Cesium.Viewer('cesiumContainer', {
//      imageryProvider: new Cesium.OpenStreetMapImageryProvider({
//        url: 'http://cyberjapandata.gsi.go.jp/xyz/std/',
//        credit: new Cesium.Credit('地理院タイル', '', 'http://maps.gsi.go.jp/development/ichiran.html')
//      }),
//      baseLayerPicker: false
//    });

//    var promise = Cesium.GeoJsonDataSource.load(testdata);

//    promise.then(function(datasource){
//      cesiumWidget.dataSources.add(datasource);
//      var scene = cesiumWidget.scene;
//      //scene.globe.depthTestAgainstTerrain = true;
//      cesiumWidget.zoomTo(datasource);
//    }).otherwise(function(error){
//        window.alert(error);
//    });
*/
/*
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
  var cesiumWidget = new Cesium.Viewer('cesiumContainer', {
    imageryProvider: new Cesium.JapanGSIImageryProvider({
        layerLists: ["ort","relief","std"]
    }),
    terrainProvider: new Cesium.JapanGSITerrainProvider({
    }),
    baseLayerPicker: false,
    mapProjection: new Cesium.WebMercatorProjection(Cesium.Ellipsoid.WGS84)
  });

  var testdata = './Data/test.geojson';
  var promise = Cesium.GeoJsonDataSource.load(testdata);
  promise.then(function(datasource){
    var scene = cesiumWidget.scene;
    //scene.globe.depthTestAgainstTerrain = true;
    window.alert("tete");

    cesiumWidget.dataSources.add(datasource);
    cesiumWidget.zoomTo(datasource);
  }).otherwise(function(error){
    window.alert(error);
  });
*/

	var camera_start = Cesium.Cartesian3.fromDegrees(139.45, 35.41, 1000);
	var camera_direction = Cesium.Cartesian3.fromDegrees(-75.0, 70.0, 0);
	var testdata = './Data/hakone_shelter.geojson';

	var promise = Cesium.GeoJsonDataSource.load(testdata);

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

	promise.then(function(datasource){
	  viewer.dataSources.add(datasource);
	  viewer.zoomTo(datasource);

	  var layers = viewer.scene.imageryLayers;
	  var osm = layers.addImageryProvider(
	    new Cesium.OpenStreetMapImageryProvider()
	  );
	  osm.alpha = 0.6;
	});

	var cesiumWidget = new Cesium.Viewer('cesiumContainer', {
	    imageryProvider: new Cesium.JapanGSIImageryProvider({
	        layerLists: ["ort","relief","std"]
	    }),
	    terrainProvider: new Cesium.JapanGSITerrainProvider({
	    }),
	    baseLayerPicker: false,
	    mapProjection: new Cesium.WebMercatorProjection(Cesium.Ellipsoid.WGS84)
	});
//  promise.then(function(datasource){
//  Viewer.dataSources.add(datasource);
//  Viewer.zoomTo(datasource);
    });

	var scene = cesiumWidget.scene;
	//scene.globe.depthTestAgainstTerrain = true;
	//scene.camera.lookAt(camera_start, camera_direction, Cesium.Cartesian3.UNIT_Z);


/*
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
*/
