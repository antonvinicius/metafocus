import { Entity } from "./Entity";

abstract class BaseMeta extends Entity {
  public createdAt: Date;
  public finished: boolean;

  constructor(
    public title: string,
    public description: string,
    public finishDate: Date | null,
    public goalDate: Date | null
  ) {
    super();
    this.finished = false;
    this.createdAt = new Date();
  }
}

export { BaseMeta };
