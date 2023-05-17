function List(contents, order) {
    const isOrdered = order != undefined || order != null;
    let symbol = '-'; // If there is no order specified, it is an unordered list
    let listContents = '';

    if (order == true) symbol = 1; // If there is an order specified, it is an ordered list

    let counter = 0;
    if (isOrdered) {
        for (const content of contents) {
            counter++;
            listContents += `${counter}. ${content}\n`;
        }
    } else {
        for (const content of contents) {
            listContents += `${symbol} ${content}\n`;
        }
    }
    return listContents;
}

export default List;
