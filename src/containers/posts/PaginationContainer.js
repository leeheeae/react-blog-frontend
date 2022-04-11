import React from 'react';
import Pagination from '../../components/post/Pagination';
import { useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import qs from 'qs';

const PaginationContainer = () => {
  const { username } = useParams();
  const { search } = useLocation();

  const { lastPage, posts, loading } = useSelector(({ posts, loading }) => ({
    lastPage: posts.lastPage,
    posts: posts.posts,
    loading: loading['posts/LIST_POSTS'],
  }));

  //포스트 데이터가 없거나 로딩중이면 아무것도 보여주지 않음
  if (!posts || loading) return null;

  //page가 없으면 1을 기본 값으로 사용
  const { tag, page = 1 } = qs.parse(search, {
    ignoreQueryPrefix: true,
  });

  return (
    <Pagination
      tag={tag}
      username={username}
      page={parseInt(page, 10)}
      lastPage={lastPage}
    />
  );
};

export default PaginationContainer;
