var config = {};

config.mongoURI = {
  development: `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds125871.mlab.com:25871/cs-collab`,
  test: 'mongodb://dbadmin:dbadmin1@ds127841.mlab.com:27841/ca-collab-test'
};

module.exports = config;