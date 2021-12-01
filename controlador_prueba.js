const postPrueba = (req, res) => {
    const { body } = req;
    console.log(body);

    res.json({ ...req.body, prueba: 'Esto es una prueba' });
};

module.exports = {
    postPrueba,
}
