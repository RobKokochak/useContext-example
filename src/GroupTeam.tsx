import { useContext } from "react";
import { GroupsContext, ItemsContext } from "./ItemManager";
import { Group, Team } from "./types";
import { addItemToTeam } from "./functions";

export const GroupTeam = ({
  thisTeam,
  parentGroup,
}: {
  thisTeam: Team;
  parentGroup: Group;
}) => {
  const { groups, setGroups } = useContext(GroupsContext);
  const { availableItems, setAvailableItems } = useContext(ItemsContext);

  return (
    <div>
      <div>
        <h5>{thisTeam.name}</h5>
        <select
          onChange={(e) => {
            const item = availableItems.find((i) => i.id === e.target.value);
            if (item)
              addItemToTeam(
                item,
                thisTeam,
                parentGroup,
                groups,
                setGroups,
                availableItems,
                setAvailableItems
              );
          }}
        >
          <option value="">Select item...</option>
          {availableItems.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className={thisTeam.items.length ? "team" : ""}>
        {thisTeam.items.map((item) => (
          <p>{item.name}</p>
        ))}
      </div>
    </div>
  );
};
