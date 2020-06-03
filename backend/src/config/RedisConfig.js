const redis = require('redis');

const client = redis.createClient({
    port      : process.env.REDIS_PORT,              
    host      :  process.env.REDIS_SERVER
});

client.on('connect', () => {
    console.log('connected to redis');    
} )

module.exports = client;