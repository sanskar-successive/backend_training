export interface IBook {
    title : string,
    coverImage ?: string,
    price : number,
    rating : number,
    category : string,
    author : IAuthor,
    moreDetails : IMoreDetails,
}

export interface IAuthor{
    name : string,
    about : string,
}

export interface IReview{
    userId : string,
    bookId : string,
    text : string,
    rating : number,
    positive ?: string
}

export interface IMoreDetails{
    seller : string,
    language : string,
    description : string,
    fileSize : number,
    pages : number,
    publisher : string,
    firstPublished : string,
    verified : boolean,
    edition : number,
}