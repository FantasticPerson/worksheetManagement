import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ticket-navigator',
  templateUrl: './ticket-navigator.component.html',
  styleUrls: ['./ticket-navigator.component.css']
})
export class TicketNavigatorComponent implements OnInit {
  public sheetArr:Array<String> = [
    '所有工单',
    '所有长时间未更新工单',
    '我的紧急工单',
    '超时工单',
    '即将超时的工单',
    '我关注的 解决中 服务工单',
    '我关注的 解决中 催办工单',
    '我关注的 解决中 督办工单',
    '我关注的 已解决 服务工单',
    '我关注的 已解决 催办工单',
    '我关注的 已解决 督办工单',
    '我手中新增的工单',
    '我提交或转移的工单',
    '我未分配的工单',
    '我未分配给回访组的工单',
    '我已经 签收的 工单'
  ]
  constructor() { }

  ngOnInit() {
  }

  getClassName(i:any){
    if(i == 0){
      return 'list-item list-item-selected'
    }
    return 'list-item'
  }

}
