const functions = require("firebase-functions")
const { info, error } = require("firebase-functions/lib/logger")
const cors = require("cors")({ origin: true })
const md5 = require("md5")

const keyID = functions.config().payment.key_id
const key = functions.config().payment.key
const paymentURL = functions.config().payment.url
const axios = require("axios")
const qs = require("qs")

exports.chargeCreditCard = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    info("ChargeCreditCard API started...")

    if (!req.body.cvv) return res.send({ errMessage: "cvv missing" })
    if (!req.body.ccnumber) return res.send({ errMessage: "ccnumber missing" })
    if (!req.body.ccexp) return res.send({ errMessage: "ccexp missing" })
    if (!req.body.amount) return res.send({ errMessage: "amount missing" })
    if (!keyID) return res.send({ errMessage: "key_id missing" })
    if (!key) return res.send({ errMessage: "key missing" })

    const now = Math.floor(Date.now() / 1000);

    const paymentConfig = {
      type: "sale",
      hash: md5(`order${now}|${req.body.amount}|${now}|${key}`),
      ccnumber: req.body.ccnumber,
      cvv: req.body.cvv,
      ccexp: req.body.ccexp,
      amount: req.body.amount,
      key_id: keyID,
      time: now,
      orderid: `order${now}`,
      processor_id: "",
    }

    info("Payment Config", paymentConfig)
    try {
      const response = await axios.post(paymentURL, qs.stringify(paymentConfig))
      return res.send(response.data)
    } catch(err) {
      error("Paymnet failed with error --> ", err)
      return res.send(err)
    }
  })
})

const sgMail = require("@sendgrid/mail")
SENDGRID_API_KEY = functions.config().sendgrid.apikey
sgMail.setApiKey(SENDGRID_API_KEY)

exports.httpEmail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const toEmail = req.body.toEmail
    const message = req.body.message
    const text = req.body.text

    const msg = {
      to: toEmail,
      from: "tarek.saeed1@ibm.com",
      subject: "Visa USA Pro",
      text: text,
      html: message,
    }

    return sgMail
      .send(msg)
      .then(() => res.status(200).send("email sent!"))
      .catch((err) => res.status(400).send(err))
  })
})
