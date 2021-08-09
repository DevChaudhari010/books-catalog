interface IBook {
  _id: string /* The id of book autogenrated*/;
  title: string /* The title of book */;
  year?: number /* The publication year of book */;
  description?: string /* The description of book */;
}

export default IBook;
