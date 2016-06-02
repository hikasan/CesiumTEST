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
	
Cesium.Math.setRandomNumberSeed(0);
	
  promise.then(function(datasource){
    
    var entities = datasource.entities.values;
    
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
	        //entity.polygon.material = Cesium.Color.fromHsl((0.6 - (entity.properties.AverageValue * 100.0 * 0.5)), 1.0, 0.5);
	        entity.polygon.outline = false;
	        entity.polygon.extrudedHeight = entity.properties.AverageValue * 10.0;
	        entity.properties.CityName ='xxx';
        }
        if (entity.parent != null) {
            entity.properties.Tester = '990';
        }
        if (entity.billboard != null) {
            entity.properties.Tester = '991';
        }
        if (entity.box != null) {
            entity.properties.Tester = '992';
        }
        if (entity.corridor != null) {
            entity.properties.Tester = '993';
        }
        if (entity.cylinder != null) {
            entity.properties.Tester = '994';
        }
        if (entity.ellipse != null) {
            entity.properties.Tester = '995';
        }
        if (entity.ellipsoid != null) {
            entity.properties.Tester = '996';
        }
        if (entity.label != null) {
            entity.properties.Tester = '997';
        }
        if (entity.model != null) {
            entity.properties.Tester = '998';
        }
        if (entity.path != null) {
            entity.properties.Tester = '999';
        }
        if (entity.point != null) {
            entity.properties.Tester = 'xxx';
        }
        if (entity.polylineVolume != null) {
            entity.properties.Tester = 'xx';
        }
        if (entity.rectangle != null) {
            entity.properties.Tester = 'x';
        }
        if (entity.wall != null) {
            entity.properties.Tester = 'qqq';
        }
        if (entity.polyline != null) {
	        entity.polyline.material = Cesium.Color.BLUE;
	        //entity.corridor.extrudedHeight = entity.properties.AverageValue * 10000.0;
        }
        
    }


    cesiumWidget.dataSources.add(datasource);
//    cesiumWidget.entities.add({
//        position : Cesium.Cartesian3.fromDegrees(140.77237129211426, 37.97918331477581,1000),
//        billboard : {
//            image : './Images/Iplus.png'
//        }
//    });
/*
//    cesiumWidget.entities.add({
      entities.add({
//        position : Cesium.Cartesian3.fromDegrees(140.7, 37.9, 100),
        position : Cesium.Cartesian3.fromDegrees(140.7, 37.9, 100),
        point : {
            pixelSize : 10,
            pixelSize : 8,
            color : Cesium.Color.TRANSPARENT,
            outlineColor : Cesium.Color.YELLOW,
            outlineWidth : 3
        }
    });
*/


    for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if (entity.billboard != null) {
            cesiumWidget.entities.add({
                position : entity.position,
                point : {
                    pixelSize : 10,
                    pixelSize : 8,
                    color : Cesium.Color.TRANSPARENT,
                    outlineColor : Cesium.Color.YELLOW,
                    outlineWidth : 3
                }
            });

        }
    }

    //データにズーム
    cesiumWidget.zoomTo(datasource);
    //先頭レコードの位置へカメラをズームする
    //var lnglat = datasource.features[0].geometry.coordinates;
    //cesiumWidget.panTo(lnglat[0], lnglat[1]);
  });
