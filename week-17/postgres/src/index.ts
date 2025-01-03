import { Client } from "pg";
import express from "express";

const app = express();
app.use(express.json());

const pgClient = new Client({
    user:"neondb_owner",
    password:"oPhv2dGuCMB5",
    port:5432,
    host:"ep-square-dew-a54jhhty.us-east-2.aws.neon.tech",
    database:"neondb",
    ssl:true
});

pgClient.connect(); 


app.post('/signup',async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const city = req.body.city;
    const country = req.body.country;
    const street = req.body.street;
    const pincode = req.body.pincode;


     try{



    // const response = await pgClient.query(`INSERT INTO users (username, email, password) VALUES ('${username}',
    //     '${email}', '${password}'); `);


               // -->   // SQL injection --> 

    // const InsertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3);`

    // const response =  await pgClient.query(InsertQuery,[username,email,password]);


               // relationships -->  

    // const InsertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;`

    // const response =  await pgClient.query(InsertQuery,[username,email,password]);
    
    // console.log(response);
    
    // const user_id  = response.rows[0].id;

    // const InsertAddressQuery = `INSERT INTO addresses (city,country, street, pincode, user_id) VALUES ($1, $2, $3, $4, $5);`

    // const addressesResponse  = await pgClient.query(InsertAddressQuery,[city,country, street, pincode, user_id])


              // Transactions in SQL  -->

      const InsertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;`

      const InsertAddressQuery = `INSERT INTO addresses (city,country, street, pincode, user_id) VALUES ($1, $2, $3);`
      
      

      await pgClient.query('BEGIN');

    const response =  await pgClient.query(InsertQuery,[username,email,password]);
    
    console.log(response);
    
    const user_id  = response.rows[0].id;

    const addressesResponse  = await pgClient.query(InsertAddressQuery,[city,country, street, pincode, user_id])

       await pgClient.query('COMMIT');



     res.json({
        message: "You have signed in successfully"
     })
    
      }catch(e){
        console.log(e);
        res.json({
            message:"Error in signup!"
        })        
      }

})
 

app.listen(3000);