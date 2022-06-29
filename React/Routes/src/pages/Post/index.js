import React, { useMemo } from "react";
import { useParams, useLocation } from 'react-router-dom';

export default function Post() {
  const params = useParams();
  const { search } = useLocation();
  const queryParams = useMemo(() => new URLSearchParams(search), [search]);

  return(
    <>
      <h1>Show Post</h1>
      <span>{params.id}</span>
      <br />
      <span>{queryParams.get('orderBy') || 'Sem query params'}</span>
    </>
  );
}