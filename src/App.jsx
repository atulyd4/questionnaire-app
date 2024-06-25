/* eslint-disable react/prop-types */
// App.js
import React, { useRef, useState } from 'react';
import hdfc_data from './hdfc_data';
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

const formData = hdfc_data?.item;

const DynamicForm = ({ data, formState, handleChange }) => {

  const renderField = (item) => {
    const { linkId, text, type, answerOption, required, extension, enableWhen } = item;

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
            <Typography variant="h6">{text}</Typography>
            {item.item.map(renderField)}
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
            control={<Checkbox checked={formState[linkId] || false} onChange={handleFieldChange} />}
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
            <Button>
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
      {data.item.map(renderField)}
    </form>
  );
};

const App = () => {
  const [formState, setFormState] = useState({});
  const [page, setPage] = useState(0);
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
          const valueKey = `value${item.type.charAt(0).toUpperCase() + item.type.slice(1)}`;
          const value = formState[item.linkId];

          // If the value is empty, return null
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
        .filter(Boolean); // Filter out null values

      // If there are no answered items in this section, return null
      if (answeredItems.length === 0) return null;

      return {
        linkId: section.linkId,
        text: section.text,
        item: answeredItems
      };
    }).filter(Boolean); // Filter out null values

    return {
      resourceType: "QuestionnaireResponse",
      meta: {
        profile: [
          "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaireresponse|3.0"
        ],
        tag: [
          {
            code: "lformsVersion: 36.1.3"
          }
        ]
      },
      status: "completed",
      authored: new Date().toISOString(),
      item: responseItems,
      subject: {
        reference: "Patient/e3b754c9-1e6c-4708-a8ae-851ddac7ca81",
        display: "Jackie Bode"
      }
    };
  };


  const handleSubmit = () => {
    const questionnaireResponse = generateQuestionnaireResponse();
    console.log('Questionnaire Response:', JSON.stringify(questionnaireResponse, null, 2));
  };
  const handleShowas = () => {
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

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {formData[page]?.text}
      </Typography>
      <DynamicForm data={formData[page]} formState={formState} handleChange={handleChange} />
      <Grid container spacing={2} justifyContent="space-between">
        {page > 0 && (
          <Grid item>
            <Button variant="contained" onClick={handlePrevious}>
              Previous
            </Button>
          </Grid>
        )}
        {page < formData.length - 1 ? (
          <Grid item>
            <Button variant="contained" onClick={handleNext}>
              Continue
            </Button>
          </Grid>
        ) : (
          <Grid item>
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>

            <Button variant="contained" onClick={handleShowas}>
              Show As
            </Button>
          </Grid>
        )}
      </Grid>

      <Dialog open={modalOpen} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Questionnaire Response</DialogTitle>

        <DialogContent>
          <DialogContentText bgcolor={'#F2F2F2'}>
            <pre ref={preRef}>{JSON.stringify(questionnaireResponse, null, 2)}</pre>
          </DialogContentText>
        </DialogContent>


        <DialogActions >
          <Button variant="contained" onClick={handleCopyToClipboard} color="primary">
            Copy to Clipboard
          </Button>
          <Button variant="contained" onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>

      </Dialog>
    </Container>
  );
};

export default App;
