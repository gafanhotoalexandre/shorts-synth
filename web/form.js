import { api } from './api.js'

const form = document.querySelector('#form')
const input = document.querySelector('#url')
const content = document.querySelector('#content')

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  const videoUrl = input.value

  if (!videoUrl.includes('shorts')) {
    return content.textContent = 'Este vídeo não parece ser um short.'
  }

  const [_, params] = videoUrl.split('/shorts/')
  const [shortId] = params.split('?si')

  content.textContent = 'Obtendo o texto do áudio...'

  const transcription = await api.get(`/synth/${shortId}`)

  content.textContent = transcription.data.result
})