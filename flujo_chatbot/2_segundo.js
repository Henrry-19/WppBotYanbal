const { delay } = require('@whiskeysockets/baileys')
const{flujo1}=require('../flujo_chatbot/1_primero')
//const{flowPrincipal}=require('./menu')
const { addKeyword } = require('@bot-whatsapp/bot')

const flowPregunta2 = addKeyword('2').addAnswer('*Al unirte, obtendrás los siguientes beneficios:*',{delay:2000})

.addAnswer(' 💯 *_Ganancias atractivas: Desde 25%, 30% y 35% de acuerdo al volumen de venta._*',{delay:2000})
.addAnswer(' 🎉 *_Premios e incentivos: Viajes, bonos y reconocimientos._*',{delay:2000})
.addAnswer(' 🤩 *_Capacitación y apoyo: Herramientas digitales y guías exclusivas._*',{delay:2000})
.addAnswer(' 👀 *_Flexibilidad: Tú decides tu horario y ritmo de trabajo._*\n',{delay:2000})

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
    flowPregunta2
}