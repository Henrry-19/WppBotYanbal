
const { addKeyword, EVENTS } = require('@bot-whatsapp/bot')
const { flujo1 } = require('../flujo_chatbot/1_primero')



const flowPregunta = addKeyword('3').addAnswer('*El kit de inicio incluye productos y materiales para trabajar. Tienes opciones desde $6, $11 y $19:*', { delay: 2000 })

    .addAnswer(' 💯 *_Kit de $19: Recomendado por incluir fragancias premium valoradas en hasta $76, lo que te permite recuperar tu inversión rápidamente._*', { delay: 2000 })
    .addAnswer(' 🎉 *_Kit de $6 o $11: Ideales para comenzar con una inversión menor, con ganancias menores_*', { delay: 2000 })
    .addAnswer(' 💡 *_Recomendación: Escoge el kit de $19 para maximizar tus ganancias._*', { delay: 2000 })

    //.addAnswer(['*(1).* Quiero ingresar\n','*(0).* Regresar al menú principal'],[null,null, [flujoPrincipal]])

    .addAnswer([''
        , ''], async (ctx) => {
            console.log(Hola)
        }, [flujo1])



const  flowPregunta3 = addKeyword(['3'], { sensitive: true })

.addAnswer('*El kit de inicio incluye productos y materiales para trabajar. Tienes opciones desde $6, $11 y $19:*', { delay: 2000 })

.addAnswer(' 💯 *_Kit de $19: Recomendado por incluir fragancias premium valoradas en hasta $76, lo que te permite recuperar tu inversión rápidamente._*', { delay: 2000 })
.addAnswer(' 🎉 *_Kit de $6 o $11: Ideales para comenzar con una inversión menor, con ganancias menores_*', { delay: 2000 })
.addAnswer(' 💡 *_Recomendación: Escoge el kit de $19 para maximizar tus ganancias._*', { delay: 2000 })

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


module.exports = {
    flowPregunta3
}