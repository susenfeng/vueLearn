const commonFn = {
  j2s(obj) {
    return JSON.stringify(obj)
  },
  s2j(obj) {
    return JSON.parse(obj)
  },
  toastMsg(obj, type, msg) {
    switch (type) {
      case 'normal':
        obj.$message(msg)
        break
      case 'success':
        obj.$message({
          message: msg,
          type: 'success'
        })
        break
      case 'warning':
        obj.$message({
          message: msg,
          type: 'warning'
        })
        break
      case 'error':
        obj.$message.error(msg)
        break
    }
  },
  clearVuex(cate) {
    store.dispatch(cate, [])
  },
  showJsonData(target) {
    console.log('target = ', this.j2s(target))
  },
  dealError(obj, res) {
    switch (res.code) {
      case 101:
        if (Cookies.get('rememberPwd')) {
          let data = {
            rememberKey: Lockr.get('rememberKey')
          }
          this.reAjax('base/relogin', data).then((res) => {
            if (res.code == 200) {
              this.resetCommonData(obj, res.data)
            } else {
              this.toastMsg(obj, 'error', res.error)
            }
          })
        } else {
          this.toastMsg(obj, 'error', res.error)
          setTimeout(() => {
            router.replace('/')
          }, 1500)
        }
        break
      case 103:
        this.toastMsg(obj, 'error', res.error)
        setTimeout(() => {
          router.replace('/')
        }, 1500)
        break
      case 404:
        setTimeout(() => {
          location.hash = '/common/404'
        }, 500)
        break
      default:
        this.toastMsg(obj, 'error', res.error)
    }
  },
  getHasRule(val) {
    let userInfo = Lockr.get('userInfo')
    if (userInfo.u_id == 1) {
      return true
    } else {
      let authList = Lockr.get('authList')
      return _.includes(authList, val)
    }
  },
  reAjax(url, data) {
    return new Promise((resolve, reject) => {
      axios.post(url, data).then((response) => {
        resolve(response.data)
      }, (response) => {
        reject(response)
        alert('连接超时，请检查网络连接')
      })
    })
  },
  resetCommonData(obj, data) {
    _(data.menusList).forEach((res, key) => {
      if (key == 0) {
        res.selected = true
      } else {
        res.selected = false
      }
    })
    Lockr.set('menus', data.menusList)              // 菜单数据
    Lockr.set('authKey', data.authKey)              // 权限认证
    Lockr.set('rememberKey', data.rememberKey)      // 记住密码的加密字符串
    Lockr.set('authList', data.authList)            // 权限节点列表
    Lockr.set('userInfo', data.userInfo)            // 用户信息
    Lockr.set('sessionId', data.sessionId)          // 用户sessionid
    Lockr.set('roleType', data.roleType)          // 用户角色
    Lockr.set('logo', data.logo)          // 系统图标
    window.axios.defaults.headers.authkey = Lockr.get('authKey')
    window.axios.defaults.headers.sessionid = Lockr.get('sessionId')
    let routerUrl = ''
    if (data.menusList[0].url) {
      routerUrl = data.menusList[0].url
    } else {
      routerUrl = data.menusList[0].child[0].child[0].url
    }
    setTimeout(() => {
      let path = obj.$route.path.slice(1)
      if (routerUrl != path) {
        location.hash = routerUrl
      } else {
        location.reload()
      }
    }, 1000)
  },
  getDatetime(type) {
    let datetime = new Date()
    let year = datetime.getFullYear()
    let month = (datetime.getMonth() + 1) < 10 ? '0' + (datetime.getMonth() + 1) : datetime.getMonth() + 1
    let day = datetime.getDate() < 10 ? '0' + datetime.getDate() : datetime.getDate()
    let hour = datetime.getHours() < 10 ? '0' + datetime.getHours() : datetime.getHours()
    let min = datetime.getMinutes() < 10 ? '0' + datetime.getMinutes() : datetime.getMinutes()
    let sec = datetime.getSeconds() < 10 ? '0' + datetime.getSeconds() : datetime.getSeconds()
    let datetimeStr = ''
    if (type == 'date') {
      datetimeStr = year + '-' + month + '-' + day
    } else {
      datetimeStr = year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec
    }
    return datetimeStr
  },
  reloadPage(obj) { // 重新加载
    let toParams = {
      name: obj.$route.name,
      params: obj.$route.params,
      query: obj.$route.query
    }
    router.replace({ name: 'reload', params: toParams })
  },
  downloadFile(url) { // 下载文件
    let ele = document.createElement('a')
    let container = document.body
    ele.download = '客户导入模板'
    ele.href = imgUrl + url
    container.appendChild(ele)
    ele.click()
    container.removeChild(ele)
  },
  formatCategory(data) { // 营业品类的格式化
    return _(data).map((item, index) => {
      let row = []
      let first = item.name
      if (!item.child || item.child.length === 0) {
        row.push(`${first}`)
        return row
      }
      let second = item.child[0].name
      if (item.child[0].child === 0) {
        row.push(`${first} - ${second}`)
        return row
      }
      let thirdArr = _.map(item.child[0].child, 'name')
      let third = thirdArr.join(' / ')
      row.push(`${first} - ${second} - ${third}`)
      item.child.forEach((item, index) => {
        if (!index) return
        let second = item.name
        let thirdArr = _.map(item.child, 'name')
        let third = thirdArr.join(' / ')
        row.push(`|--- ${second} - ${third}`)
      })
      return row
    })
  }
}

export default commonFn
