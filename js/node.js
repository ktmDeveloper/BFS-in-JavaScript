export default class Node {

    constructor(val) {
        this.value = val;
        this.edges = [];
        this.searched = false;
        this.parent = null;
      }

      addEdge(neighbor) {
        this.edges.push(neighbor);
        //edges has to go both ways
        neighbor.edges.push(this);
    }

}