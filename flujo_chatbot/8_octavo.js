
const { addKeyword } = require('@bot-whatsapp/bot')

const { flujo1 } = require('../flujo_chatbot/1_primero')
const { flowPrincipal } = require('./menu')

const flowPregunta8 = addKeyword('8')

.addAnswer('Un asesor se pondrá en contacto contigo en breve. Por favor, si aún no te has registrado, selecciona la opción *1* para completar tu ingreso y así optimizar el tiempo hasta que podamos comunicarnos contigo. Es necesario que formes parte de la empresa para proceder a realizar tus pedidos.\n')

//.addAnswer('Seleccione una opción:\n')

.addAnswer([//Opción 2
    '*(1).* Quiero ingresar\n',//1
    '*(0).* Regresar al menú principal.',//2
], { capture: true }, async (ctx, { gotoFlow }) => {
    //console.log(ctx.body)
    const{flowPrincipal}=require('./menu')
    if (ctx.body === '0') {
        return gotoFlow(flowPrincipal)
    }
}, [flujo1, flowPrincipal])


module.exports = {
    flowPregunta8
}

