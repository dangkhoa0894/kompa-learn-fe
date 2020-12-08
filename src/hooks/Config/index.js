import { useHistory } from "react-router-dom";

const { useCallback } = require("react");
const { useMutation } = require("@apollo/client");
const { UPDATE_CONFIG_MODEL } = require("SRC/graphql/Model/Mutations");
const { notification } = require("antd");
const { ERROR_CODE, _TYPENAME } = require("SRC/resource/string");

export const useUpdateConfigModel = () => {
  const [doUpdate, { loading }] = useMutation(UPDATE_CONFIG_MODEL);
  const history = useHistory();
  const doUpdateConfig = async (data) => {
    try {
      await doUpdate({
        variables: {
          dataInput: {
            modelId: parseInt(data.modelId, 10),
            config: data.config,
          },
        },
        update: (cache, { data: { updateConfigModel } }) => {
          if (updateConfigModel.statusCode === ERROR_CODE.SUCCESS) {
            cache.modify({
              id: `${_TYPENAME.RES_SCORE}:${data.modelId}`,
              fields: {
                process() {
                  return 6;
                },
              },
            });
            notification.success({
              message: "Message",
              description: "Update new config successful",
            });
            history.push("/main/dashBoard");
          } else {
            notification.error({
              message: "Message error ",
              description: updateConfigModel.message,
            });
          }
        },
      });
    } catch (e) {
      notification.error({
        message: "Message error ",
        description: e.message,
      });
    }
  };

  return [useCallback((e) => doUpdateConfig(e)), { loading }];
};
