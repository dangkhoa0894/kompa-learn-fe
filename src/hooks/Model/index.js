import { useEffect, useState, useCallback } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  GET_ALL_ALGORITHM,
  GET_DETAIL_MODEL,
  GET_ACTIVE_MODIFY_MODEL,
  GET_ALL_ID_MODEL,
} from "SRC/graphql/Model/Query";
import { INACTIVE_MODEL } from "SRC/graphql/Model/Mutations";
import { ERROR_CODE } from "SRC/resource/string";
import { notification } from "antd";

export const useGetAllAlgorithm = () => {
  const { data, loading } = useQuery(GET_ALL_ALGORITHM);
  const [listAlgorithm, setListAlgorithm] = useState([]);
  useEffect(() => {
    if (data && data.getAllAlgorithms) {
      setListAlgorithm(data.getAllAlgorithms.data);
    }
    //
  }, [data]);

  return { listAlgorithm, loading };
};

export const useGetDetailModel = ({ model, cache = true }) => {
  const { data: detailModel, loading } = useQuery(GET_DETAIL_MODEL, {
    variables: {
      dataInput: {
        modelId: parseInt(model?.id, 10),
      },
    },
    skip: !model?.id,
    fetchPolicy: cache ? "cache-first" : "network-only",
  });
  return [
    {
      loading,
      data: detailModel?.getDetailModel?.data || {},
    },
  ];
};

export const useGetDetailModelNoCache = ({ model }) => {
  const { data: detailModel, loading } = useQuery(GET_DETAIL_MODEL, {
    variables: {
      dataInput: {
        modelId: parseInt(model?.id, 10),
      },
    },
    fetchPolicy: "network-only",
  });
  return [
    {
      loading,
      data: detailModel?.getDetailModel?.data || {},
    },
  ];
};

export const useRemoveModel = () => {
  const [doInactiveModel] = useMutation(INACTIVE_MODEL);

  const doRemoveModel = async (evt) => {
    await doInactiveModel({
      variables: {
        dataInput: {
          modelId: evt.modelId,
        },
      },
      update: (cache, { data: { inactiveModel } }) => {
        if (inactiveModel.statusCode === ERROR_CODE.SUCCESS) {
          cache.modify({
            fields: {
              getAllModels(existingData, { readField }) {
                const a = existingData.data.filter(
                  (commentRef) => evt.modelId !== readField("id", commentRef)
                );
                return {
                  ...existingData,
                  data: a,
                };
              },
            },
          });
          notification.success({
            message: "Message",
            description: "Remove model successful",
          });
        }
      },
    });
  };

  return [useCallback((evt) => doRemoveModel(evt), [doRemoveModel])];
};

export const useGetActiveContentModel = () => {
  const { data } = useQuery(GET_ACTIVE_MODIFY_MODEL);
  const [dataActive, setDataActive] = useState({});
  useEffect(() => {
    if (data?.contentModifyModel?.contentActive) {
      setDataActive(data.contentModifyModel.contentActive);
    }
  }, [data]);

  return { data: dataActive };
};

export const useGetDataModifyCache = () => {
  const { data } = useQuery(GET_ACTIVE_MODIFY_MODEL);
  const [dataModify, setDataModify] = useState({});
  useEffect(() => {
    if (data?.contentModifyModel) {
      setDataModify(data.contentModifyModel);
    }
  }, [data]);

  return { data: dataModify };
};

export const useCheckOwnerModel = () => {
  const [listId, setListId] = useState([]);
  useQuery(GET_ALL_ID_MODEL, {
    onCompleted: (res) => {
      setListId(res.getAllIdModel.data);
    },
  });
  const checkOwnerModel = (modelId) => {
    return listId.some((e) => e.id === modelId);
  };
  return [useCallback((e) => checkOwnerModel(e))];
};
