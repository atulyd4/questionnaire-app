import React from 'react';
import {
  Typography,
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox, Box
} from '@mui/material';

// const formData = covid_data?.item;
// const Data1 = covid_data
export const DynamicForm = ({ data, formState, handleChange }) => {
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
            onChange={handleFieldChange} />
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
            onChange={handleFieldChange} />
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
            required={required} />
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
            onChange={handleFieldChange} />
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
