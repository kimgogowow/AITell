import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
export default function AskPage() {
  const [question, setQuestion] = useState('')
  const navigate = useNavigate()

  const handleSubmit = () => {
    if (!question) return alert('请输入问题')
    navigate('/sign', { state: { question} })
  }

  return (
    <div>
      <img className='logo' src={logo} alt="Zelle QR Code" width="300" />
      <br/>
      <label>弟子求问：</label>
      <textarea
        style={{ width: '100%', boxSizing: 'border-box' }}
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        rows={4}
        maxLength={100}
        placeholder="请输入您的疑问，最多100字"
      />
      <br />
      <button onClick={handleSubmit}>
  求签
</button>
    </div>
  )
}
