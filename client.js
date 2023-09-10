const Client = require('bitcoin-core');

const options = {
    host: 'blockchain.oss.unist.hr',
    username: 'student',
    password: 'IhIskjGukNz9bRpWJL0FBNXmlSBd1pS5AtJdG1zfavLaICBuP4VDPEPMu67ql7U3',
    port: 8332,
    "accept": "application/json"
}

module.exports = new Client(options);