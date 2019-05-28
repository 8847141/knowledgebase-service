/* eslint-disable */
// zh_CN.js
// 文档地址前缀
const docServer = 'http://choerodon.io';
// 界面标题描述统一管理
const pageDetail = {
  'knowledge.title': '知识管理简介',
  'knowledge.description': '知识管理是为项目和组织提供知识管理和共享的平台。',
  'knowledge.link': `${docServer}/zh/docs/user-guide/wiki/space/`,
};

const zh_CN = {
  refresh: '刷新',
  operating: '处理中',
  success: '处理成功',
  deleted: '已删除',
  failed: '处理失败',
  create: '创建',
  edit: '编辑',
  editor: '编辑',
  delete: '删除',
  cancel: '取消',
  required: '该字段是必输的',
  sync: '同步',
  retry: '重试',

  'doc.create': '创建文章',
  'doc.attachment': '附件',
  'doc.comment': '评论',
  'doc.comment.create': '创建评论',
  'doc.log': '日志',
  'doc.version': '版本',

  'docHeader.attach': '附件',
  'docHeader.comment': '评论',
  'docHeader.log': '日志',
  'docHeader.catalog': '目录',

  ...pageDetail,
};
export default zh_CN;