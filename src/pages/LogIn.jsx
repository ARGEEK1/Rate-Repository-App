import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Formik, useField } from 'formik'
import StyledTextInput from '../components/StyledTextInput'
import StyledText from '../components/StyledText';
import { loginValidationSchema } from '../validationSchema/login';

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

const LogInPage = () => {
  return (
    <Formik
      validationSchema={loginValidationSchema}
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