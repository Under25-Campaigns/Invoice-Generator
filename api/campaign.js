export default function handler(req, res) {

const campaigns = [
"Professional Fees for UGC Reel: Notta Sin Campaign",
"professional Fees for Registrations: Goibibo Campaign"
];

res.status(200).json(campaigns);
}
