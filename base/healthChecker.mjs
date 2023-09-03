
export default function healthChecker(app) {

    app.get('/', (req, res) => {

        // Do Something Here
        res.status(200).send('GET OK')

    })

    app.post('/', (req, res) => {

        // Do Something Here
        res.status(200).send('POST OK')
    })
}

