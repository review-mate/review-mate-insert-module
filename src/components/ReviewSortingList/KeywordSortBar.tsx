import { Fonts } from '@/utils/GlobalFonts';
import { colors } from '@/utils/GlobalStyles';
import React from 'react';
import { styled } from 'styled-components';
import { ReactComponent as CheckWhite } from '@/assets/icons/checkWhite.svg';
import { ReactComponent as CheckBlack } from '@/assets/icons/checkBlack.svg';

export default function KeywordSortBar() {
  return (
    <Box>
      <BigBox>
        <BigTag title={'청결'} check={true} />
        <BigTag title={'청결'} check={false} />
      </BigBox>
      <SmallBox>
        <SmallTag title={'청결'} check={true} />
        <SmallTag title={'청결'} check={false} />
      </SmallBox>
    </Box>
  );
}

interface Props {
  title: string;
  check: boolean;
}

const BigTag = ({ title, check }: Props) => {
  return (
    <Tag backgroundColor={check ? colors.primary : colors.white}>
      {check && <CheckWhite />}
      <Fonts.body3
        color={check ? colors.white : colors.primary}
        weight={500}
        margin={check ? '0 0 0 4px' : '0'}
      >
        {title}
      </Fonts.body3>
    </Tag>
  );
};

const SmallTag = ({ title, check }: Props) => {
  return (
    <Tag borderColor={check ? colors.gray03 : colors.gray06}>
      {check && <CheckBlack />}
      <Fonts.body3
        color={colors.gray01}
        weight={500}
        margin={check ? '0 0 0 4px' : '0'}
      >
        {title}
      </Fonts.body3>
    </Tag>
  );
};

const Tag = styled.div<{ backgroundColor?: string; borderColor?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66px;
  height: 30px;
  border: 1px solid ${(props) => props.borderColor || colors.primary};
  border-radius: 100px;
  background-color: ${(props) => props.backgroundColor || colors.white};
  margin: 0 5px 0 0;
  cursor: pointer;
`;

const Box = styled.div`
  width: 100%;
`;

const BigBox = styled.div`
  height: 52px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 13px;
  box-sizing: border-box;
  border-top: 1px solid ${colors.gray03};
  background-color: ${colors.gray08};
`;

const SmallBox = styled.div`
  height: 52px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 13px;
  box-sizing: border-box;
  border-top: 1px solid ${colors.gray06};
`;
