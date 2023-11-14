let myGraph1 = document.getElementById('myGraph1');

const labels = ["France","Germany","Liechtenstein","Spain"];
const colors = ['#EB773B', '#E6B049', '#E68B29', '#E5AD82'];

let traces = [];
labels.forEach((label, index) => {
    let trace = {
        mode: "lines+markers",
        type: "bar",
        name: label,
        x: [label],  // x 軸上的國家名
        y: [data[label]["TOTAL IMMIGRANTS(IN THOUSANDS)"]],  // 對應國家的數據
        marker: { color: colors[index] }
    };
    traces.push(trace);
});

let layout = {
    title: {
        text: 'Immigration Trends and Population in Europe 2022',
        font: {
            size: 25,
            color: '#BD6332'
        }
    },
    xaxis: {
        title: {
            text: 'Countries',
            font: {
                color: '#6E391D'
            }
        },
        tickvals: labels,
        ticktext: labels,
        tickfont: {
            color: '#6E391D'
        },
        side: 'bottom'
    },
    yaxis: {
        title: {
            text: 'TOTAL IMMIGRANTS(IN THOUSANDS)',
            font: {
                color: '#6E391D'
            }
        },
        tickfont: {
            color: '#6E391D'
        }
    }
};

Plotly.newPlot(myGraph1, traces, layout);


