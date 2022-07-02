class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        // this.adjacencyList[v2].push(v1);
    }
    bfs(start,destination){
        let q = [];
        q.push([start]);
        const result =[];
        
        while(q.length){
            let popped = q.shift();
            let lastPopped = popped[popped.length-1];
            if(lastPopped===destination){
                result.push(popped);
            }else{
                const neighbours = this.adjacencyList[lastPopped];
                for(let n of neighbours){
                    const temp = [...popped];
                    temp.push(n);
                    q.push(temp);
                }
            }
        }
        return result;
    }
}

let g = new Graph();
g.addVertex(0);
g.addVertex(1);
g.addVertex(2);
g.addVertex(3);
g.addVertex(4);


g.addEdge(0,1);
g.addEdge(0,4);
g.addEdge(0,3);

g.addEdge(1,2);
g.addEdge(1,4);
g.addEdge(1,3);
g.addEdge(2,3);
g.addEdge(3,4);
// Given in question : graph = [[1,2],[3],[3],[]] , 0<=graph[i][j]<n
// from here I know source = 0 and destination = graph.length-1

// console.log(g.bfs(0,3));
console.log(g.bfs(0,4));


// ------------------------------------------------
// OUTPUT
// ------------------------------------------------
// PS F:\pesto-submissions\p2-anil-aditya226369\Week-8> node .\assignment-8.6.js
// [ [ 0, 2, 3 ], [ 0, 1, 3 ] ]

// PS F:\pesto-submissions\p2-anil-aditya226369\Week-8> node .\assignment-8.6.js
// [
//   [ 0, 4 ],
//   [ 0, 1, 4 ],
//   [ 0, 3, 4 ],
//   [ 0, 1, 3, 4 ],
//   [ 0, 1, 2, 3, 4 ]
// ]



