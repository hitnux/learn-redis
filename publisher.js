const redis = require("redis");
const client = redis.createClient();

client.publish("yutpa", "Publisher.js uzerinden mesaj atildi", (er,ok)=>{
    console.log("Yutpa kanalına mesaj:",ok)
});