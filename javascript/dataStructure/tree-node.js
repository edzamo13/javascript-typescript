function list_to_tree(list) {
  var map = {},
    node,
    roots = [],
    i;

  for (i = 0; i < list.length; i += 1) {
    map[list[i].id] = i; // initialize the map
    list[i].children = []; // initialize the children
  }

  for (i = 0; i < list.length; i += 1) {
    node = list[i];
    if (node.parentId !== "0") {
      // if you have dangling branches check that map[node.parentId] exists
      list[map[node.parentId]].children.push(node);
    } else {
      roots.push(node);
    }
  }
  return roots;
}

var entries = [
  {
    id: "12",
    parentId: "0",
    text: "Man",
    level: "1",
    children: null,
  },
  {
    id: "6",
    parentId: "0",
    text: "Boy",
    level: "2",
    children: null,
  },
  {
    id: "7",
    parentId: "12",
    text: "Other",
    level: "2",
    children: null,
  },
  {
    id: "9",
    parentId: "0",
    text: "Woman",
    level: "1",
    children: null,
  },
  {
    id: "11",
    parentId: "7",
    text: "Girl",
    level: "2",
    children: null,
  },
];

console.log(JSON.stringify(list_to_tree(entries)));
