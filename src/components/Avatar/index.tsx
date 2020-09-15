import React from 'react';
import { ImageSourcePropType } from 'react-native';

import { Container, User, UserActive } from './styles';

interface AvatarProps {
  source: ImageSourcePropType;
  online?: boolean;
  story?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ source, online, story }) => {
  return (
    <Container>
      <User source={source} story={story} />
      {online && <UserActive />}
    </Container>
  );
};

export default Avatar;
