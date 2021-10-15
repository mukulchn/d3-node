const express = require('express');
const app = express();
const port = 8080;



//url handler
app.get('/', (req, res) => {

    const product = {
        title: "The office DVD",
        price: 25.99  
      };
      const json = JSON.stringify(product);
      res.setHeader('content-type', 'application/json');
      res.end(json);
})


//http listener
app.listen(port, ()=>{
    console.log(`http://127.0.0.1:${port}`)
});

