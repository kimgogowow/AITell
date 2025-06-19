from fastapi import APIRouter, HTTPException
from random import choice
from pathlib import Path
import os
import httpx
from models import Sign

router = APIRouter()

@router.get("/api/fortune/random", response_model = Sign)
async def get_random_sign():
    GUANYIN_API_ID = os.getenv("GUANYIN_API_ID")
    GUANYIN_API_KEY = os.getenv("GUANYIN_API_KEY")

    url = "https://cn.apihz.cn/api/mingli/guanyin.php"
    params = {"id" : GUANYIN_API_ID, "key": GUANYIN_API_KEY}

    async with httpx.AsyncClient() as client:
        resp = await client.get(url, params = params)
        data = resp.json()
    if data.get("code") != 200:
        raise HTTPException(status_code = 500, detail="获取签文失败")
    
    return Sign(
        id=data.get("xuhao", ""),         # 临时把 xuhao 也作为唯一 id
        xuhao=data.get("xuhao", ""),
        gongwei=data.get("gongwei", ""),
        qianming=data.get("qianming", ""),
        qianwen=data.get("qianwen", ""),
        qianyu=data.get("qianyu", ""),
        jieyue=data.get("jieyue", ""),
        xianji=data.get("xianji", ""),
        img=data.get("img", ""),
        diangu=data.get("diangu", "")
    )