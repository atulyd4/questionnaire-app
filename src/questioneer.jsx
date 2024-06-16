// src/App.js

import React, { useState } from 'react';
import { Checkbox, FormControlLabel, Container, Typography } from '@mui/material';
import covid_data from './covid_data';
const questionnaireData = {
    linkId: "1.4",
    text: "Are you currently pregnant?",
    type: "boolean",
    enableWhen: [
        {
            question: "1.3",
            operator: "=",
            answerCoding: {
                code: "F"
            }
        }
    ]
};

const Questioneer = () => {
    const [answers, setAnswers] = useState({
        "1.3": {
            code: "F"
        }
    });

    const shouldEnableQuestion = (enableWhen, answers) => {
        return enableWhen.every(condition => {
            const { question, operator, answerCoding } = condition;
            if (operator === "=") {
                return answers[question]?.code === answerCoding.code;
            }
            // Add more operators as needed
            return false;
        });
    };

    const renderQuestion = (questionData) => (
        <FormControlLabel
            control={<Checkbox name={questionData.linkId} />}
            label={questionData.text}
        />
    );

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Dynamic JSON Renderer
            </Typography>
            {shouldEnableQuestion(questionnaireData.enableWhen, answers) && renderQuestion(questionnaireData)}
        </Container>
    );
}

export default Questioneer;
