import '../css/AIPage.css'
import { useLocation, useNavigate } from 'react-router-dom'

export default function AIPage() {
  const { state } = useLocation()
  const navigate = useNavigate()

  const { answer, sign, question } = state || {}

  if (!answer || !sign?.qianwen || !sign?.qianming) {
    return <div>暂无签文解答，请返回重试</div>
  }
  
  
  return (
    <div className="ai-container">
      <h1 className="ai-title">AI 解签结果</h1>

      <div className="ai-card">
        <h2>签文</h2>
        <strong>【第{sign.xuhao}签】</strong>
        <p>{sign.qianwen}</p>

        <h2>解答</h2>
        <p>{answer}</p>
      </div>

      <button className="ai-button" onClick={() => navigate('/support')}>
        献上香火
      </button>
    </div>
  )
}
