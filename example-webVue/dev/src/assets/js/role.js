var containRole = {
  demandSel: {
    'demand_view': [183, 184, 185, 188, 189, 207, 214, 215, 211, 296, 298, 303, 304, 305, 306, 307, 325, 361, 376, 377, 378, 389, 407, 408, 397],
    'demand_edit': [186, 190, 187, 208, 209, 216, 217, 290, 295, 297, 298, 299, 300],
    'demand_finance': [205, 206, 221, 222, 302],
    'requires_excel': [397]
  },
  systemSel: {
    'config_all': [48, 113, 114, 115]
  },
  roleSel: {
    'rule_all': [50, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69]
  },
  contSel: {
    'info_al': [123, 124, 125, 126, 127, 128, 88, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 317, 333, 326, 365, 366, 367, 368, 369]
  },
  classSel: {
    'label_all': [116, 117, 118, 119, 120, 121, 122, 285, 286, 287, 316, 315, 314, 313, 311, 312, 318, 319, 320, 321, 322, 323, 324]
  },
  serviceSel: {
    'service_view': [165, 166, 169, 170, 254, 255, 256, 257, 258, 259, 235, 251, 252, 260, 230, 231, 232, 234, 235, 233, 172, 175, 182, 229, 228, 237, 238, 239, 240, 241, 242, 174, 288, 363, 364, 376, 378],
    'service_edit': [167, 168, 171, 293, 173, 177, 178, 291, 362, 373, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 407, 408],
    'service_finance': [275, 276, 277, 278, 261, 262, 263, 264, 362]
  },
  pubSel: {
    'publicClient_view': [338, 339, 340, 341, 342, 350, 175, 169, 298, 184, 199, 185, 188, 207, 214, 215, 296, 325, 195, 198, 212, 200, 389, 409],
    'publicClient_edit': [344, 345],
    'customers_batchFreeOfSingle': [370, 371, 372, 379, 406],
    'publicClient_finance': [261, 262, 263, 264],
    'client_add': [346]
  },
  mySel: {
    'myClient_view': [348, 355, 349, 356, 357, 350, 175, 169, 298, 184, 199, 185, 188, 207, 214, 215, 296, 325, 195, 198, 212, 200, 389, 409],
    'myClient_edit': [358, 359, 360],
    'myClient_button': [],
    'customers_batchFree': [371, 372]
    // 'myClient_finance': [268, 269, 270, 271]
  },
  unDemandSel: {
    'unRelativeDemand_view': [380, 381],
    'unRelativeDemand_edit': [359, 382, 383, 384]
  },
  unServiceSel: {
    'unRelativeService_view': [380, 381],
    'unRelativeService_edit': [359, 382, 383, 384]
  },
  financeSel: {
    'finance_view': [202, 204, 335, 334],
    'finance_edit': [203, 218, 336]
  },
  orderSel: {
    'order_view': [192, 193, 195, 198, 199, 200, 212, 308],
    'order_edit': [194, 196, 197, 201, 213, 309, 310, 375],
    'order_finance': [219, 220, 223, 224, 374]
  }
}
const role = {
  pushRole(ruleOptions, roleList, obj, level2, level3) {
    roleList.push(ruleOptions[level2]['child'][level3]['id'])
    _(obj).forEach((res) => {
      _(ruleOptions[level2]['child'][level3]['child']).forEach((rres) => {
        if (rres.title == res) {
          roleList.push(rres.id)
          return
        }
      })
    })
    return roleList
  },
  pushContainRole(list) {
    _(list).forEach((res) => {
      switch (res) {
        case 91:
          list = _.union(list, containRole.demandSel.demand_view)
          break
        case 92:
          list = _.union(list, containRole.demandSel.demand_edit)
          break
        case 93:
          list = _.union(list, containRole.demandSel.demand_finance)
          break
        case 94:
          list = _.union(list, containRole.orderSel.order_view)
          break
        case 95:
          list = _.union(list, containRole.orderSel.order_edit)
          break
        case 96:
          list = _.union(list, containRole.orderSel.order_finance)
          break
        case 97:
          list = _.union(list, containRole.financeSel.finance_view)
          break
        case 98:
          list = _.union(list, containRole.financeSel.finance_edit)
          break
        case 337:
          list = _.union(list, containRole.pubSel.publicClient_view)
          break
        case 343:
          list = _.union(list, containRole.pubSel.publicClient_edit)
          break
        case 370:
          list = _.union(list, containRole.pubSel.customers_batchFreeOfSingle)
          break
        case 282:
          list = _.union(list, containRole.pubSel.publicClient_finance)
          break
        case 400:
          list = _.union(list, containRole.unDemandSel.unRelativeDemand_view)
          break
        case 401:
          list = _.union(list, containRole.unDemandSel.unRelativeDemand_edit)
          break
        case 402:
          list = _.union(list, containRole.unServiceSel.unRelativeService_view)
          break
        case 403:
          list = _.union(list, containRole.unServiceSel.unRelativeService_edit)
          break
        case 102:
          list = _.union(list, containRole.mySel.myClient_view)
          break
        case 103:
          list = _.union(list, containRole.mySel.myClient_edit)
          break
        case 104:
          list = _.union(list, containRole.mySel.myClient_button)
          break
        // case 104:
        //   list = _.union(list, containRole.mySel.myClient_finance)
        //   break
        case 107:
          list = _.union(list, containRole.serviceSel.service_view)
          break
        case 108:
          list = _.union(list, containRole.serviceSel.service_edit)
          break
        case 284:
          list = _.union(list, containRole.serviceSel.service_finance)
          break
        case 109:
          list = _.union(list, containRole.classSel.label_all)
          break
        case 110:
          list = _.union(list, containRole.contSel.info_al)
          break
        case 111:
          list = _.union(list, containRole.roleSel.rule_all)
          break
        case 112:
          list = _.union(list, containRole.systemSel.config_all)
          break
      }
    })
    // console.log(list)
    return list
  }
}

export default role
