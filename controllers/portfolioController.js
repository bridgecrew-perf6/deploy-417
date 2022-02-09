const { Portfolios } = require('../db/models')

class PortfolioController {


  async getAllPortfolio(req, res) {
    try {
      const { id } = req.params
      const portfolio = await Portfolios.findAll({ where: { profil_id: Number(id) } })
      if (portfolio) {
        res.json({ portfolio })
      } else {
        res.json('Пожалуйста, дополните информацию о себе')
      }
      // res.sendStatus(200)
    } catch (e) {
      console.log(e);
    }
  }

  async createPortfolio(req, res) {
    console.log(req.body)
    try {
      const { id } = req.params
      const portfolio = await Portfolios.create({ ...req.body, profil_id: Number(id) })
      res.json({ portfolio })
    } catch (e) {
      console.log(e);
    }
  }

}


module.exports = new PortfolioController()
