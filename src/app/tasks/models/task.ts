export interface ITask {
    $key?: string;
    title: string;
    createdAt: number;
    assignee?: Object;
    status: Status;
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
    
    constructor(title: string) {
        this.title = title;
    }
}
