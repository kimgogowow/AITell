from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import forture, ai
import os
print("Current Working Directory:", os.getcwd())

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(forture.router)
app.include_router(ai.router)
