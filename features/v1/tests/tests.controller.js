const asyncFunctionTest = async () => {
    throw new Error('la promesa no está resuelta');
    return Promise.resolve('a');
};

const getTest = (req, res) => {
    res.json({ msg: 'Hello World! TEST.' });
};

const postTest = async (req, res, next) => {
    const { body } = req;
    console.log(body);

    try {
        const a = await asyncFunctionTest();
        console.log(a);
    } catch (e) {
        console.log('Ha ocurrido un error asíncrono');
        next(e);
        return;
    }

    res.json(req.body);
};

module.exports = {
    getTest,
    postTest,
}
