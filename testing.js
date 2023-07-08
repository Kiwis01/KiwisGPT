
// const submitButton = document.querySelector('#submit')
const outPutElement = document.querySelector('#output')
// const inputElement = document.querySelector('input')
const hiddenElements = document.querySelectorAll('.hidden')

import { OpenAI } from "./langchain/llms/openai";
import { PromptTemplate } from "./langchain/prompts";
import { LLMChain } from "./langchain/chains";
import * as fs from './fs/promises';

const model = new OpenAI({ openAIApiKey: "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", temperature: 0.9 });

/* Read Text */
async function readFileAsync(file) {
  try {
    const data = await fs.readFile(file, 'utf8');
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
  let template;
  try {
  template = await readFileAsync('prompt.txt');
    // Continue with your logic here
  } catch (err) {
    // Handle the error
  }


/* enter data prompt into langchain */
// async function getMessage(){
  const prompt = new PromptTemplate({
    template: template,
    inputVariables: ["input"],
  });
  
  const chain = new LLMChain({ llm: model, prompt: prompt });
  const res = await chain.call({ input: "who is carlos quihuis" });
  outPutElement.textContent = res.text
// }
// submitButton.addEventListener('click', getMessage)


/* Animations */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry)
      if(entry.isIntersecting){
          entry.target.classList.add('show');
      } else{
          entry.target.classList.remove('show');
      }
  });
});
hiddenElements.forEach((el) => observer.observe(el));