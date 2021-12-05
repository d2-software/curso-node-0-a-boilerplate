const funcionMiddleware = (req, res, next) => {
    const { body } = req;

    if (body.token === undefined) {
        return res.status(500).json({ error: 'No se ha enviado el token' });
    }

    if (typeof body.token !== 'string') {
        return res.status(422).json({ error: 'El token debería ser un string' });
    }

    next();
};

module.exports = {
    funcionMiddleware,
}
