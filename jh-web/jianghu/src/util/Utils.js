export const dynamicImport = (moduleName) => {
    return import(moduleName).catch(error => {
        // console.log(`加载错误，模块：${moduleName}`, error)
        throw error;
    });
}
