export const productsFetch= (products) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(products)
        }, 2000);
    })
}