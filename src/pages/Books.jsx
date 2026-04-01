import { useState } from "react";
import { BookCard } from "@/components/BookCard";
// import { Input } from "@/components/ui/input";
import { Input } from "@material-tailwind/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

const mockBooks = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    availableCopies: 3,
    totalCopies: 5,
    price: 12.99,
    status: "available",
    coverColor: "bg-gradient-to-br from-primary to-primary/60",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    availableCopies: 0,
    totalCopies: 4,
    price: 14.99,
    status: "borrowed",
    coverColor: "bg-gradient-to-br from-secondary to-secondary/60",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    availableCopies: 2,
    totalCopies: 6,
    price: 13.99,
    status: "available",
    coverColor: "bg-gradient-to-br from-destructive to-destructive/60",
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    availableCopies: 0,
    totalCopies: 3,
    price: 11.99,
    status: "reserved",
    coverColor: "bg-gradient-to-br from-accent to-accent/60",
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    availableCopies: 4,
    totalCopies: 7,
    price: 15.99,
    status: "available",
    coverColor: "bg-gradient-to-br from-primary to-primary/60",
  },
  {
    id: 6,
    title: "Brave New World",
    author: "Aldous Huxley",
    availableCopies: 1,
    totalCopies: 4,
    price: 13.49,
    status: "available",
    coverColor: "bg-gradient-to-br from-secondary to-secondary/60",
  },
];

const Books = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredBooks = mockBooks.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || book.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-background py-8 px-0 m-0">
      <div className="mx-2 md:mx-6">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
            Book Catalog
          </h1>
          <p className="text-muted-foreground">
            Discover your next favorite read
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search by title or author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Books</SelectItem>
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="borrowed">Borrowed</SelectItem>
              <SelectItem value="reserved">Reserved</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No books found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Books;
