export default function handler(req, res) {

const campaigns = [
"Campaign 1",
"Campaign 2",
"Campaign 3"
];

res.status(200).json(campaigns);
}
