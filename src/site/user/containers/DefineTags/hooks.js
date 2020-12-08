import { useCallback } from "react";
import { UPDATE_LABEL_MODEL } from "SRC/graphql/Model/Mutations";
import { useMutation } from "@apollo/client";

export const useCreateLabel = () => {
  const [doCreate, { loading }] = useMutation(UPDATE_LABEL_MODEL);
  const doCreateLabel = async (data) => {
    const tempLabels = data.tags.map((e) => e.tag);
    const a = doCreate({
      variables: {
        dataInput: {
          modelId: parseInt(data.id, 10),
          labels: tempLabels,
        },
      },
    });
    return a;
  };
  return [useCallback((e) => doCreateLabel(e)), { loading }];
};
