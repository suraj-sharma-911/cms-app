// routes/plugins.js

const express = require('express');
const router = express.Router();
const { Plugin } = require('../models'); // Assuming Plugin model exists in models directory

// GET all plugins
router.get('/', async (req, res) => {
    try {
        const plugins = await Plugin.findAll();
        res.json(plugins);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve plugins' });
    }
});

// POST create a new plugin
router.post('/', async (req, res) => {
    try {
        const { name } = req.body;
        const plugin = await Plugin.create({ name, active: false });
        res.status(201).json(plugin);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create plugin' });
    }
});

// PUT activate a plugin
router.put('/:id/activate', async (req, res) => {
    try {
        const { id } = req.params;
        const plugin = await Plugin.findByPk(id);
        if (!plugin) return res.status(404).json({ error: 'Plugin not found' });

        plugin.active = true;
        await plugin.save();
        res.json(plugin);
    } catch (error) {
        res.status(500).json({ error: 'Failed to activate plugin' });
    }
});

// PUT deactivate a plugin
router.put('/:id/deactivate', async (req, res) => {
    try {
        const { id } = req.params;
        const plugin = await Plugin.findByPk(id);
        if (!plugin) return res.status(404).json({ error: 'Plugin not found' });

        plugin.active = false;
        await plugin.save();
        res.json(plugin);
    } catch (error) {
        res.status(500).json({ error: 'Failed to deactivate plugin' });
    }
});

module.exports = router;
