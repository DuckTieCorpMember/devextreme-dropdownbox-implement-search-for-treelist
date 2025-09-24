import { Injectable } from '@angular/core';

export interface Task {
	Task_ID: number;
	Task_Parent_ID: number;
	Task_Assigned_Employee_ID: number;
	Task_Completion: number;
	Task_Priority: number;
	Task_Status: string;
	Task_Subject: string;
	Task_Start_Date: string;
	Task_Due_Date: string;
	Task_Assigned_Employee?: Employee;
}

export interface Employee {
	ID: number;
	Name: string;
	Picture: string;
}

export interface Priority {
	id: number;
	value: string;
}

const tasks: Task[] = [{
    "Task_ID": 1,
    "Task_Assigned_Employee_ID": 1,
    "Task_Subject": "Plans 2015",
    "Task_Start_Date": "2015-01-01T00:00:00",
    "Task_Due_Date": "2015-04-01T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 2,
    "Task_Assigned_Employee_ID": 2,
    "Task_Subject": "Health Insurance",
    "Task_Start_Date": "2015-02-12T00:00:00",
    "Task_Due_Date": "2015-05-30T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 4,
    "Task_Completion": 75,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 3,
    "Task_Assigned_Employee_ID": 4,
    "Task_Subject": "New Brochures",
    "Task_Start_Date": "2015-02-17T00:00:00",
    "Task_Due_Date": "2015-03-01T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 3,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 4,
    "Task_Assigned_Employee_ID": 31,
    "Task_Subject": "Training",
    "Task_Start_Date": "2015-03-02T00:00:00",
    "Task_Due_Date": "2015-06-29T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 3,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 5,
    "Task_Assigned_Employee_ID": 5,
    "Task_Subject": "NDA",
    "Task_Start_Date": "2015-03-12T00:00:00",
    "Task_Due_Date": "2015-05-01T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 3,
    "Task_Completion": 90,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 6,
    "Task_Assigned_Employee_ID": 7,
    "Task_Subject": "Revenue Projections",
    "Task_Start_Date": "2015-03-24T00:00:00",
    "Task_Due_Date": "2015-04-15T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 3,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 7,
    "Task_Assigned_Employee_ID": 9,
    "Task_Subject": "TV Recall",
    "Task_Start_Date": "2015-04-18T00:00:00",
    "Task_Due_Date": "2016-02-04T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 4,
    "Task_Completion": 90,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 8,
    "Task_Assigned_Employee_ID": 6,
    "Task_Subject": "Overtime",
    "Task_Start_Date": "2015-05-25T00:00:00",
    "Task_Due_Date": "2015-06-09T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 2,
    "Task_Completion": 60,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 9,
    "Task_Assigned_Employee_ID": 8,
    "Task_Subject": "Recall and Refund Forms",
    "Task_Start_Date": "2015-05-25T00:00:00",
    "Task_Due_Date": "2015-06-27T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 1,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 10,
    "Task_Assigned_Employee_ID": 10,
    "Task_Subject": "Shippers",
    "Task_Start_Date": "2015-07-10T00:00:00",
    "Task_Due_Date": "2015-08-07T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 2,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 11,
    "Task_Assigned_Employee_ID": 11,
    "Task_Subject": "Hardware Upgrade",
    "Task_Start_Date": "2015-07-22T00:00:00",
    "Task_Due_Date": "2015-12-31T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 3,
    "Task_Completion": 22,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 12,
    "Task_Assigned_Employee_ID": 12,
    "Task_Subject": "Touch-Enabled Apps",
    "Task_Start_Date": "2015-08-05T00:00:00",
    "Task_Due_Date": "2015-11-15T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 2,
    "Task_Completion": 30,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 13,
    "Task_Assigned_Employee_ID": 5,
    "Task_Subject": "Revenue Projections",
    "Task_Start_Date": "2015-09-18T00:00:00",
    "Task_Due_Date": "2015-10-15T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 3,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 14,
    "Task_Assigned_Employee_ID": 10,
    "Task_Subject": "Copyright Infringement Report",
    "Task_Start_Date": "2015-09-19T00:00:00",
    "Task_Due_Date": "2016-02-05T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 15,
    "Task_Assigned_Employee_ID": 1,
    "Task_Subject": "Approve Overtime",
    "Task_Start_Date": "2015-02-05T00:00:00",
    "Task_Due_Date": "2015-04-05T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 1
}, {
    "Task_ID": 16,
    "Task_Assigned_Employee_ID": 3,
    "Task_Subject": "Approve Overtime",
    "Task_Start_Date": "2015-02-05T00:00:00",
    "Task_Due_Date": "2015-04-05T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 1
}, {
    "Task_ID": 17,
    "Task_Assigned_Employee_ID": 5,
    "Task_Subject": "Approve Overtime",
    "Task_Start_Date": "2015-02-05T00:00:00",
    "Task_Due_Date": "2015-04-05T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 1
}, {
    "Task_ID": 18,
    "Task_Assigned_Employee_ID": 7,
    "Task_Subject": "Approve Overtime",
    "Task_Start_Date": "2015-02-05T00:00:00",
    "Task_Due_Date": "2015-04-05T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 1
}, {
    "Task_ID": 19,
    "Task_Assigned_Employee_ID": 9,
    "Task_Subject": "Approve Overtime",
    "Task_Start_Date": "2015-02-05T00:00:00",
    "Task_Due_Date": "2015-04-05T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 1
}, {
    "Task_ID": 20,
    "Task_Assigned_Employee_ID": 11,
    "Task_Subject": "Approve Overtime",
    "Task_Start_Date": "2015-02-05T00:00:00",
    "Task_Due_Date": "2015-04-05T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 1
}, {
    "Task_ID": 21,
    "Task_Assigned_Employee_ID": 2,
    "Task_Subject": "Final Approval",
    "Task_Start_Date": "2015-02-26T00:00:00",
    "Task_Due_Date": "2015-05-05T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 4,
    "Task_Completion": 75,
    "Task_Parent_ID": 2
}, {
    "Task_ID": 22,
    "Task_Assigned_Employee_ID": 4,
    "Task_Subject": "Review",
    "Task_Start_Date": "2015-02-26T00:00:00",
    "Task_Due_Date": "2015-03-01T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 3,
    "Task_Completion": 100,
    "Task_Parent_ID": 3
}, {
    "Task_ID": 23,
    "Task_Assigned_Employee_ID": 31,
    "Task_Subject": "Update Personnel Files",
    "Task_Start_Date": "2015-03-02T00:00:00",
    "Task_Due_Date": "2015-05-15T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 3,
    "Task_Completion": 100,
    "Task_Parent_ID": 4
}, {
    "Task_ID": 24,
    "Task_Assigned_Employee_ID": 31,
    "Task_Subject": "Review Health Insurance Options Under the Affordable Care Act",
    "Task_Start_Date": "2015-05-16T00:00:00",
    "Task_Due_Date": "2015-06-29T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 3,
    "Task_Completion": 100,
    "Task_Parent_ID": 4
}, {
    "Task_ID": 25,
    "Task_Assigned_Employee_ID": 5,
    "Task_Subject": "Sign NDA",
    "Task_Start_Date": "2015-03-12T00:00:00",
    "Task_Due_Date": "2015-03-24T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 3,
    "Task_Completion": 90,
    "Task_Parent_ID": 5
}, {
    "Task_ID": 26,
    "Task_Assigned_Employee_ID": 7,
    "Task_Subject": "Update Revenue Projections",
    "Task_Start_Date": "2015-03-24T00:00:00",
    "Task_Due_Date": "2015-04-15T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 3,
    "Task_Completion": 100,
    "Task_Parent_ID": 6
}, {
    "Task_ID": 27,
    "Task_Assigned_Employee_ID": 9,
    "Task_Subject": "Submit Recall Information to Media Sources",
    "Task_Start_Date": "2015-04-18T00:00:00",
    "Task_Due_Date": "2015-04-20T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 4,
    "Task_Completion": 90,
    "Task_Parent_ID": 7
}, {
    "Task_ID": 28,
    "Task_Assigned_Employee_ID": 9,
    "Task_Subject": "Create Recall Rebate Tracking Form",
    "Task_Start_Date": "2015-04-21T00:00:00",
    "Task_Due_Date": "2015-05-10T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 4,
    "Task_Completion": 90,
    "Task_Parent_ID": 7
}, {
    "Task_ID": 29,
    "Task_Assigned_Employee_ID": 9,
    "Task_Subject": "Schedule Meetings with Vendors",
    "Task_Start_Date": "2015-05-11T00:00:00",
    "Task_Due_Date": "2015-07-01T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 4,
    "Task_Completion": 90,
    "Task_Parent_ID": 7
}, {
    "Task_ID": 30,
    "Task_Assigned_Employee_ID": 9,
    "Task_Subject": "Discuss Delivery Requirements",
    "Task_Start_Date": "2015-07-02T00:00:00",
    "Task_Due_Date": "2015-12-01T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 4,
    "Task_Completion": 90,
    "Task_Parent_ID": 7
}, {
    "Task_ID": 31,
    "Task_Assigned_Employee_ID": 9,
    "Task_Subject": "Update Customer Shipping Preferences",
    "Task_Start_Date": "2015-12-02T00:00:00",
    "Task_Due_Date": "2016-02-04T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 4,
    "Task_Completion": 90,
    "Task_Parent_ID": 7
}, {
    "Task_ID": 32,
    "Task_Assigned_Employee_ID": 6,
    "Task_Subject": "Approve Overtime",
    "Task_Start_Date": "2015-05-25T00:00:00",
    "Task_Due_Date": "2015-06-09T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 2,
    "Task_Completion": 60,
    "Task_Parent_ID": 8
}, {
    "Task_ID": 33,
    "Task_Assigned_Employee_ID": 8,
    "Task_Subject": "Draft",
    "Task_Start_Date": "2015-05-25T00:00:00",
    "Task_Due_Date": "2015-06-01T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 1,
    "Task_Completion": 100,
    "Task_Parent_ID": 9
}, {
    "Task_ID": 34,
    "Task_Assigned_Employee_ID": 8,
    "Task_Subject": "Approval",
    "Task_Start_Date": "2015-06-02T00:00:00",
    "Task_Due_Date": "2015-06-27T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 1,
    "Task_Completion": 100,
    "Task_Parent_ID": 9
}, {
    "Task_ID": 35,
    "Task_Assigned_Employee_ID": 10,
    "Task_Subject": "Review Recall Report",
    "Task_Start_Date": "2015-07-10T00:00:00",
    "Task_Due_Date": "2015-07-24T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 2,
    "Task_Completion": 100,
    "Task_Parent_ID": 10
}, {
    "Task_ID": 36,
    "Task_Assigned_Employee_ID": 10,
    "Task_Subject": "Choose Shipper",
    "Task_Start_Date": "2015-07-25T00:00:00",
    "Task_Due_Date": "2015-08-07T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 2,
    "Task_Completion": 100,
    "Task_Parent_ID": 10
}, {
    "Task_ID": 37,
    "Task_Assigned_Employee_ID": 11,
    "Task_Subject": "Estimate",
    "Task_Start_Date": "2015-07-22T00:00:00",
    "Task_Due_Date": "2015-07-31T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 3,
    "Task_Completion": 22,
    "Task_Parent_ID": 11
}, {
    "Task_ID": 38,
    "Task_Assigned_Employee_ID": 11,
    "Task_Subject": "Identify Required Devices",
    "Task_Start_Date": "2015-08-01T00:00:00",
    "Task_Due_Date": "2015-10-15T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 3,
    "Task_Completion": 22,
    "Task_Parent_ID": 11
}, {
    "Task_ID": 39,
    "Task_Assigned_Employee_ID": 11,
    "Task_Subject": "Assign Devices",
    "Task_Start_Date": "2015-10-16T00:00:00",
    "Task_Due_Date": "2015-12-31T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 3,
    "Task_Completion": 22,
    "Task_Parent_ID": 11
}, {
    "Task_ID": 40,
    "Task_Assigned_Employee_ID": 12,
    "Task_Subject": "Estimate work",
    "Task_Start_Date": "2015-08-05T00:00:00",
    "Task_Due_Date": "2015-08-18T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 2,
    "Task_Completion": 30,
    "Task_Parent_ID": 12
}, {
    "Task_ID": 41,
    "Task_Assigned_Employee_ID": 12,
    "Task_Subject": "Completion",
    "Task_Start_Date": "2015-08-19T00:00:00",
    "Task_Due_Date": "2015-11-15T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 2,
    "Task_Completion": 30,
    "Task_Parent_ID": 12
}, {
    "Task_ID": 42,
    "Task_Assigned_Employee_ID": 5,
    "Task_Subject": "Data Analysis",
    "Task_Start_Date": "2015-09-18T00:00:00",
    "Task_Due_Date": "2015-10-04T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 3,
    "Task_Completion": 100,
    "Task_Parent_ID": 13
}, {
    "Task_ID": 43,
    "Task_Assigned_Employee_ID": 5,
    "Task_Subject": "Approval",
    "Task_Start_Date": "2015-10-05T00:00:00",
    "Task_Due_Date": "2015-10-15T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 3,
    "Task_Completion": 100,
    "Task_Parent_ID": 13
}, {
    "Task_ID": 44,
    "Task_Assigned_Employee_ID": 10,
    "Task_Subject": "Gather Information",
    "Task_Start_Date": "2015-09-19T00:00:00",
    "Task_Due_Date": "2015-11-10T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 14
}, {
    "Task_ID": 45,
    "Task_Assigned_Employee_ID": 10,
    "Task_Subject": "Report",
    "Task_Start_Date": "2015-11-11T00:00:00",
    "Task_Due_Date": "2016-02-05T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 14
}, {
    "Task_ID": 46,
    "Task_Assigned_Employee_ID": 13,
    "Task_Subject": "Approve Personal Computer Upgrade",
    "Task_Start_Date": "2015-01-02T00:00:00",
    "Task_Due_Date": "2015-02-01T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 2,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 47,
    "Task_Assigned_Employee_ID": 14,
    "Task_Subject": "Install New Database",
    "Task_Start_Date": "2015-02-03T00:00:00",
    "Task_Due_Date": "2015-03-01T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 1,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 48,
    "Task_Assigned_Employee_ID": 15,
    "Task_Subject": "Approve Overtime",
    "Task_Start_Date": "2015-03-05T00:00:00",
    "Task_Due_Date": "2015-06-05T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 2,
    "Task_Completion": 25,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 49,
    "Task_Assigned_Employee_ID": 16,
    "Task_Subject": "Assess Overtime",
    "Task_Start_Date": "2015-03-18T00:00:00",
    "Task_Due_Date": "2015-05-01T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 1,
    "Task_Completion": 22,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 50,
    "Task_Assigned_Employee_ID": 17,
    "Task_Subject": "Coordinate Recall Effort",
    "Task_Start_Date": "2015-03-18T00:00:00",
    "Task_Due_Date": "2015-06-01T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 1,
    "Task_Completion": 7,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 51,
    "Task_Assigned_Employee_ID": 18,
    "Task_Subject": "Upgrade Server Hardware",
    "Task_Start_Date": "2015-04-22T00:00:00",
    "Task_Due_Date": "2015-05-01T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 3,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 52,
    "Task_Assigned_Employee_ID": 19,
    "Task_Subject": "Upgrade Personal Computers",
    "Task_Start_Date": "2015-05-18T00:00:00",
    "Task_Due_Date": "2015-07-15T00:00:00",
    "Task_Status": "Complete",
    "Task_Priority": 2,
    "Task_Completion": 90,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 53,
    "Task_Assigned_Employee_ID": 20,
    "Task_Subject": "Provide New Health Insurance Docs",
    "Task_Start_Date": "2015-06-02T00:00:00",
    "Task_Due_Date": "2015-07-01T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 54,
    "Task_Assigned_Employee_ID": 21,
    "Task_Subject": "Give Final Approval for Refunds",
    "Task_Start_Date": "2015-06-05T00:00:00",
    "Task_Due_Date": "2015-06-12T00:00:00",
    "Task_Status": "Complete",
    "Task_Priority": 3,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 55,
    "Task_Assigned_Employee_ID": 22,
    "Task_Subject": "Recall Rebate Processing",
    "Task_Start_Date": "2015-06-08T00:00:00",
    "Task_Due_Date": "2015-07-01T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 56,
    "Task_Assigned_Employee_ID": 23,
    "Task_Subject": "Schedule Training Meetings",
    "Task_Start_Date": "2015-06-15T00:00:00",
    "Task_Due_Date": "2015-07-01T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 57,
    "Task_Assigned_Employee_ID": 24,
    "Task_Subject": "Final Budget Review",
    "Task_Start_Date": "2015-07-20T00:00:00",
    "Task_Due_Date": "2015-09-01T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 2,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 58,
    "Task_Assigned_Employee_ID": 25,
    "Task_Subject": "New Warehouse Signage",
    "Task_Start_Date": "2015-07-23T00:00:00",
    "Task_Due_Date": "2015-10-01T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 59,
    "Task_Assigned_Employee_ID": 26,
    "Task_Subject": "Approve Overtime",
    "Task_Start_Date": "2015-08-02T00:00:00",
    "Task_Due_Date": "2015-08-12T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 1,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 60,
    "Task_Assigned_Employee_ID": 27,
    "Task_Subject": "Overtime Budget Planning",
    "Task_Start_Date": "2015-08-20T00:00:00",
    "Task_Due_Date": "2015-09-15T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 2,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 61,
    "Task_Assigned_Employee_ID": 28,
    "Task_Subject": "Prepare 2016 Marketing Plan",
    "Task_Start_Date": "2015-10-01T00:00:00",
    "Task_Due_Date": "2015-10-31T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 4,
    "Task_Completion": 5,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 62,
    "Task_Assigned_Employee_ID": 29,
    "Task_Subject": "Rollback Upgrade",
    "Task_Start_Date": "2015-10-18T00:00:00",
    "Task_Due_Date": "2015-12-31T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 3,
    "Task_Completion": 23,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 63,
    "Task_Assigned_Employee_ID": 30,
    "Task_Subject": "Annual Warehouse Cleaning",
    "Task_Start_Date": "2015-12-01T00:00:00",
    "Task_Due_Date": "2015-12-04T00:00:00",
    "Task_Status": "Not Started",
    "Task_Priority": 1,
    "Task_Completion": 0,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 64,
    "Task_Assigned_Employee_ID": 13,
    "Task_Subject": "Approve Personal Computer Upgrade",
    "Task_Start_Date": "2015-01-02T00:00:00",
    "Task_Due_Date": "2015-02-01T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 2,
    "Task_Completion": 100,
    "Task_Parent_ID": 46
}, {
    "Task_ID": 65,
    "Task_Assigned_Employee_ID": 14,
    "Task_Subject": "Install New Database",
    "Task_Start_Date": "2015-02-03T00:00:00",
    "Task_Due_Date": "2015-03-01T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 1,
    "Task_Completion": 100,
    "Task_Parent_ID": 47
}, {
    "Task_ID": 66,
    "Task_Assigned_Employee_ID": 15,
    "Task_Subject": "Approve Overtime",
    "Task_Start_Date": "2015-03-05T00:00:00",
    "Task_Due_Date": "2015-06-05T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 2,
    "Task_Completion": 25,
    "Task_Parent_ID": 48
}, {
    "Task_ID": 67,
    "Task_Assigned_Employee_ID": 16,
    "Task_Subject": "Assess Overtime",
    "Task_Start_Date": "2015-03-18T00:00:00",
    "Task_Due_Date": "2015-05-01T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 1,
    "Task_Completion": 22,
    "Task_Parent_ID": 49
}, {
    "Task_ID": 68,
    "Task_Assigned_Employee_ID": 17,
    "Task_Subject": "Coordinate Recall Effort",
    "Task_Start_Date": "2015-03-18T00:00:00",
    "Task_Due_Date": "2015-06-01T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 1,
    "Task_Completion": 7,
    "Task_Parent_ID": 50
}, {
    "Task_ID": 69,
    "Task_Assigned_Employee_ID": 18,
    "Task_Subject": "Upgrade Server Hardware",
    "Task_Start_Date": "2015-04-22T00:00:00",
    "Task_Due_Date": "2015-05-01T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 3,
    "Task_Completion": 100,
    "Task_Parent_ID": 51
}, {
    "Task_ID": 70,
    "Task_Assigned_Employee_ID": 19,
    "Task_Subject": "Upgrade Personal Computers",
    "Task_Start_Date": "2015-05-18T00:00:00",
    "Task_Due_Date": "2015-07-15T00:00:00",
    "Task_Status": "Complete",
    "Task_Priority": 2,
    "Task_Completion": 90,
    "Task_Parent_ID": 52
}, {
    "Task_ID": 71,
    "Task_Assigned_Employee_ID": 20,
    "Task_Subject": "Provide New Health Insurance Docs",
    "Task_Start_Date": "2015-06-02T00:00:00",
    "Task_Due_Date": "2015-07-01T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 53
}, {
    "Task_ID": 72,
    "Task_Assigned_Employee_ID": 21,
    "Task_Subject": "Give Final Approval for Refunds",
    "Task_Start_Date": "2015-06-05T00:00:00",
    "Task_Due_Date": "2015-06-12T00:00:00",
    "Task_Status": "Complete",
    "Task_Priority": 3,
    "Task_Completion": 100,
    "Task_Parent_ID": 54
}, {
    "Task_ID": 73,
    "Task_Assigned_Employee_ID": 22,
    "Task_Subject": "Recall Rebate Processing",
    "Task_Start_Date": "2015-06-08T00:00:00",
    "Task_Due_Date": "2015-07-01T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 55
}, {
    "Task_ID": 74,
    "Task_Assigned_Employee_ID": 23,
    "Task_Subject": "Schedule Training Meetings",
    "Task_Start_Date": "2015-06-15T00:00:00",
    "Task_Due_Date": "2015-07-01T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 56
}, {
    "Task_ID": 75,
    "Task_Assigned_Employee_ID": 24,
    "Task_Subject": "Final Budget Review",
    "Task_Start_Date": "2015-07-20T00:00:00",
    "Task_Due_Date": "2015-09-01T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 2,
    "Task_Completion": 100,
    "Task_Parent_ID": 57
}, {
    "Task_ID": 76,
    "Task_Assigned_Employee_ID": 25,
    "Task_Subject": "New Warehouse Signage",
    "Task_Start_Date": "2015-07-23T00:00:00",
    "Task_Due_Date": "2015-10-01T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 58
}, {
    "Task_ID": 77,
    "Task_Assigned_Employee_ID": 26,
    "Task_Subject": "Approve Overtime",
    "Task_Start_Date": "2015-08-02T00:00:00",
    "Task_Due_Date": "2015-08-12T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 1,
    "Task_Completion": 100,
    "Task_Parent_ID": 59
}, {
    "Task_ID": 78,
    "Task_Assigned_Employee_ID": 27,
    "Task_Subject": "Overtime Budget Planning",
    "Task_Start_Date": "2015-08-20T00:00:00",
    "Task_Due_Date": "2015-09-15T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 2,
    "Task_Completion": 100,
    "Task_Parent_ID": 60
}, {
    "Task_ID": 79,
    "Task_Assigned_Employee_ID": 28,
    "Task_Subject": "Prepare 2016 Marketing Plan",
    "Task_Start_Date": "2015-10-01T00:00:00",
    "Task_Due_Date": "2015-10-31T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 4,
    "Task_Completion": 5,
    "Task_Parent_ID": 61
}, {
    "Task_ID": 80,
    "Task_Assigned_Employee_ID": 29,
    "Task_Subject": "Rollback Upgrade",
    "Task_Start_Date": "2015-10-18T00:00:00",
    "Task_Due_Date": "2015-12-31T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 3,
    "Task_Completion": 23,
    "Task_Parent_ID": 62
}, {
    "Task_ID": 81,
    "Task_Assigned_Employee_ID": 30,
    "Task_Subject": "Annual Warehouse Cleaning",
    "Task_Start_Date": "2015-12-01T00:00:00",
    "Task_Due_Date": "2015-12-04T00:00:00",
    "Task_Status": "Not Started",
    "Task_Priority": 1,
    "Task_Completion": 0,
    "Task_Parent_ID": 63
}, {
    "Task_ID": 82,
    "Task_Assigned_Employee_ID": 31,
    "Task_Subject": "Review Personnel Budget",
    "Task_Start_Date": "2016-01-05T00:00:00",
    "Task_Due_Date": "2016-02-05T00:00:00",
    "Task_Status": "Not Started",
    "Task_Priority": 2,
    "Task_Completion": 0,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 83,
    "Task_Assigned_Employee_ID": 1,
    "Task_Subject": "Finalize 2016 Training Budget",
    "Task_Start_Date": "2016-01-10T00:00:00",
    "Task_Due_Date": "2016-02-28T00:00:00",
    "Task_Status": "Not Started",
    "Task_Priority": 3,
    "Task_Completion": 0,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 84,
    "Task_Assigned_Employee_ID": 2,
    "Task_Subject": "Complete 2015 Performance Reviews",
    "Task_Start_Date": "2016-01-15T00:00:00",
    "Task_Due_Date": "2016-02-15T00:00:00",
    "Task_Status": "Not Started",
    "Task_Priority": 4,
    "Task_Completion": 0,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 85,
    "Task_Assigned_Employee_ID": 3,
    "Task_Subject": "Approve 2016 Marketing Plan",
    "Task_Start_Date": "2016-01-20T00:00:00",
    "Task_Due_Date": "2016-03-01T00:00:00",
    "Task_Status": "Not Started",
    "Task_Priority": 1,
    "Task_Completion": 0,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 86,
    "Task_Assigned_Employee_ID": 4,
    "Task_Subject": "Submit Final Recall Report",
    "Task_Start_Date": "2016-01-25T00:00:00",
    "Task_Due_Date": "2016-03-15T00:00:00",
    "Task_Status": "Not Started",
    "Task_Priority": 2,
    "Task_Completion": 0,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 87,
    "Task_Assigned_Employee_ID": 5,
    "Task_Subject": "2016 Brochure Design",
    "Task_Start_Date": "2016-02-01T00:00:00",
    "Task_Due_Date": "2016-04-01T00:00:00",
    "Task_Status": "Not Started",
    "Task_Priority": 3,
    "Task_Completion": 0,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 88,
    "Task_Assigned_Employee_ID": 6,
    "Task_Subject": "Update Employee Handbook",
    "Task_Start_Date": "2016-02-08T00:00:00",
    "Task_Due_Date": "2016-04-15T00:00:00",
    "Task_Status": "Not Started",
    "Task_Priority": 4,
    "Task_Completion": 0,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 89,
    "Task_Assigned_Employee_ID": 7,
    "Task_Subject": "2016 Revenue Projections",
    "Task_Start_Date": "2016-02-15T00:00:00",
    "Task_Due_Date": "2016-05-01T00:00:00",
    "Task_Status": "Not Started",
    "Task_Priority": 1,
    "Task_Completion": 0,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 90,
    "Task_Assigned_Employee_ID": 8,
    "Task_Subject": "Quarterly Training Report",
    "Task_Start_Date": "2016-02-22T00:00:00",
    "Task_Due_Date": "2016-05-15T00:00:00",
    "Task_Status": "Not Started",
    "Task_Priority": 2,
    "Task_Completion": 0,
    "Task_Parent_ID": 0
}];

const employees: Employee[] = [{
    "ID": 1,
    "Name": "John Heart",
    "Picture": "../../images/employees/01.png"
}, {
    "ID": 2,
    "Name": "Olivia Peyton",
    "Picture": "../../images/employees/09.png"
}, {
    "ID": 3,
    "Name": "Robert Reagan",
    "Picture": "../../images/employees/03.png"
}, {
    "ID": 4,
    "Name": "Greta Sims",
    "Picture": "../../images/employees/04.png"
}, {
    "ID": 5,
    "Name": "Brett Wade",
    "Picture": "../../images/employees/05.png"
}, {
    "ID": 6,
    "Name": "Sandra Johnson",
    "Picture": "../../images/employees/06.png"
}, {
    "ID": 7,
    "Name": "Kevin Carter",
    "Picture": "../../images/employees/07.png"
}, {
    "ID": 8,
    "Name": "Cynthia Stanwick",
    "Picture": "../../images/employees/08.png"
}, {
    "ID": 9,
    "Name": "Kent Samuelson",
    "Picture": "../../images/employees/02.png"
}, {
    "ID": 10,
    "Name": "Taylor Riley",
    "Picture": "../../images/employees/10.png"
}, {
    "ID": 11,
    "Name": "Sam Hill",
    "Picture": "../../images/employees/11.png"
}, {
    "ID": 12,
    "Name": "Kelly Rodriguez",
    "Picture": "../../images/employees/12.png"
}, {
    "ID": 13,
    "Name": "Natalie Maguirre",
    "Picture": "../../images/employees/13.png"
}, {
    "ID": 14,
    "Name": "Walter Hobbs",
    "Picture": "../../images/employees/14.png"
}, {
    "ID": 15,
    "Name": "Anne Dodsworth",
    "Picture": "../../images/employees/15.png"
}, {
    "ID": 16,
    "Name": "Barb Banks",
    "Picture": "../../images/employees/16.png"
}, {
    "ID": 17,
    "Name": "Edward Holmes",
    "Picture": "../../images/employees/17.png"
}, {
    "ID": 18,
    "Name": "Arthuro Shelby",
    "Picture": "../../images/employees/18.png"
}, {
    "ID": 19,
    "Name": "Victor Norris",
    "Picture": "../../images/employees/19.png"
}, {
    "ID": 20,
    "Name": "Mary Stern",
    "Picture": "../../images/employees/20.png"
}, {
    "ID": 21,
    "Name": "Robin Cosworth",
    "Picture": "../../images/employees/21.png"
}, {
    "ID": 22,
    "Name": "Kelly Rodriguez",
    "Picture": "../../images/employees/22.png"
}, {
    "ID": 23,
    "Name": "James Anderson",
    "Picture": "../../images/employees/23.png"
}, {
    "ID": 24,
    "Name": "Antony Remmen",
    "Picture": "../../images/employees/24.png"
}, {
    "ID": 25,
    "Name": "Olivia Peyton",
    "Picture": "../../images/employees/25.png"
}, {
    "ID": 26,
    "Name": "Taylor Riley",
    "Picture": "../../images/employees/26.png"
}, {
    "ID": 27,
    "Name": "Amelia Harper",
    "Picture": "../../images/employees/27.png"
}, {
    "ID": 28,
    "Name": "Wally Hobbs",
    "Picture": "../../images/employees/28.png"
}, {
    "ID": 29,
    "Name": "Brad Jameson",
    "Picture": "../../images/employees/29.png"
}, {
    "ID": 30,
    "Name": "Karen Goodson",
    "Picture": "../../images/employees/30.png"
}, {
    "ID": 31,
    "Name": "Marcus Orbison",
    "Picture": "../../images/employees/31.png"
}];

const priorities: Priority[] = [
  { id: 1, value: "High" },
  { id: 2, value: "Normal" },
  { id: 3, value: "Low" },
  { id: 4, value: "Urgent" }
];

@Injectable()
export class Service {
  getTasks(): Task[] {
    return tasks;
  }

  getEmployees(): Employee[] {
    return employees;
  }

  getPriorities(): Priority[] {
    return priorities;
  }
}
