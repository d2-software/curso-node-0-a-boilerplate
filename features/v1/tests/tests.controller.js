const getTest = (req, res) => {
    res.json({ msg: 'Hello World! TEST.' });
};

const postTest = (req, res) => {
    const { body } = req;
    console.log(body);

    res.json(req.body);
};

module.exports = {
    getTest,
    postTest,
}
