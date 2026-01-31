import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { Nome, Telefono, Servizio, Messaggio, Sorgente } = body

  if (!Nome || !Telefono) {
    throw createError({ statusCode: 400, message: 'Nome e Telefono sono obbligatori' })
  }

  const smtpHost = process.env.SMTP_HOST || 'smtps.aruba.it'
  const smtpUser = process.env.SMTP_USER || 'rec.monterotondo@smiledoc.it'
  const smtpPass = process.env.SMTP_PASS || ''

  if (!smtpPass) {
    console.warn('SMTP_PASS not configured, logging lead instead')
    console.log('LEAD:', { Nome, Telefono, Servizio, Messaggio, Sorgente })
    return { success: true, message: 'Lead registrato (SMTP non configurato)' }
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: 465,
    secure: true,
    auth: { user: smtpUser, pass: smtpPass }
  })

  const pagina = Sorgente || 'Homepage'
  const subject = `[DentistaMonterotondo] Nuova richiesta da ${pagina}`

  const htmlBody = `
    <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:Arial,sans-serif;">
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Nome</td><td style="padding:8px;border:1px solid #ddd;">${Nome}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Telefono</td><td style="padding:8px;border:1px solid #ddd;">${Telefono}</td></tr>
      ${Servizio ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Servizio</td><td style="padding:8px;border:1px solid #ddd;">${Servizio}</td></tr>` : ''}
      ${Messaggio ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Messaggio</td><td style="padding:8px;border:1px solid #ddd;">${Messaggio}</td></tr>` : ''}
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Sorgente</td><td style="padding:8px;border:1px solid #ddd;">${pagina}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Sito</td><td style="padding:8px;border:1px solid #ddd;">DentistaMonterotondo.com</td></tr>
    </table>
  `

  await transporter.sendMail({
    from: `"Dentista Monterotondo" <${smtpUser}>`,
    to: 'rec.monterotondo@smiledoc.it',
    cc: 'direzione@smiledoc.it',
    subject,
    html: htmlBody
  })

  return { success: true, message: 'Richiesta inviata con successo' }
})
