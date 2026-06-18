var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_KECAMATAN_1 = new ol.format.GeoJSON();
var features_KECAMATAN_1 = format_KECAMATAN_1.readFeatures(json_KECAMATAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KECAMATAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KECAMATAN_1.addFeatures(features_KECAMATAN_1);
var lyr_KECAMATAN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KECAMATAN_1, 
                style: style_KECAMATAN_1,
                popuplayertitle: 'KECAMATAN',
                interactive: true,
                title: '<img src="styles/legend/KECAMATAN_1.png" /> KECAMATAN'
            });
var format_RSUD_2 = new ol.format.GeoJSON();
var features_RSUD_2 = format_RSUD_2.readFeatures(json_RSUD_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSUD_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSUD_2.addFeatures(features_RSUD_2);
var lyr_RSUD_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSUD_2, 
                style: style_RSUD_2,
                popuplayertitle: 'RSUD',
                interactive: true,
                title: '<img src="styles/legend/RSUD_2.png" /> RSUD'
            });
var format_NAMAJALAN_3 = new ol.format.GeoJSON();
var features_NAMAJALAN_3 = format_NAMAJALAN_3.readFeatures(json_NAMAJALAN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NAMAJALAN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NAMAJALAN_3.addFeatures(features_NAMAJALAN_3);
var lyr_NAMAJALAN_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NAMAJALAN_3, 
                style: style_NAMAJALAN_3,
                popuplayertitle: 'NAMA JALAN',
                interactive: true,
                title: '<img src="styles/legend/NAMAJALAN_3.png" /> NAMA JALAN'
            });
var format_jalanarteri_4 = new ol.format.GeoJSON();
var features_jalanarteri_4 = format_jalanarteri_4.readFeatures(json_jalanarteri_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalanarteri_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalanarteri_4.addFeatures(features_jalanarteri_4);
var lyr_jalanarteri_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalanarteri_4, 
                style: style_jalanarteri_4,
                popuplayertitle: 'jalanarteri',
                interactive: true,
                title: '<img src="styles/legend/jalanarteri_4.png" /> jalanarteri'
            });
var format_jalankolektor_5 = new ol.format.GeoJSON();
var features_jalankolektor_5 = format_jalankolektor_5.readFeatures(json_jalankolektor_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalankolektor_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalankolektor_5.addFeatures(features_jalankolektor_5);
var lyr_jalankolektor_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalankolektor_5, 
                style: style_jalankolektor_5,
                popuplayertitle: 'jalankolektor',
                interactive: true,
                title: '<img src="styles/legend/jalankolektor_5.png" /> jalankolektor'
            });
var format_jalanlokal_6 = new ol.format.GeoJSON();
var features_jalanlokal_6 = format_jalanlokal_6.readFeatures(json_jalanlokal_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalanlokal_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalanlokal_6.addFeatures(features_jalanlokal_6);
var lyr_jalanlokal_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalanlokal_6, 
                style: style_jalanlokal_6,
                popuplayertitle: 'jalanlokal',
                interactive: true,
                title: '<img src="styles/legend/jalanlokal_6.png" /> jalanlokal'
            });
var format_BLACKAREA2_7 = new ol.format.GeoJSON();
var features_BLACKAREA2_7 = format_BLACKAREA2_7.readFeatures(json_BLACKAREA2_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BLACKAREA2_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BLACKAREA2_7.addFeatures(features_BLACKAREA2_7);
var lyr_BLACKAREA2_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BLACKAREA2_7, 
                style: style_BLACKAREA2_7,
                popuplayertitle: 'BLACK AREA 2',
                interactive: true,
                title: '<img src="styles/legend/BLACKAREA2_7.png" /> BLACK AREA 2'
            });
var format_BlackSpot_8 = new ol.format.GeoJSON();
var features_BlackSpot_8 = format_BlackSpot_8.readFeatures(json_BlackSpot_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlackSpot_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlackSpot_8.addFeatures(features_BlackSpot_8);
var lyr_BlackSpot_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlackSpot_8, 
                style: style_BlackSpot_8,
                popuplayertitle: 'BlackSpot',
                interactive: true,
                title: '<img src="styles/legend/BlackSpot_8.png" /> BlackSpot'
            });
var format_PUSKESMAS_9 = new ol.format.GeoJSON();
var features_PUSKESMAS_9 = format_PUSKESMAS_9.readFeatures(json_PUSKESMAS_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUSKESMAS_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUSKESMAS_9.addFeatures(features_PUSKESMAS_9);
var lyr_PUSKESMAS_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUSKESMAS_9, 
                style: style_PUSKESMAS_9,
                popuplayertitle: 'PUSKESMAS',
                interactive: true,
                title: '<img src="styles/legend/PUSKESMAS_9.png" /> PUSKESMAS'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_KECAMATAN_1.setVisible(true);lyr_RSUD_2.setVisible(true);lyr_NAMAJALAN_3.setVisible(true);lyr_jalanarteri_4.setVisible(true);lyr_jalankolektor_5.setVisible(true);lyr_jalanlokal_6.setVisible(true);lyr_BLACKAREA2_7.setVisible(true);lyr_BlackSpot_8.setVisible(true);lyr_PUSKESMAS_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_KECAMATAN_1,lyr_RSUD_2,lyr_NAMAJALAN_3,lyr_jalanarteri_4,lyr_jalankolektor_5,lyr_jalanlokal_6,lyr_BLACKAREA2_7,lyr_BlackSpot_8,lyr_PUSKESMAS_9];
lyr_KECAMATAN_1.set('fieldAliases', {'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'Jumlah Kejadian': 'Jumlah Kejadian', 'Jumlah Korban': 'Jumlah Korban', 'MD': 'MD', 'LB': 'LB', 'LR': 'LR', });
lyr_RSUD_2.set('fieldAliases', {'NO': 'NO', 'Nama Rumah': 'Nama Rumah', 'Alamat': 'Alamat', 'Status RS': 'Status RS', 'Direktur': 'Direktur', 'NO_1': 'NO_1', 'Nama Labor': 'Nama Labor', 'Titik Koor': 'Titik Koor', 'field_9': 'field_9', });
lyr_NAMAJALAN_3.set('fieldAliases', {'Status_Jln': 'Status_Jln', 'Nama_Jln': 'Nama_Jln', 'Fungsi_Jln': 'Fungsi_Jln', 'SumberData': 'SumberData', 'Pjg_Jln_M': 'Pjg_Jln_M', 'Shape_Leng': 'Shape_Leng', 'layer': 'layer', 'path': 'path', });
lyr_jalanarteri_4.set('fieldAliases', {'Status_Jln': 'Status_Jln', 'Nama_Jln': 'Nama_Jln', 'Fungsi_Jln': 'Fungsi_Jln', 'SumberData': 'SumberData', 'Pjg_Jln_M': 'Pjg_Jln_M', 'Shape_Leng': 'Shape_Leng', });
lyr_jalankolektor_5.set('fieldAliases', {'Status_Jln': 'Status_Jln', 'Nama_Jln': 'Nama_Jln', 'Fungsi_Jln': 'Fungsi_Jln', 'SumberData': 'SumberData', 'Pjg_Jln_M': 'Pjg_Jln_M', 'Shape_Leng': 'Shape_Leng', });
lyr_jalanlokal_6.set('fieldAliases', {'Status_Jln': 'Status_Jln', 'Nama_Jln': 'Nama_Jln', 'Fungsi_Jln': 'Fungsi_Jln', 'SumberData': 'SumberData', 'Pjg_Jln_M': 'Pjg_Jln_M', 'Shape_Leng': 'Shape_Leng', });
lyr_BLACKAREA2_7.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'DESA': 'DESA', 'NAMA AREA': 'NAMA AREA', 'BlackLink': 'BlackLink', 'BlackSpot': 'BlackSpot', });
lyr_BlackSpot_8.set('fieldAliases', {'NO': 'NO', 'TGL/BLN/TH': 'TGL/BLN/TH', 'WAKTU (WIB': 'WAKTU (WIB', 'KENDARAAN': 'KENDARAAN', 'TIPE TABRA': 'TIPE TABRA', 'PENYEBAB K': 'PENYEBAB K', 'MD': 'MD', 'LB': 'LB', 'LR': 'LR', 'KRONOLOGI': 'KRONOLOGI', 'TITIK KOOR': 'TITIK KOOR', 'field_12': 'field_12', });
lyr_PUSKESMAS_9.set('fieldAliases', {'NO': 'NO', 'Kabupaten': 'Kabupaten', 'Nama Puske': 'Nama Puske', 'Alamat Pus': 'Alamat Pus', 'JENIS LAYA': 'JENIS LAYA', 'Jumlah Tem': 'Jumlah Tem', 'Jumlah Amb': 'Jumlah Amb', 'Titik Koor': 'Titik Koor', 'field_9': 'field_9', 'GAMBAR': 'GAMBAR', });
lyr_KECAMATAN_1.set('fieldImages', {'PROVINSI': 'TextEdit', 'KABUPATEN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'Jumlah Kejadian': 'TextEdit', 'Jumlah Korban': 'TextEdit', 'MD': 'TextEdit', 'LB': 'TextEdit', 'LR': 'TextEdit', });
lyr_RSUD_2.set('fieldImages', {'NO': 'CheckBox', 'Nama Rumah': 'TextEdit', 'Alamat': 'TextEdit', 'Status RS': 'TextEdit', 'Direktur': 'TextEdit', 'NO_1': '', 'Nama Labor': '', 'Titik Koor': '', 'field_9': 'TextEdit', });
lyr_NAMAJALAN_3.set('fieldImages', {'Status_Jln': '', 'Nama_Jln': '', 'Fungsi_Jln': '', 'SumberData': '', 'Pjg_Jln_M': '', 'Shape_Leng': '', 'layer': '', 'path': '', });
lyr_jalanarteri_4.set('fieldImages', {'Status_Jln': 'TextEdit', 'Nama_Jln': 'TextEdit', 'Fungsi_Jln': 'TextEdit', 'SumberData': 'TextEdit', 'Pjg_Jln_M': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_jalankolektor_5.set('fieldImages', {'Status_Jln': 'TextEdit', 'Nama_Jln': 'TextEdit', 'Fungsi_Jln': 'TextEdit', 'SumberData': 'TextEdit', 'Pjg_Jln_M': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_jalanlokal_6.set('fieldImages', {'Status_Jln': 'TextEdit', 'Nama_Jln': 'TextEdit', 'Fungsi_Jln': 'TextEdit', 'SumberData': 'TextEdit', 'Pjg_Jln_M': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_BLACKAREA2_7.set('fieldImages', {'OBJECTID_1': 'Range', 'DESA': 'TextEdit', 'NAMA AREA': '', 'BlackLink': '', 'BlackSpot': '', });
lyr_BlackSpot_8.set('fieldImages', {'NO': 'Range', 'TGL/BLN/TH': '', 'WAKTU (WIB': '', 'KENDARAAN': '', 'TIPE TABRA': '', 'PENYEBAB K': '', 'MD': 'TextEdit', 'LB': 'TextEdit', 'LR': 'TextEdit', 'KRONOLOGI': 'TextEdit', 'TITIK KOOR': '', 'field_12': 'TextEdit', });
lyr_PUSKESMAS_9.set('fieldImages', {'NO': 'TextEdit', 'Kabupaten': 'TextEdit', 'Nama Puske': 'TextEdit', 'Alamat Pus': 'TextEdit', 'JENIS LAYA': 'TextEdit', 'Jumlah Tem': 'TextEdit', 'Jumlah Amb': 'TextEdit', 'Titik Koor': 'TextEdit', 'field_9': 'TextEdit', 'GAMBAR': 'ExternalResource', });
lyr_KECAMATAN_1.set('fieldLabels', {'PROVINSI': 'inline label - visible with data', 'KABUPATEN': 'inline label - visible with data', 'KECAMATAN': 'inline label - visible with data', 'Jumlah Kejadian': 'inline label - visible with data', 'Jumlah Korban': 'inline label - visible with data', 'MD': 'inline label - visible with data', 'LB': 'inline label - visible with data', 'LR': 'inline label - visible with data', });
lyr_RSUD_2.set('fieldLabels', {'NO': 'inline label - visible with data', 'Nama Rumah': 'inline label - visible with data', 'Alamat': 'inline label - visible with data', 'Status RS': 'inline label - visible with data', 'Direktur': 'inline label - visible with data', 'NO_1': 'inline label - visible with data', 'Nama Labor': 'inline label - visible with data', 'Titik Koor': 'inline label - visible with data', 'field_9': 'inline label - visible with data', });
lyr_NAMAJALAN_3.set('fieldLabels', {'Status_Jln': 'inline label - visible with data', 'Nama_Jln': 'inline label - visible with data', 'Fungsi_Jln': 'inline label - visible with data', 'SumberData': 'inline label - visible with data', 'Pjg_Jln_M': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'path': 'inline label - visible with data', });
lyr_jalanarteri_4.set('fieldLabels', {'Status_Jln': 'inline label - visible with data', 'Nama_Jln': 'inline label - visible with data', 'Fungsi_Jln': 'inline label - visible with data', 'SumberData': 'inline label - visible with data', 'Pjg_Jln_M': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', });
lyr_jalankolektor_5.set('fieldLabels', {'Status_Jln': 'inline label - visible with data', 'Nama_Jln': 'inline label - visible with data', 'Fungsi_Jln': 'inline label - visible with data', 'SumberData': 'inline label - visible with data', 'Pjg_Jln_M': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', });
lyr_jalanlokal_6.set('fieldLabels', {'Status_Jln': 'inline label - visible with data', 'Nama_Jln': 'inline label - visible with data', 'Fungsi_Jln': 'inline label - visible with data', 'SumberData': 'inline label - visible with data', 'Pjg_Jln_M': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', });
lyr_BLACKAREA2_7.set('fieldLabels', {'OBJECTID_1': 'inline label - visible with data', 'DESA': 'inline label - visible with data', 'NAMA AREA': 'inline label - visible with data', 'BlackLink': 'inline label - visible with data', 'BlackSpot': 'inline label - visible with data', });
lyr_BlackSpot_8.set('fieldLabels', {'NO': 'inline label - visible with data', 'TGL/BLN/TH': 'inline label - visible with data', 'WAKTU (WIB': 'inline label - visible with data', 'KENDARAAN': 'inline label - visible with data', 'TIPE TABRA': 'inline label - visible with data', 'PENYEBAB K': 'inline label - visible with data', 'MD': 'inline label - visible with data', 'LB': 'inline label - visible with data', 'LR': 'inline label - visible with data', 'KRONOLOGI': 'inline label - visible with data', 'TITIK KOOR': 'inline label - visible with data', 'field_12': 'inline label - visible with data', });
lyr_PUSKESMAS_9.set('fieldLabels', {'NO': 'inline label - visible with data', 'Kabupaten': 'inline label - visible with data', 'Nama Puske': 'inline label - visible with data', 'Alamat Pus': 'inline label - visible with data', 'JENIS LAYA': 'inline label - visible with data', 'Jumlah Tem': 'inline label - visible with data', 'Jumlah Amb': 'inline label - visible with data', 'Titik Koor': 'inline label - visible with data', 'field_9': 'inline label - visible with data', 'GAMBAR': 'header label - always visible', });
lyr_PUSKESMAS_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});