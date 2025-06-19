from pydantic import BaseModel

class Sign(BaseModel):
    id: str
    xuhao: str
    gongwei: str
    qianming: str
    qianwen: str
    qianyu: str
    jieyue: str
    xianji: str
    img: str
    diangu: str


class PaymentInfo(BaseModel):
    id:str
    display_name: str
    qr_image_url: str

class InterpretRequest(BaseModel):
    question: str
    sign: Sign

class InterpretResponse(BaseModel):
    answer: str