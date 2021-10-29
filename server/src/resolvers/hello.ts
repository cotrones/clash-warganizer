import { Query, Resolver } from "type-graphql";

@Resolver()
export class HelloResolver {
  private str = "hello world";

  @Query(() => String)
  hello() {
    return this.str;
  }
}
