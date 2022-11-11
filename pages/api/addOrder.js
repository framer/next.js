import addCors from "../../lib/addCors";

const upstash = require("../../lib/upstash");
const EthCrypto = require("eth-crypto");
const { v4: uuidv4 } = require("uuid");

async function getPubkey(address) {
  return await upstash.get("pubkeyOf:" + address);
}
export default async function handler(req, res) {
  await addCors(req, res)
  const {
    companyName,
    urlFailure,
    urlSuccess,
    fiatPrice,
    orderNumber,
    goodsNumber,
    goodsName,
    tokenAddress,
    tokenAmount,
    tokenName,
    walletAddress,
  } = req.query;

  const uuid = uuidv4();
  const order = {
    uuid,
    companyName,
    urlFailure,
    urlSuccess,
    fiatPrice,
    orderNumber,
    goodsNumber,
    goodsName,
    tokenAddress,
    tokenAmount,
    tokenName,
    walletAddress,
    receipt: {
      txid: null,
      explorer: null
    },
    status: "pending",
    requestedAt: null, // 결제 요청 시간
    approvedAt: null, // 결제 승인 시간
  };

  await upstash.set(uuid, JSON.stringify(order));

  res.status(200).json({ uuid });
}
