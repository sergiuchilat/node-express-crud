const RegionsRepository = require('../repositories/RegionsRepository')
const LocationsRepository = require('../repositories/LocationsRepository')

class RegionsService {
    async getAll(fields = undefined) {
        return await RegionsRepository.getAll(fields)
    }

    async getOne(id) {
        return await RegionsRepository.getOne(id)
    }

    async create(region) {
        return await RegionsRepository.create(region)
    }

    async update(id, region) {
        const existingRegion = await RegionsRepository.getOne(id)
        if (existingRegion) {
            return await existingRegion.update(region);
        }
        return null;
    }

    async delete(id) {
        const deletedRegion = await RegionsRepository.destroy({
            where: { id: id }
        })
        if (deletedRegion) {
            return {};
        }
        return null;
    }

    async getLocations(regionId) {
        return await LocationsRepository.getAll(regionId)
    }
}

module.exports = new RegionsService()