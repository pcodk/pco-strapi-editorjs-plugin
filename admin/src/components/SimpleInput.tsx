import * as React from 'react';
import {
  Button,
  Box,
  Field,
  Flex,
  Popover,
  Typography,
  useComposedRefs,
} from '@strapi/design-system';
import { useIntl } from 'react-intl';
import { styled } from 'styled-components';
import { getTranslation } from '../utils/getTranslation';
import { useField, type InputProps, type FieldValue } from '@strapi/strapi/admin';


const color = '#FF00FF';
const value = color;

type SimpleInputProps = InputProps &
  FieldValue & {
    labelAction?: React.ReactNode;
  };

export const SimpleInput = React.forwardRef<HTMLButtonElement, SimpleInputProps>(
  (
    { hint, disabled = false, labelAction, label, name, required = false, onChange, value, error },
     forwardedRef
  ) => {

  const color = value || '#000000';

  return (
      <Field.Root name={name} id={name} error={error} hint={hint} required={required}>
        <Field.Label action={labelAction}>{label}</Field.Label>
        <Field.Input
        ref={forwardedRef}
        id="simple-input"
        placeholder="#000000"
        value={value}
        color={color}
        onChange={onChange}
        disabled={disabled}
        />
      </Field.Root>
  );
}
);
