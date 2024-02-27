import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from "./Footer"; // Assuming Footer component is imported correctly

const Page2 = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(5 * 60); // 5 minutes timer
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: ''
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    if (timeLeft === 0) {
      clearInterval(timer);
      submitAnswers();
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswerChange = (e, question) => {
    const selectedAnswer = e.target.value;
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [question]: selectedAnswer
    }));
  };

  const submitAnswers = () => {
    const timeTaken = 5 * 60 - timeLeft;
    navigate('/page3', { state: { timeTaken, answers } });
  };

  return (
    <>
      <div style={styles.container}>
        <p style={styles.heading}>Test Your Knowledge</p>
        <p style={styles.timer}>Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}</p>
        <div style={styles.questionsContainer}>
          {/* Your questions and answer inputs */}
          
 
 <p>1. Rainbow consist of how many colours?</p>
   <div onChange={e => handleAnswerChange(e, 'question1')}style={{display:"flex",flexDirection:"row", justifyContent:"space-between" , gap:"5px"}}>
   <input type="radio" value="option1" name="question1" /> 5
   <input type="radio" value="option2" name="question1" /> 7
   <input type="radio" value="option3" name="question1" /> 8
   <input type="radio" value="option4" name="question1" /> 9
   </div>


<div>
 <p>2. How many letters are there in the English alphabet?</p>
 <div onChange={e => handleAnswerChange(e, 'question2')} style={{display:"flex",flexDirection:"row", justifyContent:"space-between" , gap:"5px"}}>
   <input type="radio" value="option1" name="question2" /> 67
   <input type="radio" value="option2" name="question2" /> 26
   <input type="radio" value="option3" name="question2" /> 63
   <input type="radio" value="option4" name="question2" /> 25
</div>
</div>
<div>
 <p>3. How many days are there in a year?</p>
 <div onChange={e => handleAnswerChange(e, 'question3')} style={{display:"flex",flexDirection:"row", justifyContent:"space-between" , gap:"5px"}}>
   <input type="radio" value="option1" name="question3" /> 345
   <input type="radio" value="option2" name="question3" /> 565
   <input type="radio" value="option3" name="question3" /> 365
   <input type="radio" value="option4" name="question3" /> 675
   </div>
</div>

<div>
 <p>4. How many minutes are there in an hour?</p>
 <div onChange={e => handleAnswerChange(e, 'question4')} style={{display:"flex",flexDirection:"row", justifyContent:"space-between" , gap:"5px"}}>
   <input type="radio" value="option1" name="question4" /> 56
   <input type="radio" value="option2" name="question4" /> 65
   <input type="radio" value="option3" name="question4" /> 60
   <input type="radio" value="option4" name="question4" /> 70
   </div>
</div>

<div>
 <p>5. Which animal is known as the king of the jungle?</p>
 <div onChange={e => handleAnswerChange(e, 'question5')}style={{display:"flex",flexDirection:"row", justifyContent:"space-between" , gap:"5px"}}>
   <input type="radio" value="option1" name="question5" /> Lion
   <input type="radio" value="option2" name="question5" /> Peacock
   <input type="radio" value="option3" name="question5" /> Tiger
   <input type="radio" value="option4" name="question5" /> Monkey
   </div>
</div>

        </div>
        <button style={styles.submitButton} onClick={submitAnswers}>Submit</button>
    
      </div>
      
    </>
  );
};

const styles = {
  container: {
    backgroundColor: '#ffffff',
    border: '1px solid black',
    opacity: '0.9',
    padding: '10px',
    width: '90%',
    maxWidth: '600px',
    margin: 'auto',
    marginTop: '10px',
  },
  heading: {
    fontSize: '20px',
    textAlign: 'center',
  },
  timer: {
    backgroundColor: 'red',
    color: 'white',
    padding: '3px',
    fontSize: '20px',
    textAlign: 'center',
    marginBottom: '10px',
  },
  questionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  submitButton: {
    fontSize: '20px',
    backgroundColor: 'black',
    color: 'white',
    margin: 'auto',
    display:'flex',
    justifyContent:'center',
    alignItem:'center',
    gap:'5px',
    marginTop:'5px'
  },
};

export default Page2;
