const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Glow Shop server is running ' })
})

app.listen(PORT, () => {
  console.log(`Glow Shop backend running on port ${PORT}`)
})