var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Deslindesprediales_1 = new ol.format.GeoJSON();
var features_Deslindesprediales_1 = format_Deslindesprediales_1.readFeatures(json_Deslindesprediales_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Deslindesprediales_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Deslindesprediales_1.addFeatures(features_Deslindesprediales_1);
var lyr_Deslindesprediales_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Deslindesprediales_1, 
                style: style_Deslindesprediales_1,
                popuplayertitle: 'Deslindes prediales',
                interactive: false,
                title: '<img src="styles/legend/Deslindesprediales_1.png" /> Deslindes prediales'
            });
var format_Edificioproyectado_2 = new ol.format.GeoJSON();
var features_Edificioproyectado_2 = format_Edificioproyectado_2.readFeatures(json_Edificioproyectado_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Edificioproyectado_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Edificioproyectado_2.addFeatures(features_Edificioproyectado_2);
var lyr_Edificioproyectado_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Edificioproyectado_2, 
                style: style_Edificioproyectado_2,
                popuplayertitle: 'Edificio proyectado',
                interactive: false,
                title: '<img src="styles/legend/Edificioproyectado_2.png" /> Edificio proyectado'
            });
var format_calicata_3 = new ol.format.GeoJSON();
var features_calicata_3 = format_calicata_3.readFeatures(json_calicata_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_calicata_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_calicata_3.addFeatures(features_calicata_3);
var lyr_calicata_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_calicata_3, 
                style: style_calicata_3,
                popuplayertitle: 'calicata',
                interactive: true,
    title: 'calicata<br />\
    <img src="styles/legend/calicata_3_0.png" /> 2017<br />\
    <img src="styles/legend/calicata_3_1.png" /> 2025<br />\
    <img src="styles/legend/calicata_3_2.png" /> 2026<br />' });
var format_sondaje_4 = new ol.format.GeoJSON();
var features_sondaje_4 = format_sondaje_4.readFeatures(json_sondaje_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sondaje_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sondaje_4.addFeatures(features_sondaje_4);
var lyr_sondaje_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sondaje_4, 
                style: style_sondaje_4,
                popuplayertitle: 'sondaje',
                interactive: true,
                title: '<img src="styles/legend/sondaje_4.png" /> sondaje'
            });
var format_remociones_masa_5 = new ol.format.GeoJSON();
var features_remociones_masa_5 = format_remociones_masa_5.readFeatures(json_remociones_masa_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_remociones_masa_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_remociones_masa_5.addFeatures(features_remociones_masa_5);
cluster_remociones_masa_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_remociones_masa_5
});
var lyr_remociones_masa_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_remociones_masa_5, 
                style: style_remociones_masa_5,
                popuplayertitle: 'remociones_masa',
                interactive: true,
                title: '<img src="styles/legend/remociones_masa_5.png" /> remociones_masa'
            });
var format_afloramientos_6 = new ol.format.GeoJSON();
var features_afloramientos_6 = format_afloramientos_6.readFeatures(json_afloramientos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_afloramientos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_afloramientos_6.addFeatures(features_afloramientos_6);
cluster_afloramientos_6 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_afloramientos_6
});
var lyr_afloramientos_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_afloramientos_6, 
                style: style_afloramientos_6,
                popuplayertitle: 'afloramientos',
                interactive: true,
                title: '<img src="styles/legend/afloramientos_6.png" /> afloramientos'
            });
var group_Terreno = new ol.layer.Group({
                                layers: [lyr_remociones_masa_5,lyr_afloramientos_6,],
                                fold: 'open',
                                title: 'Terreno'});
var group_Topografa = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Topografía'});
var group_MecnicadeSuelos = new ol.layer.Group({
                                layers: [lyr_calicata_3,lyr_sondaje_4,],
                                fold: 'open',
                                title: 'Mecánica de Suelos'});
var group_Proyecto = new ol.layer.Group({
                                layers: [lyr_Deslindesprediales_1,lyr_Edificioproyectado_2,],
                                fold: 'open',
                                title: 'Proyecto'});
var group_MapaBase = new ol.layer.Group({
                                layers: [lyr_GoogleSatelite_0,],
                                fold: 'open',
                                title: 'Mapa Base'});

lyr_GoogleSatelite_0.setVisible(true);lyr_Deslindesprediales_1.setVisible(true);lyr_Edificioproyectado_2.setVisible(true);lyr_calicata_3.setVisible(true);lyr_sondaje_4.setVisible(true);lyr_remociones_masa_5.setVisible(true);lyr_afloramientos_6.setVisible(true);
var layersList = [group_MapaBase,group_Proyecto,group_MecnicadeSuelos,group_Terreno];
lyr_Deslindesprediales_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Edificioproyectado_2.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', });
lyr_calicata_3.set('fieldAliases', {'fid': 'fid', 'IDENTIFICA': 'IDENTIFICA', 'AÑO': 'AÑO', 'H1_USCS': 'H1_USCS', 'H1_TECHO': 'H1_TECHO', 'H1_BASE': 'H1_BASE', 'H1_ESPESOR': 'H1_ESPESOR', 'H1_DESCRIPCION': 'H1_DESCRIPCION', 'H2_USCS': 'H2_USCS', 'H2_TECHO': 'H2_TECHO', 'H2_BASE': 'H2_BASE', 'H2_ESPESOR': 'H2_ESPESOR', 'H2_DESCRIPCION': 'H2_DESCRIPCION', 'H3_USCS': 'H3_USCS', 'H3_TECHO': 'H3_TECHO', 'H3_BASE': 'H3_BASE', 'H3_ESPESOR': 'H3_ESPESOR', 'H3_DESCRIPCION': 'H3_DESCRIPCION', 'H4_USCS': 'H4_USCS', 'H4_TECHO': 'H4_TECHO', 'H4_BASE': 'H4_BASE', 'H4_ESPESOR': 'H4_ESPESOR', 'H4_DESCRIPCION': 'H4_DESCRIPCION', 'H5_USCS': 'H5_USCS', 'H5_TECHO': 'H5_TECHO', 'H5_BASE': 'H5_BASE', 'H5_ESPESOR': 'H5_ESPESOR', 'H5_DESCRIPCION': 'H5_DESCRIPCION', 'N_UTM': 'N_UTM', 'E_UTM': 'E_UTM', 'ELEV_UTM': 'ELEV_UTM', 'OBSERVACIONES GENERALES': 'OBSERVACIONES GENERALES', 'FOTO_CALICATA1': 'FOTO_CALICATA1', 'FOTO_CALICATA2': 'FOTO_CALICATA2', 'FOTO_CALICATA3': 'FOTO_CALICATA3', 'FIGURA_COLUMNA_ESTRAT': 'FIGURA_COLUMNA_ESTRAT', 'COTA_TERRENO_TOPO': 'COTA_TERRENO_TOPO', 'COTA_TERRENO_DRON': 'COTA_TERRENO_DRON', 'H1_ES_ARTIFICIAL': 'H1_ES_ARTIFICIAL', 'H2_ES_ARTIFICIAL': 'H2_ES_ARTIFICIAL', 'H3_ES_ARTIFICIAL': 'H3_ES_ARTIFICIAL', 'H4_ES_ARTIFICIAL': 'H4_ES_ARTIFICIAL', 'H5_ES_ARTIFICIAL': 'H5_ES_ARTIFICIAL', 'H1_PRESENCIA_RELLENO': 'H1_PRESENCIA_RELLENO', 'H2_PRESENCIA_RELLENO': 'H2_PRESENCIA_RELLENO', 'H3_PRESENCIA_RELLENO': 'H3_PRESENCIA_RELLENO', 'H4_PRESENCIA_RELLENO': 'H4_PRESENCIA_RELLENO', 'H5_PRESENCIA_RELLENO': 'H5_PRESENCIA_RELLENO', 'H1_PRESENCIA_AGUA': 'H1_PRESENCIA_AGUA', 'H2_PRESENCIA_AGUA': 'H2_PRESENCIA_AGUA', 'H3_PRESENCIA_AGUA': 'H3_PRESENCIA_AGUA', 'H4_PRESENCIA_AGUA': 'H4_PRESENCIA_AGUA', 'H5_PRESENCIA_AGUA': 'H5_PRESENCIA_AGUA', 'H1_MATERIAL_DOMINANTE': 'H1_MATERIAL_DOMINANTE', 'H2_MATERIAL_DOMINANTE': 'H2_MATERIAL_DOMINANTE', 'H3_MATERIAL_DOMINANTE': 'H3_MATERIAL_DOMINANTE', 'H4_MATERIAL_DOMINANTE': 'H4_MATERIAL_DOMINANTE', 'H5_MATERIAL_DOMINANTE': 'H5_MATERIAL_DOMINANTE', 'H1_SE_TOMA_MUESTRA': 'H1_SE_TOMA_MUESTRA', 'H2_SE_TOMA_MUESTRA': 'H2_SE_TOMA_MUESTRA', 'H3_SE_TOMA_MUESTRA': 'H3_SE_TOMA_MUESTRA', 'H4_SE_TOMA_MUESTRA': 'H4_SE_TOMA_MUESTRA', 'H5_SE_TOMA_MUESTRA': 'H5_SE_TOMA_MUESTRA', });
lyr_sondaje_4.set('fieldAliases', {'fid': 'fid', 'NOMBRE': 'NOMBRE', 'H1_USCS': 'H1_USCS', 'H1_TECHO': 'H1_TECHO', 'H1_BASE': 'H1_BASE', 'H1_ESPESOR': 'H1_ESPESOR', 'H1_DESCRIPCION': 'H1_DESCRIPCION', 'H2_USCS': 'H2_USCS', 'H2_TECHO': 'H2_TECHO', 'H2_BASE': 'H2_BASE', 'H2_ESPESOR': 'H2_ESPESOR', 'H2_DESCRIPCION': 'H2_DESCRIPCION', 'COLUMNA_ESTRAT': 'COLUMNA_ESTRAT', });
lyr_remociones_masa_5.set('fieldAliases', {'fid': 'fid', 'id_remocion': 'id_remocion', 'tipo_movimiento': 'tipo_movimiento', 'estado_actividad': 'estado_actividad', 'material_involucrado': 'material_involucrado', 'rasgo_observado': 'rasgo_observado', 'pendiente_ladera': 'pendiente_ladera', 'volumen_estimado': 'volumen_estimado', 'profundidad_estimada': 'profundidad_estimada', 'afectacion_antropica': 'afectacion_antropica', 'nivel_saturacion': 'nivel_saturacion', 'litologia_base': 'litologia_base', 'fecha_evento': 'fecha_evento', 'observaciones': 'observaciones', 'foto1': 'foto1', 'foto2': 'foto2', 'foto3': 'foto3', 'foto4': 'foto4', 'forma': 'forma', 'compacidad': 'compacidad', 'control_estructural': 'control_estructural', 'tipo_estructura': 'tipo_estructura', 'condicion_estructura': 'condicion_estructura', 'influencia_estructura': 'influencia_estructura', 'drenaje': 'drenaje', 'presencia_agua': 'presencia_agua', 'intervencion': 'intervencion', 'tipo_intervencion': 'tipo_intervencion', 'se_toma_muestra': 'se_toma_muestra', 'id_muestra': 'id_muestra', 'descripcion_litologia': 'descripcion_litologia', 'descripcion_movimiento': 'descripcion_movimiento', 'descripcion_estructura': 'descripcion_estructura', });
lyr_afloramientos_6.set('fieldAliases', {'fid': 'fid', 'id_afloramiento': 'id_afloramiento', 'unidad_geologica': 'unidad_geologica', 'tipo_roca': 'tipo_roca', 'litologia_principal': 'litologia_principal', 'litologia_secundaria': 'litologia_secundaria', 'litologia_terciaria': 'litologia_terciaria', 'textura': 'textura', 'grado_cementacion': 'grado_cementacion', 'tipo_cementacion': 'tipo_cementacion', 'grado_meteorizacion': 'grado_meteorizacion', 'resistencia_campo': 'resistencia_campo', 'estructura_sedimentaria': 'estructura_sedimentaria', 'contenido_fosil': 'contenido_fosil', 'observaciones': 'observaciones', 'foto1': 'foto1', 'foto2': 'foto2', 'foto3': 'foto3', 'foto4': 'foto4', 'se_toma_muestra': 'se_toma_muestra', 'id_muestra': 'id_muestra', 'descripcion_terreno': 'descripcion_terreno', });
lyr_Deslindesprediales_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Edificioproyectado_2.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', });
lyr_calicata_3.set('fieldImages', {'fid': 'TextEdit', 'IDENTIFICA': 'TextEdit', 'AÑO': 'TextEdit', 'H1_USCS': 'TextEdit', 'H1_TECHO': 'TextEdit', 'H1_BASE': 'TextEdit', 'H1_ESPESOR': 'TextEdit', 'H1_DESCRIPCION': 'TextEdit', 'H2_USCS': 'TextEdit', 'H2_TECHO': 'TextEdit', 'H2_BASE': 'TextEdit', 'H2_ESPESOR': 'TextEdit', 'H2_DESCRIPCION': 'TextEdit', 'H3_USCS': 'TextEdit', 'H3_TECHO': 'TextEdit', 'H3_BASE': 'TextEdit', 'H3_ESPESOR': 'TextEdit', 'H3_DESCRIPCION': 'TextEdit', 'H4_USCS': 'TextEdit', 'H4_TECHO': 'TextEdit', 'H4_BASE': 'TextEdit', 'H4_ESPESOR': 'TextEdit', 'H4_DESCRIPCION': 'TextEdit', 'H5_USCS': 'TextEdit', 'H5_TECHO': 'TextEdit', 'H5_BASE': 'TextEdit', 'H5_ESPESOR': 'TextEdit', 'H5_DESCRIPCION': 'TextEdit', 'N_UTM': 'TextEdit', 'E_UTM': 'TextEdit', 'ELEV_UTM': 'TextEdit', 'OBSERVACIONES GENERALES': 'TextEdit', 'FOTO_CALICATA1': 'ExternalResource', 'FOTO_CALICATA2': 'ExternalResource', 'FOTO_CALICATA3': 'ExternalResource', 'FIGURA_COLUMNA_ESTRAT': 'ExternalResource', 'COTA_TERRENO_TOPO': 'TextEdit', 'COTA_TERRENO_DRON': 'TextEdit', 'H1_ES_ARTIFICIAL': 'CheckBox', 'H2_ES_ARTIFICIAL': 'CheckBox', 'H3_ES_ARTIFICIAL': 'CheckBox', 'H4_ES_ARTIFICIAL': 'CheckBox', 'H5_ES_ARTIFICIAL': 'CheckBox', 'H1_PRESENCIA_RELLENO': 'CheckBox', 'H2_PRESENCIA_RELLENO': 'CheckBox', 'H3_PRESENCIA_RELLENO': 'CheckBox', 'H4_PRESENCIA_RELLENO': 'CheckBox', 'H5_PRESENCIA_RELLENO': 'CheckBox', 'H1_PRESENCIA_AGUA': 'CheckBox', 'H2_PRESENCIA_AGUA': 'CheckBox', 'H3_PRESENCIA_AGUA': 'CheckBox', 'H4_PRESENCIA_AGUA': 'CheckBox', 'H5_PRESENCIA_AGUA': 'CheckBox', 'H1_MATERIAL_DOMINANTE': 'TextEdit', 'H2_MATERIAL_DOMINANTE': 'TextEdit', 'H3_MATERIAL_DOMINANTE': 'TextEdit', 'H4_MATERIAL_DOMINANTE': 'TextEdit', 'H5_MATERIAL_DOMINANTE': 'TextEdit', 'H1_SE_TOMA_MUESTRA': 'CheckBox', 'H2_SE_TOMA_MUESTRA': 'CheckBox', 'H3_SE_TOMA_MUESTRA': 'CheckBox', 'H4_SE_TOMA_MUESTRA': 'CheckBox', 'H5_SE_TOMA_MUESTRA': 'CheckBox', });
lyr_sondaje_4.set('fieldImages', {'fid': 'TextEdit', 'NOMBRE': 'TextEdit', 'H1_USCS': 'TextEdit', 'H1_TECHO': 'TextEdit', 'H1_BASE': 'TextEdit', 'H1_ESPESOR': 'TextEdit', 'H1_DESCRIPCION': 'TextEdit', 'H2_USCS': 'TextEdit', 'H2_TECHO': 'TextEdit', 'H2_BASE': 'TextEdit', 'H2_ESPESOR': 'TextEdit', 'H2_DESCRIPCION': 'TextEdit', 'COLUMNA_ESTRAT': 'ExternalResource', });
lyr_remociones_masa_5.set('fieldImages', {'fid': 'TextEdit', 'id_remocion': 'Range', 'tipo_movimiento': 'ValueMap', 'estado_actividad': 'ValueMap', 'material_involucrado': 'TextEdit', 'rasgo_observado': 'ValueMap', 'pendiente_ladera': 'Range', 'volumen_estimado': 'TextEdit', 'profundidad_estimada': 'TextEdit', 'afectacion_antropica': 'CheckBox', 'nivel_saturacion': 'ValueMap', 'litologia_base': 'TextEdit', 'fecha_evento': 'DateTime', 'observaciones': 'TextEdit', 'foto1': 'ExternalResource', 'foto2': 'ExternalResource', 'foto3': 'ExternalResource', 'foto4': 'ExternalResource', 'forma': 'TextEdit', 'compacidad': 'TextEdit', 'control_estructural': 'TextEdit', 'tipo_estructura': 'TextEdit', 'condicion_estructura': 'TextEdit', 'influencia_estructura': 'TextEdit', 'drenaje': 'TextEdit', 'presencia_agua': 'CheckBox', 'intervencion': 'CheckBox', 'tipo_intervencion': 'TextEdit', 'se_toma_muestra': 'CheckBox', 'id_muestra': 'TextEdit', 'descripcion_litologia': 'Range', 'descripcion_movimiento': 'Range', 'descripcion_estructura': 'Range', });
lyr_afloramientos_6.set('fieldImages', {'fid': 'TextEdit', 'id_afloramiento': 'Range', 'unidad_geologica': 'TextEdit', 'tipo_roca': 'ValueMap', 'litologia_principal': 'TextEdit', 'litologia_secundaria': 'TextEdit', 'litologia_terciaria': 'TextEdit', 'textura': 'ValueMap', 'grado_cementacion': 'ValueMap', 'tipo_cementacion': 'ValueMap', 'grado_meteorizacion': 'ValueMap', 'resistencia_campo': 'ValueMap', 'estructura_sedimentaria': 'ValueMap', 'contenido_fosil': 'TextEdit', 'observaciones': 'TextEdit', 'foto1': 'ExternalResource', 'foto2': 'ExternalResource', 'foto3': 'ExternalResource', 'foto4': 'ExternalResource', 'se_toma_muestra': 'CheckBox', 'id_muestra': 'TextEdit', 'descripcion_terreno': 'TextEdit', });
lyr_Deslindesprediales_1.set('fieldLabels', {'fid': 'inline label - visible with data', 'id': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'description': 'inline label - visible with data', 'timestamp': 'inline label - visible with data', 'begin': 'inline label - visible with data', 'end': 'inline label - visible with data', 'altitudeMode': 'inline label - visible with data', 'tessellate': 'inline label - visible with data', 'extrude': 'inline label - visible with data', 'visibility': 'inline label - visible with data', 'drawOrder': 'inline label - visible with data', 'icon': 'inline label - visible with data', });
lyr_Edificioproyectado_2.set('fieldLabels', {'fid': 'inline label - visible with data', 'nombre': 'inline label - visible with data', });
lyr_calicata_3.set('fieldLabels', {'fid': 'inline label - visible with data', 'IDENTIFICA': 'inline label - visible with data', 'AÑO': 'inline label - visible with data', 'H1_USCS': 'inline label - visible with data', 'H1_TECHO': 'inline label - visible with data', 'H1_BASE': 'inline label - visible with data', 'H1_ESPESOR': 'inline label - visible with data', 'H1_DESCRIPCION': 'inline label - visible with data', 'H2_USCS': 'inline label - visible with data', 'H2_TECHO': 'inline label - visible with data', 'H2_BASE': 'inline label - visible with data', 'H2_ESPESOR': 'inline label - visible with data', 'H2_DESCRIPCION': 'inline label - visible with data', 'H3_USCS': 'inline label - visible with data', 'H3_TECHO': 'inline label - visible with data', 'H3_BASE': 'inline label - visible with data', 'H3_ESPESOR': 'inline label - visible with data', 'H3_DESCRIPCION': 'inline label - visible with data', 'H4_USCS': 'inline label - visible with data', 'H4_TECHO': 'inline label - visible with data', 'H4_BASE': 'inline label - visible with data', 'H4_ESPESOR': 'inline label - visible with data', 'H4_DESCRIPCION': 'inline label - visible with data', 'H5_USCS': 'inline label - visible with data', 'H5_TECHO': 'inline label - visible with data', 'H5_BASE': 'inline label - visible with data', 'H5_ESPESOR': 'inline label - visible with data', 'H5_DESCRIPCION': 'inline label - visible with data', 'N_UTM': 'inline label - visible with data', 'E_UTM': 'inline label - visible with data', 'ELEV_UTM': 'inline label - visible with data', 'OBSERVACIONES GENERALES': 'inline label - visible with data', 'FOTO_CALICATA1': 'inline label - visible with data', 'FOTO_CALICATA2': 'hidden field', 'FOTO_CALICATA3': 'hidden field', 'FIGURA_COLUMNA_ESTRAT': 'inline label - visible with data', 'COTA_TERRENO_TOPO': 'inline label - visible with data', 'COTA_TERRENO_DRON': 'inline label - visible with data', 'H1_ES_ARTIFICIAL': 'inline label - visible with data', 'H2_ES_ARTIFICIAL': 'inline label - visible with data', 'H3_ES_ARTIFICIAL': 'inline label - visible with data', 'H4_ES_ARTIFICIAL': 'inline label - visible with data', 'H5_ES_ARTIFICIAL': 'inline label - visible with data', 'H1_PRESENCIA_RELLENO': 'inline label - visible with data', 'H2_PRESENCIA_RELLENO': 'inline label - visible with data', 'H3_PRESENCIA_RELLENO': 'inline label - visible with data', 'H4_PRESENCIA_RELLENO': 'inline label - visible with data', 'H5_PRESENCIA_RELLENO': 'inline label - visible with data', 'H1_PRESENCIA_AGUA': 'inline label - visible with data', 'H2_PRESENCIA_AGUA': 'inline label - visible with data', 'H3_PRESENCIA_AGUA': 'inline label - visible with data', 'H4_PRESENCIA_AGUA': 'inline label - visible with data', 'H5_PRESENCIA_AGUA': 'inline label - visible with data', 'H1_MATERIAL_DOMINANTE': 'inline label - visible with data', 'H2_MATERIAL_DOMINANTE': 'inline label - visible with data', 'H3_MATERIAL_DOMINANTE': 'inline label - visible with data', 'H4_MATERIAL_DOMINANTE': 'inline label - visible with data', 'H5_MATERIAL_DOMINANTE': 'inline label - visible with data', 'H1_SE_TOMA_MUESTRA': 'inline label - visible with data', 'H2_SE_TOMA_MUESTRA': 'inline label - visible with data', 'H3_SE_TOMA_MUESTRA': 'inline label - visible with data', 'H4_SE_TOMA_MUESTRA': 'inline label - visible with data', 'H5_SE_TOMA_MUESTRA': 'inline label - visible with data', });
lyr_sondaje_4.set('fieldLabels', {'fid': 'inline label - visible with data', 'NOMBRE': 'inline label - visible with data', 'H1_USCS': 'inline label - visible with data', 'H1_TECHO': 'inline label - visible with data', 'H1_BASE': 'inline label - visible with data', 'H1_ESPESOR': 'inline label - visible with data', 'H1_DESCRIPCION': 'inline label - visible with data', 'H2_USCS': 'inline label - visible with data', 'H2_TECHO': 'inline label - visible with data', 'H2_BASE': 'inline label - visible with data', 'H2_ESPESOR': 'inline label - visible with data', 'H2_DESCRIPCION': 'inline label - visible with data', 'COLUMNA_ESTRAT': 'inline label - visible with data', });
lyr_remociones_masa_5.set('fieldLabels', {'fid': 'inline label - visible with data', 'id_remocion': 'inline label - visible with data', 'tipo_movimiento': 'inline label - visible with data', 'estado_actividad': 'inline label - visible with data', 'material_involucrado': 'inline label - visible with data', 'rasgo_observado': 'inline label - visible with data', 'pendiente_ladera': 'inline label - visible with data', 'volumen_estimado': 'inline label - visible with data', 'profundidad_estimada': 'inline label - visible with data', 'afectacion_antropica': 'inline label - visible with data', 'nivel_saturacion': 'inline label - visible with data', 'litologia_base': 'inline label - visible with data', 'fecha_evento': 'inline label - visible with data', 'observaciones': 'inline label - visible with data', 'foto1': 'inline label - visible with data', 'foto2': 'inline label - visible with data', 'foto3': 'inline label - visible with data', 'foto4': 'inline label - visible with data', 'forma': 'inline label - visible with data', 'compacidad': 'inline label - visible with data', 'control_estructural': 'inline label - visible with data', 'tipo_estructura': 'inline label - visible with data', 'condicion_estructura': 'inline label - visible with data', 'influencia_estructura': 'inline label - visible with data', 'drenaje': 'inline label - visible with data', 'presencia_agua': 'inline label - visible with data', 'intervencion': 'inline label - visible with data', 'tipo_intervencion': 'inline label - visible with data', 'se_toma_muestra': 'inline label - visible with data', 'id_muestra': 'inline label - visible with data', 'descripcion_litologia': 'inline label - visible with data', 'descripcion_movimiento': 'inline label - visible with data', 'descripcion_estructura': 'inline label - visible with data', });
lyr_afloramientos_6.set('fieldLabels', {'fid': 'inline label - visible with data', 'id_afloramiento': 'inline label - visible with data', 'unidad_geologica': 'inline label - visible with data', 'tipo_roca': 'inline label - visible with data', 'litologia_principal': 'inline label - visible with data', 'litologia_secundaria': 'inline label - visible with data', 'litologia_terciaria': 'inline label - visible with data', 'textura': 'inline label - visible with data', 'grado_cementacion': 'inline label - visible with data', 'tipo_cementacion': 'inline label - visible with data', 'grado_meteorizacion': 'inline label - visible with data', 'resistencia_campo': 'inline label - visible with data', 'estructura_sedimentaria': 'inline label - visible with data', 'contenido_fosil': 'inline label - visible with data', 'observaciones': 'inline label - visible with data', 'foto1': 'inline label - visible with data', 'foto2': 'inline label - visible with data', 'foto3': 'inline label - visible with data', 'foto4': 'inline label - visible with data', 'se_toma_muestra': 'inline label - visible with data', 'id_muestra': 'inline label - visible with data', 'descripcion_terreno': 'inline label - always visible', });
lyr_afloramientos_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});