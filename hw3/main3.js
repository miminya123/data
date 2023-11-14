let myGraph3 = document.getElementById('myGraph3');

let trace1 ={
  type :"pie",
  labels :[],
  values :[],
  domain :{
    row:0,
    column:0,  
  },
  showlegend: true, 
  name: 'Dataset 1',
  marker: {
    colors: ['#EB773B', '#E6B049', '#E68B29', '#E5AD82', '#FBC15E', '#8EBA42', '#FFB5B8']
  }
};

for (let x = 0; x < evaluation_ratio_1.length; x++) {
  trace1.labels[x] = evaluation_ratio_1[x]["name"]; 
  trace1.values[x] = evaluation_ratio_1[x]["count"];
}


let trace2 = {
  type: "pie",
  labels: [], 
  values: [],
  domain: {
      row: 0,
      column: 1
  },
  showlegend: true,
  name: 'Dataset 2',
  legendgroup: 'group2',
  marker: {
    colors: ['#FAC057', '#FAD357', '#FAA857', '#E78AC3', '#A6D854', '#FFD92F', '#E5C494']
  }
};

for(let x=0;x<evaluation_ratio_2.length;x++){
    trace2.labels[x]= evaluation_ratio_2[x]["name"];
    trace2.values[x]= evaluation_ratio_2[x]["count"];
}


let trace3 = {
  type: "pie",
  labels: [], 
  values: [],
  domain: {
      row: 1,
      column: 0
  },
  showlegend: true,
  name: 'Dataset 3',
  legendgroup: 'group3',
  marker: {
    colors: ['#FA837D', '#FAC57D', '#FCE9BB','#FA983E' ]
  }
};



for(let x=0;x<evaluation_ratio_3.length;x++){
   trace3.labels[x]= evaluation_ratio_3[x]["name"];
   trace3.values[x]= evaluation_ratio_3[x]["count"];
}


let data3 = [trace1, trace2, trace3];

let layout3 = {
    margin: {
        t: 50, 
        l: 10
    },
    grid: {
        rows: 2,
        columns: 2
    },
    title: "台灣原住民語分布比較"
};

Plotly.newPlot(myGraph3, data3, layout3);
