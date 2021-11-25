export class Activities {

    public activityid: string | undefined;
	public name: string | undefined;
	public stepsneeded:string | undefined;
    public averagetime:string | undefined;

    public userName: string | undefined;

    constructor(activities: Activities) {
        this.activityid = activities.activityid;
        this.name = activities.name;
        this.stepsneeded = activities.stepsneeded;
        this.averagetime = activities.averagetime;
        this.userName = activities.userName;
      }

     
}
