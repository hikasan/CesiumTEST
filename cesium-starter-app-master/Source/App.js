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

    for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        var name = entity.name;
        if (entity.polygon != null) {
	        entity.polygon.material = Cesium.Color.fromHsl((0.6 - ((entity.properties.AverageValue - MinValue) / (MaxValue - MinValue) * 0.5)), 1.0, 0.5);
	        entity.polygon.outline = false;
	        //entity.polygon.extrudedHeight = entity.properties.AverageValue * 10.0;
	        entity.polygon.extrudedHeight = (entity.properties.AverageValue - MinValue) / (MaxValue - MinValue) * 100.0;
        }
        if (entity.polyline != null) {
	        entity.polyline.material = Cesium.Color.BLUE;
	        //entity.corridor.extrudedHeight = entity.properties.AverageValue * 1000.0;
        }
        
    }


    cesiumWidget.dataSources.add(datasource);
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
