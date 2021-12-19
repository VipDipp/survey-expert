const sequelizeObject = require('../db');
const initModels = require('../models/init-models');
const sequelize = initModels(sequelizeObject);

const Organization = sequelize.Organization;
const organizationService = {
    async insert(organization) {
        const newOrganization = await Organization.create(organization);
        return newOrganization.dataValues.id;
    },

    async read(id) {
        const organization = await Organization.findByPk(id);
        return organization;
    },

    async update(id, organization) {
        await Organization.update(organization, {
            where: { id: id }
        });
    },

    async delete(id) {
        await Organization.destroy({
            where: { id: id }
        });
    },

    async selectAll() {
        const organizations = await Organization.findAll();
        return organizations;
    }
}

module.exports = organizationService;
