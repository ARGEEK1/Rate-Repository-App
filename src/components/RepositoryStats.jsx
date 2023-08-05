import React from 'react';
import { View } from 'react-native';
import StyledText from './StyledText';

const parseThousands = value => {
  return value >= 1000
    ? `${Math.round(value / 1000) / 10}K`
    : String(value);
};

const RepositoryStats = (props) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <View>
        <StyledText aling='center' fontWeight='bold'>{parseThousands(props.forksCount)}</StyledText>
        <StyledText aling='center'>Forks</StyledText>
      </View>
      <View>
        <StyledText aling='center' fontWeight='bold'>{parseThousands(props.stargazerCount)}</StyledText>
        <StyledText aling='center'>Stars</StyledText>
      </View>
      <View>
        <StyledText aling='center' fontWeight='bold'>{props.ratingAverage}</StyledText>
        <StyledText aling='center'>Rating</StyledText>
      </View>
      <View>
        <StyledText aling='center' fontWeight='bold'>{props.reviewCount}</StyledText>
        <StyledText aling='center'>Review</StyledText>
      </View>
    </View>
  );
};

export default RepositoryStats;
