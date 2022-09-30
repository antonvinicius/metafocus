import { AttributeUser } from "./AttributeUser";

export interface Attribute {
  icon: string;
  name: string;
  total: number;
  attribute_user: AttributeUser[];
}
