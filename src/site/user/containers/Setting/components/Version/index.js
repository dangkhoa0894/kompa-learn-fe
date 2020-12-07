import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Typography } from 'antd';
import { format } from 'date-fns';
import { useHistory, useParams } from 'react-router-dom';
import { ContainerVersion, TemplateInfoCss } from './styled';

const VersionModel = (props) => {
  const [versionActive, setVersionActive] = useState({});
  const { data } = props;
  const history = useHistory();
  const { modelId } = useParams();
  useEffect(() => {
    if (data?.score) {
      setVersionActive(data?.score.find((e) => e.active));
    }
  }, [data.score]);

  const changeHistoryView = () => {
    history.push(`/model/config/history/${modelId}`);
  };
  return (
    <ContainerVersion>
      <div className="header-version">
        <Typography.Text className="title-version"> Current version</Typography.Text>
        <Typography.Text className="view-all-version" onClick={changeHistoryView}>
          View all
        </Typography.Text>
      </div>
      <div className="body-version">
        <TemplateInfo label="Version:" content={`${versionActive?.version}`} />
        <TemplateInfo label="Accuracy:" content={`${versionActive?.accuracy}`} />
        <TemplateInfo label="Algorithm:" content={versionActive?.algorithm?.name || 'No update'} />
        <TemplateInfo
          label="Update at:"
          content={`${
            versionActive?.updateAt
              ? format(new Date(versionActive?.updateAt), 'HH:mm:ss dd-MM-yyyy ')
              : 'No update'
          }`}
        />
      </div>
    </ContainerVersion>
  );
};

VersionModel.propTypes = {
  data: PropTypes.instanceOf(Object),
};
VersionModel.defaultProps = {
  data: {},
};

export default VersionModel;

const TemplateInfo = (props) => {
  const { content, label } = props;
  return (
    <TemplateInfoCss>
      <Typography.Text className="label-template-version">{label}</Typography.Text>
      <Typography.Text className="content-template-version">{content}</Typography.Text>
    </TemplateInfoCss>
  );
};

TemplateInfo.propTypes = {
  content: PropTypes.string,
  label: PropTypes.string,
};

TemplateInfo.defaultProps = {
  content: '',
  label: '',
};
