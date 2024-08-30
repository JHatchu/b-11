const express = require('express');
const router = express.Router();
const assetService = require('../service/assetservice');

// Add liquid asset
router.post('/liquid', async (req, res) => {
    const { uid, type, details } = req.body;
    try {
        const result = await assetService.addLiquidAsset(uid, type, details);
        res.status(201).json(result);
        console.log("result",result);
    } catch (error) {
        console.error("Error in assetRouter addLiquidAsset:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Add non-liquid asset
router.post('/nonLiquid', async (req, res) => {
    const { uid, type, details } = req.body;
    try {
        const result = await assetService.addNonLiquidAsset(uid, type, details);
        res.status(201).json(result);
    } catch (error) {
        console.error("Error in assetRouter addNonLiquidAsset:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Get liquid assets by user ID
router.get('/liquid/:uid', async (req, res) => {
    const { uid } = req.params;
    try {
        const assets = await assetService.getLiquidAssets(uid);
        res.json(assets);
    } catch (error) {
        console.error("Error in assetRouter getLiquidAssets:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Get non-liquid assets by user ID
router.get('/non-liquid/:uid', async (req, res) => {
    const { uid } = req.params;
    try {
        const assets = await assetService.getNonLiquidAssets(uid);
        res.json(assets);
    } catch (error) {
        console.error("Error in assetRouter getNonLiquidAssets:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
