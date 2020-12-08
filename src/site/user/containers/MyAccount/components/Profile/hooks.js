import { UPDATE_INFO_USER } from "SRC/graphql/User/Mutations";
import { useMutation } from "@apollo/client";
import { useCallback } from "react";
import { ERROR_CODE } from "SRC/resource/string";
import { GET_INFO_USER } from "SRC/graphql/User/Query";
import { notification } from "antd";

export const useUpdateInfoUser = () => {
  const [doUpdate, { loading }] = useMutation(UPDATE_INFO_USER);
  const doUpdateInfo = async (dataParams) => {
    const params = {
      input: {
        username: dataParams.username,
        firstName: dataParams.firstName,
        lastName: dataParams.lastName,
        email: dataParams.email,
        user_id: dataParams._id,
      },
    };
    if (dataParams.password) {
      params.password = dataParams.password;
    }
    const a = doUpdate({
      variables: {
        ...params,
      },
      update: (cache, { data: { updateInfoUser } }) => {
        if (updateInfoUser.statusCode === ERROR_CODE.SUCCESS) {
          const tempCache = cache.readQuery({
            query: GET_INFO_USER,
          });
          delete params.password;
          const dataCache = { ...tempCache.me, ...params.input };
          cache.writeQuery({
            query: GET_INFO_USER,
            data: {
              me: {
                ...dataCache,
                __typename: "__INFO_USER__",
              },
            },
          });
          notification.success({
            message: "Message",
            description: "Update info user successful !",
          });
          // }
        }
      },
    });
    return a;
  };

  return [useCallback((e) => doUpdateInfo(e)), { loading }];
};
