'use strict';

System.register(['graph.js', 'node.js'], function (_export, _context) {
    "use strict";

    var Graph, Node;
    return {
        setters: [function (_graphJs) {
            Graph = _graphJs.default;
        }, function (_nodeJs) {
            Node = _nodeJs.default;
        }],
        execute: function () {

            fetch('../data/data.json').then(function (response) {
                return response.json();
            }).then(function (myJson) {
                var data = myJson;

                var movies = data.movies;
                var graph = new Graph();
                var listOfActors = [];
                var options = $('.list');
                for (var i = 0; i < movies.length; i++) {
                    var movie = movies[i].title;
                    var cast = movies[i].cast;
                    var movieNode = new Node(movie);
                    graph.addNode(movieNode);

                    for (var j = 0; j < cast.length; j++) {
                        var actor = cast[j];
                        var actorNode = graph.getNode(actor);
                        if (actorNode == undefined) {
                            actorNode = new Node(actor);
                        }
                        graph.addNode(actorNode);
                        movieNode.addEdge(actorNode);
                        listOfActors.push(actorNode.value);
                    }
                }
                listOfActors.sort();
                listOfActors.forEach(function (val) {
                    options.append('<option>' + val + '</option>');
                });

                var jsonPretty = JSON.stringify(data, null, '\t');
                $('.JSON').append(jsonPretty);

                options.change(function (e) {
                    graph.reset();
                    var selected = options.val();
                    bfs(selected);
                });

                function bfs(startActor) {
                    var start = graph.setStart(startActor);
                    //let start = graph.setStart('Kevin Bacon')
                    var end = graph.setEnd('Kevin Bacon');
                    console.log(graph);
                    //https://en.wikipedia.org/wiki/Breadth-first_search#Pseudocode
                    var queue = [];
                    start.searched = true;
                    queue.push(start);
                    while (queue.length > 0) {
                        var current = queue.shift();
                        if (current == end) {
                            console.log("founds it");
                            break;
                        }
                        var edges = current.edges;
                        for (var i = 0; i < edges.length; i++) {
                            var neighbor = edges[i];
                            if (!neighbor.searched) {
                                neighbor.searched = true;
                                neighbor.parent = current;
                                queue.push(neighbor);
                            }
                        }
                    }
                    var path = [];
                    path.push(end);
                    var next = end.parent;
                    while (next != null) {
                        path.push(next);
                        next = next.parent;
                    }
                    var text = "";
                    for (var _i = path.length - 1; _i >= 0; _i--) {
                        var n = path[_i];
                        text += n.value;
                        if (_i != 0) {
                            text += ' &#8658; ';
                        }
                    }
                    $('.solution').html(text);
                }
            });
        }
    };
});