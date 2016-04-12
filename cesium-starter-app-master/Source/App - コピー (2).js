var cesiumWidget = new Cesium.Viewer('cesiumContainer', {
    imageryProvider: new Cesium.OpenStreetMapImageryProvider({
      url: 'http://cyberjapandata.gsi.go.jp/xyz/std/',
      credit: new Cesium.Credit('ínóùâ@É^ÉCÉã', '', 'http://maps.gsi.go.jp/development/ichiran.html')
    }),
    baseLayerPicker: false
  });
  cesiumWidget.dataDources.add(Cesium.KmlDataSource.load('D:\work\cesium-starter-app-master\Source\test.kml'));
  cesiumWidget.scene.camera.setPositionCartographic(Cesium.Cartographic.fromDegrees(140.3531111111, 37.4365555558, 2000.0));

