
export default function errorHandler(app) {

    app.use((err, req, res, next) => {

        // Alert or Mail Your Developer That We Found One Error

        console.error('Error: - ', err.message);

        res.status(500).send({ error: 'Invalid Request' });
    });
}
