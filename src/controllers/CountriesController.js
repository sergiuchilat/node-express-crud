const Country = require('../database/models').Country
const Region = require('../database/models').Region

class CountriesController{
    async getAll(request, response){
        try{
            return response.status(200).json(await Country.findAll())
        } catch(error){
            return response.status(500).json({error})
        }
    }

    async getOne(request, response){
        try{
            const country = await Country.findByPk(request.params.id)
            if(country){
                return response.status(200).json(country)
            }
            return response.status(404).json()
        } catch(error){
            return response.status(500).json({error})
        }
    }

    async create(request, response){
        try{
            return response.status(200).json(await Country.create(request.body));
        } catch(error){
            return response.status(400).json({error})
        }
    }

    async update(request, response){
        try{
            const existingCountry = await Country.findByPk(request.params.id)
            if(existingCountry){
                return response.status(200).json(await existingCountry.update(request.body));
            }
            return response.status(404).json();
        } catch(error){
            return response.status(400).json({error})
        }
    }

    async delete(request, response){
        try{
            const deletedCountry = await Country.destroy({
                where: {id: request.params.id}
            })
            if(deletedCountry){
                return response.status(200).json({});
            }
            return response.status(404).json();
        } catch(error){
            return response.status(400).json({error})
        }
    }

    async getRegions(request, response){
        try{
            return response.status(200).json(await Region.findAll({
                where: {
                    'countryId': request.params.id
                }
            }))
        } catch(error){
            return response.status(500).json({error})
        }
    }
}

module.exports = new CountriesController()