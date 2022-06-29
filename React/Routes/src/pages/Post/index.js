import React, { useMemo } from "react";
import { useParams, useLocation, useHistory } from 'react-router-dom';

export default function Post() {
  const params = useParams();
  const { search } = useLocation();
  const queryParams = useMemo(() => new URLSearchParams(search), [search]);
  const history = useHistory();

  const handleNavigate = () => {
    history.push('/posts');
  }

  return(
    <>
      <h1>Show Post</h1>
      <button onClick={handleNavigate}>Voltar para lista de posts</button>
      <br />
      <span>{params.id}</span>
      <br />
      <span>{queryParams.get('orderBy') || 'Sem query params'}</span>
    </>
  );
}