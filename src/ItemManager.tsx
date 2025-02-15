import { ParentGroup } from "./ParentGroup";
import { Group, Item, GroupsContextType, ItemsContextType } from "./types";
import { useState, createContext } from "react";
import { cards, defaultGroups } from "./data";
import { addGroup } from "./functions";

export const GroupsContext = createContext<GroupsContextType>({
  groups: [],
  setGroups: () => {},
});

export const ItemsContext = createContext<ItemsContextType>({
  availableItems: [],
  setAvailableItems: () => {},
});

export const ItemManager = () => {
  const [groups, setGroups] = useState<Group[]>(defaultGroups);
  const [availableItems, setAvailableItems] = useState<Item[]>(cards);

  return (
    <GroupsContext.Provider value={{ groups, setGroups }}>
      <ItemsContext.Provider value={{ availableItems, setAvailableItems }}>
        <>
          <h1>Item Manager</h1>
          <button onClick={() => addGroup(groups, setGroups)}>
            Add New Group
          </button>
          <div>
            {groups.map((group) => (
              <ParentGroup key={group.id} thisGroup={group} />
            ))}
          </div>
        </>
      </ItemsContext.Provider>
    </GroupsContext.Provider>
  );
};
