export enum RelationshipType {
    STRANGER = 'STRANGER',
    BOY_FRIEND = 'BOY_FRIEND',
    GIRL_FRIEND = 'GIRL_FRIEND',
    HUSBAND = 'HUSBAND',
    WIFE = 'WIFE',
    PARENTS = 'PARENTS',
    KID = 'KID'
}

export interface Relationship {
    relationship: RelationshipType;
    relationshipValue: number;
}

const map = {}
map[RelationshipType.STRANGER] = RelationshipType.STRANGER;
map[RelationshipType.BOY_FRIEND] = RelationshipType.GIRL_FRIEND;
map[RelationshipType.GIRL_FRIEND] = RelationshipType.BOY_FRIEND;
map[RelationshipType.HUSBAND] = RelationshipType.WIFE;
map[RelationshipType.WIFE] = RelationshipType.HUSBAND;
map[RelationshipType.PARENTS] = RelationshipType.KID;
map[RelationshipType.KID] = RelationshipType.PARENTS;
export const getRelationPair = (relationshipType: RelationshipType): RelationshipType => {
    return map[relationshipType];
}
