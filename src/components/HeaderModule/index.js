import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { Modal, Typography } from "antd";
import { storageCode, ERROR_CODE } from "SRC/resource/string";
import { getDataLocalStorage } from "SRC/utils/function";
import { INACTIVE_MODEL } from "SRC/graphql/Model/Mutations";
import CompanyNameView from "SRC/components/common/CompanyName";
import { useMutation } from "@apollo/client";
import { HeaderContainer, ContentCaution } from "./styled";

const listScreenCaution = [
  "type-upload", // type
  "upload-file",
  "choose-text",
  "define-tags",
  "tag-data",
];
function HeaderModule() {
  const [doInactiveModel] = useMutation(INACTIVE_MODEL);
  const history = useHistory();
  const { module } = useParams();
  //   const [infoUser, setInfoUser] = useState({});

  //   useEffect(() => {
  //     async function fetchData() {
  //       try {
  //         const tempInfoUser = props?.client.readQuery({
  //           query: GET_INFO_USER,
  //         });
  //         setInfoUser(tempInfoUser.me);
  //       } catch (e) {
  //         return props?.client
  //           .query({
  //             query: GET_INFO_USER,
  //           })
  //           .then((res) => {
  //             setInfoUser(res.data.me);
  //           });
  //       }
  //       return false;
  //     }
  //     fetchData();
  //   }, []);

  //   useEffect(() => {
  //     if (module === 'type-upload') {
  //       window.history.pushState(null, null, null);
  //     }
  //   }, [history, module]);

  const goBack = () => {
    history.goBack();
  };
  const goHome = () => {
    if (listScreenCaution.includes(module)) {
      const tempData = getDataLocalStorage(storageCode.DATA_TRAIN);
      //   const params = {
      //     data: {
      //       user_id: infoUser._id,
      //       model_id: `${tempData.model_id}`,
      //       model_name: tempData.model_name,
      //     },
      //   };
      Modal.warning({
        title: "Caution",
        content: (
          <ContentCaution>
            <Typography.Title level={4}>
              If you skip this step, all the data will be delected. Do you still
              want to continue?
            </Typography.Title>
          </ContentCaution>
        ),
        okText: "Go Home",
        okButtonProps: { type: "danger" },
        onOk() {
          doInactiveModel({
            variables: {
              dataInput: {
                modelId: tempData.id,
              },
            },
          })
            .then((res) => {
              if (res.data.inactiveModel.statusCode === ERROR_CODE.SUCCESS) {
                history.push("/main/dashboard");
              }
            })
            .catch(() => {
              Modal.error({
                title: "Error",
                content: (
                  <div>
                    <p>Server has problem please try again later</p>
                  </div>
                ),
                onOk() {},
                okText: "Try again",
              });
            });
        },
        okCancel() {},
        width: "fit-content",
        className: "model-warning-custom",
      });
      //   history.push('/');
    } else {
      history.push("/main/dashboard");
    }
  };

  const isGoHome = module === "choose-type";
  return (
    <HeaderContainer align="middle">
      {/* eslint-disable */}
      <div className="btn-header btn-back" onClick={goBack}>
        <CompanyNameView color={"black"} hasLink={false} />
      </div>
      <div className="btn-header btn-close" onClick={goHome}>
        {!isGoHome && <FaTimes />}
      </div>
    </HeaderContainer>
  );
}
export default HeaderModule;
