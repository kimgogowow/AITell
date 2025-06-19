import zelleQR from '../assets/zelle_test.jpg'

export default function SupportPage() {
    return (
      <div>
        <h2>🙏 感谢支持！</h2>
        <p>请使用 Zelle 扫码支持本应用</p>
        <img src={zelleQR} alt="Zelle QR Code" width="300" />
      </div>
    )
  }
  