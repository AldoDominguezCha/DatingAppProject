export interface Pagination {
    currentPage : Number;
    itemsPerPage : Number;
    totalItems : Number;
    totalPages : Number;
}

export class PaginatedResult<T> {
    result : T;
    pagination : Pagination;
}