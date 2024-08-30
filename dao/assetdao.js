const pool = require('../db');

class assetDao {
    async addLiquidAsset(uid, type, details) {
        try {
            const [result] = await pool.query(
                "INSERT INTO liquid_assets (uid, type, details) VALUES (?, ?, ?)",
                [uid, type, JSON.stringify(details)]
            );
            return { id: result.insertId };
        } catch (error) {
            console.error("Error adding liquid asset:", error);
            throw error;
        }
    }

    async addNonLiquidAsset(uid, type, details) {
        try {
            const [result] = await pool.query(
                "INSERT INTO non_liquid_assets (uid, type, details) VALUES (?, ?, ?)",
                [uid, type, JSON.stringify(details)]
            );
            return { id: result.insertId };
        } catch (error) {
            console.error("Error adding non-liquid asset:", error);
            throw error;
        }
    }

    async getLiquidAssets(uid) {
        try {
            const [rows] = await pool.query(
                "SELECT * FROM liquid_assets WHERE uid = ?",
                [uid]
            );
            return rows;
        } catch (error) {
            console.error("Error retrieving liquid assets:", error);
            throw error;
        }
    }

    async getNonLiquidAssets(uid) {
        try {
            const [rows] = await pool.query(
                "SELECT * FROM non_liquid_assets WHERE uid = ?",
                [uid]
            );
            return rows;
        } catch (error) {
            console.error("Error retrieving non-liquid assets:", error);
            throw error;
        }
    }
}

module.exports = new assetDao();
