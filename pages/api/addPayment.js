import addCors from "../../lib/addCors";
import { addPayment, getFiatExchangeRate, getOrder, getPublicKey, setOrder, updatePayment } from "../../lib/dataIO";

const EthCrypto = require("eth-crypto");

export default async function handler(req, res) {
  await addCors(req, res)
  const { uuid, password } = req.query;

  const payment = await getOrder(uuid);

  if (payment.paymentId) {
    return res.status(200).json({
      paymentId: -1,
      error: "already paid"
    });
  }

  payment["usdPrice"] = 1 / (await getFiatExchangeRate("USD")) * Number(payment.fiatPrice);
  payment["requestedAt"] = new Date().toISOString();
  payment["status"] = "requested";

  await setOrder(uuid, payment);

  const signaturePayment = {
    ...payment,
    password
  }

  const publicKey = await getPublicKey(signaturePayment.walletAddress);

  const paymentId = await addPayment(signaturePayment.walletAddress, null);

  const enc_payment = await EthCrypto.encryptWithPublicKey(
    publicKey,
    JSON.stringify({
      ...signaturePayment,
      paymentId
    })
  );

  await updatePayment(signaturePayment.walletAddress, paymentId, enc_payment);
  await setOrder(uuid, {
    ...payment,
    paymentId
  })

  res.status(200).json({
    paymentId,
  })
}


/**
 */