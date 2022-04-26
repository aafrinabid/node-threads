const cluster=require('cluster');
 

if(cluster.isMaster){
cluster.fork()
console.log('first');
}else{
    console.log('1,2,3,4,5')
    const express=require('express');
    const app=express()
    function doWork(duration){
        const start=Date.now();
        while(Date.now()-start<duration){}
    }
    
    app.get('/',(req,res)=>{
    doWork(5000)
        res.send('hiiii babu baby is here to meet you')
    })
    
    
    app.listen(4000,()=>{
        console.log('listening at 3000 and hell0o from the server side')
    })
}

