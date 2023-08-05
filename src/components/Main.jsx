import React from 'react';
import { Text, View, Switch } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { Redirect, Route, Routes } from 'react-router-native';
import LogInPage from '../pages/LogIn';

const Main = () => {
  return (
    <View style={{ flex: 1 }} >
      <AppBar />
      <Routes>
        <Route path='/' exact element={<RepositoryList />} />
        <Route path='/signin' exact element={<LogInPage />} />
      </Routes>
    </View>
  );
};

export default Main;