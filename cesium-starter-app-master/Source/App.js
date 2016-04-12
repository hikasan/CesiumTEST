var viewer = new Cesium.Viewer('cesiumContainer', {
  imageryProvider: new Cesium.OpenStreetMapImageryProvider({
    url: 'http://cyberjapandata.gsi.go.jp/xyz/std/',
      credit: new Cesium.Credit('地理院タイル', '', 'http://maps.gsi.go.jp/development/ichiran.html')
    }),
  baseLayerPicker: false
}); 
viewer.dataSources.add(Cesium.KmlDataSource.load('file://D:/work\cesium-starter-app-master/Source/test.kml'))
/*
var cesiumWidget = new Cesium.Viewer('cesiumContainer', {
    imageryProvider: new Cesium.OpenStreetMapImageryProvider({
      url: 'http://cyberjapandata.gsi.go.jp/xyz/std/',
      credit: new Cesium.Credit('地理院タイル', '', 'http://maps.gsi.go.jp/development/ichiran.html')
    }),
    baseLayerPicker: false
  });
*/

//add point
var point = viewer.entities;
//var point = cesiumWidget.entities;
point.add({
  position : Cesium.Cartesian3.fromDegress(38.938605,141.1048496),
  point : {
    pixelSize : 1000,
    color : Cesium.Color.YELLOW
  }
});

//add a line
var line1 = viewer.entities;
//var line1 = cesiumWidget.entities;
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
//var Polygon = cesiumWidget.entities;
Polygon.add({
  name : 'Polygon',
  polygon : {
    hierarchy : Cesium.Cartesian3.fromDegreesArray([-108.0, 42.0, -100.0, 42.0, -104.0, 40.0]),
    extrudedHeight: 500000.0,
    material : Cesium.Color.GREEN
  }
});
//viewer.camera.flyTo({ destination : Cesium.Cartesian3.fromDegrees(139.76,35.67, 15000.0)});

//viewer.scene.globe.depthTestAgainstTerrain: false;

