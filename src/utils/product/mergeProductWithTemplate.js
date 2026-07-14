export const mergeProductWithTemplate = (product, templates) => {
    const temp = templates.find(item => item.id === product?.templateId);

    if (!temp) return null;

    const result = structuredClone(temp);
    result.id = product.id;

    for (const key in result?.specs) {
        const group = result.specs[key]

        group.attributes.forEach(item => {
            if (item.source === "product") {
                item.value = product.specs?.[item.key] ?? null;
            }
        })
    }

    for (const key in product) {
        if (!(key in result)) result[key] = product[key];
    }
    return result;
}