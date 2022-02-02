


// function that populates the meta data
function demoInfo(sample)
{
    //console.log(sample);

    // use d3.json inorder to get the data
    d3.json("samples.json").then((data) => {
        // grab all of the metadata
        let metaData = data.metadata;
        //console.log(metaData)

        // filter based on the value of the sample ( should return 1 result based on the dataset)
        let result = metaData.filter(sampleResult => sampleResult.id == sample);
        //console.log(result)

        // access index 0 from the array
        let resultData = result[0];
        console.log(resultData);

        // use Object.entries to get the value key pairs
        Object.entries(resultData).forEach(([key, value]) =>{
            // add to the sample data / demographics section
            d3.select("#sample-metadata")
                .append("h5").text("${key}: ${value}");
        });
    });
}

// function that builds the graphs

// function that initializes the dashboard
function initialize()
{

    //let data = d3.json("samples.json");
    //console.log(data);

    // access the dropdown selector from the index.html file
    var select = d3.select("#selDataset");

    // use d3.json inorder to get the data
    d3.json("samples.json").then((data) => {
        let sampleNames = data.names; // made an array of just the names
        console.log(sampleNames)

        // use a foreach in order to create option for each sample in
        // the selector
        sampleNames.forEach((sample) => {
            select.append("option")
                .text(sample)
                .property("value", sample);
        });

        // when initialized, pass in the information for the first sample
        let sample1 = sampleNames[0];

        // call the function to build the metadata
        demoInfo(sample1);
    });

    
}

// function that updates the dashboard
function optionChanged(item)
{
    // print the item for now
    console.log(item);
}

// call the intialize function
initialize();