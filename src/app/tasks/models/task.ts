export interface ITask {
    $key?: string;
    title: string;
    createdAt: number;
    assignee?: Object;
    status: Status;
    completeBy?: string;
}

export enum Status {
    toDo,
    inProgress,
    completed,
    done
}

export class Task implements ITask {
    $key?: string;
    title: string;
    createdAt: number = 0
    assignee?: Object = {name: "fake name", email: "fake@name.com", photo: "../../assets/profile.jpg", type: "solicitor"};
    status: Status = Status.toDo;
    completeBy?: string;
    
    constructor(title: string, completeByDate?: string) {
        this.title = title;
        if (completeByDate) {
           this.completeBy = completeByDate;
        }
    }
}
