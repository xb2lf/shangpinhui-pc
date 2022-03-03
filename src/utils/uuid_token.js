import { v4 as uuidv4 } from 'uuid';

//要生成一个随机字符串，且每次执行不能发生变化，游客身份持久化存储
export const getUUID = () => {
  let uuid_token = localStorage.getItem('UUIDTOKEN');
  if (!uuid_token) {
    // 生成游客临时身份
    uuid_token = uuidv4();
    // 本地存储存储一次
    localStorage.setItem('UUIDTOKEN', uuid_token);
  }
  return uuid_token
};