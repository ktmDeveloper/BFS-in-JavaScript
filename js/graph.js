export default class Graph {

    constructor() {
        this.nodes = [];
        this.graph = {};
        this.start = null;
        this.end = null;
      }

    addNode(n) {
    //add node to array
    this.nodes.push(n)
    //node into lookup table (object)
    let title = n.value;
    this.graph[title] = n;
    }
    getNode(actor) {
    return this.graph[actor];
    }
    setStart(actor) {
    this.start = this.graph[actor];
    return this.start;
    }
    setEnd(actor) {
    this.end = this.graph[actor];
    return this.end;
    }
    reset() {
        for(var i = 0; i < this.nodes.length; i++){
            this.nodes[i].searched = false;
            this.nodes[i].parent = null;
        }
    }

}
