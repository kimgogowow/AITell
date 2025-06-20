import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../App.css'
export default function SignPage() {
  const { state } = useLocation()
  const navigate = useNavigate()

  const [sign, setSign] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const question = state?.question

  if (!question) return <p>请从首页输入问题再来抽签哦～</p>

  useEffect(() => {
    fetch('http://aitell-backend.onrender.com/api/fortune/random') 
      .then((res) => {
        if (!res.ok) throw new Error('无法获取签文')
        return res.json()
      })
      .then((data) => {
        setSign(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (!state || !question) return <p>请从首页输入问题再来抽签哦～</p>
  if (loading) return <p>正在为你抽签...</p>
  if (error) return <p>出错了：{error}</p>
  if (!sign) return <p>未获取到签文</p>

  const handleAI = async () => {
    try {
      const res = await fetch('http://aitell-backend.onrender.com/api/fortune/interpret', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          question,
          sign
        })
      })
  
      const data = await res.json()
  
      navigate('/ai', {
        state: {
          answer: data.answer,
          question,
          sign
        }
      })
    } catch (err) {
      alert('解签失败，请稍后再试')
      console.error(err)
    }
  }
  

  return (
    <div className="page-container">
    <h2 className="page-title">{sign.qianming}（{sign.gongwei}）</h2>

    <p><span className="field-label">签文：</span><span className="field-content">{sign.qianwen}</span></p>
    <p><span className="field-label">签语：</span><span className="field-content">{sign.qianyu}</span></p>
    <p><span className="field-label">解曰：</span><span className="field-content">{sign.jieyue}</span></p>
    <p><span className="field-label">仙机：</span><span className="field-content">{sign.xianji}</span></p>
    <p><span className="field-label">典故：</span><span className="field-content">{sign.diangu}</span></p>
    
    <img src={sign.img} alt="签图" className="centered-img" />

    <button className="ai-button" onClick={handleAI}>AI 得解</button>
  </div>
  )
}
