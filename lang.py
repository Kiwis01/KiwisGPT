import os
import sys

from langchain.document_loaders import TextLoader
from langchain.indexes import VectorstoreIndexCreator
from langchain.document_loaders import DirectoryLoader
from langchain.llms import OpenAI
from langchain.chat_models import ChatOpenAI

os.environ["OPENAI_API_KEY"] = "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"

loader = TextLoader('prompt.txt')
index = VectorstoreIndexCreator().from_loaders([loader])

while(1):
    inp = input("")
    query = inp
    print(index.query(query, llm=ChatOpenAI()))
