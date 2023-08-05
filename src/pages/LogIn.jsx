import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Formik, useField } from 'formik'
import StyledTextInput from '../components/StyledTextInput'
import StyledText from '../components/StyledText';

const initialValues = {
  email: '',
  password: ''
};

const styles = StyleSheet.create({
  form: {
    margin: 12
  },
  error: {
    color: 'red',
    fontSize: 15,
    marginBottom: 20,
    marginTop: -5,
  }
});

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <>
      <StyledTextInput
        onChangeText={value => helpers.setValue(value)}
        value={field.value}
        error={meta.error}
        {...props}
      />
      {meta.error &&
        <StyledText style={styles.error}>{meta.error}</StyledText>
      }
    </>
  );
};

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  };

  if (!values.password) {
    errors.password = 'Required password';
  } else if (values.password.length < 6) {
    errors.password = '6 characters minimum';
  };

  return errors;
};

const LogInPage = () => {
  return (
    <Formik
      validate={validate}
      initialValues={initialValues}
      onSubmit={values => console.log(values)}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue
              placeholder='E-mail'
              name='email'
            />
            <FormikInputValue
              placeholder='Password'
              name='password'
              secureTextEntry
            />
            <Button title='Log In' onPress={handleSubmit} />
          </View>
        )
      }}
    </Formik>
  );
};

export default LogInPage;