import { Fonts } from '@/utils/GlobalFonts';
import { colors } from '@/utils/GlobalStyles';
import React from 'react';
import { styled } from 'styled-components';
import { ThreeDotsLoadingBar } from '../global/ThreeDotsLoadingBar';
import { Comment } from './Comment';
import { CommentType } from '@/types/Comments';

interface Props {
  comments: CommentType[];
  reviewInput: string;
  setReviewInput: React.Dispatch<React.SetStateAction<string>>;
  lastAssistedIdx: number;
  setLastAssistedIdx: React.Dispatch<React.SetStateAction<number>>;
}

export default function ReviewAssistant({
  comments,
  reviewInput,
  setReviewInput,
  lastAssistedIdx,
  setLastAssistedIdx,
}: Props) {
  return (
    <Container>
      <AIBox>
        <ThreeDotsLoadingBar />
        <Fonts.caption weight={500} color={colors.gray01}>
          AI가 맞춤 리뷰 작성을 도와드립니다.
        </Fonts.caption>
      </AIBox>
      {comments.map((comment, index) => {
        return (
          <Comment
            key={index}
            sort={comment.sort}
            idx={comment?.idx}
            polarity={comment?.polarity}
            newReviewInput={comment.content}
            reviewInput={reviewInput}
            setReviewInput={setReviewInput}
            lastAssistedIdx={lastAssistedIdx}
            setLastAssistedIdx={setLastAssistedIdx}
          />
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 680px;
  flex: 1;
  flex-direction: column;
  min-width: 200px;
  background-color: ${colors.gray08};
  padding: 20px;
  overflow-y: auto;
`;

const AIBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  border-radius: 5px;
  background-color: ${colors.gray06};
  margin-bottom: 10px;
`;
