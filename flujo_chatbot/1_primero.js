/**
 * Inportaciones
 */
const { addKeyword } = require('@bot-whatsapp/bot')
//const { delay } = require('@whiskeysockets/baileys')

//const path = require('path');//Obtener la ruta absoluta

//const REGEX_FECHA_ANOS = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;



const confRegistro = addKeyword('').addAnswer('✅ ¡Gracias por tu información! Estamos procesando tu registro y pronto recibirás un correo con los siguientes pasos para unirte oficialmente a Yanbal.', {
    delay: 2000
})

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

//Pregunta 7
const preg7 = addKeyword('').addAnswer('*7.* ¿Cuáles es tu correo electrónico?', null, null, [confRegistro], {
    delay: 2000
})


//Pregunta 6
const preg6 = addKeyword('').addAnswer('*6.* ¿Cuál es tu número de celular? (Asegúrate de que sea correcto para recibir notificaciones y contactos.)', {
    delay: 2000
}, null, [preg7])



//Pregunta 5
const preg5 = addKeyword('').addAnswer('*5.* ¿Cuál es la fecha de emisión de tu cédula? (DD/MM/AAAA)', { delay: 2000 }, null, [preg6])



// Pregunta 4 (Fecha de nacimiento)

const preg4 = addKeyword('').addAnswer('*4.* ¿Cuál es tu fecha de nacimiento? (DD/MM/AAAA)', { delay: 2000 }, async (ctx, { gotoFlow }) => {
    const fechaNacimiento = ctx.body; // La respuesta del usuario (la fecha ingresada)
    console.log(fechaNacimiento)
},[preg5])
   
   

// Función para validar la fecha
const validarFecha = (fecha) => {
    return REGEX_FECHA_ANOS.test(fecha);
};


//Pregunta 3
const preg3 = addKeyword('').addAnswer('*3.* ¿Cuál es tu número de cédula?', { delay: 2000 }, null, [preg4])
//Pregunta 2
const preg2 = addKeyword('').addAnswer('*2.* ¿Cuál es tu dirección completa? (Incluye provincia, ciudad, calles principales, número de casa y una referencia: al lado de qué, frente a qué, o cerca de algún punto de interés como una tienda, escuela o parque.)'
    , { delay: 2000 }, null, [preg3])
//Pregunta 1
const flujo1 = addKeyword('1')
    .addAnswer('*Formulario de registro*\n', { sensitive:true,delay: 2000 })
    .addAnswer('¡Perfecto! Para registrar tu cuenta como consultor(a) Yanbal, necesito algunos datos básicos. Por favor, responde a las siguientes preguntas.', { delay: 2000 })
    .addAnswer(['*1.* ¿Cuál es tu nombre completo?'], {
        capture: true,
    }, null, [preg2])

// Aquí se captura la respuesta del nombre, luego avanzamos a la siguiente pregunta
//.addAnswer('Gracias por responder2')


const flowPregunta1 = addKeyword('1').addAnswer(['*_Ingresar a Yanbal es fácil._*\n'
    , 'Solo necesitas registrarte como consultor(a), completar un breve formulario con tus datos personales y adquirir un kit de inicio.\n'
    , 'Selecciona la opción *“Quiero ingresar”* y te ayudaremos a empezar tu negocio\n'
])

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
    flowPregunta1,
    flujo1,
};
