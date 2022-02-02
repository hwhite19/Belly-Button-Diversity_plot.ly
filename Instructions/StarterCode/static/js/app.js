

// function that updates the dashboard

// function that populates the meta data

// function that builds the graphs

// function that initializes the dashboard
function initialize()
{


    // access the dropdown selector from the index.html file
    var select = d3.select("#selDataset");

    // use d3.json inorder to get the data
    d3.json("samples.json").then((data) => {
        let sampleNames = data.names;
        console.log(sampleNames)
    });
}

// call the intialize function
initialize();