from fastapi import APIRouter
from models import InterpretRequest, InterpretResponse 
from dotenv import load_dotenv
import os
from openai import OpenAI

load_dotenv()
api_key = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=api_key)  # 自动读取环境变量中的 API Key

router = APIRouter()

@router.post("/api/fortune/interpret", response_model=InterpretResponse)
async def interpret_sign(req: InterpretRequest):
    try:
        prompt = f"""
            "你是一位专业命理解签大师，擅长根据签文内容来解答用户的问题。\n"
            用户的问题是：{req.question}\n"
            他/她所抽取到的签如下：
            签号：{req.sign.id}
            宫位：{req.sign.gongwei}
            签名：{req.sign.qianming}
            签文：{req.sign.qianwen}
            签语：{req.sign.qianyu}
            解曰：{req.sign.jieyue}
            仙机：{req.sign.xianji}
            典故：{req.sign.diangu}
            "请结合签文，用通俗易懂的话语详细专业地解答用户的问题。"

        """
        print(prompt)

        response =client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "你是一位专业命理解签大师。"},
                {"role": "user", "content": prompt}
            ],
            temperature=0.7,
            max_tokens=500,
        )

        ai_reply = response.choices[0].message.content.strip()
        print(ai_reply)
        return InterpretResponse(answer=ai_reply)

    except Exception as e:
        return InterpretResponse(answer=f"AI 解签出错: {str(e)}")
