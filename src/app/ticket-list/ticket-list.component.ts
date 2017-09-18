import { Component, OnInit } from '@angular/core';
// import {CreateItemComponent} from './create-item/create-item.component'

@Component({
  selector: 'tocket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  public showAddPanel:boolean = false;
  public btnNameArr:Array<any> = [
    '所有',
    '紧急',
    '高',
    '标准',
    '低'
  ]
  public titleNameArr:Array<any>=[
    {title:'优先级',width:80},
    {title:'渠道',width:80},
    {title:'来源',width:171},
    {title:'工单标签',width:80},
    {title:'客户',width:94},
    {title:'公司',width:80},
    {title:'受理客户组',width:90},
    {title:'受理客服',width:91},
    {title:'客服电话',width:103},
    {title:'最后回复人',width:94},
    {title:'创建人',width:89},
    {title:'关注人',width:200},
    {title:'创建时间',width:144},
    {title:'更新时间',width:126},
    {title:'到期时间',width:144},
    {title:'开始解决时间',width:126}, 
    {title:'解决时间',width:126},
    {title:'关闭时间',width:126},
    {title:'最后回复时间',width:144},
    {title:'客服最后回复时间',width:129},
    {title:'客户最后回复时间',width:144},
    {title:'呼叫方向',width:80},
    {title:'接通状态',width:80},
    {title:'客户邮箱',width:144},
    {title:'客服邮箱',width:152},
    {title:'所属区域',width:80},
    {title:'承办单位回访情况',width:129}
  ]

  public listData = {
    "code": 1000,
    "tickets": [
      { 
        "ticket": 
        { "id": 6404336, "customer_id": 69067375, "customer_name": "182****6882", "customer_email": "", "customer_cellphone": "18217366882", "customer_telephone": "18217366882", "customer_owner_id": 57442, "customer_owner_group_id": 55551, "assignee_id": 57446, "assignee_name": "全能回访2", "assignee_email": "230517353@qq.com", "assignee_cellphone": "", "field_num": "#80", "agent_group_id": 56711, "agent_group_name": "热线回访组", "priority_id": 3, "priority": "标准", "status": "已解决", "platform_zh_name": "手工录入", "platform_name": "manual_input", "status_id": 2, "subject": "3333333333333", "satisfaction": null, "content": "<p>333333333333333333</p>", "call_direction": "_", "connected_status": "_", "all_tags": "263,共性", "followers": [{ "id": 44116, "nick_name": "649613609" }, { "id": 57491, "nick_name": "即时督办2" }, { "id": 57620, "nick_name": "呼叫住建B2" }], "created_at": "2017-09-14T08:59:52.000+08:00", "custom_fields": { "SelectField_8126": "0", "SelectField_8577": "1", "SelectField_8581": "2,0,0" }, "agent_replied_at": null, "customer_replied_at": "2017-09-14T08:59:52.000+08:00", "replied_at": "2017-09-14T08:59:52.000+08:00", "replied_by": "182****6882", "replier_id": 69067375, "replier_type": "customer", "forward_email": null, "attachments": [{ "id": 580277, "url": "https://qn-public.udesk.cn/%E5%8A%A0%E5%BC%BA%E4%B8%AA%E4%BA%BA%E7%B4%A0%E8%B4%A8%20%E6%8F%90%E5%8D%87%E5%B1%A5%E8%81%8C%E8%83%BD%E5%8A%9B-1505350524.doc", "file_name": "加强个人素质 提升履职能力-1505350524.doc", "content_type": "application/msword" }, { "id": 580278, "url": "https://qn-public.udesk.cn/%E8%BD%AF%E7%94%B5%E8%AF%9D%E6%8E%A7%E4%BB%B6%E8%AE%BE%E8%AE%A1%E8%AF%B4%E6%98%8E-1505350532.docx", "file_name": "软电话控件设计说明-1505350532.docx", "content_type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document" }], "solved_deadline": null, "creator_id": 44116, "creator_nick_name": "649613609", "template": { "template_id": 37865, "template_name": "3333" }, "updated_at": "2017-09-14T09:15:44.000+08:00", "closed_at": null, "resolved_at": "2017-09-14T09:12:59.000+08:00", "solving_at": "2017-09-14T09:08:40.000+08:00", "source": "手工-直接创建" } }, { "ticket": { "id": 5977609, "customer_id": 72844061, "customer_name": "张晓飞", "customer_email": "649613609@qq.com", "customer_cellphone": "18962861616", "customer_telephone": "18962861616", "customer_owner_id": null, "customer_owner_group_id": null, "assignee_id": 57446, "assignee_name": "全能回访2", "assignee_email": "230517353@qq.com", "assignee_cellphone": "", "field_num": "#79", "agent_group_id": 56711, "agent_group_name": "热线回访组", "priority_id": 3, "priority": "标准", "status": "开启", "platform_zh_name": "即时聊天", "platform_name": "im", "status_id": 1, "subject": "IM留言 - 客服不在线，我的留言，宽度不行", "satisfaction": null, "content": "客服不在线，我的留言，宽度不行", "call_direction": "_", "connected_status": "_", "all_tags": "", "followers": [{ "id": 57458, "nick_name": "工单水环境1" }], "created_at": "2017-08-30T14:59:05.000+08:00", "custom_fields": {}, "agent_replied_at": null, "customer_replied_at": "2017-08-30T14:59:05.000+08:00", "replied_at": "2017-08-30T14:59:05.000+08:00", "replied_by": "张晓飞", "replier_id": 72844061, "replier_type": "customer", "forward_email": null, "attachments": [{ "id": 540183, "url": "https://qn-public.udesk.cn/5%E6%9C%88%E7%BB%9F%E8%AE%A1%E6%95%B0%E6%8D%AE%E8%A1%A8-1504076322.doc", "file_name": "5月统计数据表-1504076322.doc", "content_type": "application/msword" }], "solved_deadline": "2017-08-30T15:59:05.000+08:00", "creator_id": 72844061, "creator_nick_name": "张晓飞", "template": { "template_id": 27585, "template_name": "默认" }, "updated_at": "2017-09-13T18:10:06.000+08:00", "closed_at": null, "resolved_at": null, "solving_at": null, "source": "web留言-网络报修" } }, { "ticket": { "id": 5929696, "customer_id": 69067375, "customer_name": "182****6882", "customer_email": "", "customer_cellphone": "18217366882", "customer_telephone": "18217366882", "customer_owner_id": 57442, "customer_owner_group_id": 55551, "assignee_id": 57620, "assignee_name": "呼叫住建B2", "assignee_email": "2089598310@qq.com", "assignee_cellphone": "18962861616", "field_num": "#78", "agent_group_id": 55937, "agent_group_name": "住建局组", "priority_id": 3, "priority": "标准", "status": "开启", "platform_zh_name": "手工录入", "platform_name": "manual_input", "status_id": 1, "subject": "全能受理 1  第三条", "satisfaction": null, "content": "<p>全能受理 1 &nbsp;第三条全能受理 1 &nbsp;第三条全tttttttttttttttttttt能受理 1 &nbsp;第三条全能受理 1 &nbsp;第三条全能受理 1 &nbsp;第三条全能受理 1 &nbsp;第大在条大在在&nbsp;</p>", "call_direction": "_", "connected_status": "_", "all_tags": "", "followers": [{ "id": 57442, "nick_name": "全能受理1" }, { "id": 57491, "nick_name": "即时督办2" }], "created_at": "2017-08-28T16:35:00.000+08:00", "custom_fields": { "SelectField_8126": "1", "SelectField_8172": "1", "SelectField_8581": "2,0,0", "SelectField_8579": "4" }, "agent_replied_at": null, "customer_replied_at": "2017-08-28T16:35:00.000+08:00", "replied_at": "2017-08-28T16:35:00.000+08:00", "replied_by": "182****6882", "replier_id": 69067375, "replier_type": "customer", "forward_email": null, "attachments": [], "solved_deadline": "2017-08-28T17:35:00.000+08:00", "creator_id": 57442, "creator_nick_name": "全能受理1", "template": { "template_id": 37169, "template_name": "服务工单（单位）模板" }, "updated_at": "2017-09-05T17:47:17.000+08:00", "closed_at": null, "resolved_at": null, "solving_at": null, "source": "手工-直接创建" } }, { "ticket": { "id": 5929301, "customer_id": 69067375, "customer_name": "182****6882", "customer_email": "", "customer_cellphone": "18217366882", "customer_telephone": "18217366882", "customer_owner_id": 57442, "customer_owner_group_id": 55551, "assignee_id": 57620, "assignee_name": "呼叫住建B2", "assignee_email": "2089598310@qq.com", "assignee_cellphone": "18962861616", "field_num": "#76", "agent_group_id": 55937, "agent_group_name": "住建局组", "priority_id": 4, "priority": "低", "status": "开启", "platform_zh_name": "手工录入", "platform_name": "manual_input", "status_id": 1, "subject": "回访 客服 生成 的第一条 工单", "satisfaction": null, "content": "<p>回访 客服 生成 的第一条 工单回访 客服 生成 的第一条 工单回访 客服 生成 的第一条 工单回访 客服 生成 的第一条 工单回访 客服 生成 的第一条 工单回访 客服 生成 的第一条 工单</p>", "call_direction": "_", "connected_status": "_", "all_tags": "", "followers": [{ "id": 57446, "nick_name": "全能回访2" }, { "id": 57491, "nick_name": "即时督办2" }], "created_at": "2017-08-28T16:18:44.000+08:00", "custom_fields": { "SelectField_8126": "1", "SelectField_8172": "0", "SelectField_8579": "2" }, "agent_replied_at": null, "customer_replied_at": "2017-08-28T16:18:44.000+08:00", "replied_at": "2017-08-28T16:18:44.000+08:00", "replied_by": "182****6882", "replier_id": 69067375, "replier_type": "customer", "forward_email": null, "attachments": [], "solved_deadline": "2017-08-28T17:18:44.000+08:00", "creator_id": 57446, "creator_nick_name": "全能回访2", "template": { "template_id": 36178, "template_name": "服务工单模板" }, "updated_at": "2017-08-28T17:09:09.000+08:00", "closed_at": null, "resolved_at": null, "solving_at": null, "source": "手工-直接创建" } }, { "ticket": { "id": 5929594, "customer_id": 69067375, "customer_name": "182****6882", "customer_email": "", "customer_cellphone": "18217366882", "customer_telephone": "18217366882", "customer_owner_id": 57442, "customer_owner_group_id": 55551, "assignee_id": 57619, "assignee_name": "呼叫金沙A1", "assignee_email": "1107068237@qq.com", "assignee_cellphone": "18962861616", "field_num": "#77", "agent_group_id": 57018, "agent_group_name": "金沙街道组", "priority_id": 2, "priority": "高", "status": "开启", "platform_zh_name": "电话", "platform_name": "call", "status_id": 1, "subject": "电话工单 全能回访2 ", "satisfaction": null, "content": "该工单来自呼叫中心, ConversationId(16694914)", "call_direction": "呼入", "connected_status": "接通", "all_tags": "", "followers": [{ "id": 57446, "nick_name": "全能回访2" }, { "id": 57491, "nick_name": "即时督办2" }], "created_at": "2017-08-28T16:30:24.000+08:00", "custom_fields": { "SelectField_8126": "3", "SelectField_8172": "3", "SelectField_8581": "3,2,0" }, "agent_replied_at": null, "customer_replied_at": "2017-08-28T16:30:24.000+08:00", "replied_at": "2017-08-28T16:30:24.000+08:00", "replied_by": "182****6882", "replier_id": 69067375, "replier_type": "customer", "forward_email": null, "attachments": [], "solved_deadline": "2017-08-28T17:00:24.000+08:00", "creator_id": 57446, "creator_nick_name": "全能回访2", "template": { "template_id": 36178, "template_name": "服务工单模板" }, "updated_at": "2017-08-28T17:08:35.000+08:00", "closed_at": null, "resolved_at": null, "solving_at": null, "source": "呼入通话--051386028992" } }, { "ticket": { "id": 5927182, "customer_id": 69067375, "customer_name": "182****6882", "customer_email": "", "customer_cellphone": "18217366882", "customer_telephone": "18217366882", "customer_owner_id": 57442, "customer_owner_group_id": 55551, "assignee_id": 57491, "assignee_name": "即时督办2", "assignee_email": "226451138@qq.com", "assignee_cellphone": null, "field_num": "#74", "agent_group_id": 55832, "agent_group_name": "热线督办组", "priority_id": 2, "priority": "高", "status": "已关闭", "platform_zh_name": "手工录入", "platform_name": "manual_input", "status_id": 3, "subject": "即时受理1 手工生成 第一条工单", "satisfaction": null, "content": "<p>即时受理1 手工生成 第一条工单即时受理1 手工生成 第一条工单即时受理1 手工生成 第一条工单即时受理1 手工生成 第一条工单即时受理1 手工生成 第一条工单</p>", "call_direction": "_", "connected_status": "_", "all_tags": "", "followers": [{ "id": 57446, "nick_name": "全能回访2" }, { "id": 57487, "nick_name": "工单自来水2" }, { "id": 57488, "nick_name": "即时受理1" }, { "id": 57491, "nick_name": "即时督办2" }, { "id": 57620, "nick_name": "呼叫住建B2" }], "created_at": "2017-08-28T14:50:42.000+08:00", "custom_fields": { "SelectField_8126": "1", "SelectField_8172": "1", "SelectField_8581": "2,0,2", "SelectField_8579": "1", "SelectField_8577": "1" }, "agent_replied_at": null, "customer_replied_at": "2017-08-28T14:50:42.000+08:00", "replied_at": "2017-08-28T14:50:42.000+08:00", "replied_by": "182****6882", "replier_id": 69067375, "replier_type": "customer", "forward_email": null, "attachments": [], "solved_deadline": "2017-08-28T15:20:42.000+08:00", "creator_id": 57488,
         "creator_nick_name": "即时受理1", "template": { "template_id": 37138, "template_name": "服务工单（回访）模板" }, "updated_at": "2017-08-28T16:01:17.000+08:00", "closed_at": "2017-08-28T16:01:17.000+08:00", "resolved_at": "2017-08-28T15:26:13.000+08:00", "solving_at": "2017-08-28T15:14:16.000+08:00", "source": "手工-直接创建" } }, { "ticket": { "id": 5927258, "customer_id": 69104577, "customer_name": "189****8280", "customer_email": "", "customer_cellphone": "18934538280", "customer_telephone": "18934538280", "customer_owner_id": 57442, "customer_owner_group_id": 55551, "assignee_id": 57491, "assignee_name": "即时督办2", "assignee_email": "226451138@qq.com", "assignee_cellphone": null, "field_num": "#75", "agent_group_id": 55832, "agent_group_name": "热线督办组", "priority_id": 3, "priority": "标准", "status": "已关闭", "platform_zh_name": "手工录入", "platform_name": "manual_input", "status_id": 3, "subject": "全能受理1 手工生成的第二条 工单", "satisfaction": null, "content": "<p>全能受理1 手工生成的第二条 工单全能受理1 手工生成的第二条 工单全能受理1 手工生成的第二条 工单全能受理1 手工生成的第二条 工单全能受理1 手工生成的第二条 工单全能受理1 手工生成的第二条 工单全能受理1 手工生成的第二条 工单全能受理1 手工生成的第二条 工单全能受理1 手工生成的第二条 工单全能受理1 手工生成的第二条 工单</p>", "call_direction": "_", "connected_status": "_", "all_tags": "", "followers": [{ "id": 57442, "nick_name": "全能受理1" }, { "id": 57446, "nick_name": "全能回访2" }, { "id": 57458, "nick_name": "工单水环境1" }, { "id": 57491, "nick_name": "即时督办2" }, { "id": 57620, "nick_name": "呼叫住建B2" }], "created_at": "2017-08-28T14:54:29.000+08:00", "custom_fields": { "SelectField_8126": "4", "SelectField_8172": "2", "SelectField_8581": "2,1,2", "SelectField_8577": "1" }, "agent_replied_at": null, "customer_replied_at": "2017-08-28T14:54:29.000+08:00", "replied_at": "2017-08-28T14:54:29.000+08:00", "replied_by": "189****8280", "replier_id": 69104577, "replier_type": "customer", "forward_email": null, "attachments": [], "solved_deadline": "2017-08-28T15:54:29.000+08:00", "creator_id": 57442, "creator_nick_name": "全能受理1", "template": { "template_id": 37138, "template_name": "服务工单（回访）模板" }, "updated_at": "2017-08-28T16:00:59.000+08:00", "closed_at": "2017-08-28T16:00:43.000+08:00", "resolved_at": "2017-08-28T15:27:34.000+08:00", "solving_at": "2017-08-28T15:14:40.000+08:00", "source": "手工-直接创建" } }, { "ticket": { "id": 5920074, "customer_id": 69065480, "customer_name": "138****6698", "customer_email": "", "customer_cellphone": "13814746698", "customer_telephone": "13814746698", "customer_owner_id": 57442, "customer_owner_group_id": 55551, "assignee_id": 57491, "assignee_name": "即时督办2", "assignee_email": "226451138@qq.com", "assignee_cellphone": null, "field_num": "#73", "agent_group_id": 55832, "agent_group_name": "热线督办组", "priority_id": 1, "priority": "紧急", "status": "已关闭", "platform_zh_name": "手工录入", "platform_name": "manual_input", "status_id": 3, "subject": "全能客服 1 生成的第一条 工单", "satisfaction": null, "content": "<p>全能客服 1 生成的第一条 工单全能客服 1 生成的第一条 工单全能客服 1 生成的第一条 工单全能客服 1 生成的第一条 工单全能客服 1 生成的第一条 工单全能客服 1 生成的第一条 工单全能客服 1 生成的第一条 工单全能客服 1 生成的第一条 工单全能客服 1 生成的第一条 工单</p>", "call_direction": "_", "connected_status": "_", "all_tags": "", "followers": [{ "id": 57442, "nick_name": "全能受理1" }, { "id": 57458, "nick_name": "工单水环境1" }, { "id": 57491, "nick_name": "即时督办2" }, { "id": 57620, "nick_name": "呼叫住建B2" }], "created_at": "2017-08-28T10:29:15.000+08:00", "custom_fields": { "SelectField_8126": "0", "SelectField_8172": "0", "TextField_17380": "不满意 的理由", "SelectField_8576": "0,3", "SelectField_8577": "2" }, "agent_replied_at": null, "customer_replied_at": "2017-08-28T10:29:15.000+08:00", "replied_at": "2017-08-28T10:29:15.000+08:00", "replied_by": "138****6698", "replier_id": 69065480, "replier_type": "customer", "forward_email": null, "attachments": [], "solved_deadline": "2017-08-28T10:59:15.000+08:00", "creator_id": 57442, "creator_nick_name": "全能受理1", "template": { "template_id": 37138, "template_name": "服务工单（回访）模板" }, "updated_at": "2017-08-28T15:55:14.000+08:00", "closed_at": "2017-08-28T15:38:08.000+08:00", "resolved_at": "2017-08-28T10:50:48.000+08:00", "solving_at": "2017-08-28T10:42:55.000+08:00", "source": "手工-直接创建" } }], "meta": { "current_page": 1, "total_pages": 1, "tickets_count": 8, "total_records": 8, "group_info": [{ "name": "紧急", "group_by": { "field_name": "priority", "operation": "is", "value": "urgency", "count": 1 } }, { "name": "高", "group_by": { "field_name": "priority", "operation": "is", "value": "high", "count": 2 } }, { "name": "标准", "group_by": { "field_name": "priority", "operation": "is", "value": "medium", "count": 4 } }, { "name": "低", "group_by": { "field_name": "priority", "operation": "is", "value": "low", "count": 1 } }], "ticket_result_total": 8 }
  }
  constructor() { }

  ngOnInit() {
  }

  public getBtnContent(name:any,index:any):any{
    if(index > 0){
      return name+'('+index+')';
    }
    return name;
  }

  public getClassName(index:any):any{
    if(index>0){
      return 'btn normal-btn';
    }
    return 'btn normal-btn selected-btn';
  }

  public getwidthByIndex(index:any):any{
    if(this.titleNameArr[index]){
      return this.titleNameArr[index].width;
    }
  }

  public onShowAddPanelClick(){
    this.showAddPanel = !this.showAddPanel;
  }
}
