import cors from 'cors'
import express from 'express'

import { download } from './download.js'

const app = express()
app.use(express.json())
app.use(cors())

app.get('/synth/:id', (req, res) => {
  download(req.params.id)
  return res.json({
    result: 'Download do vídeo realizado com sucesso!'
  })
})

app.listen(3333, () => console.log('HTTP Server running...'))