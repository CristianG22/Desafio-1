
export const customPromiseFilter = (time, task, categoryId) => {
    return new Promise((resolve, reject) => {

        const productsFilter = task.filter((productF) => productF.category === categoryId);
        setTimeout(() => {
            categoryId ? resolve(productsFilter) : resolve(task)


        }, time)
    })
};

export const customPromiseFind = (time, task, detailId) => {
    return new Promise((resolve, reject) => {

        const productFind = task.find((productC) => productC.id === Number(detailId));
        setTimeout(() => {

            resolve(productFind)

        }, time)
    })
}