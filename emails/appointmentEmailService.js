import { createTransport } from '../config/nodemailer.js'

export async function sendEmailNewAppointment({date, time }) {
    const transporter = createTransport(
        process.env.EMAIL_HOST,
        process.env.EMAIL_PORT,
        process.env.EMAIL_USER,
        process.env.EMAIL_PASS
    )

        // Enviar el email
        const info = await transporter.sendMail({
            from: 'AppRoxamanicure <robinsonvegas@gmail.com>',
            to: 'robinsonvegas@gmail.com',
            subject: "AppRoxamanicure - Nueva Cita",
            text: "AppRoxamanicure - Nueva Cita",
            html: `<p>Hola: Admin, tienes una nueva Cita</p>
                <p>La cita será el día: ${date} a las ${time} horas. </p>
            `
        })
    
        console.log('Mensaje enviado', info.messageId)
}

export async function sendEmailUpdateAppointment({date, time }) {
    const transporter = createTransport(
        process.env.EMAIL_HOST,
        process.env.EMAIL_PORT,
        process.env.EMAIL_USER,
        process.env.EMAIL_PASS
    )

        // Enviar el email
        const info = await transporter.sendMail({
            from: 'AppRoxamanicure <robinsonvegas@gmail.com>',
            to: 'robinsonvegas@gmail.com',
            subject: "AppRoxamanicure - Cita Actualizada",
            text: "AppRoxamanicure - Cita Actualizada",
            html: `<p>Hola: Admin, un usuario ha modificado una cita.</p>
                <p>La nueva cita será el día: ${date} a las ${time} horas. </p>
            `
        })
    
        console.log('Mensaje enviado', info.messageId)
}

export async function sendEmailCancelledAppointment({date, time }) {
    const transporter = createTransport(
        process.env.EMAIL_HOST,
        process.env.EMAIL_PORT,
        process.env.EMAIL_USER,
        process.env.EMAIL_PASS
    )

        // Enviar el email
        const info = await transporter.sendMail({
            from: 'AppRoxamanicure <robinsonvegas@gmail.com>',
            to: 'robinsonvegas@gmail.com',
            subject: "AppRoxamanicure - Cita Cancelada",
            text: "AppRoxamanicure - Cita Cancelada",
            html: `<p>Hola: Admin, un usuario ha cancelado una cita.</p>
                <p>La cita estaba programada para el: ${date} a las ${time} horas. </p>
            `
        })
    
        console.log('Mensaje enviado', info.messageId)

}