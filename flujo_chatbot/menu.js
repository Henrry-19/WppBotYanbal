const { addKeyword } = require('@bot-whatsapp/bot')


const path = require('path');//Obtener la ruta absoluta
//const {} = require('')
const { flowPregunta1 } = require('./1_primero');
const { flowPregunta2 } = require('./2_segundo');
const { flowPregunta3 } = require('./3_tercero');
const { flowPregunta4 } = require('./4_cuarto');
const { flowPregunta5 } = require('./5_quinto');
const { flowPregunta6 } = require('./6_sexto');
const { flowPregunta7 } = require('./7_septimo');



const flujoDespedidaV2 = addKeyword(["Gracias", "gracias", "muchas gracias"], { sensitive: true })
    .addAnswer('¡Gracias a ti!.😊');

const flujoDespedida = addKeyword(['Gracias',"Salir",'ok', 'Ok', 'OK'], { sensitive: true })
    .addAnswer('¡Hasta luego!😇 Espero haberte sido de ayuda. ¡Vuelve pronto! 👋',null,[flujoDespedidaV2])  // Continuación del flujo si se da "gracias");



const flowPrincipal = addKeyword(["HOLA", "Hola", "hola", "ola", "buenos días",
    "buenas tardes", "buenas", "buenos", "¿Cómo está?", "Como esta", "principal",
    "regresar", "volver", '0'],{sensitive:true})
.addAnswer('👋 ¡Hola! Bienvenid@ a Yanbal.🌟'
    + 'Aquí descubrirás cómo ganar ingresos, crecer personal y profesionalmente, '
    + 'y disfrutar de beneficios increíbles con Yanbal. 💼✨', {
    media:path.resolve(__dirname, 'media', 'oficial.jpg'),

    delay:1000

}).addAnswer('*Nuestros servicios (Opción 1-7):*',{
    delay:2000
})

.addAnswer(['*1️⃣* ¿Cómo puedo ingresar a Yanbal para trabajar?\n'
    ,'*2️⃣* ¿Cuáles son los beneficios de unirme a Yanbal?\n'
    ,'*3️⃣* ¿Qué costo tiene el kit de inicio y cuál es el más recomendado?\n'
    ,'*4️⃣* ¿Qué pasa si no logro vender lo suficiente?\n'
    ,'*5️⃣* ¿Puedo invitar a otras personas y ganar más dinero?\n'
    ,'*6️⃣* ¿Serías tan amable de enviarnos la revista de la campaña, por favor?\n'
    ,'*7️⃣* Quiero hablar con un asesor\n'
    , '✨ *¡El éxito comienza aquí! Escríbenos para resolver tus dudas y dar el primer paso con Yanbal.*'],{

        delay:3000
    },null,[flowPregunta1, flowPregunta2, flowPregunta3, flowPregunta4, flowPregunta5, flowPregunta6,flowPregunta7, flujoDespedida])




module.exports = {
    flowPrincipal,
};
    