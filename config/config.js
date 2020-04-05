module.exports = {
    // DB: process.env.HOST ? process.env.HOST : 'mongodb+srv://admin:blu3Isp4ss@cluster0-3cje8.mongodb.net/pendaftar-latsar?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',
    // DB: process.env.HOST ? process.env.HOST : 'mongodb://ramadhanagindo:blu3Isp4ss@sandbox-workshop-shard-00-00-f92cd.mongodb.net:27017,sandbox-workshop-shard-00-01-f92cd.mongodb.net:27017,sandbox-workshop-shard-00-02-f92cd.mongodb.net:27017/pendaftar-latsar?authSource=admin&replicaSet=sandbox-workshop-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',
    // APP_PORT: process.env.APP_PORT ? process.env.APP_PORT : 85
    DB: process.env.HOST ? process.env.HOST : 'localhost',
    PORT: process.env.PORT ? process.env.PORT: 80
};