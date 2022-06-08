export interface ITodo {
    id: number,
    name: string,
    created_at?: string,
    description?: string,
    category_id: number,
    user_id: number
}

export interface ICategory {
    id: number,
    name: string,
    description?: string,
    user_id: number
}

export interface IUser {
    id: number,
    firstname: string,
    lastname: string,
    alias?: string
}