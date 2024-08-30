CREATE DATABASE asset_manager;



CREATE TABLE user_master(
    uid INT PRIMARY KEY,
    fname VARCHAR(255) NOT NULL,
    lname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL);

    CREATE TABLE liquid_assets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    uid INT,
    type ENUM('stocks', 'bonds', 'mutualFunds', 'cryptocurrencies', 'cash', 'bankDeposits', 'moneyMarket') NOT NULL,
    details JSON,  
    FOREIGN KEY (uid) REFERENCES user_master(uid) ON DELETE CASCADE
);

CREATE TABLE non_liquid_assets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    uid INT,
    type ENUM('realEstate', 'land', 'buildings', 'commercialSpaces', 'jewels') NOT NULL,
    details JSON, 
    FOREIGN KEY (uid) REFERENCES user_master(uid) ON DELETE CASCADE
);
CREATE TABLE bank_deposits (
    bank_deposit_id INT AUTO_INCREMENT PRIMARY KEY,
    liquid_asset_id INT,CREATE TABLE cryptocurrencies (
    cryptocurrency_id INT AUTO_INCREMENT PRIMARY KEY,
    liquid_asset_id INT,
    name VARCHAR(255),
    ticker VARCHAR(255),
    type VARCHAR(255),
    contract VARCHAR(255),
    details TEXT,
    bought_price DECIMAL(10, 2),
    quantity DECIMAL(10, 2),
    FOREIGN KEY (liquid_asset_id) REFERENCES liquid_assets(id) ON DELETE CASCADE
);

    account_no VARCHAR(255),
    bank_name VARCHAR(255),
    account_type VARCHAR(255),
    deposit_amount DECIMAL(10, 2),
    interest_rate DECIMAL(5, 2),
    compounding_frequency VARCHAR(255),
    FOREIGN KEY (liquid_asset_id) REFERENCES liquid_assets(id) ON DELETE CASCADE
);
CREATE TABLE commercial_spaces (
    commercial_space_id INT AUTO_INCREMENT PRIMARY KEY,
    non_liquid_asset_id INT,
    type VARCHAR(255),
    size VARCHAR(255),
    name VARCHAR(255),
    location VARCHAR(255),
    purchase_price DECIMAL(10, 2),
    purchase_date DATE,
    FOREIGN KEY (non_liquid_asset_id) REFERENCES non_liquid_assets(id) ON DELETE CASCADE
);
CREATE TABLE stocks (
    stock_id INT AUTO_INCREMENT PRIMARY KEY,
    liquid_asset_id INT,
    name VARCHAR(255),
    quantity INT,
    bought_price DECIMAL(10, 2),
    FOREIGN KEY (liquid_asset_id) REFERENCES liquid_assets(id) ON DELETE CASCADE
);
CREATE TABLE mutual_funds (
    mutual_fund_id INT AUTO_INCREMENT PRIMARY KEY,
    liquid_asset_id INT,
    name VARCHAR(255),
    type VARCHAR(255),
    management_company VARCHAR(255),
    amount_invested DECIMAL(10, 2),
    FOREIGN KEY (liquid_asset_id) REFERENCES liquid_assets(id) ON DELETE CASCADE
)


mysql> CREATE TABLE bonds (
    ->     bond_id INT AUTO_INCREMENT PRIMARY KEY,
    ->     liquid_asset_id INT,
    ->     name VARCHAR(255),
    ->     issuer VARCHAR(255),
    ->     type VARCHAR(255),
    ->     bought_price DECIMAL(10, 2),
    ->     id_no VARCHAR(255),
    ->     issued_date DATE,
    ->     maturity_date DATE,
    ->     FOREIGN KEY (liquid_asset_id) REFERENCES liquid_assets(id) ON DELETE CASCADE
    -> );


mysql> CREATE TABLE jewels (
    ->     jewel_id INT AUTO_INCREMENT PRIMARY KEY,
    ->     non_liquid_asset_id INT,
    ->     name VARCHAR(255),
    ->     description TEXT,
    ->     weight DECIMAL(10, 2),
    ->     bought_price DECIMAL(10, 2),
    ->     purchase_date DATE,
    ->     bill_no VARCHAR(255),
    ->     material_type VARCHAR(255),
    ->     FOREIGN KEY (non_liquid_asset_id) REFERENCES non_liquid_assets(id) ON DELETE CASCADE
    -> );
\

mysql> CREATE TABLE land (
    ->     land_id INT AUTO_INCREMENT PRIMARY KEY,
    ->     non_liquid_asset_id INT,
    ->     type VARCHAR(255),
    ->     location VARCHAR(255),
    ->     purchase_price DECIMAL(10, 2),
    ->     purchase_date DATE,
    ->     FOREIGN KEY (non_liquid_asset_id) REFERENCES non_liquid_assets(id) ON DELETE CASCADE);