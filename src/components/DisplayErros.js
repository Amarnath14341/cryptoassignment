import { React } from 'react';
import { Alert } from 'reactstrap';
import { isEmptyObject } from '../helpers/isEmptyObject';
import './display-errors.css';

export const DisplayErros = ({ errors }) => {
  /* if (isEmptyObject(errors)) {
    return null;
  } */

  return <Alert color="danger">{getAllErrorsInStrings(errors)}</Alert>;
};

const getAllErrorsInStrings = (errorData) => {
  return Object.keys(errorData).map((item) => {
    return `${errorData[item]}\n`;
  });
};
