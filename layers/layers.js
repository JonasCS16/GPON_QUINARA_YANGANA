var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_POSTES_CNT_1 = new ol.format.GeoJSON();
var features_POSTES_CNT_1 = format_POSTES_CNT_1.readFeatures(json_POSTES_CNT_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POSTES_CNT_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POSTES_CNT_1.addFeatures(features_POSTES_CNT_1);
var lyr_POSTES_CNT_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POSTES_CNT_1, 
                style: style_POSTES_CNT_1,
                popuplayertitle: "POSTES_CNT",
                interactive: true,
                title: '<img src="styles/legend/POSTES_CNT_1.png" /> POSTES_CNT'
            });
var format_POSTES_EERSSA_2 = new ol.format.GeoJSON();
var features_POSTES_EERSSA_2 = format_POSTES_EERSSA_2.readFeatures(json_POSTES_EERSSA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POSTES_EERSSA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POSTES_EERSSA_2.addFeatures(features_POSTES_EERSSA_2);
var lyr_POSTES_EERSSA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POSTES_EERSSA_2, 
                style: style_POSTES_EERSSA_2,
                popuplayertitle: "POSTES_EERSSA",
                interactive: true,
                title: '<img src="styles/legend/POSTES_EERSSA_2.png" /> POSTES_EERSSA'
            });
var format_FIBRA_ADSS_08H_3 = new ol.format.GeoJSON();
var features_FIBRA_ADSS_08H_3 = format_FIBRA_ADSS_08H_3.readFeatures(json_FIBRA_ADSS_08H_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FIBRA_ADSS_08H_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FIBRA_ADSS_08H_3.addFeatures(features_FIBRA_ADSS_08H_3);
var lyr_FIBRA_ADSS_08H_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FIBRA_ADSS_08H_3, 
                style: style_FIBRA_ADSS_08H_3,
                popuplayertitle: "FIBRA_ADSS_08H",
                interactive: true,
                title: '<img src="styles/legend/FIBRA_ADSS_08H_3.png" /> FIBRA_ADSS_08H'
            });
var format_FIBRA_ADSS_12H_4 = new ol.format.GeoJSON();
var features_FIBRA_ADSS_12H_4 = format_FIBRA_ADSS_12H_4.readFeatures(json_FIBRA_ADSS_12H_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FIBRA_ADSS_12H_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FIBRA_ADSS_12H_4.addFeatures(features_FIBRA_ADSS_12H_4);
var lyr_FIBRA_ADSS_12H_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FIBRA_ADSS_12H_4, 
                style: style_FIBRA_ADSS_12H_4,
                popuplayertitle: "FIBRA_ADSS_12H",
                interactive: true,
                title: '<img src="styles/legend/FIBRA_ADSS_12H_4.png" /> FIBRA_ADSS_12H'
            });
var format_FIBRA_ADSS_12H_TRONCAL_5 = new ol.format.GeoJSON();
var features_FIBRA_ADSS_12H_TRONCAL_5 = format_FIBRA_ADSS_12H_TRONCAL_5.readFeatures(json_FIBRA_ADSS_12H_TRONCAL_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FIBRA_ADSS_12H_TRONCAL_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FIBRA_ADSS_12H_TRONCAL_5.addFeatures(features_FIBRA_ADSS_12H_TRONCAL_5);
var lyr_FIBRA_ADSS_12H_TRONCAL_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FIBRA_ADSS_12H_TRONCAL_5, 
                style: style_FIBRA_ADSS_12H_TRONCAL_5,
                popuplayertitle: "FIBRA_ADSS_12H_TRONCAL",
                interactive: true,
                title: '<img src="styles/legend/FIBRA_ADSS_12H_TRONCAL_5.png" /> FIBRA_ADSS_12H_TRONCAL'
            });
var format_NODO_6 = new ol.format.GeoJSON();
var features_NODO_6 = format_NODO_6.readFeatures(json_NODO_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NODO_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NODO_6.addFeatures(features_NODO_6);
var lyr_NODO_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NODO_6, 
                style: style_NODO_6,
                popuplayertitle: "NODO",
                interactive: true,
                title: '<img src="styles/legend/NODO_6.png" /> NODO'
            });
var format_NAPS_7 = new ol.format.GeoJSON();
var features_NAPS_7 = format_NAPS_7.readFeatures(json_NAPS_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NAPS_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NAPS_7.addFeatures(features_NAPS_7);
var lyr_NAPS_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NAPS_7, 
                style: style_NAPS_7,
                popuplayertitle: "NAPS",
                interactive: true,
                title: '<img src="styles/legend/NAPS_7.png" /> NAPS'
            });
var format_MANGA_LINEAL_8 = new ol.format.GeoJSON();
var features_MANGA_LINEAL_8 = format_MANGA_LINEAL_8.readFeatures(json_MANGA_LINEAL_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MANGA_LINEAL_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MANGA_LINEAL_8.addFeatures(features_MANGA_LINEAL_8);
var lyr_MANGA_LINEAL_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MANGA_LINEAL_8, 
                style: style_MANGA_LINEAL_8,
                popuplayertitle: "MANGA_LINEAL",
                interactive: true,
                title: '<img src="styles/legend/MANGA_LINEAL_8.png" /> MANGA_LINEAL'
            });
var format_SECTOR_9 = new ol.format.GeoJSON();
var features_SECTOR_9 = format_SECTOR_9.readFeatures(json_SECTOR_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SECTOR_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SECTOR_9.addFeatures(features_SECTOR_9);
var lyr_SECTOR_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SECTOR_9, 
                style: style_SECTOR_9,
                popuplayertitle: "SECTOR",
                interactive: true,
                title: '<img src="styles/legend/SECTOR_9.png" /> SECTOR'
            });
var format_DOMOS_10 = new ol.format.GeoJSON();
var features_DOMOS_10 = format_DOMOS_10.readFeatures(json_DOMOS_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DOMOS_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DOMOS_10.addFeatures(features_DOMOS_10);
var lyr_DOMOS_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DOMOS_10, 
                style: style_DOMOS_10,
                popuplayertitle: "DOMOS",
                interactive: true,
                title: '<img src="styles/legend/DOMOS_10.png" /> DOMOS'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_POSTES_CNT_1.setVisible(true);lyr_POSTES_EERSSA_2.setVisible(true);lyr_FIBRA_ADSS_08H_3.setVisible(true);lyr_FIBRA_ADSS_12H_4.setVisible(true);lyr_FIBRA_ADSS_12H_TRONCAL_5.setVisible(true);lyr_NODO_6.setVisible(true);lyr_NAPS_7.setVisible(true);lyr_MANGA_LINEAL_8.setVisible(true);lyr_SECTOR_9.setVisible(true);lyr_DOMOS_10.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_POSTES_CNT_1,lyr_POSTES_EERSSA_2,lyr_FIBRA_ADSS_08H_3,lyr_FIBRA_ADSS_12H_4,lyr_FIBRA_ADSS_12H_TRONCAL_5,lyr_NODO_6,lyr_NAPS_7,lyr_MANGA_LINEAL_8,lyr_SECTOR_9,lyr_DOMOS_10];
lyr_POSTES_CNT_1.set('fieldAliases', {'id': 'id', 'ETIQUETA': 'ETIQUETA', });
lyr_POSTES_EERSSA_2.set('fieldAliases', {'id': 'id', 'NRO_POSTE': 'NRO_POSTE', });
lyr_FIBRA_ADSS_08H_3.set('fieldAliases', {'id': 'id', });
lyr_FIBRA_ADSS_12H_4.set('fieldAliases', {'id': 'id', });
lyr_FIBRA_ADSS_12H_TRONCAL_5.set('fieldAliases', {'id': 'id', });
lyr_NODO_6.set('fieldAliases', {'id': 'id', });
lyr_NAPS_7.set('fieldAliases', {'id': 'id', 'NRO_POSTE': 'NRO_POSTE', 'DOMO_RAIZ': 'DOMO_RAIZ', 'ETIQUETA': 'ETIQUETA', 'HILO': 'HILO', 'POTENCIA': 'POTENCIA', 'CORE': 'CORE', 'TRJ_OLT': 'TRJ_OLT', 'PORT_OLT': 'PORT_OLT', });
lyr_MANGA_LINEAL_8.set('fieldAliases', {'id': 'id', 'ETIQUETA': 'ETIQUETA', });
lyr_SECTOR_9.set('fieldAliases', {'id': 'id', 'NOMBRE': 'NOMBRE', });
lyr_DOMOS_10.set('fieldAliases', {'id': 'id', 'ETIQUETA': 'ETIQUETA', });
lyr_POSTES_CNT_1.set('fieldImages', {'id': 'TextEdit', 'ETIQUETA': 'TextEdit', });
lyr_POSTES_EERSSA_2.set('fieldImages', {'id': 'TextEdit', 'NRO_POSTE': 'TextEdit', });
lyr_FIBRA_ADSS_08H_3.set('fieldImages', {'id': 'TextEdit', });
lyr_FIBRA_ADSS_12H_4.set('fieldImages', {'id': 'TextEdit', });
lyr_FIBRA_ADSS_12H_TRONCAL_5.set('fieldImages', {'id': 'TextEdit', });
lyr_NODO_6.set('fieldImages', {'id': 'TextEdit', });
lyr_NAPS_7.set('fieldImages', {'id': 'TextEdit', 'NRO_POSTE': '', 'DOMO_RAIZ': '', 'ETIQUETA': '', 'HILO': '', 'POTENCIA': '', 'CORE': '', 'TRJ_OLT': '', 'PORT_OLT': '', });
lyr_MANGA_LINEAL_8.set('fieldImages', {'id': 'TextEdit', 'ETIQUETA': 'TextEdit', });
lyr_SECTOR_9.set('fieldImages', {'id': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_DOMOS_10.set('fieldImages', {'id': 'TextEdit', 'ETIQUETA': '', });
lyr_POSTES_CNT_1.set('fieldLabels', {'id': 'no label', 'ETIQUETA': 'no label', });
lyr_POSTES_EERSSA_2.set('fieldLabels', {'id': 'no label', 'NRO_POSTE': 'no label', });
lyr_FIBRA_ADSS_08H_3.set('fieldLabels', {'id': 'no label', });
lyr_FIBRA_ADSS_12H_4.set('fieldLabels', {'id': 'no label', });
lyr_FIBRA_ADSS_12H_TRONCAL_5.set('fieldLabels', {'id': 'no label', });
lyr_NODO_6.set('fieldLabels', {'id': 'no label', });
lyr_NAPS_7.set('fieldLabels', {'id': 'no label', 'NRO_POSTE': 'no label', 'DOMO_RAIZ': 'no label', 'ETIQUETA': 'no label', 'HILO': 'no label', 'POTENCIA': 'no label', 'CORE': 'no label', 'TRJ_OLT': 'no label', 'PORT_OLT': 'no label', });
lyr_MANGA_LINEAL_8.set('fieldLabels', {'id': 'no label', 'ETIQUETA': 'no label', });
lyr_SECTOR_9.set('fieldLabels', {'id': 'no label', 'NOMBRE': 'no label', });
lyr_DOMOS_10.set('fieldLabels', {'id': 'no label', 'ETIQUETA': 'no label', });
lyr_DOMOS_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});