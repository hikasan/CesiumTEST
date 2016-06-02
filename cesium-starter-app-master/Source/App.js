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
    
    var MaxValue = 0;
    var MinValue = Number.MAX_VALUE;
    for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if (entity.polygon != null) {
            if (entity.properties.AverageValue != null) {
                if (MaxValue < entity.properties.AverageValue) {
                    MaxValue = entity.properties.AverageValue;
               }
                if (MinValue > entity.properties.AverageValue) {
                    MinValue = entity.properties.AverageValue;
                }
            }
        }
    }
    if ((MaxValue - MinValue) == 0){
        MaxValue = MinValue + 1;
    }

    //var colorHash = {};
    for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        var name = entity.name;
/*
        var color = colorHash[name];
        if (!color) {
            color = Cesium.Color.fromRandom({
                alpha : 1.0
            });
            colorHash[name] = color;
        }
*/
        if (entity.polygon != null) {
	        //entity.polygon.material = color;
	        //entity.polygon.material = Cesium.Color.fromHsl((0.6 - ((entity.properties.AverageValue - MinValue) / (MaxValue - MinValue) * 0.5)), 1.0, 0.5);
	        entity.polygon.material = Cesium.Color.fromHsl((0.6 - ((entity.properties.AverageValue - MinValue) / (MaxValue - MinValue) * 0.5)), 1.0, 0.5);
	        entity.polygon.outline = false;
	        //entity.polygon.extrudedHeight = entity.properties.AverageValue * 10.0;
	        entity.polygon.extrudedHeight = (entity.properties.AverageValue - MinValue) / (MaxValue - MinValue) * 1000.0 + 3000.0;
        }
        if (entity.polyline != null) {
	        entity.polyline.material = Cesium.Color.BLUE;
	        //entity.corridor.extrudedHeight = entity.properties.AverageValue * 1000.0 + 3000.0;
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
