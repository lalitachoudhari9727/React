import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from 'axios'

function App() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  async function generateAnswer() {
  setAnswer('Generating response...please wait');
   const response= await axios({
      method: 'post',
      url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=AIzaSyBMuhBSlR3KMiNdml4xEPqvbgdeoVOHq6I',
      data: {
    "contents": [
      {
        "parts": [
          {
            "text": question || "Explain how AI works in a few words"
          }
        ]
      }
    ]
  }
    })
    setAnswer(response.data.candidates[0].content.parts[0].text)
  }
  
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Chatbot AI</h1>
      <textarea placeholder="Enter your question here..." className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" name="question" id="question" value={question} onChange={(e) => setQuestion(e.target.value)}
        cols="30" rows="10"
        ></textarea>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-4 mb-4" onClick={generateAnswer}>
        generate response
      </button>
      <pre>{answer}</pre>
    </>
  )
}

export default App
