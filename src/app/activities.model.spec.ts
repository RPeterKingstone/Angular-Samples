import { Activities } from './activities.model';

const activities: Activities = {"activityid" : "", name: "", averagetime : "", stepsneeded: "" };

describe('Activities', () => {
  it('should create an instance', () => {
    expect(new Activities(activities)).toBeTruthy();
  });
});
