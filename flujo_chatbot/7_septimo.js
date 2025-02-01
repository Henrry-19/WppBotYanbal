
const { addKeyword } = require('@bot-whatsapp/bot')

const flowPregunta7 = addKeyword('7').addAnswer(' 💡 *_Con gusto te conectaremos con un asesor especializado!_*',{delay:2000})

.addAnswer(['*_Uno de nuestros expertos se pondrá en contacto contigo para responder tus preguntas y brindarte la orientación que necesitas._*'])

.addAnswer([//Opción 2
    '_Si deseas regresar al menú principal, digita:_ *0*\n',//1
    '*(0).* Regresar al menú principal.',//2
], { capture: true }, async (ctx, { gotoFlow }) => {
    //console.log(ctx.body)
    const{flowPrincipal}=require('./menu')
    if (ctx.body === '0') {
        return gotoFlow(flowPrincipal)
    }
})


module.exports={
    flowPregunta7
}

