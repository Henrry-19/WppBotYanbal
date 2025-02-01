/**
 * Importaciones
 */
const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot');
const QRPortalWeb = require('@bot-whatsapp/portal');
const BaileysProvider = require('@bot-whatsapp/provider/baileys');
const MockAdapter = require('@bot-whatsapp/database/mock');

const { flowPrincipal } = require('./flujo_chatbot/menu');

/**
 * Flujo de despedida
 *
 * Función principal
 */
const main = async () => {
    try {
        // Crear adaptadores
        const adapterDB = new MockAdapter();  // Base de datos mock
        const adapterFlow = createFlow([flowPrincipal]);  // Agregar flujo principal y despedida
        const adapterProvider = createProvider(BaileysProvider);  // Proveedor para la conexión

        // Crear y ejecutar el bot
        await createBot({
            flow: adapterFlow,
            provider: adapterProvider,
            database: adapterDB,
        });

        // Generar QR para el portal web
        QRPortalWeb();

    } catch (error) {
        console.error("Error al iniciar el bot:", error);
    }
};

// Manejador global para promesas no manejadas
process.on('unhandledRejection', (reason, promise) => {
    console.error('Promesa no manejada: ', promise);
    console.error('Razón del rechazo: ', reason);
});




// Ejecutar la función principal
main();
