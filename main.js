import { LinkedList } from "./linkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("fish");

console.log(list.toString());

console.log("contains turtle: " + list.contains("turtle"));

console.log("-------");
list.pop();



console.log(list.at(2));
console.log(list.size);

console.log("contains turtle: " + list.contains("turtle"));

console.log(list.find("elephant"));

list.insertAt("elephant", 4);
console.log(list.toString());
console.log("-------");
console.log(list.find("elephant"));
list.removeAt(0);
console.log("-------");
console.log(list.toString());
console.log("-------");
list.removeAt(5);
console.log(list.toString());
console.log("-------");
list.removeAt(2);
console.log(list.toString());