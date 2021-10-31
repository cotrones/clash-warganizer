import fetch from "node-fetch";
import { Arg, Query, Resolver } from "type-graphql";
import { Player } from "../entities/Player";

@Resolver(Player)
export class PlayerResolver {
  @Query(() => Player)
  async player(
    @Arg("playerTag", () => String) playerTag: string
  ): Promise<Player> {
    const response = await fetch(
      `https://api.clashofclans.com/v1/players/%23${playerTag}`,
      {
        headers: {
          Authorization: process.env.CLASH_TOKEN,
        },
      }
    );
    return response.json();
  }
}
