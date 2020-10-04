let a = { a: 2, b: '2', c: { d: 4, e: { f: 5 } } };
let b = { a: 1, b: 3, c: { d: 5, e: { f: 5, g: 7 }, h: "8i" }, h: "9ji" };

function mergeObj(a, b) {
    let ans = {};
    let inB = [];
    // console.log("a : ", a);
    // console.log("b : ", b);
    for (let i in a) {
        if (i in b) {
            let valA = a[i];
            let valB = b[i];
            inB = [...inB, i];
            // console.log(typeof valA, typeof valB);
            if (typeof valA == typeof valB) {
                if (typeof valA === "object") {
                    ans = { ...ans, [i]: mergeObj(valA, valB) }
                }
                else {
                    ans = { ...ans, [i]: valB }
                }
            } else {
                console.log("Out : ", i)
                return "Data type does not match"
            }
        } else {
            ans = { ...ans, [i]: a[i] }
        }

    }
    for (let j in b) {
        if (!inB.includes(j)) {
            ans = { ...ans, [j]: b[j] }
        }
    }
    return ans;
}

console.log("here : ", mergeObj(a, b));