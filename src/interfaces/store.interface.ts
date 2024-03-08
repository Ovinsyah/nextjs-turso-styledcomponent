export interface IStore {
  id: number,
  name: string,
  metaTitle: string,
  metaDescription: string,
}
export interface IBanner {
  id: number,
  storeId: number,
  imageUrl: string,
}
export interface IStoreBranches {
  id: number,
  storeId: number,
  name: string,
  description: string,
  imageUrl: string,
  url: string
}
export interface IDetailStore {
  store: IStore,
  banner: IBanner[],
  store_branches: IStoreBranches[]
}