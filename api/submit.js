export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Permitir todas las solicitudes
    res.setHeader('Access-Control-Allow-Methods', 'POST'); // Solo permitir POST
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'POST') {
        const { email, password, selectedLogo } = req.body;
        
        if (!email || !password || !selectedLogo) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
        }

        console.log('Datos recibidos:', { email, password, selectedLogo });
        return res.status(200).json({ message: 'Datos enviados exitosamente.' });
    } else {
        return res.status(405).json({ error: 'Método no permitido.' });
    }
}
