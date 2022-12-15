import { Entity } from "./Entity";

abstract class BaseMeta extends Entity {
  public createdAt: Date;
  public finished: boolean;
  public finishDate: Date | null;

  constructor(
    public title: string,
    public description: string,
    public goalDate: Date | null
  ) {
    super();
    this.finished = false;
    this.createdAt = new Date();
    this.finishDate = null;
  }

  markAsDone() {
    this.finished = true;
    this.finishDate = new Date();
  }

  markAsUndone() {
    this.finished = false;
    this.finishDate = null;
  }
}

export { BaseMeta };
