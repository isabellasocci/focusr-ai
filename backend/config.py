# backend/config.py
import os
from dotenv import load_dotenv


load_dotenv()


class Config:
    PERPLEXITY_API_KEY = os.getenv("PERPLEXITY_API_KEY")
    SECRET_KEY = os.getenv("SECRET_KEY", "6e4c382a6e393481149f06638842e28b5e96b0a01ca197fc5335877a63537158")