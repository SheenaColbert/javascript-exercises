const getTheTitles = function(books) {
    const titles = books.map(findTitles);
    return titles
};
let findTitles = function(books) {
return books.title
}
// Do not edit below this line
module.exports = getTheTitles;

