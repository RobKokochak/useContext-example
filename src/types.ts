export interface Group {
  id: string;
  name: string;
  teams: Team[];
}

export interface Team {
  id: string;
  name: string;
  items: Item[];
}

export interface Item {
  id: string;
  name: string;
}

export interface GroupsContextType {
  groups: Group[];
  setGroups: React.Dispatch<React.SetStateAction<Group[]>>;
}

export interface ItemsContextType {
  availableItems: Item[];
  setAvailableItems: React.Dispatch<React.SetStateAction<Item[]>>;
}
