import { http } from '@/utils/http/axios';

//获取table
export function getAricleById(id) {
  return http.request({
    url: `/article/${id}`,
    method: 'get',
  });
}

export function createArticle(params) {
  return http.request({
    url: `/article`,
    method: 'post',
    params,
  });
}

export function updateArticle(id, params) {
  return http.request({
    url: `/article/${id}`,
    method: 'post',
    params,
  });
}

export function getArticles(params) {
  return http.request({
    url: `/article/list`,
    method: 'post',
    params,
  });
}

export function deleteArticle(id) {
  return http.request({
    url: `/article/${id}`,
    method: 'delete',
  });
}
