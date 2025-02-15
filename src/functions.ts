import { Group, Team, Item } from "./types";

export const addGroup = (
  groups: Group[],
  setGroups: React.Dispatch<React.SetStateAction<Group[]>>
) => {
  const groupNumber = groups.length + 1;
  setGroups([
    ...groups,
    { id: `g${groupNumber}`, name: `Group ${groupNumber}`, teams: [] },
  ]);
};

export const addTeamToGroup = (
  groups: Group[],
  thisGroup: Group,
  setGroups: React.Dispatch<React.SetStateAction<Group[]>>
) => {
  const updatedGroups: Group[] = groups.map((group) => {
    if (group.id === thisGroup.id) {
      const teamNumber = group.teams.length + 1;
      return {
        ...group,
        teams: [
          ...group.teams,
          {
            id: `t${teamNumber}`,
            name: `Team ${teamNumber}`,
            items: [],
          },
        ],
      };
    }
    return group;
  });

  setGroups(updatedGroups);
};

export const addItemToTeam = (
  newItem: Item,
  thisTeam: Team,
  parentGroup: Group,
  groups: Group[],
  setGroups: React.Dispatch<React.SetStateAction<Group[]>>,
  availableItems: Item[],
  setAvailableItems: React.Dispatch<React.SetStateAction<Item[]>>
) => {
  const updatedTeams: Team[] = parentGroup.teams.map((team) => {
    if (team.id === thisTeam.id) {
      return {
        ...team,
        items: [...team.items, newItem],
      };
    }
    return team;
  });

  setGroups(
    groups.map((group) => {
      if (group.id === parentGroup.id) {
        return {
          ...group,
          teams: updatedTeams,
        };
      }
      return group;
    })
  );

  setAvailableItems(availableItems.filter((item) => item.id != newItem.id));
};
