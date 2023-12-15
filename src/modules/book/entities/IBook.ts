export interface IBook {
    
    bookId : string,
    title : string,
    coverImage ?: string,
    category : Enumerator,
    author : IAuthor,
    globalRating : number;
    reviews ?: IReview,
    price : number,
    moreDetails : IMoreDetails,
    tags ?: string[]
    rank ?: number,
    categoryRank ?: number
}

export interface IAuthor{
    name : string,
    about : string,
    rating ?: number
}

export interface IReview{
    user : string,
    book : string,
    rating : number,
    text : string,
    image ?: string,
    helpful ?: string
}

export interface IMoreDetails{
    publishDetails : {name : string, lastPublished : Date},
    seller : string,
    language : Enumerator,
    description : string,
    fileSize : number,
    length : number,
}