class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    bfs(start,destination){
        let queue = [start];
        const result =[];
        const visited = [];
        let flag= false;
        let currVertex;
        
        while(queue.length && !flag){
            currVertex = queue.shift();
            result.push(currVertex);
            this.adjacencyList[currVertex].forEach(item=>{
                if(!visited[item]){
                    visited[item] = true;
                    // console.log("item: "+item);
                    if(item===destination){
                        queue = [];
                        return flag = true;
                    }
                    queue.push(item);
                }
            });
        }
        return flag;
    }
}

let g = new Graph();
g.addVertex(0);
g.addVertex(1);
g.addVertex(2);

g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,2);
console.log(g.bfs(0,2));


// ------------------------------------------------
// OUTPUT
// ------------------------------------------------
// PS F:\pesto-submissions\p2-anil-aditya226369\Week-8> node .\assignment-8.4.js    
// true



