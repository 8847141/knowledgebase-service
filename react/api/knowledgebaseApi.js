import { getProjectId, request, getOrganizationId } from '../common/utils';

// 获取项目知识库
export const getProjectBaseList = () => request.get(`/knowledge/v1/projects/${getProjectId()}/knowledge_base/query/list`);

/**
 * 创建知识库
 */
export const createBase = (data) => request.post(`/knowledge/v1/projects/${getProjectId()}/knowledge_base/create`, data);

/**
 * 设置知识库
 * @param {*} data 
 */
export const editBase = (data) => request.put(`/knowledge/v1/projects/${getProjectId()}/knowledge_base/update`, data);

// 将项目下的知识库或文档移动到回收站
export const moveToBin = (id) => request.put(`/knowledge/v1/projects/${getProjectId()}/knowledge_base/remove_my/${id}`);

// 恢复回收站中的知识库或文档
export const recoverFromBin = (id) => request.put(`/knowledge/v1/projects/${getProjectId()}/recycle/restore/${id}`);

// 删除回收站的知识库或文档
export const deleteDocOrBase = (id) => request.delete(`/knowledge/v1/projects/${getProjectId()}/recycle/delete/${id}`);

// 获取回收站列表
export const getBinList = (data) => request.post(`/v1/projects/${getProjectId()}/recycle/page_by_options`, data);