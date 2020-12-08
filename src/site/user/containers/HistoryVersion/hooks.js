import { useMutation } from "@apollo/client";
import { CHANGE_VERSION_MODEL } from "SRC/graphql/Model/Mutations";
import { ERROR_CODE, _TYPENAME } from "SRC/resource/string";
import { useCallback } from "react";
import { notification } from "antd";

export const useChangeVersion = () => {
  const [doChangeVersion, { loading }] = useMutation(CHANGE_VERSION_MODEL);

  const handleChangeVersion = async ({ data }) => {
    await doChangeVersion({
      variables: {
        dataInput: {
          modelId: data.modelId,
          version: data.version,
        },
      },
      update: (cache, { data: { changeVersion } }) => {
        if (changeVersion.statusCode === ERROR_CODE.SUCCESS) {
          try {
            cache.modify({
              id: `${_TYPENAME.RES_SCORE}:${data.prevActive}`,
              fields: {
                active() {
                  return false;
                },
              },
            });
            cache.modify({
              id: `${_TYPENAME.RES_SCORE}:${changeVersion.data.id}`,
              fields: {
                active() {
                  return true;
                },
              },
            });
          } catch (err) {
            notification.error({
              message: "Message",
              description: err.message,
            });
          }
        }
      },
    });
  };

  return [useCallback((data) => handleChangeVersion(data)), { loading }];
};
