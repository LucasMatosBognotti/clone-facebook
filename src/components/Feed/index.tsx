import React from 'react';
import { View } from 'react-native';
import { Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

import Avatar from '../Avatar';

import {
  Container,
  Header,
  Row,
  User,
  Time,
  Post,
  Photo,
  Footer,
  FooterCount,
  IconCount,
  TextCount,
  Separator,
  FooterMenu,
  Button,
  Icon,
  Text,
  BottomDivider
} from './styles';

const Feed: React.FC = () => {
  return (
    <>
      <Container>
        <Header>
          <Row>
            <Avatar source={require('../../../assets/Lucas.jpg')} />
            <View style={{ paddingLeft: 10 }} >
              <User>Lucas M</User>
              <Row>
                <Time>10m</Time>
                <Entypo name="dot-single" size={12} color='#747476' />
                <Entypo name="globe" size={12} color='#747476' />
              </Row>
            </View>
          </Row>
          <Entypo name="dots-three-horizontal" size={15} color='#222' />
        </Header>
        <Post>
          Crie na pratica uma aplicação ultilizando NextJS
          ReactJS,
          React Native e Strap Api.,
        </Post>
        <Photo source={require('../../../assets/time.jpg')} />
      
        <Footer>
          <FooterCount>
            <Row>
              <IconCount>
                <AntDesign name="like1" size={12} color="#fff" />
              </IconCount>
              <TextCount>22 likes</TextCount>
            </Row>
            <TextCount>1k comments</TextCount>
          </FooterCount>

          <Separator />

          <FooterMenu>
            <Button>
              <Icon>
                <AntDesign name="like2" size={20} color="#424040" />
              </Icon>
              <Text>Like</Text>
            </Button>

            <Button>
              <Icon>
                <MaterialCommunityIcons name="comment-outline" size={20} color="#424040" />
              </Icon>
              <Text>Comment</Text>
            </Button>

            <Button>
              <Icon>
                <MaterialCommunityIcons name="share-outline" size={20} color="#424040" />
              </Icon>
              <Text>Share</Text>
            </Button>
          </FooterMenu>
        </Footer>
        <BottomDivider />
      </Container>
    </>
  );
};

export default Feed;
