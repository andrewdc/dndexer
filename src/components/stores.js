import { writable } from "svelte/store";

const creature = {
  _id: "5e8b834e0b1bb138c54a5589",
  index: "goblin",
  name: "Goblin",
  size: "Small",
  type: "humanoid",
  subtype: "goblinoid",
  alignment: "neutral evil",
  armor_class: 15,
  hit_points: 7,
  hit_dice: "2d6",
  speed: {
    walk: "30 ft.",
  },
  strength: 8,
  dexterity: 14,
  constitution: 10,
  intelligence: 10,
  wisdom: 8,
  charisma: 8,
  proficiencies: [
    {
      name: "Skill: Stealth",
      url: "/api/proficiencies/skill-stealth",
      value: 6,
    },
  ],
  damage_vulnerabilities: [],
  damage_resistances: [],
  damage_immunities: [],
  condition_immunities: [],
  senses: {
    darkvision: "60 ft.",
    passive_perception: 9,
  },
  languages: "Common, Goblin",
  challenge_rating: 0.25,
  special_abilities: [
    {
      name: "Nimble Escape",
      desc:
        "The goblin can take the Disengage or Hide action as a bonus action on each of its turns.",
    },
  ],
  actions: [
    {
      name: "Scimitar",
      desc:
        "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage.",
      attack_bonus: 4,
      damage: [
        {
          damage_type: {
            name: "Slashing",
            url: "/api/damage-types/slashing",
          },
          damage_dice: "1d6",
          damage_bonus: 2,
        },
      ],
    },
    {
      name: "Shortbow",
      desc:
        "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
      attack_bonus: 4,
      damage: [
        {
          damage_type: {
            name: "Piercing",
            url: "/api/damage-types/piercing",
          },
          damage_dice: "1d6",
          damage_bonus: 2,
        },
      ],
    },
  ],
  url: "/api/monsters/goblin",
};
function createData() {
  const { subscribe, set, update } = writable(creature);

  return {
    subscribe,
    // setSeen: (id) => update((n) => setObjSeen(n, id)),
    // deleteItem: (id) => update((n) => deleteItem(n, id)),
    // sortItems: (key) => update((n) => [...n.sortBy(key)]),
    clear: () => set([]),
    reset: () => set(creature),
  };
}
export const storedata = createData();
