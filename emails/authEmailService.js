import { createTransport } from '../config/nodemailer.js'

export async function sendEmailVerification({name, email, token }) {
    const transporter = createTransport(
        process.env.EMAIL_HOST,
        process.env.EMAIL_PORT,
        process.env.EMAIL_USER,
        process.env.EMAIL_PASS
    )

    // Enviar el email
    const info = await transporter.sendMail({
        from: 'AppRoxamanicure <robinsonvegas@gmail.com',
        to: email,
        subject: "AppRoxamanicure - Confirma tu cuenta",
        text: "AppRoxamanicure - Confirma tu cuenta",
        html: `<p>Hola: ${name}, confima tu cuenta en AppRoxamanicure</p>
        <p>Tu cuenta esta casi lista, Solo debes confirmala en el siguiente enlace</p>
        <a href="${process.env.FRONTEND_URL}/auth/confirmar-cuenta/${token}">Confirmar cuenta</a>
        <p>Si tu no creaste esta cuenta, Puedes ignorar este mensaje</p>
        
        `
    })

    console.log('Mensaje enviado', info.messageId)
}

export async function sendEmailPasswordReset({name, email, token }) {
    const transporter = createTransport(
        process.env.EMAIL_HOST,
        process.env.EMAIL_PORT,
        process.env.EMAIL_USER,
        process.env.EMAIL_PASS
    )

    // Enviar el email
    const info = await transporter.sendMail({
        from: 'AppRoxamanicure <robinsonvegas@gmail.com',
        to: email,
        subject: "AppRoxamanicure - Restablece tu password",
        text: "AppRoxamanicure - Restablece tu password",
        html: `<p>Hola: ${name}, has solicitado restablecer tu password</p>
        <p>Sigue el siguiente enlace para generar un nuevo password</p>
        <a href="${process.env.FRONTEND_URL}/auth/olvide-password/${token}">Restablecer Password</a>
        <p>Si tu no solicitaste esto, Puedes ignorar este mensaje</p>
        
        `
    })

    console.log('Mensaje enviado', info.messageId)
}
