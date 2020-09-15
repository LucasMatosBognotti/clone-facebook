import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 92px;
`;

export const Row = styled.View`
  flex-direction: row;
  background: #fff;
  width: 100%;
  padding: 0 11px;
  align-items: center;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  padding: 0 8px;
`;

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  background: #f0f0f0f0;
`;

export const Menu = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 42px;
`;

export const MenuText = styled.Text`
  padding-left: 11px;
  font-weight: 500;
  font-size: 12px;
`;

export const Separator = styled.View`
  width: 1px;
  height: 26px;
  background: #f0f0f0;
`;

export const BottomDivider = styled.View`
  width: 100%;
  height: 9px;
  background: #f0f2f5;
`;
