const UA = [
  { UAID: "1", UID: "1001", RID: "1" },
  { UAID: "2", UID: "2001", RID: "2" },
  { UAID: "3", UID: "3001", RID: "3" },
  { UAID: "4", UID: "3002", RID: "2" },
  { UAID: "5", UID: "3002", RID: "3" }
];

const PA = [
  { PAID: "1", PID: "1", RID: "1" },
  { PAID: "2", PID: "2", RID: "2" },
  { PAID: "3", PID: "3", RID: "2" },
  { PAID: "4", PID: "3", RID: "3" },
  { PAID: "5", PID: "4", RID: "3" },
  { PAID: "6", PID: "5", RID: "4" }
];

const User = [
  { UID: "1001", name: "二狗子" },
  { UID: "2001", name: "饶老师" },
  { UID: "3001", name: "嗷嗷嗷" },
  { UID: "3002", name: "王树国" }
];

const Role = [
  { RID: "1", name: "学生", PRID: "4" },
  { RID: "2", name: "教师", PRID: "4" },
  { RID: "3", name: "管理员", PRID: "4" },
  { RID: "4", name: "系统成员", PRID: "null" }
];

const Permission = [
  { PID: "1", operation: "1", resourceID: "1" },
  { PID: "2", operationID: "1", resourceID: "2" },
  { PID: "3", operationID: "2", resourceID: "3" },
  { PID: "4", operationID: "3", resourceID: "4" },
  { PID: "5", operationID: "3", resourceID: "5" },
];

const Operation = [
  { operationID: "1", name: "upload" },
  { operationID: "2", name: "retrive" },
  { operationID: "3", name: "manage" },
];

const Resource = [
  { resourceID: "1", name: "homework" },
  { resourceID: "2", name: "comment" },
  { resourceID: "3", name: "grade statistics" },
  { resourceID: "4", name: "system info" },
  { resourceID: "5", name: "user info" }
];

export default {
  UA: UA,
  PA: PA,
  User: User,
  Role: Role,
  Permission: Permission,
  Operation: Operation,
  Resource: Resource
};
