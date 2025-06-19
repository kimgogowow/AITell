from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import forture, ai
import os
print("Current Working Directory:", os.getcwd())

app = FastAPI()

# 如你前后端分离，本地前端默认跑在 5173 端口
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(forture.router)
app.include_router(ai.router)
