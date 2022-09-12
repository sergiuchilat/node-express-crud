const CountriesRepository = require('../repositories/CountriesRepository')
const RegionsRepository = require('../repositories/RegionsRepository')

class CountriesService {
    async getAll(fields = undefined) {
        return await CountriesRepository.getAll(fields)
    }

    async getOne(id) {
        return await CountriesRepository.getOne(id)
    }

    async create(country) {
        return await CountriesRepository.create(country)
    }

    async update(id, country) {
        const existingCountry = await CountriesRepository.getOne(id)
        if (existingCountry) {
            return await existingCountry.update(country);
        }
        return null;
    }

    async delete(id) {
        const deletedCountry = await CountriesRepository.destroy({
            where: { id: id }
        })
        if (deletedCountry) {
            return {};
        }
        return null;
    }

    async getRegions(countryId) {
        return await RegionsRepository.getAllOfCountry(countryId);
    }
}

module.exports = new CountriesService()