import fetch from "node-fetch";
import { Arg, Query, Resolver } from "type-graphql";
import { Clan } from "../entities/Clan";

@Resolver(Clan)
export class ClanResolver {
  @Query(() => Clan)
  async clan(@Arg("clanTag", () => String) clanTag: string): Promise<Clan> {
    const response = await fetch(
      `https://api.clashofclans.com/v1/clans/%23${clanTag}`,
      {
        headers: {
          Authorization: process.env.CLASH_TOKEN,
        },
      }
    );
    return response.json();
  }
}
