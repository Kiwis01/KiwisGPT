const submitButton = document.querySelector('#submit')
const outPutElement = document.querySelector('#output')
const inputElement = document.querySelector('input')
const hiddenElements = document.querySelectorAll('.hidden')

import { OpenAI } from "langchain/llms/openai";
import { loadQAStuffChain } from "langchain/chains";
import { Document } from "langchain/document";

// Load the documents
const docs = [
  new Document({ pageContent: 
    `Carlos Quihuis 
    phone number=520-312-8154, email=chquihui@asu.edu, linkedin=linkedin.com/in/carlos-quihuis-190b431aa, github=www.github.com/Kiwis01 
    
    BIOGRAPHY:
    Computer Science Junior specializing in Artificial Intelligence and Data systems, with professional experience in software, development, and computer systems engineering. Seeking internship opportunities for summer 2023 and onwards.
    
    EDUCATION: B.S. in Computer Science, Expected to graduate in November 2024 at Arizona State University, Tempe, AZ 3.44 GPA
    
    TECHNICAL SKILLS: Programming Languages: Java, JavaScript, Python, C/C++, Bash, Assembly
    Front-End: HTML, CSS, React.JS, Solidity
    Tools, Databases, and OS: Node.JS, Express.JS, Git, GitHub, Windows, MacOS, Linux/Unix
    
    PROFESSIONAL EXPERIENCE: PiePay, Co-founder 08/2022 - 0/2023
    Created a decentralized payment system that allowed users to split the bill on online purchases.
    Deployed smart contracts on both the Solana and Ethereum network.
    Partnered with hotels across northern Mexico and obtained a 7,500 Canadian dollars grant to continue development.
    
    Nights and weekends, San Francisco, CA. Software developer intern 03/2022 - 08/2022
    Worked with the people from Builders inc. Developed an app that allows people to book tickets with cryptocurrencies.
    Deployed smart contract systems in the Solana system, made the purchases secure.
    Made the app available throughout Northern America, Sold the app for 300 US dollars.
    
    RELEVANT PROJECTS: ChessBot, Personal Project Spring 2023
    Created a chess AI that will always make the best move in the books with their alternative variations.
    Utilized the python standard libraries and external libraries for a better representation of the pieces.
    
    Who are you?, Personal Project Summer 2022
    Developed an app that used face recognition to recognize each face with their respective profile.
    Used the python standard libraries and Haar cascade library.
    
    Solar powered LCD screen, Class Project Fall 2022
    Built a circuit with an LCD screen that can display any data, powered by solar power.
    Assembled a circuit with the components and created a code that implements the data readings on the LCD.
    
    WORK EXPERIENCE: Premier Auto Kings, Tucson, AZ: Front-End Developer 06/2019 - 12/2019
    Built and designed a webpage that accurately displayed all the data requested by the employer.
    Utilized CSS to develop the GUI and get the website running.
    
    EXTRACURRICULAR EXPERIENCE: San Francisco, CA: Angelhacks 08/2017 - 08/2017, Hackathon contest focused on problem solving skills. Second place winner on their contest` }),
];

/* get message method called when send button is pressed, this is where the AI makes the call based on user input and document information */
async function getMessage(){
  const llmA = new OpenAI({openAIApiKey: "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"});
  const chainA = loadQAStuffChain(llmA);
  const resA = await chainA.call({
    input_documents: docs,
    question: inputElement.value,
  });
  // Print result
  outPutElement.textContent = resA.text
}
submitButton.addEventListener('click', getMessage)
 
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
