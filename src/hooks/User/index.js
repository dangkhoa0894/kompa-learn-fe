import { useState, useEffect } from "react";
import { GET_INFO_USER } from "SRC/graphql/User/Query";
import { ERROR_CODE } from "SRC/resource/string";
import { useQuery } from "@apollo/client";

export const useInfoUser = () => {
  const [infoUser, setInfoUser] = useState({});
  const { data } = useQuery(GET_INFO_USER);
  useEffect(() => {
    // // eslint-disable-next-line consistent-return
    if (
      data?.getDetailUser &&
      data.getDetailUser.statusCode === ERROR_CODE.SUCCESS
    )
      setInfoUser(data.getDetailUser.data);
  }, [data]);
  return infoUser;
};
