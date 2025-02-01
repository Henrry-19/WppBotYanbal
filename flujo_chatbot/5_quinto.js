
const { addKeyword } = require('@bot-whatsapp/bot')
const{flujo1}=require('../flujo_chatbot/1_primero')
//const{flowPrincipal}=require('../app')
const flowPregunta5 = addKeyword('5').addAnswer(' 💡 *_Sí, puedes formar tu equipo al invitar a más personas a unirse. Ganarás bonos adicionales por el desempeño de tu equipo, lo que te permitirá aumentar tus ingresos significativamente_*',{delay:2000})

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
    flowPregunta5
}

//Si deseas regresar al menu principal