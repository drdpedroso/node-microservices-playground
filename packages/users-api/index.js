import express from 'express'

const app = express()

app.get('*', (req, response) => {
    console.log(req.url)
    response.send('Hey :)')
})

app.listen('3000', () => console.log('Were up and running, bro!'))
