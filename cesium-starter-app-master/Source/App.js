﻿var cesiumWidget = new Cesium.Viewer('cesiumContainer', {
    imageryProvider: new Cesium.OpenStreetMapImageryProvider({
      url: 'http://cyberjapandata.gsi.go.jp/xyz/std/',
      credit: new Cesium.Credit('地理院タイル', '', 'http://maps.gsi.go.jp/development/ichiran.html')
    }),
    baseLayerPicker: false
  });

Cesium.Math.setRandomNumberSeed(0);

var promise = Cesium.GeoJsonDataSource.load('/Source/test.geojson');
promise.then(function(dataSource) {
    cesiumWidget.dataSources.add(dataSource);
window.alert("TET");

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
        
        entity.polygon.material = color;
        entity.polygon.outline = false;

        entity.polygon.extrudedHeight = entity.properties.AveragevValue * 100000.0;
    }
});

