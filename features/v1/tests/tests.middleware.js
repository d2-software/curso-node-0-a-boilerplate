const consoleLog = (req, res, next) => {
    console.log('Estoy en test');
    next();
};

module.exports = {
    consoleLog,
}
