import express from 'express'

const app = express()

app.get('*', (req, response) => {
    console.log(req.url)
    response.send('Heyi products :)')
})

app.listen('3000', () => console.log('Were up and running, bro!'))
