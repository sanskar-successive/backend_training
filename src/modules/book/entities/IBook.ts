export interface IBook {
    title : string,
    coverImage ?: string,
    price : number,
    rating : number,
    category : string[],
    author : IAuthor,
    moreDetails : IMoreDetails,
    reviews ?: IReview[],
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
    language : Enumerator,
    description : string,
    fileSize : number,
    pages : number,
    ISBN : string,
    publisher : string,
    firstPublished : Date,
    verified : boolean,
    edition : number,
}