import { Entity } from "./Entity";

abstract class BaseMeta extends Entity {
  public createdAt: Date;
  public finished: boolean;
  public isFinished: boolean;

  constructor(
    public title: string,
    public description: string,
    public finishDate: Date | null,
    public goalDate: Date | null
  ) {
    super();
    this.finished = false;
    this.createdAt = new Date();
    this.isFinished = false;
  }

  markAsDone() {
    this.isFinished = true;
    this.finishDate = new Date();
  }
}

export { BaseMeta };
