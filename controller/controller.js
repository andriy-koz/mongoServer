const { Cat } = require('../models/model')
const { Computer } = require('../models/computadoras');

const vistaUno = (req, res) => {
    res.render('index', { title: 'Express' });
}

const vistaGatitos = async (req, res) => {
    const gatitos = await Cat.find()
    res.json({ gatitos })
}

const crearGatito = async (req, res) => {
    const kitty = new Cat({ name: req.params.name });
    await kitty.save()
    console.log('meow')
    res.json({ msg: 'meow' })
}

module.exports = { vistaUno, crearGatito, vistaGatitos }