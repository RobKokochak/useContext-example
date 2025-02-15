import { useContext } from "react";
import { GroupsContext } from "./ItemManager";
import { GroupTeam } from "./GroupTeam";
import { Group } from "./types";
import { addTeamToGroup } from "./functions";

export const ParentGroup = ({ thisGroup }: { thisGroup: Group }) => {
  const { groups, setGroups } = useContext(GroupsContext);

  return (
    <>
      <div className="group-header">
        <h3>{thisGroup.name}</h3>
        <button onClick={() => addTeamToGroup(groups, thisGroup, setGroups)}>
          Add team
        </button>
      </div>
      <div className="teams-container">
        {thisGroup.teams.map((team) => (
          <GroupTeam key={team.id} thisTeam={team} parentGroup={thisGroup} />
        ))}
      </div>
    </>
  );
};
