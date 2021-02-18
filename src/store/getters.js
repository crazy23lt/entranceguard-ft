const getters = {
  // sidebar: state => state.app.sidebar,
  // size: state => state.app.size,
  // device: state => state.app.device,
  // visitedViews: state => state.tagsView.visitedViews,
  // cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  permission_routes: state => state.permission.routes,
  name: state => state.user.name,
  phone: state => state.user.phone,
  auth: state => state.user.auth,
  safeArea: state => state.app.safeArea,
  doorKeys: state => state.app.doorKeys,
  reportPhones: state => state.urgent.reportPhones,
  // introduction: state => state.user.introduction,
  // roles: state => state.user.roles,
  // permission_routes: state => state.permission.routes,
  // errorLogs: state => state.errorLog.logs
}
export default getters
