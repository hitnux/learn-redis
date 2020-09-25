const redis = require("redis");
const client = redis.createClient();

client.on("error", (error) =>{
    console.error(error);
});

//set
client.set("path", "redis-node", (error, message) =>{
    if(error){
        console.error(error);
    }
    console.log('Message',message);
});
//get
client.get("path", (error, message) =>{
    if(error){
        console.error(error);
    }
    console.log('Message',message);
});

//del
client.del("path", (error, message) =>{
    if(error){
        console.error(error);
    }
    console.log('Del',message);
});

//exists
client.exists("path", (error, message) =>{
    if(error){
        console.error(error);
    }
    console.log('Exists',message);
});

//append
client.append("user", "Hitnux", (error, message) =>{
    if(error){
        console.error(error);
    }
    console.log('Exists',message);
    client.get("user", (er,mes)=>{
        console.log(mes);
    });
});

//All keys
client.keys("*",(er,mes)=>{
    console.log(mes);
});

client.on("message", (channel, message)=>{
    console.log(channel,"kanalından yeni:",message);
});

client.subscribe("yutpa");
