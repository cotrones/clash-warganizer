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
    return response.json();
  }
}
