L.mapbox.accessToken = 'pk.eyJ1IjoiaXNhYWNhdmlsYSIsImEiOiJjaXNoejAwMXowMDBvMnBud3FsOWFjZWl1In0.LJhyNscjlcr_ZONnc_BP_Q';
    var map = L.mapbox.map('map', 'mapbox.streets')
        .setView([19.2499700, -103.7271400], 14);
    
    L.mapbox.featureLayer().loadURL('js/rutas_colima/ruta_13.geojson').addTo(map);
    L.mapbox.featureLayer().loadURL('js/rutas_colima/ruta_13_a.geojson').addTo(map);
    