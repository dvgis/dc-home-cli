/*
 * @Author: Caven
 * @Date: 2020-04-21 21:54:54
 * @Last Modified by: Caven
 * @Last Modified time: 2020-10-16 13:15:45
 */

export function getData(name) {
  return global.Http.get(`data/${name}.json`)
}
