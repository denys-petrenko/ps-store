export const createCategoriesTree = (data) => {
    const tree = [];
    const map = {};

    data.forEach(cat => {
        map[cat.id] = { ...cat, children: [] }
    })

    data.forEach(cat => {
        cat.parentId
            ? map[cat.parentId].children.push(map[cat.id])
            : tree.push(map[cat.id]);
    })

    return tree;
}