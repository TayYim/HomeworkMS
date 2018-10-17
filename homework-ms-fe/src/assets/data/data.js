export default {
    UA: UA,
    PA: PA,
    User: User,
    Role: Role,
    Permission: Permission,
    Operation: Operation,
    Resource: Resource
}

const UA = [
    { UAID: "1", UID: "1001", RID: "1" },
    { UAID: "2", UID: "2001", RID: "2" },
    { UAID: "3", UID: "3001", RID: "3" },
    { UAID: "4", UID: "3002", RID: "2" },
    { UAID: "5", UID: "3002", RID: "3" },
  ];

  const PA = [
    { PAID: "1", PID: "1", RID: "1" },
    { PAID: "2", PID: "2", RID: "2" },
    { PAID: "3", PID: "2", RID: "3" },
    { PAID: "4", PID: "3", RID: "3" },
  ];

  const User = [
    { UID: "1001", name: "二狗子" },
    { UID: "2001", name: "smart智" },
    { UID: "3001", name: "鹿鹿" },
    { UID: "3002", name: "大哥" }
  ];

  const Role = [
    { RID: "1", name: "Student" },
    { RID: "2", name: "Teacher" },
    { RID: "3", name: "Admin" }
  ];

  const Permission = [
    { PID: "1", operationID: "2", resourceID: "1" },
    { PID: "2", operationID: "2", resourceID: "3" },
    { PID: "3", operationID: "1", resourceID: "2" }
  ];

  const Operation = [
    { operationID: "1", name: "read" },
    { operationID: "2", name: "upload" }
  ];

  const Resource = [
    { resourceID: "1", name: "homework" },
    { resourceID: "2", name: "grade statistics" },
    { resourceID: "3", name: "comment" }
  ];