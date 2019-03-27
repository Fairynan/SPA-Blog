import request from '../utils/request'
const API_ROOT = 'https://www.ezrealprince.com'

// 获取主页列表
export function getHomeList (data = {}) {
  return request({url: API_ROOT + '/api/getArticleList', method: 'post', data})
}

// 获取文章内容
export function getArticle (data = {}) {
  return request({url: API_ROOT + '/api/getArticleDetails', method: 'post', data})
}

// 根据 文章 id 获取 comments
export function getComments (data = {}) {
  return request({url: API_ROOT + '/api/comments' + data.articleId, method: 'get'})
}

export function login(data = {})  {
  return request({url: API_ROOT + '/api/login', method: 'post', data})
}
// // 提交评论
// export function getHomeList(data = {}) {
//   return request({url: API_ROOT + 'api/comments/submitComment', data, method: 'post'})
// }

// // 获取标签集
// export function getHomeList(data = {}) {
//   return request({url: API_ROOT + 'api/tags', method: 'get'})
// }
