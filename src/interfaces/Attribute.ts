import {AttributeUser} from "./AttributeUser";

export interface Attribute {
    color: string;
    icon: string;
    name: string;
    total: number;
    attribute_user: AttributeUser[];
}
