const checking = "aundefined";
const unword = "undefined"

console.log(checking.includes("apple"));

if (checking.includes(unword)) {
    console.log("it containes undefined");
} else if (!checking.includes("undefined")) {
    console.log("it doesn't contains undefined")
}