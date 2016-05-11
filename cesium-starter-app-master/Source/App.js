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
        if (entity.corridor != null) {
	        entity.corridor.outlineColor = color;
	        //entity.corridor.extrudedHeight = entity.properties.AverageValue * 10000.0;
        }
        if (entity.point != null) {
	        //entity.point.Color = color;
	        var wkposition;
	        var wktime;
	        entity.position.getValue(wktime, wkposition);
	        var wkposition = Cesium.Cartesian3.fromDegrees(wkposition.x, wkposition.y, 1000);
	        entity.position = wkposition;
	        entity.billboard.image = './Images/Iplus.png';
	        entity.point.pixelSize = 10;
            entity.point.color = Cesium.Color.YELLOW;

	        //entity.billboard.scale = 2.0;
        }
    }

    cesiumWidget.dataSources.add(datasource);
    cesiumWidget.zoomTo(datasource);

  });
