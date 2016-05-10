
    //var camera_start = Cesium.Cartesian3.fromDegrees(139.45, 35.41, 1000);
    //var camera_direction = Cesium.Cartesian3.fromDegrees(-75.0, 70.0, 0);
    var testdata = './Data/test.geojson';

    var cesiumWidget = new Cesium.Viewer('cesiumContainer', {
      imageryProvider: new Cesium.OpenStreetMapImageryProvider({
        url: 'http://cyberjapandata.gsi.go.jp/xyz/std/',
        credit: new Cesium.Credit('地理院タイル', '', 'http://maps.gsi.go.jp/development/ichiran.html')
      }),
      baseLayerPicker: false
    });

    var promise = Cesium.GeoJsonDataSource.load(testdata);

    promise.then(function(datasource){
      cesiumWidget.dataSources.add(datasource);
      var scene = cesiumWidget.scene;
      //scene.globe.depthTestAgainstTerrain = true;
      //scene.camera.lookAt(camera_start, camera_direction, Cesium.Cartesian3.UNIT_Z);
      cesiumWidget.zoomTo(datasource);
    }).otherwise(function(error){
        window.alert(error);
    });
