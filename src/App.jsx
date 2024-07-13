/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import covid_data from './covid_data';

import {
  Container,
  Typography,
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  LinearProgress
} from '@mui/material';
import { getallQuestion } from './api/quest';
// const formData = covid_data?.item;
// const Data1 = covid_data

const DynamicForm = ({ data, formState, handleChange }) => {
  const shouldRenderItem = (item) => {
    if (item.enableWhen) {
      return item.enableWhen.every((condition) => {
        const questionId = condition.question.value;
        const operator = condition.operator.value;
        const answer = condition.answer.value || condition.answer.code.value;
        const currentAnswer = formState[questionId];

        switch (operator) {
          case '=':
            return currentAnswer === answer;
          case '!=':
            return currentAnswer !== answer;
          case '>':
            return currentAnswer > answer;
          case '<':
            return currentAnswer < answer;
          case '>=':
            return currentAnswer >= answer;
          case '<=':
            return currentAnswer <= answer;
          default:
            return false;
        }
      });
    }
    return true;
  };

  const renderField = (item) => {
    const { value: linkId } = item.linkId;
    const { value: text } = item.text;
    const { value: type } = item.type;
    const required = item.required?.value || false;
    const answerOption = item.answerOption || [];

    if (!shouldRenderItem(item)) return null;

    const handleFieldChange = (event) => {
      const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
      handleChange(linkId, value);
    };

    switch (type) {
      case 'string':
        return (
          <TextField
            key={linkId}
            label={text}
            required={required}
            fullWidth
            margin="normal"
            color="secondary"
            value={formState[linkId] || ''}
            onChange={handleFieldChange}
          />
        );
      case 'date':
        return (
          <TextField
            key={linkId}
            label={text}
            type="date"
            InputLabelProps={{ shrink: true }}
            required={required}
            fullWidth
            margin="normal"
            color="secondary"
            value={formState[linkId] || ''}
            onChange={handleFieldChange}
          />
        );
      case 'choice':
        return (
          <TextField
            key={linkId}
            select
            label={text}
            required={required}
            fullWidth
            margin="normal"
            color="secondary"
            value={formState[linkId] || ''}
            onChange={handleFieldChange}
          >
            {answerOption.map((option) => (
              <MenuItem key={option.value.code.value} value={option.value.code.value}>
                {option.value.display.value}
              </MenuItem>
            ))}
          </TextField>
        );
      case 'boolean':
        return (
          <FormControlLabel
            key={linkId}
            control={<Checkbox color="secondary" checked={formState[linkId] || false} onChange={handleFieldChange} />}
            label={text}
            required={required}
          />
        );
      case 'integer':
        return (
          <TextField
            key={linkId}
            label={text}
            type="number"
            required={required}
            fullWidth
            margin="normal"
            color="secondary"
            value={formState[linkId] || ''}
            onChange={handleFieldChange}
          />
        );
      case 'group':
        return (
          <Box key={linkId} marginBottom={2}>
            <Typography variant="h6" gutterBottom>
              {text}
            </Typography>
            {item.item.map(renderField)}
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <form>
      {data.map(renderField)}
    </form>
  );
};

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
