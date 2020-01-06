import React, { useContext, useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import {
  Page, Header, Content, Breadcrumb, stores,
} from '@choerodon/boot';
import { Icon } from 'choerodon-ui';
import { Button, Modal } from 'choerodon-ui/pro';
import BaseItem from './components/baseItem';
import { openCreateBaseModal } from './components/baseModal';
import BinTable from './components/binTable';

import Store from './stores';
import './KnowledgeHome.less';

const createBaseModal = Modal.key();
const { AppState } = stores;

const KnowledgeBases = observer(() => {
  const { prefixCls, knowledgeHomeStore, type } = useContext(Store);
  const { projectBaseList } = knowledgeHomeStore;
  const [projectExpand, setProjectExpand] = useState(true);
  const [organizationExpand, setOrganizationExpand] = useState(AppState.menuType.type !== 'project');
  const [binExpand, setBinExpand] = useState(false);

  const handleCreateBase = () => {
    openCreateBaseModal({ onCallBack: knowledgeHomeStore.axiosProjectBaseList });
  };

  const handleChangeExpand = (baseType) => {
    if (baseType === 'project') {
      setProjectExpand(!projectExpand);
    } else if (baseType === 'organization') {
      setOrganizationExpand(!organizationExpand);
    } else if (baseType === 'bin') {
      setBinExpand(!binExpand);
    }
  };

  useEffect(() => {
    knowledgeHomeStore.axiosProjectBaseList();
  }, []);
  
  return (
    <Page 
      className={prefixCls}
      service={[
        'base-service.organization-project.listProjectsByOrgId',
      ]}
    >
      <Header>
        <Button className={`${prefixCls}-createBaseBtn`} onClick={handleCreateBase}>
          <Icon type="playlist_add icon" />
          创建知识库
        </Button>
      </Header>
      <Breadcrumb />
      <Content className={`${prefixCls}-container`}>
        {type === 'project' && (
        <div className={`${prefixCls}-container-base`}>
          <div className={`${prefixCls}-container-base-title`}>
            <h1>本项目知识库</h1>
            <Icon type={`${projectExpand ? 'expand_less' : 'expand_more'}`} role="none" onClick={() => { handleChangeExpand('project'); }} />

          </div>
          <div className={`${prefixCls}-container-base-content ${projectExpand ? 'isExpand' : 'notExpand'}`}>
            {
              projectBaseList && projectBaseList.length > 0 && projectBaseList.map((item) => <BaseItem key={item.id} item={item} baseType="project" />)
            }
          </div>
        </div>
        )}
        <div className={`${prefixCls}-container-base`}>
          <div className={`${prefixCls}-container-base-title`}>
            <h1>本组织知识库</h1>
            <Icon type={`${organizationExpand ? 'expand_less' : 'expand_more'}`} role="none" onClick={() => { handleChangeExpand('organization'); }} />
          </div>
          <div className={`${prefixCls}-container-base-content ${organizationExpand ? 'isExpand' : 'notExpand'}`}>
            {
              projectBaseList && projectBaseList.length > 0 && projectBaseList.map((item) => <BaseItem key={item.id} item={item} baseType="organization" />)
            }
          </div>
        </div>
        <div className={`${prefixCls}-container-base`}>
          <div className={`${prefixCls}-container-base-title`}>
            <h1>回收站</h1>
            <Icon type={`${binExpand ? 'expand_less' : 'expand_more'}`} role="none" onClick={() => { handleChangeExpand('bin'); }} />
          </div>
          <div className={`${prefixCls}-container-base-binContent ${binExpand ? 'isExpand' : 'notExpand'}`}>
            <BinTable />
          </div>
        </div>
      </Content>
    </Page>
  );
});

export default KnowledgeBases;