import "dotenv/config";
const rawPrivateKey = (process.env.GOOGLE_PRIVATE_KEY || process.env.MEDSPEAK_GOOGLE_PRIVATE_KEY)?.trim();
const privateKey = rawPrivateKey?.replace(/\\n/g, '\n');
console.log(privateKey?.slice(-30));
