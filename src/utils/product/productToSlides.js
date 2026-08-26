export const productToSlides = (product) =>
    product.images?.map((image, ind) => ({
        id: `${product.id}-${ind}`,
        image: image,
        name: product.name
    })) ?? [];