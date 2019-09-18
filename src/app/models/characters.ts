export interface Character{
    name: string
    deceased: boolean
}

export interface CharacterQueryResult {
    characters: Character[]
    hasNext: boolean
}