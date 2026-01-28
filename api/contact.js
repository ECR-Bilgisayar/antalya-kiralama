import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' })
    }

    const { name, email, phone, subject, message } = req.body

    try {
        await sendgrid.send({
            to: process.env.SENDGRID_TO,       // Asıl alıcı
            bcc: process.env.SENDGRID_BCC,     // Takip maili
            from: process.env.SENDGRID_FROM,   // Onaylı gönderici
            subject: `Yeni Mesaj: ${subject || 'Konu Yok'}`,
            html: `
        <p><strong>Ad Soyad:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Mesaj:</strong><br/>${message}</p>
      `,
        })

        return res.status(200).json({ message: 'Mesaj gönderildi' })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Mesaj gönderilemedi' })
    }
}
