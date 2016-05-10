	var cesiumWidget = new Cesium.Viewer('cesiumContainer', {
	    imageryProvider: new Cesium.JapanGSIImageryProvider({
	        layerLists: ["ort","relief","std"]
	    }),
	    terrainProvider: new Cesium.JapanGSITerrainProvider({
	    }),
	    baseLayerPicker: false,
	    mapProjection: new Cesium.WebMercatorProjection(Cesium.Ellipsoid.WGS84)
	});
