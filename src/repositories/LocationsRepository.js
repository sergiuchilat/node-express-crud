const Location = require('../database/models').Location

class LocationsRepository {
    async getAll(fields = undefined) {
        return await Location.findAll({attributes: fields})
    }

    async getOne(id) {
        return await Location.findByPk(id)
    }

    async create(region) {
        return await Location.create(region)
    }

    async update(id, location) {
        const existingLocation = await Location.findByPk(id)
        if (existingLocation) {
            return await existingLocation.update(location);
        }
        return null;
    }

    async delete(id) {
        const deletedLocation = await Location.destroy({
            where: { id: id }
        })
        if (deletedLocation) {
            return {};
        }
        return null;
    }
}

module.exports = new LocationsRepository()