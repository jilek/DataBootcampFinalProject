function toggleCountry(feature, state, new_color) {
    console.log(`feature=${feature.properties.ADMIN}`);
    let geometry_type = feature.geometry.type;
    if (geometry_type == "Polygon") {
        let lon_lat_coords = feature.geometry.coordinates[0];
        console.log(`Polygon coords=${lon_lat_coords}`);
        let lat_lon_coords = [];
        lon_lat_coords.forEach((coord) => {
            lat_lon_coords.push([coord[1], coord[0]]);
        });
        console.log(`===coordinates=${lat_lon_coords}`);
        if (state == "on") {
            var polygon = L.polygon(lat_lon_coords, { color: new_color }).addTo(map);
        }
        if (state == "off") {
            var polygon = L.polygon(lat_lon_coords, { color: new_color }).remove(map);
        }
    }
    else if (geometry_type == "MultiPolygon") {
        var polygons = [];
        let ccount = 0;
        let shapes = feature.geometry.coordinates;
        var polygon = Object;
        shapes.forEach((shape) => {
            lon_lat_coords = shape[0];
            let lat_lon_coords = [];
            lon_lat_coords.forEach((coord) => {
                lat_lon_coords.push([coord[1], coord[0]]);
            });
            console.log(`MultiPolygon ${ccount} coords=${lat_lon_coords}`);
            ccount += 1;
            if (state == "on") {
                L.polygon(lat_lon_coords, { color: new_color }).addTo(map);
                //polygons.push(polygon);
            }
            if (state == "off") {
                L.polygon(lat_lon_coords, { color: new_color }).remove(map);
            }
        });
    }
    else {
        console.log(`ERROR: unknown geometry_type={geometry_type}`);
    }
}
function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");

    // Create a style for the lines.
    let myStyle = {
        color: "#0000ff",
        fillColor: "#ffffff",
        bubblingMouseEventa: true,
        weight: 1
    };
    let myStyle_highlight = {
        color: "#0000ff",
        fillColor: "#ff0000",
        bubblingMouseEventa: true,
        weight: 1
    };


    d3.json("countries.geojson").then(function (data) {
        console.log(data);
        function polystyle(feature) {
            return {
                fillColor: 'blue',
                weight: 4,
                opacity: 1,
                color: 'white',
                fillOpacity: 0.7
            }
        }
        L.geoJson(data, {
            style: myStyle,
            onEachFeature: function (feature, layer) {
                layer.bindPopup("<h3>Country: " + "foo");
            }
        }).addTo(map);

        var features = data.features;
        console.log(`features=${features}`)
        features.forEach((feature) => {
            if (feature.properties.ADMIN == "United States of America") {
                console.log(`===============Before toggle on======================`)
                toggleCountry(feature, "on", "black");
                console.log(`===============After toggle on======================`)

                console.log(`=======================Before toggle off=====================`)
                setTimeout(function () {
                    toggleCountry(feature, "on", "magenta");
                    console.log(`=============================After toggle off==============================`)
                }, 3000);
            }

            if (feature.properties.ADMIN == "Ghana") {
                toggleCountry(feature, "on", "yellow");
            }
            //if (feature.properties.ADMIN == "United States of America" || feature.properties.ADMIN == "Ghana") {
            // console.log(`feature=${feature.properties.ADMIN}`);
            // let geometry_type = feature.geometry.type;
            // if (geometry_type == "Polygon") {
            //   let lon_lat_coords = feature.geometry.coordinates[0];
            //   console.log(`Polygon coords=${lon_lat_coords}`);
            //   let lat_lon_coords = [];
            //   lon_lat_coords.forEach((coord) => {
            //     lat_lon_coords.push([coord[1], coord[0]]);
            //   });
            //   console.log(`===coordinates=${lat_lon_coords}`);
            //   var polygon = L.polygon(lat_lon_coords, { color: 'magenta' }).addTo(map);
            // }
            // else if (geometry_type == "MultiPolygon") {
            //   var polygons = [];
            //   let ccount = 0;
            //   let shapes = feature.geometry.coordinates;
            //   var polygon = Object;
            //   shapes.forEach((shape) => {
            //     lon_lat_coords = shape[0];
            //     let lat_lon_coords = [];
            //     lon_lat_coords.forEach((coord) => {
            //       lat_lon_coords.push([coord[1], coord[0]]);
            //     });
            //     console.log(`MultiPolygon ${ccount} coords=${lat_lon_coords}`);
            //     ccount += 1;
            //     polygon = L.polygon(lat_lon_coords, { color: 'green' }).addTo(map);
            //     polygons.push(polygon);
            //   });
            // }
            // else {
            //   console.log(`ERROR: unknown geometry_type={geometry_type}`);
            // }
            //}
        });
    });

    // Use the list of sample names to populate the select options
    d3.json("flavors_of_cacao_with_index.json").then((data) => {

        //var sampleNames = data.index; // an array
        //var indexMap = data.index; // a dictionary
        let company_keys = Object.keys(data.Company);
        let company_values = Object.values(data.Company);
        let bean_bar_names = Object.values(data.Bean_Origin_or_Bar_Name);
        let REFs = Object.values(data.REF);
        let bean_types = Object.values(data.Bean_Type);

        company_keys.forEach((key) => {
            company = company_values[key];
            bar_name = bean_bar_names[key];
            bar_ref = REFs[key];
            bean_type = bean_types[key];
            selector
                .append("option")
                .text(`${key}: ${company}: ${bar_name}: ${bar_ref}: ${bean_type}`)
                .property("value", key);
        });

        // Use the first sample from the list to build the initial plots
        var firstSample = 0;
        buildCharts(firstSample);
        buildMetadata(firstSample);
    });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
    // Fetch new data each time a new sample is selected
    buildMetadata(newSample);
    buildCharts(newSample);
}

//FIXME
//See: https://gis.stackexchange.com/questions/78069/how-do-i-set-the-fillcolor-of-polygons-in-leaflet-js-dynamically#93987
//polygon.setStyle({fillColor: '#0000FF'});

// Demographics Panel 
function buildMetadata(sample) {
    d3.json("flavors_of_cacao_with_index.json").then((data) => {
        //var metadata = data.Company[sample];
        //var indexMap = data.index; // a dictionary
        let company_keys = Object.keys(data.Company);
        let company_values = Object.values(data.Company);
        let bean_bar_names = Object.values(data.Bean_Origin_or_Bar_Name);
        let REFs = Object.values(data.REF);
        let review_dates = Object.values(data.Review_Date);
        let cocoa_percents = Object.values(data.Cocoa_Percent);
        let locations = Object.values(data.Company_Location);
        let ratings = Object.values(data.Rating);
        let bean_types = Object.values(data.Bean_Type);
        let bean_origins = Object.values(data.Broad_Bean_Origin);
        console.log(`HERE2: sample=${sample}`);

        metadata = {
            "id": sample,
            "company": company_values[sample],
            "Bean_Origin_or_Bar_Name": bean_bar_names[sample],
            "REF": REFs[sample],
            "Review_Date": review_dates[sample],
            "Cocoa_Percent": cocoa_percents[sample],
            "Company_Location": locations[sample],
            "Rating": ratings[sample],
            "Bean_Type": bean_types[sample],
            "Broad_Bean_Origin": bean_origins[sample]
        };

        // Filter the data for the object with the desired sample number
        //var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        //var result = resultArray[0];
        // Use d3 to select the panel with id of `#sample-metadata`
        var PANEL = d3.select("#sample-metadata");

        // Use `.html("") to clear any existing metadata
        PANEL.html("");

        // Use `Object.entries` to add each key and value pair to the panel
        // Hint: Inside the loop, you will need to use d3 to append new
        // tags for each key-value in the metadata.
        //Object.entries(result).forEach(([key, value]) => {
        //  PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
        //});
        Object.entries(metadata).forEach(([key, value]) => {
            PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
        });

    });
}

// 1. Create the buildCharts function.
function buildCharts(sample) {
    // 2. Use d3.json to load and retrieve the flavors_of_cacao.json file 
    d3.json("flavors_of_cacao_with_index.json").then((data) => {
        // 3. Create a variable that holds the samples array. 
        let ratings = Object.values(data.Rating);

        // 4. Create a variable that filters the samples for the object with the desired sample number.
        //var sampleArray = samples.filter(sampleObj => sampleObj.id == sample);

        //  5. Create a variable that holds the first sample in the array.
        //thisSample = sampleArray[0];
        //console.log(`thisSample=${thisSample}`);

        //  // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
        //  var otu_ids = thisSample["otu_ids"];
        //  var otu_labels = thisSample["otu_labels"];
        //  var sample_values = thisSample["sample_values"];
        //  //console.log(`otu_ids=${otu_ids}`);
        //  //console.log(`otu_labels=${otu_labels}`);
        //  //console.log(`sample_values=${sample_values}`);


        //  // 7. Create the yticks for the bar chart.
        //  // Hint: Get the the top 10 otu_ids and map them in descending order  
        //  //  so the otu_ids with the most bacteria are last. 

        //  var yticks = otu_ids.slice(0, 10).reverse().map(val => `OTU ${val}`);
        //  var xticks = sample_values.slice(0, 10).reverse();
        //  var labels = otu_labels.slice(0, 10).reverse();
        //  //console.log(`yticks=${yticks}`);

        //  // 8. Create the trace for the bar chart. 
        //  var barData = [
        //    {
        //      x: xticks,
        //      y: yticks,
        //      text: labels,
        //      type: "bar",
        //      orientation: "h"
        //    }
        //  ];
        //  // 9. Create the layout for the bar chart. 
        //  var barLayout = {
        //    title: "Top 10 Bacteria Cultures Found",
        //  };

        //  // 10. Use Plotly to plot the data with the layout. 
        //  Plotly.newPlot("bar", barData, barLayout);

        //  // 1. Create the trace for the bubble chart.
        //  var bubbleData = [
        //    {
        //      x: otu_ids,
        //      y: sample_values,
        //      text: otu_labels,
        //      mode: "markers",
        //      marker: {
        //        size: sample_values,
        //        color: otu_ids,
        //        //colorscale: [[0, 'rgb(200, 255, 200)'], [1, 'rgb(0, 100, 0)']],
        //        //colorscale: "Greys",
        //        // CLOSE colorscale: "YlGnBu",
        //        //colorscale: "Greens",
        //        //colorscale: "YlOrRd",
        //        //colorscale: "Bluered",
        //        //colorscale: "RdBu",
        //        //colorscale: "Reds",
        //        //colorscale: "Blues",
        //        //colorscale: "Picnic",
        //        // GOOD colorscale: "Rainbow",
        //        //colorscale: "Portland",
        //        //colorscale: "Jet",
        //        //colorscale: "Hot",
        //        //colorscale: "Blackbody",
        //        colorscale: "Earth",
        //        //colorscale: "Electric",
        //        //colorscale: "Viridis",
        //      },
        //    }
        //  ];

        //  // 2. Create the layout for the bubble chart.
        //  var bubbleLayout = {
        //    title: "Bacteria Cultures per Sample",
        //    xaxis: { title: "OTU ID" },
        //    //coloraxis: { autocolorscale: true },
        //    hovermode: "closest"
        //  };

        //  // 3. Use Plotly to plot the data with the layout.
        //  Plotly.newPlot("bubble", bubbleData, bubbleLayout);


        //  // 1. Create a variable that filters the metadata array for the object with the desired sample number.
        //  var metadata = data.metadata;

        //  // 4. Create a variable that filters the samples for the object with the desired sample number.
        //  var metadataArray = metadata.filter(metadataObj => metadataObj.id == sample);

        //  // Create a variable that holds the first sample in the array.

        //  // 2. Create a variable that holds the first sample in the metadata array.
        //  thisMetadata = metadataArray[0];

        //  // Create variables that hold the otu_ids, otu_labels, and sample_values.
        //  var otu_ids = thisMetadata["otu_ids"];
        //  var otu_labels = thisMetadata["otu_labels"];
        //  var sample_values = thisMetadata["sample_values"];

        //  // 3. Create a variable that holds the washing frequency.
        //  var wfreq = thisMetadata["wfreq"];
        var rating = ratings[sample];

        // 4. Create the trace for the gauge chart.
        var gaugeData = [
            {
                value: rating,
                title: { text: "Rating" },
                type: "indicator",
                mode: "gauge+number",
                gauge: {
                    axis: { range: [null, 5], tickwidth: 1, tickmode: "array", tickvals: [0, 2, 4, 6, 8, 10] },
                    bar: { color: "black" },
                    steps: [
                        { range: [0, 1], color: "red" },
                        { range: [1, 2], color: "orange" },
                        { range: [2, 3], color: "yellow" },
                        { range: [3, 4], color: "olive" },
                        { range: [4, 5], color: "darkgreen" },
                    ]
                }
            }
        ];

        // 5. Create the layout for the gauge chart.
        var gaugeLayout = {
            title: "Chocolate Bar Rating",
            bar: { color: "black" }
        };

        // 6. Use Plotly to plot the gauge data and layout.
        Plotly.newPlot("gauge", gaugeData, gaugeLayout);

    });
}
