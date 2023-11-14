let myGraph2 = document.getElementById('myGraph2');
let years = data2.year;
let currentYearIndex = 0;

function updateGraph() {
    let update = {
        x: [[], [], [], []],
        y: [[], [], [], []]
    };
    
    for(let i = 0; i <= currentYearIndex; i++) {
        labels2.forEach((label, index) => {
            update.x[index].push(years[i]);
            update.y[index].push(data2[label][i]);
        });
    }
    
    Plotly.update(myGraph2, update);
    
    if (currentYearIndex < years.length - 1) {
        currentYearIndex++;
        setTimeout(updateGraph, 100);
    }
}

const labels2 = ["median", "average", "men_average", "women_average"];
const colors2 = ['#EB773B', '#E6B049', '#E68B29', '#E5AD82'];

let traces2 = [];
labels2.forEach((label, index) => {
    let trace = {
        mode: "lines+markers",
        type: "scatter",
        name: label,
        x: [],
        y: [],
        line: { color: colors2[index] }
    };
    traces2.push(trace);
});

let layout2 = {
    title: {
        text: 'Median and Avg Hourly Wages in the USA (1973-2022)',
        font: {
            size: 25,
            color: '#BD6332'
        }
    },
    xaxis: {
        title: {
            text: 'Year',
            font: {
                color: '#6E391D'
            }
        },
        tickvals: years,
        ticktext: years,
        tickfont: {
            color: '#6E391D' 
        },
        side: 'bottom'
    },
    yaxis: {
        title: {
            text: 'Hourly Wages (USD)',
            font: {
                color: '#6E391D'
            }
        },
        tickfont: {
            color: '#6E391D'
        }
    }
};

Plotly.newPlot(myGraph2, traces2, layout2);

updateGraph();

