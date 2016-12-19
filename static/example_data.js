var ExampleData = {};

ExampleData.example_data = [
  {
    "children": [
      {
        "children": [
          {
            "children": [
              {
                "children": [
                  {
                    "children": [],
                    "title": "Scranton.Line #1.Wood Grinder A"
                  }
                ],
                "title": "58581f2c252d131f8d308733"
              }
            ],
            "title": "Wood Grinder A"
          },
          {
            "children": [
              {
                "children": [
                  {
                    "children": [],
                    "title": "Scranton.Line #1.Pulp Oven A"
                  }
                ],
                "title": "58581f2c252d131f8d308734"
              }
            ],
            "title": "Pulp Oven A"
          },
          {
            "children": [
              {
                "children": [
                  {
                    "children": [],
                    "title": "Scranton.Line #1.Pulp Bleacher A"
                  }
                ],
                "title": "58581f2c252d131f8d308735"
              }
            ],
            "title": "Pulp Bleacher A"
          },
          {
            "children": [
              {
                "children": [
                  {
                    "children": [],
                    "title": "Scranton.Line #1.Paper Press A"
                  }
                ],
                "title": "58581f2c252d131f8d308736"
              }
            ],
            "title": "Paper Press A"
          }
        ],
        "title": "Line #1"
      },
      {
        "children": [
          {
            "children": [
              {
                "children": [
                  {
                    "children": [],
                    "title": "Scranton.Line #2.Wood Grinder B"
                  }
                ],
                "title": "58581f2c252d131f8d308738"
              }
            ],
            "title": "Wood Grinder B"
          },
          {
            "children": [
              {
                "children": [
                  {
                    "children": [],
                    "title": "Scranton.Line #2.Pulp Oven B"
                  }
                ],
                "title": "58581f2c252d131f8d308739"
              }
            ],
            "title": "Pulp Oven B"
          },
          {
            "children": [
              {
                "children": [
                  {
                    "children": [],
                    "title": "Scranton.Line #2.Pulp Bleacher B"
                  }
                ],
                "title": "58581f2c252d131f8d30873a"
              }
            ],
            "title": "Pulp Bleacher B"
          },
          {
            "children": [
              {
                "children": [
                  {
                    "children": [],
                    "title": "Scranton.Line #2.Paper Press B"
                  }
                ],
                "title": "58581f2c252d131f8d30873b"
              }
            ],
            "title": "Paper Press B"
          }
        ],
        "title": "Line #2"
      },
      {
        "children": [],
        "title": "Wood Grinder C"
      },
      {
        "children": [],
        "title": "Pulp Oven C"
      },
      {
        "children": [],
        "title": "Pulp Bleacher C"
      },
      {
        "children": [],
        "title": "Paper Press C"
      }
    ],
    "title": "Scranton"
  },
  {
    "children": [],
    "title": "Utica"
  }
];

ExampleData.getFirstLevelData = function(nodes) {
    if (! nodes) {
        nodes = ExampleData.example_data;
    }

    var data = [];

    $.each(nodes, function() {
        var node = {
            name: this.name,
            id: this.id
        };

        if (this.children) {
            node.load_on_demand = true;
        }

        data.push(node);
    });

    return data;
}

ExampleData.getChildrenOfNode = function(node_id) {
    var result = null;

    function iterate(nodes) {
        $.each(nodes, function() {
            if (result) {
                return;
            }
            else {
                if (this.id == node_id) {
                    result = this;
                }

                if (this.children) {
                    iterate(this.children);
                }
            }
        });
    }

    iterate(ExampleData.example_data);

    return ExampleData.getFirstLevelData(result.children);
}
