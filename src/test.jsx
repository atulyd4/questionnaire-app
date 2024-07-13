/* eslint-disable react/prop-types */
// App.js
import React, { useRef, useState } from 'react';
import hdfc_data from './hdfc_data';
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
  DialogTitle,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@mui/material';
const formData = covid_data?.item;
const Data1 = covid_data

const DynamicForm = ({ item, formState, handleChange }) => {
  const renderField = (item) => {
    const { linkId, text, type, answerOption, required, enableWhen } = item;

    // Function to handle conditional rendering
    const shouldEnable = (condition) => {
      const { question, operator, answerBoolean, answerCoding } = condition;
      const value = formState[question];

      switch (operator) {
        case '=':
          if (answerBoolean !== undefined) return value === answerBoolean;
          if (answerCoding !== undefined) return value === answerCoding.code;
          return false;
        default:
          return false;
      }
    };

    if (enableWhen) {
      const conditionsMet = enableWhen.every(shouldEnable);
      if (!conditionsMet) return null;
    }

    const handleFieldChange = (event) => {
      const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
      handleChange(linkId, value);
    };

    switch (type) {
      case 'group':
        return (
          <div key={linkId}>
            <Typography variant="h6" gutterBottom>
              {text}
            </Typography>
            {item.item.map((subItem) => renderField(subItem))}
          </div>
        );
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
              <MenuItem key={option.valueCoding.code} value={option.valueCoding.code}>
                {option.valueCoding.display}
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
      case 'dateTime':
        return (
          <TextField
            key={linkId}
            label={text}
            type="datetime-local"
            InputLabelProps={{ shrink: true }}
            required={required}
            fullWidth
            margin="normal"
            color="secondary"
            value={formState[linkId] || ''}
            onChange={handleFieldChange}
          />
        );
      case 'time':
        return (
          <TextField
            key={linkId}
            label={text}
            type="time"
            InputLabelProps={{ shrink: true }}
            required={required}
            fullWidth
            margin="normal"
            color="secondary"
            value={formState[linkId] || ''}
            onChange={handleFieldChange}
          />
        );
      case 'url':
        return (
          <TextField
            key={linkId}
            label={text}
            type="url"
            required={required}
            fullWidth
            margin="normal"
            color="secondary"
            value={formState[linkId] || ''}
            onChange={handleFieldChange}
          />
        );
      case 'decimal':
        return (
          <TextField
            key={linkId}
            label={text}
            type="number"
            inputProps={{ step: "0.1" }}
            required={required}
            fullWidth
            margin="normal"
            color="secondary"
            value={formState[linkId] || ''}
            onChange={handleFieldChange}
          />
        );
      case 'attachment':
        return (
          <Box display={'flex'} flexDirection={'row'} marginTop={1} marginBottom={1} key={linkId}>
            <Typography marginRight={20}>
              {text}
            </Typography>
            <Button color='secondary'>
              <input type="file" onChange={(event) => handleChange(linkId, event.target.files[0])} />
            </Button>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <form>
      {renderField(item)}
    </form>
  );
};


const App = () => {
  const [formState, setFormState] = useState({});
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [questionnaireResponse, setQuestionnaireResponse] = useState(null);
  const preRef = useRef(null);

  const handleChange = (linkId, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [linkId]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < formData[currentSectionIndex].item.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentSectionIndex < formData.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
      setCurrentQuestionIndex(0);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
      setCurrentQuestionIndex(formData[currentSectionIndex - 1].item.length - 1);
    }
  };

  const generateQuestionnaireResponse = () => {
    const responseItems = formData.map((section) => {
      const answeredItems = section.item
        .map((item) => {
          const valueKey = `value${item.type.charAt(0).toUpperCase() + item.type.slice(1)}`;
          const value = formState[item.linkId];

          if (!value) return null;

          return {
            linkId: item.linkId,
            text: item.text,
            answer: [{
              [valueKey]: item.type === 'choice' ? {
                code: value,
                display: item.answerOption.find(opt => opt.valueCoding.code === value)?.valueCoding.display
              } : value
            }]
          };
        })
        .filter(Boolean);

      if (answeredItems.length === 0) return null;

      return {
        linkId: section.linkId,
        text: section.text,
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

  const currentItem = formData[currentSectionIndex].item[currentQuestionIndex];

  return (
    <Container>
      <Typography marginTop={4} variant="h4" gutterBottom>
        {formData[currentSectionIndex].text}
      </Typography>
      <DynamicForm
        item={currentItem}
        formState={formState}
        handleChange={handleChange}
      />
      <Grid container spacing={2} justifyContent="space-between">
        {currentSectionIndex > 0 || currentQuestionIndex > 0 ? (
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
        ) : null}
        {currentSectionIndex < formData.length - 1 || currentQuestionIndex < formData[currentSectionIndex].item.length - 1 ? (
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
              padding: "9px 35px",
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
            <pre ref={preRef}>{JSON.stringify(questionnaireResponse, null, 2)}</pre>
          </DialogContentText>
        </DialogContent>
        <DialogActions >
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
