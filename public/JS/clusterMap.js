mapboxgl.accessToken =mapToken;
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/standard',
        config: {
            basemap: {
                theme: 'monochrome',
                lightPreset: 'night'
            }
        },
        center: [-103.5917, 40.6699],
        zoom: 3
    });

    map.on('load', () => {
        map.addSource('campgrounds', {
            type: 'geojson',
            generateId: true,
            data: 'campgrounds',
            cluster: true,
            clusterMaxZoom: 14, 
            clusterRadius: 50
        });

        map.addLayer({
            id: 'clusters',
            type: 'circle',
            source: 'campgrounds',
            filter: ['has', 'point_count'],
            paint: {
                'circle-color': [
                    'step',
                    ['get', 'point_count'],
                    '#51bbd6',
                    100,
                    '#f1f075',
                    750,
                    '#f28cb1'
                ],
                'circle-radius': [
                    'step',
                    ['get', 'point_count'],
                    20,
                    100,
                    30,
                    750,
                    40
                ],
                'circle-emissive-strength': 1
            }
        });

        map.addLayer({
            id: 'cluster-count',
            type: 'symbol',
            source: 'campgrounds',
            filter: ['has', 'point_count'],
            layout: {
                'text-field': ['get', 'point_count_abbreviated'],
                'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
                'text-size': 12
            }
        });

        map.addLayer({
            id: 'unclustered-point',
            type: 'circle',
            source: 'campgrounds',
            filter: ['!', ['has', 'point_count']],
            paint: {
                'circle-color': '#11b4da',
                'circle-radius': 4,
                'circle-stroke-width': 1,
                'circle-stroke-color': '#fff',
                'circle-emissive-strength': 1
            }
        });

        map.addInteraction('click-clusters', {
            type: 'click',
            target: { layerId: 'clusters' },
            handler: (e) => {
                const features = map.queryRenderedFeatures(e.point, {
                    layers: ['clusters']
                });
                const clusterId = features[0].properties.cluster_id;
                map.getSource('campgrounds').getClusterExpansionZoom(
                    clusterId,
                    (err, zoom) => {
                        if (err) return;

                        map.easeTo({
                            center: features[0].geometry.coordinates,
                            zoom: zoom
                        });
                    }
                );
            }
        });

        map.addInteraction('click-unclustered-point', {
            type: 'click',
            target: { layerId: 'unclustered-point' },
            handler: (e) => {
                const text=e.features[0].properties.popUpMarkup;
                const coordinates = e.feature.geometry.coordinates.slice();
                const mag = e.feature.properties.mag;
                const tsunami =
                    e.feature.properties.tsunami === 1 ? 'yes' : 'no';

                new mapboxgl.Popup()
                    .setLngLat(coordinates)
                    .setHTML(text)
                    .addTo(map);
            }
        });

        map.addInteraction('clusters-mouseenter', {
            type: 'mouseenter',
            target: { layerId: 'clusters' },
            handler: () => {
                map.getCanvas().style.cursor = 'pointer';
            }
        });

        map.addInteraction('clusters-mouseleave', {
            type: 'mouseleave',
            target: { layerId: 'clusters' },
            handler: () => {
                map.getCanvas().style.cursor = '';
            }
        });

        map.addInteraction('unclustered-mouseenter', {
            type: 'mouseenter',
            target: { layerId: 'unclustered-point' },
            handler: () => {
                map.getCanvas().style.cursor = 'pointer';
            }
        });

        map.addInteraction('unclustered-mouseleave', {
            type: 'mouseleave',
            target: { layerId: 'unclustered-point' },
            handler: () => {
                map.getCanvas().style.cursor = '';
            }
        });
    });
