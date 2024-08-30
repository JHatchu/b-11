const assetDao = require('../dao/assetdao');

class assetService {
    async addLiquidAsset(uid, type, details) {
        try {
            const result = await assetDao.addLiquidAsset(uid, type, details);
            return result;
        } catch (error) {
            console.error("Error in assetService addLiquidAsset:", error);
            throw error;
        }
    }

    async addNonLiquidAsset(uid, type, details) {
        try {
            const result = await assetDao.addNonLiquidAsset(uid, type, details);
            return result;
        } catch (error) {
            console.error("Error in assetService addNonLiquidAsset:", error);
            throw error;
        }
    }

    async getLiquidAssets(uid) {
        try {
            const assets = await assetDao.getLiquidAssets(uid);
            return assets;
        } catch (error) {
            console.error("Error in assetService getLiquidAssets:", error);
            throw error;
        }
    }

    async getNonLiquidAssets(uid) {
        try {
            const assets = await assetDao.getNonLiquidAssets(uid);
            return assets;
        } catch (error) {
            console.error("Error in assetService getNonLiquidAssets:", error);
            throw error;
        }
    }
}

module.exports = new assetService();
