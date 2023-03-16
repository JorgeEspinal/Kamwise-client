import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import PostActionsForm from '../components/Post/PostActionsForm';
import config from '../config';

const PostActions = ({ posts }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleEdit = data => {
    fetch(`${config.URL_API}/${data.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: data ? JSON.stringify(data) : null,
    })
      .then(_res => navigate('/'))
      .catch(err => console.error(err));
  };

  const handleCreate = data => {
    fetch(config.URL_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: data ? JSON.stringify(data) : null,
    })
      .then(_res => navigate('/'))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    if (
      searchParams.get('action') !== 'edit' &&
      searchParams.get('action') !== 'new'
    )
      navigate('/');
  }, [searchParams, navigate]);

  return (
    <PostActionsForm
      action={searchParams.get('action')}
      post={posts.find(post => post._id === searchParams.get('id'))}
      onEdit={handleEdit}
      onCreate={handleCreate}
    />
  );
};

export default PostActions;
