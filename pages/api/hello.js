// Example of how to handle server side routing
export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' });
}