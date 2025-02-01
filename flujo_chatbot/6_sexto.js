
const { addKeyword} = require('@bot-whatsapp/bot')
const{flujo1}=require('../flujo_chatbot/1_primero')


const path = require('path');

const fileUrl = 'https://raw.githubusercontent.com/Henrry-19/srea/refs/heads/version_07/static/img/cluster.png'


  
const flowPregunta6 = addKeyword('6').addAnswer('*_¡Con gusto! En breve te la enviamos. Gracias por tu paciencia._*',
    
    {

        delay:1000
    },
        async(ctx)=>{
            console.log('archivo')
        }
    )
   
.addAnswer('¡Aquí tienes nuestro catálogo! Esperamos que lo disfrutes.\n',{delay:2000})

.addAnswer('Catálogo',
    {
         media:fileUrl
        ,delay:2000})

.addAnswer([//Opción 2
    '*(1).* Quiero ingresar\n',//1
    '*(0).* Regresar al menú principal.',//2
], { capture: true }, async (ctx, { gotoFlow }) => {
    //console.log(ctx.body)
    const{flowPrincipal}=require('./menu')
    if (ctx.body === '0') {
        return gotoFlow(flowPrincipal)
    }
}, [flujo1])


module.exports={
    flowPregunta6
}

