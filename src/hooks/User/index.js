import { useState, useEffect } from 'react';
import { GET_INFO_USER } from 'graphql/User/Query';
import { ERROR_CODE } from 'resource/string';
import { useQuery } from '@apollo/client';

export const useInfoUser = () => {
  const [infoUser, setInfoUser] = useState({});
  const { data } = useQuery(GET_INFO_USER);
  useEffect(() => {
    // // eslint-disable-next-line consistent-return
    if (data?.getDetailUser && data.getDetailUser.statusCode === ERROR_CODE.SUCCESS)
      setInfoUser(data.getDetailUser.data);
  }, [data]);
  return infoUser;
};
