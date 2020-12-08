import React, { memo } from "react";
import { useParams } from "react-router-dom";
import { useGetDetailModel } from "SRC/hooks/Model";
import BodyBackground from "SRC/components/common/BodyBackground";
import VersionModel from "./components/Version";
import Config from "./components/Config";
import { WrapperSetting } from "./styled";
import Loading from "../Loading/LoadingView";

const SettingView = () => {
  const params = useParams();
  const [{ data, loading }] = useGetDetailModel({
    model: { id: params.modelId },
    cache: false,
  });
  return (
    <BodyBackground>
      <WrapperSetting>
        {loading ? (
          <Loading mode="panel" />
        ) : (
          <>
            <Config data={data} />
            <VersionModel data={data} />
          </>
        )}
      </WrapperSetting>
    </BodyBackground>
  );
};

export default memo(SettingView);
