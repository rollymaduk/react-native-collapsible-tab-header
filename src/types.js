// @flow
export interface Iicon{
    name: string,
    type: string
}

export interface Iroute{
    key: ?string,
    title: ?string,
    icon: ?Iicon,
}
