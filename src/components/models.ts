export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

type Dog = {
  name: string;
  age: number;
};

const DogSchema = {
  name: 'Dog',
  properties: {
    name: 'string',
    age: 'int',
  },
};

export interface Task {
  name: string;
}

export interface Roles {
  id: string;
  name: string;
  color: number;
  hoist: boolean;
  icon: string;
  unicode_emoji: string;
  position: number;
  permissions: string;
  managed: boolean;
  mentionable: boolean;
  // tags: RoleTags
}

export interface RoleTags {}

enum Permissions {
  CREATE_WORKSPACE = 1 << 0,
}

export interface Workspace {
  id: string;
  name: string;
  channels: string[];
}

export interface Channel {

}

