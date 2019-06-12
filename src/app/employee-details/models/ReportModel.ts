export class ReportModel {
  id: number;
  creationTimestamp: Date;
  closed: boolean;
  content: string;
  reportType: string;
  employeeId: number;
  employeeName: string;
  employeeSurname: string;
}
