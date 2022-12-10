import { Entity } from "./Entity";

abstract class BaseMeta extends Entity {
  public createdAt: Date;
  public finished: boolean;
  public isFinished: boolean;
  public finishDate: Date | null;

  constructor(
    public title: string,
    public description: string,
    public goalDate: Date | null
  ) {
    super();
    this.finished = false;
    this.createdAt = new Date();
    this.isFinished = false;
    this.finishDate = null;
  }

  markAsDone() {
    this.isFinished = true;
    this.finishDate = new Date();
  }
}

export { BaseMeta };
