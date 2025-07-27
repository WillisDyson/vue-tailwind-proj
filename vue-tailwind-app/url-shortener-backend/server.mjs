import express from 'express'
import cors from 'cors'
import fetch from 'node-fetch'

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.post('/shorten', express.urlencoded({ extended: true }), async (req, res) => {
    try {
        const url = req.body.url
        console.log('Received URL:', url)

        const response = await fetch('https://cleanuri.com/api/v1/shorten', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({ url }),
        })

        const data = await response.json()
        res.json(data)
    } catch (err) {
        console.error('Error:', err)
        res.status(500).json({ error: 'Server error' })
    }
})

app.listen(3001, () => console.log('Proxy running on http://localhost:3001'))
