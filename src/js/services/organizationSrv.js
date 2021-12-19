const sequelizeObject = require('../db');
const initModels = require('../models/init-models');
const sequelize = initModels(sequelizeObject);

const Organization = sequelize.Organization;
const organizationService = {
    async insert(task) {
        const newOrganization = await Organization.create(task);
        return newOrganization.dataValues.id;
    },

    async getById(id) {
        const organization = await Organization.findByPk(id);
        return organization;
    },

    async update(id, organization) {
        await Organization.update(organization, {
            where: { id: id }
        });
    },

    async deleteById(id) {
        await Organization.destroy({
            where: { id: id }
        });
    },

    async getAll() {
        const organizations = await Organization.findAll();
        return organizations;
    }
}

module.exports = organizationService;
