import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from '../env.js';

export const EMAILJS_CONFIG = {
    PUBLIC_KEY: EMAILJS_PUBLIC_KEY,
    SERVICE_ID: EMAILJS_SERVICE_ID,
    TEMPLATE_ID: EMAILJS_TEMPLATE_ID
};

export function initEmailJS() {
    if (EMAILJS_CONFIG.PUBLIC_KEY && EMAILJS_CONFIG.PUBLIC_KEY !== "tu-public-key-aqui") {
        emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    }
}

export function sendContactEmail(nombre, email, mensaje) {
    const emailData = {
        from_name: nombre.trim(),
        email: email.trim(),
        message: mensaje.trim(),
        fecha: new Date().toLocaleString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    };
    return emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, emailData);
}
