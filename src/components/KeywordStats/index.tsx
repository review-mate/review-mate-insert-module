import { Margin } from '@/ui/margin/margin';
import { Fonts } from '@/utils/GlobalFonts';
import { colors } from '@/utils/GlobalStyles';
import React, { useState } from 'react';
import { styled } from 'styled-components';
import { ReactComponent as AIBot } from '@/assets/icons/aibot.svg';
import KeywordStatList from './KeywordStatList';
import { ReactComponent as Down } from '@/assets/icons/down.svg';
import { ReactComponent as Up } from '@/assets/icons/up.svg';

export default function KeywordStats() {
  const limit = 4;
  const [hide, setHide] = useState(true);

  const keywordList = [
    {
      title: '청결',
      positive: 70,
      negative: 30,
    },
    {
      title: '청결',
      positive: 70,
      negative: 30,
    },
    {
      title: '청결',
      positive: 70,
      negative: 30,
    },
    {
      title: '청결',
      positive: 70,
      negative: 30,
    },
    {
      title: '청결',
      positive: 70,
      negative: 30,
    },
    {
      title: '서비스',
      positive: 70,
      negative: 30,
    },
    {
      title: '서비스',
      positive: 70,
      negative: 30,
    },
  ];

  return (
    <Container>
      <Fonts.body1>주요 키워드</Fonts.body1>
      <Margin margin={'6px 0 0 0'} />
      <Fonts.caption color={colors.primary} weight={500}>
        총 5000개의 리뷰 중에서 자주 언급된 키워드를 선별했어요!
      </Fonts.caption>
      <Margin margin={'20px 0 0 0'} />
      <AIBox>
        <AIIcon>
          <AIBot />
        </AIIcon>
        <Fonts.caption color={colors.gray01}>
          AI가 리뷰를 분석 중이에요...
        </Fonts.caption>
      </AIBox>

      <StatTitle>
        <Fonts.caption
          weight={700}
          style={{ textAlign: 'right' }}
          color={colors.primary}
          margin="0 4% 0 0"
        >
          긍정
        </Fonts.caption>
        <EmptyTitle />
        <Fonts.caption weight={700} color={colors.red} margin="0 0 0 4%">
          부정
        </Fonts.caption>
      </StatTitle>
      {keywordList.map((keyword, index) => {
        if (index < limit)
          return (
            <div key={index}>
              <Margin margin={'10px 0 0 0'} />
              <KeywordStatList
                title={keyword.title}
                positive={keyword.positive}
                negative={keyword.negative}
              />
            </div>
          );
      })}
      {!hide &&
        keywordList.map((keyword, index) => {
          if (index >= limit)
            return (
              <div key={index}>
                <Margin margin={'10px 0 0 0'} />
                <KeywordStatList
                  title={keyword.title}
                  positive={keyword.positive}
                  negative={keyword.negative}
                />
              </div>
            );
        })}
      <DownIcon>
        <button
          onClick={() => {
            setHide(!hide);
          }}
        >
          {hide ? <Down /> : <Up />}
        </button>
      </DownIcon>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 600px;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: ${colors.gray08};
`;

const AIBox = styled.div`
  position: relative;
  display: flex;
  height: 30px;
  align-items: center;
  padding-left: 55px;
  margin-bottom: 19px;
  border-radius: 5px;
  background-color: ${colors.gray06};
`;

const AIIcon = styled.div`
  position: absolute;
  top: -13px;
  left: 15px;
`;

const StatTitle = styled.div`
  display: grid;
  grid-template-columns: 13fr 1fr 13fr;
  align-items: center;
  justify-content: center;
  padding: 0 4%;
`;

const EmptyTitle = styled.div`
  width: 63px;
`;

const DownIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;