import {
  Chip,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BookOpen, Calendar, Clock } from "lucide-react";

const mockBorrowRecords = [
  {
    id: 1,
    bookTitle: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    borrowDate: "2024-01-15",
    dueDate: "2024-02-15",
    status: "active",
  },
  {
    id: 2,
    bookTitle: "1984",
    author: "George Orwell",
    borrowDate: "2024-01-10",
    dueDate: "2024-02-10",
    status: "active",
  },
  {
    id: 3,
    bookTitle: "To Kill a Mockingbird",
    author: "Harper Lee",
    borrowDate: "2023-12-01",
    returnDate: "2023-12-28",
    status: "returned",
  },
  {
    id: 4,
    bookTitle: "Pride and Prejudice",
    author: "Jane Austen",
    borrowDate: "2023-11-15",
    returnDate: "2023-12-10",
    status: "returned",
  },
];

const BorrowRecords = () => {
  const activeRecords = mockBorrowRecords.filter(
    (record) => record.status === "active",
  );
  const pastRecords = mockBorrowRecords.filter(
    (record) => record.status === "returned",
  );

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-foreground">
            Borrow Records
          </h1>
          <p className="text-muted-foreground">Track your reading journey</p>
        </div>

        {/* Active Borrows */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-foreground flex items-center gap-2">
            <Clock className="h-6 w-6 text-primary" />
            Currently Borrowed
          </h2>
          <div className="space-y-4">
            {activeRecords.map((record) => (
              <Card
                key={record.id}
                className="overflow-hidden shadow-none hover:shadow-md border border-l-6 border-indigo-200! border-l-indigo-500!"
              >
                <CardHeader className="p-6 m-0 rounded-none pb-3 shadow-none">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-3">
                      <BookOpen className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <Typography className="text-lg font-bold text-black mb-1">
                          {record.bookTitle}
                        </Typography>
                        <p className="text-sm text-muted-foreground">
                          {record.author}
                        </p>
                      </div>
                    </div>
                    <Chip
                      className="bg-primary text-success-foreground rounded-full"
                      value="Active"
                    />
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Borrowed:</span>
                      <span className="font-medium">{record.borrowDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-warning" />
                      <span className="text-muted-foreground">Due:</span>
                      <span className="font-medium text-warning">
                        {record.dueDate}
                      </span>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-8" />

        {/* Past Borrows */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-muted-foreground" />
            Reading History
          </h2>
          <div className="space-y-3">
            {pastRecords.map((record) => (
              <Card
                key={record.id}
                className="bg-muted/30 border-2 shadow-none hover:shadow-md"
              >
                <CardBody className="py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {record.bookTitle}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {record.author}
                      </p>
                    </div>
                    <div className="text-right text-sm">
                      <p className="text-muted-foreground">
                        {record.borrowDate} - {record.returnDate}
                      </p>
                      {/* <Chip
                        className="mt-1 rounded-full text-center"
                        value="Returned"
                      /> */}
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BorrowRecords;
