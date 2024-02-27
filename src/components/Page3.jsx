import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer'; // Assuming Footer component is imported correctly

const Page3 = () => {
    const location = useLocation();
    const { timeTaken, answers } = location.state || {};
    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <p style={styles.title}>Contest Completed</p>
                <p style={styles.timeTaken}>Time taken: {timeTaken} seconds</p>
                <p style={styles.answersTitle}>Answers:</p>
                <ul style={styles.answersList}>
                    <li>Question 1: {answers && answers.question1}</li>
                    <li>Question 2: {answers && answers.question2}</li>
                    <li>Question 3: {answers && answers.question3}</li>
                    <li>Question 4: {answers && answers.question4}</li>
                    <li>Question 5: {answers && answers.question5}</li>
                </ul>
                <Footer />
            </div>
          
        </div>
    );
}

const styles = {
    container: {
        backgroundColor: "#ffffff",
        border: '1px solid black',
        opacity: '0.9',
        zIndex: '10',
        padding: '10px',
        width: "90%",
        maxWidth: "500px",
        margin: "auto",
        marginTop: "120px",
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: "30px",
        marginBottom: "10px",
    },
    timeTaken: {
        backgroundColor: "greenyellow",
        border: "2px solid black",
        padding: "5px",
        fontSize: "20px",
        marginBottom: "10px",
    },
    answersTitle: {
        fontSize: "20px",
        marginBottom: "5px",
    },
    answersList: {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        textAlign: 'center',
    }
};

export default Page3;
