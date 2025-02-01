
const { addKeyword } = require('@bot-whatsapp/bot')
const { flujo1 } = require('../flujo_chatbot/1_primero')


//const path = require('path');

const fileUrl = 'https://henrry-19.github.io/WppBotYanbal/ECU_2025_C2.pdf'


const flowPregunta6 = addKeyword('6').addAnswer('*_¡Con gusto! En breve te la enviamos. Gracias por tu paciencia._*',

    {

        delay: 1000
    },
    async (ctx) => {
        console.log('archivo')
    }
)

    .addAnswer('¡Aquí tienes nuestro catálogo! Esperamos que lo disfrutes.\n', { delay: 2000 })

    .addAnswer('Catálogo',
        {
            media: fileUrl
        })

    .addAnswer('Esperamos que disfrutes nuestras promociones. Si deseas realizar un pedido, por favor *escríbenos y con gusto te guiaremos en el proceso*. Gracias por elegirnos.'
        , { delay: 2000 })

    .addAnswer([//Opción 2
        '*(1).* Quiero ingresar\n',//1
        '*(2).* Quiero pasar pedido\n',//2
        '*(0).* Regresar al menú principal.',//0
    ], { capture: true }, async (ctx, { gotoFlow }) => {
        //console.log(ctx.body)
        const { flowPrincipal } = require('./menu')
        if (ctx.body === '0') {
            return gotoFlow(flowPrincipal)
        }

        const { flowPregunta8 } = require('./8_octavo')
        if (ctx.body === '2') {
            return gotoFlow(flowPregunta8)
        }
    }, [flujo1])


module.exports = {
    flowPregunta6
}

