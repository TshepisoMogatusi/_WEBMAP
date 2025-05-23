var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KrugerNationalPark_1 = new ol.format.GeoJSON();
var features_KrugerNationalPark_1 = format_KrugerNationalPark_1.readFeatures(json_KrugerNationalPark_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KrugerNationalPark_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KrugerNationalPark_1.addFeatures(features_KrugerNationalPark_1);
var lyr_KrugerNationalPark_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KrugerNationalPark_1, 
                style: style_KrugerNationalPark_1,
                popuplayertitle: 'KrugerNationalPark',
                interactive: true,
                title: '<img src="styles/legend/KrugerNationalPark_1.png" /> KrugerNationalPark'
            });
var format_VegetationTypeLocations_2 = new ol.format.GeoJSON();
var features_VegetationTypeLocations_2 = format_VegetationTypeLocations_2.readFeatures(json_VegetationTypeLocations_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VegetationTypeLocations_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VegetationTypeLocations_2.addFeatures(features_VegetationTypeLocations_2);
var lyr_VegetationTypeLocations_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VegetationTypeLocations_2, 
                style: style_VegetationTypeLocations_2,
                popuplayertitle: 'VegetationTypeLocations',
                interactive: true,
                title: '<img src="styles/legend/VegetationTypeLocations_2.png" /> VegetationTypeLocations'
            });
var format_RiverLocations_3 = new ol.format.GeoJSON();
var features_RiverLocations_3 = format_RiverLocations_3.readFeatures(json_RiverLocations_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiverLocations_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiverLocations_3.addFeatures(features_RiverLocations_3);
var lyr_RiverLocations_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiverLocations_3, 
                style: style_RiverLocations_3,
                popuplayertitle: 'RiverLocations',
                interactive: true,
                title: '<img src="styles/legend/RiverLocations_3.png" /> RiverLocations'
            });
var format_TouristAttractionLocations_4 = new ol.format.GeoJSON();
var features_TouristAttractionLocations_4 = format_TouristAttractionLocations_4.readFeatures(json_TouristAttractionLocations_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TouristAttractionLocations_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TouristAttractionLocations_4.addFeatures(features_TouristAttractionLocations_4);
var lyr_TouristAttractionLocations_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TouristAttractionLocations_4, 
                style: style_TouristAttractionLocations_4,
                popuplayertitle: 'TouristAttractionLocations',
                interactive: true,
                title: '<img src="styles/legend/TouristAttractionLocations_4.png" /> TouristAttractionLocations'
            });
var format_FishSanctuaryLocations_5 = new ol.format.GeoJSON();
var features_FishSanctuaryLocations_5 = format_FishSanctuaryLocations_5.readFeatures(json_FishSanctuaryLocations_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FishSanctuaryLocations_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FishSanctuaryLocations_5.addFeatures(features_FishSanctuaryLocations_5);
var lyr_FishSanctuaryLocations_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FishSanctuaryLocations_5, 
                style: style_FishSanctuaryLocations_5,
                popuplayertitle: 'FishSanctuaryLocations',
                interactive: true,
                title: '<img src="styles/legend/FishSanctuaryLocations_5.png" /> FishSanctuaryLocations'
            });
var format_MonitoringStationLocations_6 = new ol.format.GeoJSON();
var features_MonitoringStationLocations_6 = format_MonitoringStationLocations_6.readFeatures(json_MonitoringStationLocations_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MonitoringStationLocations_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MonitoringStationLocations_6.addFeatures(features_MonitoringStationLocations_6);
var lyr_MonitoringStationLocations_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MonitoringStationLocations_6, 
                style: style_MonitoringStationLocations_6,
                popuplayertitle: 'MonitoringStationLocations',
                interactive: true,
                title: '<img src="styles/legend/MonitoringStationLocations_6.png" /> MonitoringStationLocations'
            });
var format_WidernessTrails_7 = new ol.format.GeoJSON();
var features_WidernessTrails_7 = format_WidernessTrails_7.readFeatures(json_WidernessTrails_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WidernessTrails_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WidernessTrails_7.addFeatures(features_WidernessTrails_7);
var lyr_WidernessTrails_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WidernessTrails_7, 
                style: style_WidernessTrails_7,
                popuplayertitle: 'WidernessTrails',
                interactive: true,
                title: '<img src="styles/legend/WidernessTrails_7.png" /> WidernessTrails'
            });
var format_CampingTrails_8 = new ol.format.GeoJSON();
var features_CampingTrails_8 = format_CampingTrails_8.readFeatures(json_CampingTrails_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CampingTrails_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CampingTrails_8.addFeatures(features_CampingTrails_8);
var lyr_CampingTrails_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CampingTrails_8, 
                style: style_CampingTrails_8,
                popuplayertitle: 'CampingTrails',
                interactive: true,
                title: '<img src="styles/legend/CampingTrails_8.png" /> CampingTrails'
            });
var format_TapLocations_9 = new ol.format.GeoJSON();
var features_TapLocations_9 = format_TapLocations_9.readFeatures(json_TapLocations_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TapLocations_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TapLocations_9.addFeatures(features_TapLocations_9);
var lyr_TapLocations_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TapLocations_9, 
                style: style_TapLocations_9,
                popuplayertitle: 'TapLocations',
                interactive: true,
                title: '<img src="styles/legend/TapLocations_9.png" /> TapLocations'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_KrugerNationalPark_1.setVisible(true);lyr_VegetationTypeLocations_2.setVisible(true);lyr_RiverLocations_3.setVisible(true);lyr_TouristAttractionLocations_4.setVisible(true);lyr_FishSanctuaryLocations_5.setVisible(true);lyr_MonitoringStationLocations_6.setVisible(true);lyr_WidernessTrails_7.setVisible(true);lyr_CampingTrails_8.setVisible(true);lyr_TapLocations_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_KrugerNationalPark_1,lyr_VegetationTypeLocations_2,lyr_RiverLocations_3,lyr_TouristAttractionLocations_4,lyr_FishSanctuaryLocations_5,lyr_MonitoringStationLocations_6,lyr_WidernessTrails_7,lyr_CampingTrails_8,lyr_TapLocations_9];
lyr_KrugerNationalPark_1.set('fieldAliases', {'RESERVENAM': 'RESERVENAM', 'SPEC_TYPE': 'SPEC_TYPE', 'PA_CATEG': 'PA_CATEG', 'MGMT_AGENT': 'MGMT_AGENT', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_VegetationTypeLocations_2.set('fieldAliases', {'SQ4HASH': 'SQ4HASH', 'SP0072': 'SP0072', 'NOFISSANC': 'NOFISSANC', 'SP0071': 'SP0071', 'SP0074': 'SP0074', 'SP0089': 'SP0089', 'SP0090': 'SP0090', 'SP0100': 'SP0100', 'SP0112': 'SP0112', 'SP0116': 'SP0116', 'SP0128': 'SP0128', 'SP0133': 'SP0133', 'SP0136': 'SP0136', 'SP0149': 'SP0149', 'SP0152': 'SP0152', 'SP0153': 'SP0153', 'SP0179': 'SP0179', 'SP0183': 'SP0183', 'SP0195': 'SP0195', 'SP0199': 'SP0199', 'SP0201': 'SP0201', 'SP0202': 'SP0202', 'SP0213': 'SP0213', 'SP0248': 'SP0248', 'SP0263': 'SP0263', 'SP0264': 'SP0264', 'SP0265': 'SP0265', 'SP0268': 'SP0268', 'SP0302': 'SP0302', 'SP0311': 'SP0311', 'SP0336': 'SP0336', 'SP0360': 'SP0360', 'SP0374': 'SP0374', 'SP0393': 'SP0393', 'SP0408': 'SP0408', 'SP0409': 'SP0409', 'SP0435': 'SP0435', 'SP1000': 'SP1000', 'SP1001': 'SP1001', 'SP1002': 'SP1002', 'SP1003': 'SP1003', 'SP1004': 'SP1004', 'SP1005': 'SP1005', 'SP1006': 'SP1006', 'SP1007': 'SP1007', 'SP1008': 'SP1008', 'SP1009': 'SP1009', 'SP1012': 'SP1012', 'SP1013': 'SP1013', 'SP1014': 'SP1014', 'SP1015': 'SP1015', 'SP1019': 'SP1019', 'SP1020': 'SP1020', 'SP1021': 'SP1021', 'SP1022': 'SP1022', 'SP1023': 'SP1023', 'SP1024': 'SP1024', 'SP1025': 'SP1025', 'SP1026': 'SP1026', 'SP1027': 'SP1027', 'SP1028': 'SP1028', 'SP1029': 'SP1029', 'SP1030': 'SP1030', 'SP1031': 'SP1031', 'SP2003': 'SP2003', 'SP2010': 'SP2010', 'SP2051': 'SP2051', 'STATUS': 'STATUS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_RiverLocations_3.set('fieldAliases', {'LENGTH': 'LENGTH', 'RIVNAME': 'RIVNAME', 'RIVCLASS': 'RIVCLASS', 'STREAMORDE': 'STREAMORDE', 'BEC_LEV2_G': 'BEC_LEV2_G', 'LEV1': 'LEV1', 'LEV2': 'LEV2', 'LEVEL': 'LEVEL', 'ECOREGION_': 'ECOREGION_', 'ID': 'ID', 'Shape_Leng': 'Shape_Leng', });
lyr_TouristAttractionLocations_4.set('fieldAliases', {'name': 'name', 'name_en': 'name_en', 'amenity': 'amenity', 'man_made': 'man_made', 'shop': 'shop', 'tourism': 'tourism', 'opening_ho': 'opening_ho', 'beds': 'beds', 'rooms': 'rooms', 'addr_full': 'addr_full', 'addr_house': 'addr_house', 'addr_stree': 'addr_stree', 'addr_city': 'addr_city', 'source': 'source', 'name_af': 'name_af', 'name_nr': 'name_nr', 'name_st': 'name_st', 'name_nso': 'name_nso', 'name_ssw': 'name_ssw', 'name_ts': 'name_ts', 'name_tn': 'name_tn', 'name_ve': 'name_ve', 'name_xh': 'name_xh', 'name_zu': 'name_zu', 'osm_id': 'osm_id', 'osm_type': 'osm_type', });
lyr_FishSanctuaryLocations_5.set('fieldAliases', {'id': 'id', 'sq4hash': 'sq4hash', 'sp0072': 'sp0072', 'nofissanc': 'nofissanc', 'sp0071': 'sp0071', 'sp0074': 'sp0074', 'sp0089': 'sp0089', 'sp0090': 'sp0090', 'sp0100': 'sp0100', 'sp0112': 'sp0112', 'sp0116': 'sp0116', 'sp0128': 'sp0128', 'sp0133': 'sp0133', 'sp0136': 'sp0136', 'sp0149': 'sp0149', 'sp0152': 'sp0152', 'sp0153': 'sp0153', 'sp0179': 'sp0179', 'sp0183': 'sp0183', 'sp0195': 'sp0195', 'sp0199': 'sp0199', 'sp0201': 'sp0201', 'sp0202': 'sp0202', 'sp0213': 'sp0213', 'sp0248': 'sp0248', 'sp0263': 'sp0263', 'sp0264': 'sp0264', 'sp0265': 'sp0265', 'sp0268': 'sp0268', 'sp0302': 'sp0302', 'sp0311': 'sp0311', 'sp0336': 'sp0336', 'sp0360': 'sp0360', 'sp0374': 'sp0374', 'sp0393': 'sp0393', 'sp0408': 'sp0408', 'sp0409': 'sp0409', 'sp0435': 'sp0435', 'sp1000': 'sp1000', 'sp1001': 'sp1001', 'sp1002': 'sp1002', 'sp1003': 'sp1003', 'sp1004': 'sp1004', 'sp1005': 'sp1005', 'sp1006': 'sp1006', 'sp1007': 'sp1007', 'sp1008': 'sp1008', 'sp1009': 'sp1009', 'sp1012': 'sp1012', 'sp1013': 'sp1013', 'sp1014': 'sp1014', 'sp1015': 'sp1015', 'sp1019': 'sp1019', 'sp1020': 'sp1020', 'sp1021': 'sp1021', 'sp1022': 'sp1022', 'sp1023': 'sp1023', 'sp1024': 'sp1024', 'sp1025': 'sp1025', 'sp1026': 'sp1026', 'sp1027': 'sp1027', 'sp1028': 'sp1028', 'sp1029': 'sp1029', 'sp1030': 'sp1030', 'sp1031': 'sp1031', 'sp2003': 'sp2003', 'sp2010': 'sp2010', 'sp2051': 'sp2051', 'status': 'status', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_MonitoringStationLocations_6.set('fieldAliases', {'name': 'name', 'name_en': 'name_en', 'amenity': 'amenity', 'man_made': 'man_made', 'shop': 'shop', 'tourism': 'tourism', 'opening_ho': 'opening_ho', 'beds': 'beds', 'rooms': 'rooms', 'addr_full': 'addr_full', 'addr_house': 'addr_house', 'addr_stree': 'addr_stree', 'addr_city': 'addr_city', 'source': 'source', 'name_af': 'name_af', 'name_nr': 'name_nr', 'name_st': 'name_st', 'name_nso': 'name_nso', 'name_ssw': 'name_ssw', 'name_ts': 'name_ts', 'name_tn': 'name_tn', 'name_ve': 'name_ve', 'name_xh': 'name_xh', 'name_zu': 'name_zu', 'osm_id': 'osm_id', 'osm_type': 'osm_type', });
lyr_WidernessTrails_7.set('fieldAliases', {'id': 'id', 'trail': 'trail', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_CampingTrails_8.set('fieldAliases', {'id': 'id', 'camp': 'camp', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_TapLocations_9.set('fieldAliases', {'name': 'name', 'name_en': 'name_en', 'amenity': 'amenity', 'man_made': 'man_made', 'shop': 'shop', 'tourism': 'tourism', 'opening_ho': 'opening_ho', 'beds': 'beds', 'rooms': 'rooms', 'addr_full': 'addr_full', 'addr_house': 'addr_house', 'addr_stree': 'addr_stree', 'addr_city': 'addr_city', 'source': 'source', 'name_af': 'name_af', 'name_nr': 'name_nr', 'name_st': 'name_st', 'name_nso': 'name_nso', 'name_ssw': 'name_ssw', 'name_ts': 'name_ts', 'name_tn': 'name_tn', 'name_ve': 'name_ve', 'name_xh': 'name_xh', 'name_zu': 'name_zu', 'osm_id': 'osm_id', 'osm_type': 'osm_type', });
lyr_KrugerNationalPark_1.set('fieldImages', {'RESERVENAM': 'TextEdit', 'SPEC_TYPE': 'TextEdit', 'PA_CATEG': 'TextEdit', 'MGMT_AGENT': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_VegetationTypeLocations_2.set('fieldImages', {'SQ4HASH': 'TextEdit', 'SP0072': 'Range', 'NOFISSANC': 'Range', 'SP0071': 'TextEdit', 'SP0074': 'TextEdit', 'SP0089': 'TextEdit', 'SP0090': 'TextEdit', 'SP0100': 'TextEdit', 'SP0112': 'TextEdit', 'SP0116': 'TextEdit', 'SP0128': 'TextEdit', 'SP0133': 'TextEdit', 'SP0136': 'TextEdit', 'SP0149': 'TextEdit', 'SP0152': 'TextEdit', 'SP0153': 'TextEdit', 'SP0179': 'TextEdit', 'SP0183': 'TextEdit', 'SP0195': 'TextEdit', 'SP0199': 'TextEdit', 'SP0201': 'TextEdit', 'SP0202': 'TextEdit', 'SP0213': 'TextEdit', 'SP0248': 'TextEdit', 'SP0263': 'TextEdit', 'SP0264': 'TextEdit', 'SP0265': 'TextEdit', 'SP0268': 'TextEdit', 'SP0302': 'TextEdit', 'SP0311': 'TextEdit', 'SP0336': 'TextEdit', 'SP0360': 'TextEdit', 'SP0374': 'TextEdit', 'SP0393': 'TextEdit', 'SP0408': 'TextEdit', 'SP0409': 'TextEdit', 'SP0435': 'TextEdit', 'SP1000': 'TextEdit', 'SP1001': 'TextEdit', 'SP1002': 'TextEdit', 'SP1003': 'TextEdit', 'SP1004': 'TextEdit', 'SP1005': 'TextEdit', 'SP1006': 'TextEdit', 'SP1007': 'TextEdit', 'SP1008': 'TextEdit', 'SP1009': 'TextEdit', 'SP1012': 'TextEdit', 'SP1013': 'TextEdit', 'SP1014': 'TextEdit', 'SP1015': 'TextEdit', 'SP1019': 'TextEdit', 'SP1020': 'TextEdit', 'SP1021': 'TextEdit', 'SP1022': 'TextEdit', 'SP1023': 'TextEdit', 'SP1024': 'TextEdit', 'SP1025': 'TextEdit', 'SP1026': 'TextEdit', 'SP1027': 'TextEdit', 'SP1028': 'TextEdit', 'SP1029': 'TextEdit', 'SP1030': 'TextEdit', 'SP1031': 'TextEdit', 'SP2003': 'TextEdit', 'SP2010': 'TextEdit', 'SP2051': 'TextEdit', 'STATUS': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RiverLocations_3.set('fieldImages', {'LENGTH': 'TextEdit', 'RIVNAME': 'TextEdit', 'RIVCLASS': 'TextEdit', 'STREAMORDE': 'TextEdit', 'BEC_LEV2_G': 'TextEdit', 'LEV1': 'TextEdit', 'LEV2': 'TextEdit', 'LEVEL': 'TextEdit', 'ECOREGION_': 'TextEdit', 'ID': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_TouristAttractionLocations_4.set('fieldImages', {'name': 'TextEdit', 'name_en': 'TextEdit', 'amenity': 'TextEdit', 'man_made': 'TextEdit', 'shop': 'TextEdit', 'tourism': 'TextEdit', 'opening_ho': 'TextEdit', 'beds': 'TextEdit', 'rooms': 'TextEdit', 'addr_full': 'TextEdit', 'addr_house': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_city': 'TextEdit', 'source': 'TextEdit', 'name_af': 'TextEdit', 'name_nr': 'TextEdit', 'name_st': 'TextEdit', 'name_nso': 'TextEdit', 'name_ssw': 'TextEdit', 'name_ts': 'TextEdit', 'name_tn': 'TextEdit', 'name_ve': 'TextEdit', 'name_xh': 'TextEdit', 'name_zu': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', });
lyr_FishSanctuaryLocations_5.set('fieldImages', {'id': 'Range', 'sq4hash': 'TextEdit', 'sp0072': 'Range', 'nofissanc': 'Range', 'sp0071': 'TextEdit', 'sp0074': 'TextEdit', 'sp0089': 'TextEdit', 'sp0090': 'TextEdit', 'sp0100': 'TextEdit', 'sp0112': 'TextEdit', 'sp0116': 'TextEdit', 'sp0128': 'TextEdit', 'sp0133': 'TextEdit', 'sp0136': 'TextEdit', 'sp0149': 'TextEdit', 'sp0152': 'TextEdit', 'sp0153': 'TextEdit', 'sp0179': 'TextEdit', 'sp0183': 'TextEdit', 'sp0195': 'TextEdit', 'sp0199': 'TextEdit', 'sp0201': 'TextEdit', 'sp0202': 'TextEdit', 'sp0213': 'TextEdit', 'sp0248': 'TextEdit', 'sp0263': 'TextEdit', 'sp0264': 'TextEdit', 'sp0265': 'TextEdit', 'sp0268': 'TextEdit', 'sp0302': 'TextEdit', 'sp0311': 'TextEdit', 'sp0336': 'TextEdit', 'sp0360': 'TextEdit', 'sp0374': 'TextEdit', 'sp0393': 'TextEdit', 'sp0408': 'TextEdit', 'sp0409': 'TextEdit', 'sp0435': 'TextEdit', 'sp1000': 'TextEdit', 'sp1001': 'TextEdit', 'sp1002': 'TextEdit', 'sp1003': 'TextEdit', 'sp1004': 'TextEdit', 'sp1005': 'TextEdit', 'sp1006': 'TextEdit', 'sp1007': 'TextEdit', 'sp1008': 'TextEdit', 'sp1009': 'TextEdit', 'sp1012': 'TextEdit', 'sp1013': 'TextEdit', 'sp1014': 'TextEdit', 'sp1015': 'TextEdit', 'sp1019': 'TextEdit', 'sp1020': 'TextEdit', 'sp1021': 'TextEdit', 'sp1022': 'TextEdit', 'sp1023': 'TextEdit', 'sp1024': 'TextEdit', 'sp1025': 'TextEdit', 'sp1026': 'TextEdit', 'sp1027': 'TextEdit', 'sp1028': 'TextEdit', 'sp1029': 'TextEdit', 'sp1030': 'TextEdit', 'sp1031': 'TextEdit', 'sp2003': 'TextEdit', 'sp2010': 'TextEdit', 'sp2051': 'TextEdit', 'status': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_MonitoringStationLocations_6.set('fieldImages', {'name': 'TextEdit', 'name_en': 'TextEdit', 'amenity': 'TextEdit', 'man_made': 'TextEdit', 'shop': 'TextEdit', 'tourism': 'TextEdit', 'opening_ho': 'TextEdit', 'beds': 'TextEdit', 'rooms': 'TextEdit', 'addr_full': 'TextEdit', 'addr_house': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_city': 'TextEdit', 'source': 'TextEdit', 'name_af': 'TextEdit', 'name_nr': 'TextEdit', 'name_st': 'TextEdit', 'name_nso': 'TextEdit', 'name_ssw': 'TextEdit', 'name_ts': 'TextEdit', 'name_tn': 'TextEdit', 'name_ve': 'TextEdit', 'name_xh': 'TextEdit', 'name_zu': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', });
lyr_WidernessTrails_7.set('fieldImages', {'id': 'TextEdit', 'trail': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_CampingTrails_8.set('fieldImages', {'id': 'TextEdit', 'camp': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_TapLocations_9.set('fieldImages', {'name': 'TextEdit', 'name_en': 'TextEdit', 'amenity': 'TextEdit', 'man_made': 'TextEdit', 'shop': 'TextEdit', 'tourism': 'TextEdit', 'opening_ho': 'TextEdit', 'beds': 'TextEdit', 'rooms': 'TextEdit', 'addr_full': 'TextEdit', 'addr_house': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_city': 'TextEdit', 'source': 'TextEdit', 'name_af': 'TextEdit', 'name_nr': 'TextEdit', 'name_st': 'TextEdit', 'name_nso': 'TextEdit', 'name_ssw': 'TextEdit', 'name_ts': 'TextEdit', 'name_tn': 'TextEdit', 'name_ve': 'TextEdit', 'name_xh': 'TextEdit', 'name_zu': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', });
lyr_KrugerNationalPark_1.set('fieldLabels', {'RESERVENAM': 'inline label - always visible', 'SPEC_TYPE': 'inline label - always visible', 'PA_CATEG': 'hidden field', 'MGMT_AGENT': 'inline label - always visible', 'Shape_Leng': 'hidden field', 'Shape_Area': 'inline label - always visible', });
lyr_VegetationTypeLocations_2.set('fieldLabels', {'SQ4HASH': 'hidden field', 'SP0072': 'hidden field', 'NOFISSANC': 'hidden field', 'SP0071': 'hidden field', 'SP0074': 'hidden field', 'SP0089': 'hidden field', 'SP0090': 'hidden field', 'SP0100': 'hidden field', 'SP0112': 'hidden field', 'SP0116': 'hidden field', 'SP0128': 'hidden field', 'SP0133': 'hidden field', 'SP0136': 'hidden field', 'SP0149': 'hidden field', 'SP0152': 'hidden field', 'SP0153': 'hidden field', 'SP0179': 'hidden field', 'SP0183': 'hidden field', 'SP0195': 'hidden field', 'SP0199': 'hidden field', 'SP0201': 'hidden field', 'SP0202': 'hidden field', 'SP0213': 'hidden field', 'SP0248': 'hidden field', 'SP0263': 'hidden field', 'SP0264': 'hidden field', 'SP0265': 'hidden field', 'SP0268': 'hidden field', 'SP0302': 'hidden field', 'SP0311': 'hidden field', 'SP0336': 'hidden field', 'SP0360': 'hidden field', 'SP0374': 'hidden field', 'SP0393': 'hidden field', 'SP0408': 'hidden field', 'SP0409': 'hidden field', 'SP0435': 'hidden field', 'SP1000': 'hidden field', 'SP1001': 'hidden field', 'SP1002': 'hidden field', 'SP1003': 'hidden field', 'SP1004': 'hidden field', 'SP1005': 'hidden field', 'SP1006': 'hidden field', 'SP1007': 'hidden field', 'SP1008': 'hidden field', 'SP1009': 'hidden field', 'SP1012': 'hidden field', 'SP1013': 'hidden field', 'SP1014': 'hidden field', 'SP1015': 'hidden field', 'SP1019': 'hidden field', 'SP1020': 'hidden field', 'SP1021': 'hidden field', 'SP1022': 'hidden field', 'SP1023': 'hidden field', 'SP1024': 'hidden field', 'SP1025': 'hidden field', 'SP1026': 'hidden field', 'SP1027': 'hidden field', 'SP1028': 'hidden field', 'SP1029': 'hidden field', 'SP1030': 'hidden field', 'SP1031': 'hidden field', 'SP2003': 'hidden field', 'SP2010': 'hidden field', 'SP2051': 'hidden field', 'STATUS': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'header label - always visible', });
lyr_RiverLocations_3.set('fieldLabels', {'LENGTH': 'inline label - always visible', 'RIVNAME': 'inline label - always visible', 'RIVCLASS': 'inline label - always visible', 'STREAMORDE': 'hidden field', 'BEC_LEV2_G': 'hidden field', 'LEV1': 'hidden field', 'LEV2': 'hidden field', 'LEVEL': 'hidden field', 'ECOREGION_': 'hidden field', 'ID': 'hidden field', 'Shape_Leng': 'hidden field', });
lyr_TouristAttractionLocations_4.set('fieldLabels', {'name': 'inline label - always visible', 'name_en': 'hidden field', 'amenity': 'inline label - always visible', 'man_made': 'hidden field', 'shop': 'hidden field', 'tourism': 'hidden field', 'opening_ho': 'hidden field', 'beds': 'hidden field', 'rooms': 'hidden field', 'addr_full': 'hidden field', 'addr_house': 'hidden field', 'addr_stree': 'hidden field', 'addr_city': 'hidden field', 'source': 'hidden field', 'name_af': 'hidden field', 'name_nr': 'hidden field', 'name_st': 'hidden field', 'name_nso': 'hidden field', 'name_ssw': 'hidden field', 'name_ts': 'hidden field', 'name_tn': 'hidden field', 'name_ve': 'hidden field', 'name_xh': 'hidden field', 'name_zu': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', });
lyr_FishSanctuaryLocations_5.set('fieldLabels', {'id': 'hidden field', 'sq4hash': 'hidden field', 'sp0072': 'hidden field', 'nofissanc': 'hidden field', 'sp0071': 'hidden field', 'sp0074': 'hidden field', 'sp0089': 'hidden field', 'sp0090': 'hidden field', 'sp0100': 'hidden field', 'sp0112': 'hidden field', 'sp0116': 'hidden field', 'sp0128': 'hidden field', 'sp0133': 'hidden field', 'sp0136': 'hidden field', 'sp0149': 'hidden field', 'sp0152': 'hidden field', 'sp0153': 'hidden field', 'sp0179': 'hidden field', 'sp0183': 'hidden field', 'sp0195': 'hidden field', 'sp0199': 'hidden field', 'sp0201': 'hidden field', 'sp0202': 'hidden field', 'sp0213': 'hidden field', 'sp0248': 'hidden field', 'sp0263': 'hidden field', 'sp0264': 'hidden field', 'sp0265': 'hidden field', 'sp0268': 'hidden field', 'sp0302': 'hidden field', 'sp0311': 'hidden field', 'sp0336': 'hidden field', 'sp0360': 'hidden field', 'sp0374': 'hidden field', 'sp0393': 'hidden field', 'sp0408': 'hidden field', 'sp0409': 'hidden field', 'sp0435': 'hidden field', 'sp1000': 'hidden field', 'sp1001': 'hidden field', 'sp1002': 'hidden field', 'sp1003': 'hidden field', 'sp1004': 'hidden field', 'sp1005': 'hidden field', 'sp1006': 'hidden field', 'sp1007': 'hidden field', 'sp1008': 'hidden field', 'sp1009': 'hidden field', 'sp1012': 'hidden field', 'sp1013': 'hidden field', 'sp1014': 'hidden field', 'sp1015': 'hidden field', 'sp1019': 'hidden field', 'sp1020': 'hidden field', 'sp1021': 'hidden field', 'sp1022': 'hidden field', 'sp1023': 'hidden field', 'sp1024': 'hidden field', 'sp1025': 'hidden field', 'sp1026': 'hidden field', 'sp1027': 'hidden field', 'sp1028': 'hidden field', 'sp1029': 'hidden field', 'sp1030': 'hidden field', 'sp1031': 'hidden field', 'sp2003': 'hidden field', 'sp2010': 'hidden field', 'sp2051': 'hidden field', 'status': 'hidden field', 'shape_leng': 'hidden field', 'shape_area': 'hidden field', });
lyr_MonitoringStationLocations_6.set('fieldLabels', {'name': 'header label - always visible', 'name_en': 'hidden field', 'amenity': 'hidden field', 'man_made': 'header label - always visible', 'shop': 'hidden field', 'tourism': 'hidden field', 'opening_ho': 'hidden field', 'beds': 'hidden field', 'rooms': 'hidden field', 'addr_full': 'hidden field', 'addr_house': 'hidden field', 'addr_stree': 'hidden field', 'addr_city': 'hidden field', 'source': 'hidden field', 'name_af': 'hidden field', 'name_nr': 'hidden field', 'name_st': 'hidden field', 'name_nso': 'hidden field', 'name_ssw': 'hidden field', 'name_ts': 'hidden field', 'name_tn': 'hidden field', 'name_ve': 'hidden field', 'name_xh': 'hidden field', 'name_zu': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', });
lyr_WidernessTrails_7.set('fieldLabels', {'id': 'hidden field', 'trail': 'header label - always visible', 'latitude': 'hidden field', 'longitude': 'hidden field', });
lyr_CampingTrails_8.set('fieldLabels', {'id': 'hidden field', 'camp': 'header label - always visible', 'latitude': 'hidden field', 'longitude': 'hidden field', });
lyr_TapLocations_9.set('fieldLabels', {'name': 'hidden field', 'name_en': 'hidden field', 'amenity': 'inline label - always visible', 'man_made': 'inline label - always visible', 'shop': 'hidden field', 'tourism': 'hidden field', 'opening_ho': 'hidden field', 'beds': 'hidden field', 'rooms': 'hidden field', 'addr_full': 'hidden field', 'addr_house': 'hidden field', 'addr_stree': 'hidden field', 'addr_city': 'hidden field', 'source': 'hidden field', 'name_af': 'hidden field', 'name_nr': 'hidden field', 'name_st': 'hidden field', 'name_nso': 'hidden field', 'name_ssw': 'hidden field', 'name_ts': 'hidden field', 'name_tn': 'hidden field', 'name_ve': 'hidden field', 'name_xh': 'hidden field', 'name_zu': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', });
lyr_TapLocations_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});