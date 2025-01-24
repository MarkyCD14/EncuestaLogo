export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, password, selectedLogo } = req.body;

        // Valida que todos los campos estén presentes
        if (!email || !password || !selectedLogo) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
        }

        // Aquí puedes manejar los datos recibidos
        console.log('Datos recibidos:', { email, password, selectedLogo });

        // Respuesta exitosa
        return res.status(200).json({ message: 'Datos enviados exitosamente.' });
    } else {
        // Maneja otros métodos HTTP (si los necesitas)
        return res.status(405).json({ error: 'Método no permitido.' });
    }
}