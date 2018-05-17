import Graph from 'graph.js';
import Node from 'node.js';

fetch('../data/data.json').then(function(response) {
    return response.json();
})
.then(function(myJson) {
   let data = myJson;

    let movies = data.movies;
    let graph = new Graph();
    let listOfActors =[];
    let options = $('.list')
    for (let i = 0; i < movies.length; i++) {
        let movie = movies[i].title;
        let cast = movies[i].cast;
        let movieNode = new Node(movie);
        graph.addNode(movieNode);
        
        for (let j = 0; j < cast.length; j++) {
            let actor = cast[j];
            let actorNode = graph.getNode(actor);
            if (actorNode == undefined) {
            actorNode = new Node(actor)
            }
            graph.addNode(actorNode);
            movieNode.addEdge(actorNode);
            listOfActors.push(actorNode.value);
        }
    }
    listOfActors.sort();
    listOfActors.forEach(function(val){
        options.append('<option>' + val + '</option>');
    })


    var jsonPretty = JSON.stringify(data, null, '\t');
    $('.JSON').append(jsonPretty)


    options.change(function (e) {
        graph.reset();
        let selected = options.val();
        bfs(selected);
    })


    function bfs(startActor) {
        let start = graph.setStart(startActor)
        //let start = graph.setStart('Kevin Bacon')
        let end = graph.setEnd('Kevin Bacon')
        console.log(graph)
        //https://en.wikipedia.org/wiki/Breadth-first_search#Pseudocode
        let queue = [];
        start.searched = true;
        queue.push(start);
        while (queue.length > 0) {
            let current = queue.shift();
            if (current == end) {
            console.log("founds it")
            break;
            }
            let edges = current.edges;
            for (var i = 0; i < edges.length; i++) {
            let neighbor = edges[i];
            if (!neighbor.searched) {
                neighbor.searched = true;
                neighbor.parent = current;
                queue.push(neighbor);
            }
            }
        }
        let path = [];
        path.push(end);
        var next = end.parent;
        while (next != null) {
            path.push(next);
            next = next.parent;
        }
        let text = "";
        for (let i = path.length - 1; i >= 0; i--) {
            let n = path[i];
            text += n.value;
            if (i != 0) {
            text += ' &#8658; '
            }
        }
        $('.solution')
            .html(text);
    }

});





  