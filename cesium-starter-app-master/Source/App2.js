//カスタムデータストア(WebGL Globe)を作成
var dataSource = new WebGLGlobeDataSource();
//データストアをロードする
dataSource.loadUrl('./Data/population909500.json');

var cesiumWidget = new Cesium.Viewer('cesiumContainer', {
    imageryProvider: new Cesium.JapanGSIImageryProvider({
        layerLists: ["ort","relief","std"]
    }),
    terrainProvider: new Cesium.JapanGSITerrainProvider({
    }),
    baseLayerPicker: false,
    mapProjection: new Cesium.WebMercatorProjection(Cesium.Ellipsoid.WGS84),
    animation : false,
    timeline : false
});



//時刻アニメーションを無効にする
cesiumWidget.clock.shouldAnimate = false;
 
//カスタムデータストアをビューアーに設定
cesiumWidget.dataSources.add(dataSource);
