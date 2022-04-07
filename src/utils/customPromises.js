let conditionOk = true;

const customPromise = (time,task) => {
    return new Promise((resolve,reject) =>{

        setTimeout(() => {
            if (conditionOk) {
                resolve(task);
            } else {
                reject ('Error');
            }

        },time)
    })
}

export default customPromise;