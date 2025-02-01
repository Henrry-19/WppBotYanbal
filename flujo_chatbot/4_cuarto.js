
const { addKeyword } = require('@bot-whatsapp/bot')
const{flujo1}=require('../flujo_chatbot/1_primero')
//const{flowPrincipal}=require('../app')
const flowPregunta4 = addKeyword('4').addAnswer(' 💡 *_En Yanbal no hay cuotas mínimas de ventas. Tú decides cuánto quieres ganar según el tiempo y esfuerzo que dediques. Además, siempre tendrás apoyo y estrategias para mejorar tus resultados._*',{delay:2000})

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
    flowPregunta4
}

