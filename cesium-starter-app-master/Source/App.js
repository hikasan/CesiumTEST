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
	        entity.polygon.outline = false;
	        entity.polygon.extrudedHeight = entity.properties.AverageValue * 10000.0;
        }
//        if (entity.corridor != null) {
//	        entity.corridor.outlineColor = Cesium.Color.BLUE;
//	        //entity.corridor.extrudedHeight = entity.properties.AverageValue * 10000.0;
//        }
//        if (entity.cylinder != null) {
//	        entity.cylinder.outlineColor = Cesium.Color.BLACK;
//        }
        if (entity.point != null) {
/*            entities.add({
                position : Cesium.Cartesian3.fromDegrees(entity.position.x, entity.position.y, 1000),
                point : {
                    pixelSize : 10,
                    entity.point.pixelSize = 8;
                    entity.point.color = Cesium.Color.TRANSPARENT;
                    entity.point.outlineColor = Cesium.Color.YELLOW;
                    entity.point.outlineWidth = 3;
                }
            });
*/
            //var m = entity.remove;
            //entity.point.Color = color;
//var wkCartesian3 = entity.position.clone();
            //entity.position = Cesium.Cartesian3.fromDegrees(wkCartesian3.x, wkCartesian3.y, 1000);
            entity.properties.TestName = '999';
            //entity.point.pixelSize = 8;
            //entity.point.color = Cesium.Color.TRANSPARENT;
            //entity.point.outlineColor = Cesium.Color.YELLOW;
            //entity.point.outlineWidth = 3;
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
//    cesiumWidget.entities.add({
//        position : Cesium.Cartesian3.fromDegrees(140.7, 37.9, 100),
//        point : {
//            pixelSize : 10,
//            entity.point.pixelSize = 8;
//            entity.point.color = Cesium.Color.TRANSPARENT;
//            entity.point.outlineColor = Cesium.Color.YELLOW;
//            entity.point.outlineWidth = 3;
//        }
//    });
    //データにズーム
    cesiumWidget.zoomTo(datasource);
    //先頭レコードの位置へカメラをズームする
    //var lnglat = datasource.features[0].geometry.coordinates;
    //cesiumWidget.panTo(lnglat[0], lnglat[1]);
  });
