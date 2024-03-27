let collection = [];

// Write the queue functions below.
// Do not use built-in Array Methods.
function print() {
    return collection;
}

function size() {
    return collection.length;
}

module.exports = {
    collection,
    print,
    enqueue,
    dequeue,
    front,
    size,
    isEmpty
};