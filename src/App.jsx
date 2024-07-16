/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import covid_data from './covid_data';

import {
  Container,
  Typography,
  Button,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  LinearProgress
} from '@mui/material';
import { addQuestionnaireResponse, getallQuestion } from './api/quest';
import { DynamicForm } from './DynamicForm';
const App = () => {
  const [formState, setFormState] = useState({});
  const [formData, setFormData] = useState(null);
  const [Data1, setData1] = useState(null);
  const [page, setPage] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [questionnaireResponse, setQuestionnaireResponse] = useState(null);

  // set data which is fetched from api

  useEffect(() => {
    getallQuestion().then(
      (data) => {
        setData1(data.data[0])
        setFormData(data.data[0].item);
      }
    );
  }, []);

  const handleChange = (linkId, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [linkId]: value
    }));
  };

  const handleNext = () => {
    if (page < formData.length - 1) {
      setPage(page + 1);
    }
  };

  const handlePrevious = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const generateQuestionnaireResponse = () => {
    const responseItems = formData.map((section) => {
      const answeredItems = section.item
        .map((item) => {
          const { value: linkId } = item.linkId;
          const { value: text } = item.text;
          const { value: type } = item.type;
          const valueKey = `value${type.charAt(0).toUpperCase() + type.slice(1)}`;
          const value = formState[linkId];

          if (!value) return null;

          return {
            linkId: linkId,
            text: text,
            answer: [{
              [valueKey]: type === 'choice' ? {
                code: value,
                display: item.answerOption.find(opt => opt.value.code.value === value)?.value.display.value
              } : value
            }]
          };
        })
        .filter(Boolean);

      if (answeredItems.length === 0) return null;

      return {
        linkId: section.linkId.value,
        text: section.text.value,
        item: answeredItems
      };
    }).filter(Boolean);

    return {
      resourceType: "QuestionnaireResponse",
      meta: {
        profile: Data1?.meta?.profile[0],
        tag: [
          {
            code: "lformsVersion: 36.1.3"
          }
        ]
      },
      status: "completed",
      authored: new Date().toISOString(),
      item: responseItems,
    };
  };

  const handlePreview = () => {
    const response = generateQuestionnaireResponse();
    setQuestionnaireResponse(response);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleCopyToClipboard = () => {
    const textToCopy = JSON.stringify(questionnaireResponse, null, 2);
    navigator.clipboard.writeText(textToCopy).then(() => {
      console.log('Copied to clipboard');
    }).catch((err) => {
      console.error('Failed to copy: ', err);
    });
  };

  const handleSubmit = () => {
    const response = generateQuestionnaireResponse();
    console.log('Questionnaire Response:', JSON.stringify(response, null, 2));
    addQuestionnaireResponse(response).then(res => console.log(res))
  };

  if (!formData) {
    return (
      <LinearProgress />
    );
  }

  return (
    <Container>
      <Typography marginTop={4} variant="h4" gutterBottom>
        {formData[page]?.text.value}
      </Typography>
      <DynamicForm data={formData[page]?.item} formState={formState} handleChange={handleChange} />
      <Grid container spacing={2} justifyContent="space-between">
        {page > 0 && (
          <Grid item>
            <Button
              style={{
                borderRadius: 35,
                backgroundColor: "#9c27b0",
                padding: "9px 30px",
                fontSize: "15px",
                marginTop: "35px"
              }}
              variant="contained" onClick={handlePrevious}>
              Previous
            </Button>
          </Grid>
        )}
        {page < formData.length - 1 ? (
          <Grid item>
            <Button style={{
              borderRadius: 35,
              backgroundColor: "#9c27b0",
              padding: "9px 30px",
              fontSize: "15px",
              marginTop: "35px",
              marginBottom: "35px"
            }} variant="contained" onClick={handleNext}>
              Continue
            </Button>
          </Grid>
        ) : (
          <Grid item>
            <Button style={{
              borderRadius: 35,
              backgroundColor: "#9c27b0",
              padding: "9px 30px",
              fontSize: "15px",
              marginTop: "35px",
              marginRight: "20px",
            }}
              variant="contained" onClick={handlePreview}>
              Preview
            </Button>

            <Button style={{
              borderRadius: 35,
              backgroundColor: "#9c27b0",
              padding: "9px 35px",
              fontSize: "15px",
              marginTop: "35px",
            }}
              variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </Grid>
        )}
      </Grid>

      <Dialog open={modalOpen} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>FHIR SDC QuestionnaireResponse Content</DialogTitle>
        <DialogContent>
          <DialogContentText bgcolor={'#F2F2F2'}>
            <pre>{JSON.stringify(questionnaireResponse, null, 2)}</pre>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleCopyToClipboard} color="secondary">
            Copy to Clipboard
          </Button>
          <Button variant="contained" onClick={handleClose} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default App;
