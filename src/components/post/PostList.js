import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';

const PostListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const PostItemBlock = styled.div`
  padding: 3rem 0;

  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  h2 {
    font-size: 2rem;
    margin: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }

  p {
    margin-top: 2rem;
  }
`;

const PostItem = ({ post }) => {
  const { publishedDate, user, tags, title, body, _id } = post;
  return (
    <PostItemBlock>
      <h2>
        <Link to={`/@${user.username}/${_id}`}>{title}</Link>
      </h2>
      <SubInfo
        username={user.username}
        publishedDate={new Date(publishedDate)}
      />
      <Tags tags={tags} />
      <p>{body}</p>
    </PostItemBlock>
  );
};

const PostList = ({ loading, error, posts, showWriteButton }) => {
  //에러 발생시
  if (error) {
    return <PostItemBlock>에러가 발생했습니다.</PostItemBlock>;
  }
  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        {showWriteButton && (
          <Button violet to="/write">
            새 글 작성하기
          </Button>
        )}
      </WritePostButtonWrapper>

      {!loading && posts && (
        <div>
          {posts.map((post) => (
            <PostItem post={post} key={post._id} />
          ))}
        </div>
      )}
    </PostListBlock>
  );
};

export default PostList;
