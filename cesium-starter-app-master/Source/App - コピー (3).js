var cesiumWidget = new Cesium.Viewer('cesiumContainer', {
    imageryProvider: new Cesium.OpenStreetMapImageryProvider({
      url: 'http://cyberjapandata.gsi.go.jp/xyz/std/',
      credit: new Cesium.Credit('’n—‰@ƒ^ƒCƒ‹', '', 'http://maps.gsi.go.jp/development/ichiran.html')
    }),
    baseLayerPicker: false
  });
  cesiumWidget.dataDources.add(Cesium.KmlDataSource.load('D:/work/cesium-starter-app-master/Source/test.kml'));

