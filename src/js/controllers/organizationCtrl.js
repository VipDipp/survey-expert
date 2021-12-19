const organizationSrv = require('../services/organizationSrv');

const organizationController = {
    async insert(req, res) {
        const name = req.body["Name"];
        const createdAt = req.body["Creating date"];
        const description = req.body["Description"];
        const address = req.body["Adress"];
        const creatorId = req.body["Creator_Id"];

        const newId = await organizationSrv.insert({
            "Name": name,
            "Creating date": createdAt,
            "Description": description,
            "Adress": address,
            "Creator_Id": creatorId
        });

        res.status(201).send(`Organization added with id = ${newId}`);
    },

    async read(req, res) {
        const id = req.params.id;
        const organization = await organizationSrv.read(id);
        res.status(200).send(organization)
    },

    async update(req, res) {
        const id = req.body["id"];
        const name = req.body["Name"];
        const createdAt = req.body["Creating date"];
        const description = req.body["Description"];
        const address = req.body["Adress"];
        const creatorId = req.body["Creator_Id"];

        await organizationSrv.update(id, {
            "Name": name,
            "Creating date": createdAt,
            "Description": description,
            "Adress": address,
            "Creator_Id": creatorId
        });

        res.status(200).send(`Organization where id = ${id} was updated`);
    },

    async delete(req, res) {
        const id = req.params.id;
        await organizationSrv.delete(id);
        res.status(200).send(`Organization where id = ${id} deleted`);
    },

    async selectAll(req, res) {
        const organizations = await organizationSrv.selectAll();
        res.status(200).send(organizations);
    }
}

module.exports = organizationController;
