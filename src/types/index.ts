// 定义一个接口，用于限制Person对象的具体类型
export interface PersonInter {
    id: string,
    name: string,
    age: number,
    x?: number, // 可以不写
}

// 一个自定义类型: Persons
// export type Persons = Array<PersonInter>
export type Persons = PersonInter[]
