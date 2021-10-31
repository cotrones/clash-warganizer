import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class ChatLanguage {
  @Field()
  id!: number;

  @Field()
  name!: string;

  @Field()
  languageCode!: string;
}
