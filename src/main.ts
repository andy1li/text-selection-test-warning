import './style.css'
import { parseTiptapHtml } from './tiptap'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = JSON.stringify(parseTiptapHtml('<h1>Hello tiptap!</h1>'))
