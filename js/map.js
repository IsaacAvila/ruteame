L.mapbox.accessToken = 'pk.eyJ1IjoiaXNhYWNhdmlsYSIsImEiOiJjaXNoejAwMXowMDBvMnBud3FsOWFjZWl1In0.LJhyNscjlcr_ZONnc_BP_Q';
    var map = L.mapbox.map('map', 'mapbox.streets')
        .setView([19.2499700, -103.7271400], 13);

    var toggleableLayerIds = [ '1', '10', '11', '13', '13_a', '14', '15', '17', '19', '20', '21', '22', '24', '24_a', '27_a',
        '28', '29', '3', '4', '5', '7', '9', '9_a', 'a', 'b', 'cardona' ];
    var jsons = [];
    var pos = 0;
    for (var i = 0; i < toggleableLayerIds.length; i++) {
        jsons[i] =  L.mapbox.featureLayer().loadURL('js/rutas_colima/ruta_'+toggleableLayerIds[i]+'.geojson');            
    };

    for (var i = 0; i < toggleableLayerIds.length; i++) {
        var id = toggleableLayerIds[i];

        var link = document.createElement('a');
        link.href = '#';
        link.className = '';
        link.textContent = id;

        link.onclick = function (e) {
            var clickedLayer = this.textContent;
            e.preventDefault();
            e.stopPropagation();
            for (var j = 0; j < jsons.length; j++) {
                if(toggleableLayerIds[j] === this.textContent) {
                    pos = j;
                }
            };
            if (map.hasLayer(jsons[pos])) {
                map.removeLayer(jsons[pos]);
                this.className = '';
            } else {
                this.className = 'active';
                map.addLayer(jsons[pos]);
            }
        };

        var layers = document.getElementById('menu');
        layers.appendChild(link);
    }