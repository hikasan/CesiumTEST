﻿/*
var cesiumWidget = new Cesium.Viewer('cesiumContainer', {
    imageryProvider: new Cesium.OpenStreetMapImageryProvider({
      url: 'http://cyberjapandata.gsi.go.jp/xyz/std/',
      credit: new Cesium.Credit('地理院タイル', '', 'http://maps.gsi.go.jp/development/ichiran.html')
    }),
    baseLayerPicker: false
  });

var skyCheckbox = document.getElementById('skyCheckbox');

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
	        entity.billboard.image = './Images/Iplus.png';
	        entity.point.pixelSize = 10;
            entity.point.color = Cesium.Color.YELLOW;

	        //entity.billboard.scale = 2.0;
        }
    }
    //cesiumWidget.zoomTo(datasource);
    
}).otherwise(function(error){
    window.alert(error);
});
*/
/*
var skyAtmosphere = cesiumWidget.scene.skyAtmosphere;
var skyCheckbox = document.getElementById('skyCheckbox');

skyCheckbox.addEventListener('change', function() {
  cesiumWidget.scene.skyAtmosphere = skyCheckbox.checked ? skyAtmosphere : undefined;
}, false);
*/
var displaysorceselecter = undefined;

if (displaysorceselecter != null){
  displaysorceselecter = 1;
else
  displaysorceselecter = 2;
}

var Button1 = document.getElementById('Button1');
Button1.addEventListener('click', func, false);



