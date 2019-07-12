const accountSid = 'ACc2b9a0570e21448b1855090625c25aef'; 
const authToken = '[AuthToken]'; 
const client = require('twilio')(accountSid, authToken); 
 
client.messages 
      .create({ 
         body: 'Your Yummy Cupcakes Company order of 1 dozen frosted cupcakes has shipped and should be delivered on July 10, 2019. Details: http://www.yummycupcakes.com/ TEST NODE JS', 
         from: 'whatsapp:+14155238886',       
         to: 'whatsapp:+6281381804141' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();