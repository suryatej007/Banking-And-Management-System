const express = require('express') 
const cors = require('cors') 
const {MongoClient}=require('mongodb') 
const { request, response } = require('express') 
const app = express() 
app.use(cors()) 
app.use(express.json()) 
const uri ="mongodb+srv://admin:1234@cluster0.fecmrm5.mongodb.net/ ?retryWrites=true&w=majority" 
const client = new MongoClient(uri) 
client.connect() 
const db=client.db("project") 
const col=db.collection("users") 
var customers=db.collection("customers")
app.get('/',(request,response) => { 
  response.send('This is a Server') 
}) 
 
app.post('/insert',(request,response)=>{ 
  col.insertOne(request.body) 
  console.log(request.body) 
  response.send(request.body) 
}) 
app.post('/contact',(request,response)=>{ 
  col.insertOne(request.body) 
  console.log(request.body) 
  response.send(request.body) 
}) 
app.post('/customer', async (request, response) => {
  const { cname } = request.body;
  try {
    const existingCustomer = await customers.findOne({ cname: cname });
    if (existingCustomer) {
      response.send('Customer already exists');
    } else {
      const newCustomer = await customers.insertOne(request.body);
      response.send(newCustomer);
    }
  } catch (err) {
    console.error(err);
    response.send('Error occurred while creating customer account');
  }
});


app.post('/deposit', async (req, res) => {
  const { cname, amount } = req.body;
  try {
    const customer = await customers.findOne({ cname: cname });
    if (customer) {
      const updatedCustomer = await customers.updateOne(
        { cname: cname },
        { $inc: { balance: Number(amount) } }
      );
      res.send("Amount deposited successfully");
    } else {
      res.send("Customer not found");
    }
  } catch (err) {
    console.log(err);
    res.send("Error occurred while depositing amount");
  }
});

app.post('/withdraw', async (req, res) => {
  const { cname, amount } = req.body;
  try {
    const customer = await customers.findOne({ cname: cname });
    if (customer) {
      if (customer.balance >= amount) {
        const updatedCustomer = await customers.updateOne(
          { cname: cname },
          { $inc: { balance: -1 * Number(amount) } }
        );
        res.send("Amount withdrawn successfully");
      } else {
        res.send("Insufficient balance");
      }
    } else {
      res.send("Customer not found");
    }
  } catch (err) {
    console.log(err);
    res.send("Error occurred while withdrawing amount");
  }
});

app.get('/checkbalance', async (req, res) => {
  const { cname } = req.query;
  try {
    const customer = await customers.findOne({ cname: cname });
    if (customer) {
      res.send(`Current balance for ${cname}: ${customer.balance}`);
    } else {
      res.send("Customer not found");
    }
  } catch (err) {
    console.log(err);
    res.send("Error occurred while checking balance");
  }
});

app.post('/transfer', async (req, res) => {
  const { from, to, amount } = req.body;
  try {
    const senderCustomer = await customers.findOne({ cname: from });
    const receiverCustomer = await customers.findOne({ cname: to });

    if (!senderCustomer || !receiverCustomer) {
      res.send("One or more customers not found");
      return;
    }

    if (senderCustomer.balance < Number(amount)) {
      res.send("Insufficient balance");
      return;
    }

    const session = client.startSession();
    session.startTransaction();

    try {
      const opts = { session };
      const senderUpdateResult = await customers.updateOne(
        { cname: from },
        { $inc: { balance: -Number(amount) } },
        opts
      );
      const receiverUpdateResult = await customers.updateOne(
        { cname: to },
        { $inc: { balance: Number(amount) } },
        opts
      );

      if (senderUpdateResult.modifiedCount && receiverUpdateResult.modifiedCount) {
        await session.commitTransaction();
        res.send("Amount transferred successfully");
      } else {
        await session.abortTransaction();
        res.send("Error occurred while transferring amount");
      }
    } catch (error) {
      await session.abortTransaction();
      console.log(error);
      res.send("Error occurred while transferring amount");
    } finally {
      session.endSession();
    }
  } catch (err) {
    console.log(err);
    res.send("Error occurred while transferring amount");
  }
});
 
app.get('/check',(req,res)=>{ 
 console.log(req.query); 
  async function find(){ 
    try{ 
      var result = await col.findOne({un:req.query.un}) 
   if(result===null){ 
  res.send("fail") 
   } 
   else{ 
  if(result.pw===req.query.pw){ 
   res.send("pass") 
  } 
  else{ 
   res.send("fail") 
  } 
   } 
    } 
finally{} 
  } 
  find().catch(console.dir) 
}) 

app.get('/show_all', (req,res)=>{
  customers=db.collection("customers")
  console.log(req.query)
  async function find(){
    try{
      const result=await customers.find().toArray()
      console.log(result)
      if(result == null)
      {
        res.send({"Data_Retrieval":"Fail"})
      }
      else{
        res.send(result)
      }
    }
    finally{}  
  }
  find().catch(console.dir)  
})

app.get('/show_one_stu', (req, res)=>{
  customers=db.collection("customers")
  console.log(req.query)
  async function find(){
    try{
      const result=await customers.findOne()
      console.log(result)
      if(result == null)
      {
        res.send({"Data_Retrieval":"Fail"})
      }
      else{
        res.send(result)
      }
    }
    finally{}  
  }
  find().catch(console.dir)  
})
 




app.listen(3001) 
console.log("server started") 