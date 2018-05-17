"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, Node;

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

            Node = function () {
                function Node(val) {
                    _classCallCheck(this, Node);

                    this.value = val;
                    this.edges = [];
                    this.searched = false;
                    this.parent = null;
                }

                _createClass(Node, [{
                    key: "addEdge",
                    value: function addEdge(neighbor) {
                        this.edges.push(neighbor);
                        //edges has to go both ways
                        neighbor.edges.push(this);
                    }
                }]);

                return Node;
            }();

            _export("default", Node);
        }
    };
});