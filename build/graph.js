"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, Graph;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            Graph = function () {
                function Graph() {
                    _classCallCheck(this, Graph);

                    this.nodes = [];
                    this.graph = {};
                    this.start = null;
                    this.end = null;
                }

                _createClass(Graph, [{
                    key: "addNode",
                    value: function addNode(n) {
                        //add node to array
                        this.nodes.push(n);
                        //node into lookup table (object)
                        var title = n.value;
                        this.graph[title] = n;
                    }
                }, {
                    key: "getNode",
                    value: function getNode(actor) {
                        return this.graph[actor];
                    }
                }, {
                    key: "setStart",
                    value: function setStart(actor) {
                        this.start = this.graph[actor];
                        return this.start;
                    }
                }, {
                    key: "setEnd",
                    value: function setEnd(actor) {
                        this.end = this.graph[actor];
                        return this.end;
                    }
                }, {
                    key: "reset",
                    value: function reset() {
                        for (var i = 0; i < this.nodes.length; i++) {
                            this.nodes[i].searched = false;
                            this.nodes[i].parent = null;
                        }
                    }
                }]);

                return Graph;
            }();

            _export("default", Graph);
        }
    };
});