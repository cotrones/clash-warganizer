import { ApolloError } from "apollo-server-express";
import { Arg, Query, Resolver } from "type-graphql";
import { Player } from "../entities/Player";
import { fetchClashAPI } from "../utils/fetchClashAPI";

@Resolver(Player)
export class PlayerResolver {
  @Query(() => Player)
  async player(
    @Arg("playerTag", () => String) playerTag: string
  ): Promise<Player> {
    const response = await fetchClashAPI(`players/%23${playerTag}`);
    const data = await response.json();
    if (data.reason) {
      throw new ApolloError(data.reason, response.status.toString(), {
        message: data?.message,
      });
    }
    return data;
  }
}
